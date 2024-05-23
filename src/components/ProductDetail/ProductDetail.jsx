import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Rating } from "@smastrom/react-rating";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/products.json`)
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.id === parseInt(id));
        setProduct(foundProduct);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lg:w-1/2 mx-auto p-5 lg:px-0 px-5">
      <div className="card card-side bg-base-100 shadow-xl rounded mt-10">
        <figure>
          <img className="w-72" src={product.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.category}</p>
          <p>Price : ${product.price}</p>
          <p>Brand : {product.brand}</p>
          <Rating style={{ maxWidth: 80 }} value={product.rating} readOnly />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
