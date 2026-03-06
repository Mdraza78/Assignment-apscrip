import MainShop from "../components/MainShop";

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 }, // ISR - revalidate every hour
      cache: 'no-store' // Ensure fresh data on each request
    });
    
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();
  
  return (
    <main className="page-wrapper">
      <MainShop products={products} />
    </main>
  );
}