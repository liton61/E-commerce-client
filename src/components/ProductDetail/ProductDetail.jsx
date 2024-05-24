import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Rating } from "@smastrom/react-rating";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/product`)
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((item) => item._id === id);
        setProduct(foundProduct);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="lg:w-1/2 mx-auto p-5 lg:px-0 px-5">
      <div className="card card-side bg-base-100 shadow-xl rounded my-20">
        <figure>
          <img className="w-72 h-full" src={product.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>Category : {product.category}</p>
          <p>Price : ${product.price}</p>
          <p>Brand : {product.brand}</p>
          <Rating style={{ maxWidth: 80 }} value={product.rating} readOnly />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
