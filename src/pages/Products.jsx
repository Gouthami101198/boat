import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../assets/data/products";
import ProductCard from "../components/ProductCard/ProductCard";
import "./Products.css";

function Products() {
  const [searchParams] = useSearchParams();

  const navbarSearch = searchParams.get("search") || "";

  const [localSearch, setLocalSearch] = useState("");

  const [category, setCategory] = useState("All");

  const search = localSearch || navbarSearch;

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      category === "All" || product.category === category;

    const matchSearch = 
    product.name.toLowerCase().includes(search.toLowerCase()) || 
    product.category.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className="products-page container">

      <h1>Our Products</h1>

      <p>Explore premium gadgets from boAt.</p>

      <div className="filter-section">

        <input
          type="text"
          placeholder="Search products..."
          value={localSearch || navbarSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Earbuds</option>
          <option>Watch</option>
          <option>Speaker</option>
          <option>Headset</option>
        </select>

      </div>

      <div className="products-grid">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <h2 style={{ textAlign: "center", width: "100%" }}>
            No products found.
          </h2>
        )}

      </div>

    </section>
  );
}

export default Products;