"use client";

import { useState, useEffect } from "react";
import MainShop from "../components/MainShop";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="header-container">
        <section className="hero-section">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>Loading products...</p>
        </section>
      </div>
    );
  }

  return (
    <main className="page-wrapper">
      <MainShop products={products} />
    </main>
  );
}