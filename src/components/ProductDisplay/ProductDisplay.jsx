/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const ProductDisplay = ({ searchQuery, selectedCategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <div className="card card-compact rounded border">
            <figure>
              <img className="w-full h-48" src={product.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>Price : {product.price}</p>
              <p>Rating : {product.rating}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
