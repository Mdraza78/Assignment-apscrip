import MainShop from "../components/MainShop";

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();
  return <MainShop products={products} />;
}