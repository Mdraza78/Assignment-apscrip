import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Requirement 6a & 6b: SEO settings
export const metadata = {
  title: "Discover Our Products | Appscrip Task",
  description: "Explore our wide range of premium products curated for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Product Listing Page",
              "description": "Explore our wide range of premium products curated for you.",
              "url": "https://your-netlify-url.netlify.app",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": []
              }
            })
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}