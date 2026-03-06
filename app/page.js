import MainShop from "../components/MainShop";

async function getProducts() {
  try {
    console.log("🟡 Fetching products...");
    
    // Add full URL and headers
    const res = await fetch("https://fakestoreapi.com/products", {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Vercel/1.0)',
        'Accept': 'application/json',
      },
      // Add cache control
      cache: 'no-store'
    });
    
    console.log("🟡 Response status:", res.status);
    
    if (!res.ok) {
      console.error("🔴 API Error:", res.status);
      return [];
    }
    
    const text = await res.text(); // Get as text first to debug
    console.log("🟡 Response text length:", text.length);
    
    try {
      const data = JSON.parse(text);
      console.log("🟢 Success:", data.length, "products");
      return data;
    } catch (e) {
      console.error("🔴 JSON Parse Error:", e.message);
      console.error("🔴 First 100 chars:", text.substring(0, 100));
      return [];
    }
  } catch (error) {
    console.error("🔴 Fetch failed:", error.message);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();
  
  console.log("📦 Final products count:", products?.length);

  return (
    <main className="page-wrapper">
      {products && products.length > 0 ? (
        <MainShop products={products} />
      ) : (
        <div className="header-container">
          <section className="hero-section">
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>No products found</p>
            <p style={{fontSize: '12px', color: '#999'}}>
              Debug: Products array is empty
            </p>
          </section>
        </div>
      )}
    </main>
  );
}