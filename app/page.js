import MainShop from "../components/MainShop";

async function getProducts() {
  try {
    // Add a timeout and proper error handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const res = await fetch("https://fakestoreapi.com/products", {
      signal: controller.signal,
      // Add headers to ensure JSON response
      headers: {
        'Accept': 'application/json'
      }
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) {
      console.error(`API responded with status: ${res.status}`);
      return [];
    }
    
    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error('API did not return JSON');
      return [];
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error.message);
    return []; // Return empty array to prevent crash
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