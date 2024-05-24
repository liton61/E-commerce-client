import { useState, useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const HomeProducts = () => {
  const [fashionProducts, setFashionProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((response) => response.json())
      .then((data) => {
        // Filter products by category "Home"
        const filteredProducts = data.filter(
          (product) => product.category === "Home"
        );
        setFashionProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (!fashionProducts.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <Banner></Banner>
      <div className="lg:w-3/4 mx-auto lg:px-0 px-5 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {fashionProducts.map((product) => (
            <div key={product.id} className="card card-compact rounded border">
              <Link to={`/productDetail/${product._id}`}>
                <div className="card card-compact rounded border">
                  <figure>
                    <img
                      className="w-full h-48"
                      src={product.image}
                      alt={product.name}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <Rating
                      style={{ maxWidth: 80 }}
                      value={product.rating}
                      readOnly
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
