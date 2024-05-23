/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import { useState, useEffect } from "react";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const ProductDisplay = ({
  searchQuery = "",
  selectedCategory = "All",
  selectedBrand = "All",
  sortOption = "",
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (selectedBrand === "All" || product.brand === selectedBrand)
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "price-asc") {
      return a.price - b.price;
    } else if (sortOption === "price-desc") {
      return b.price - a.price;
    } else if (sortOption === "rating") {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
      {sortedProducts.map((product) => (
        <div key={product.id}>
          <Link to={`/productDetail/${product.id}`}>
            <div className="card card-compact rounded border">
              <figure>
                <img className="w-full h-48" src={product.image} alt={product.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>Price: ${product.price}</p>
                <Rating style={{ maxWidth: 80 }} value={product.rating} readOnly />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
