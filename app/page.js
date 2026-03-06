import MainShop from "../components/MainShop";

/**
 * Server-side function to fetch products from the API.
 * This keeps the API key/URL logic on the server.
 */
async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      // Optional: Revalidate every hour to keep data fresh
      next: { revalidate: 3600 } 
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch products from Fake Store API");
    }
    
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return []; // Return empty array to prevent app crash
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="page-wrapper">
      {/* We pass the products directly to MainShop. 
        MainShop handles the Hero Section, Filters, and the Grid.
      */}
      <MainShop products={products} />
    </main>
  );
}