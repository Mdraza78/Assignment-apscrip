import MainShop from "../components/MainShop";

async function getProducts() {
  try {
    console.log("Fetching products from API...");
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 },
      
      cache: 'no-store'
    });
    
    if (!res.ok) {
      console.error("API response not OK:", res.status);
      return [];
    }
    
    const data = await res.json();
    console.log("Products fetched:", data.length);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();
  
  console.log("Home component - products:", products?.length || 0);

  return (
    <main className="page-wrapper">
      {products && products.length > 0 ? (
        <MainShop products={products} />
      ) : (
        <div className="header-container">
          <section className="hero-section">
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>No products found. Please check back later.</p>
          </section>
        </div>
      )}
    </main>
  );
}