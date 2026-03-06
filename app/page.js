import MainShop from "../components/MainShop";

async function getProducts() {
  try {
    console.log("🟡 Fetching products...");
    
    // Simple fetch without complex options
    const res = await fetch("https://fakestoreapi.com/products");
    
    if (!res.ok) {
      console.error("🔴 API Error:", res.status);
      return [];
    }
    
    const data = await res.json();
    console.log("🟢 Success:", data.length, "products");
    return data;
  } catch (error) {
    console.error("🔴 Fetch failed:", error.message);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();
  
  // Show count even if 0 for debugging
  console.log("📦 Products in Home:", products?.length);

  return (
    <main className="page-wrapper">
      {products && products.length > 0 ? (
        <MainShop products={products} />
      ) : (
        <div className="header-container">
          <section className="hero-section">
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p style={{color: '#666'}}>
              {products?.length === 0 ? 'No products found' : 'Loading products...'}
            </p>
            <p style={{fontSize: '12px', color: '#999', marginTop: '20px'}}>
              Debug: Products array is {products?.length === 0 ? 'empty' : 'loading'}
            </p>
          </section>
        </div>
      )}
    </main>
  );
}