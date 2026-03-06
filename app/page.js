import MainShop from "../components/MainShop";

async function getProducts() {
  try {
    // Add a longer timeout and better error handling
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!res.ok) {
      console.error(`API responded with status: ${res.status}`);
      return [];
    }
    
    const data = await res.json();
    console.log("Products fetched:", data.length);
    return data;
  } catch (error) {
    console.error('Fetch error:', error.message);
    return []; // Return empty array to prevent crash
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
            <p>Loading products...</p>
          </section>
        </div>
      )}
    </main>
  );
}