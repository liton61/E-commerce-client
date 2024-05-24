import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Banner from "../Banner/Banner";

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
    <div>
      <Banner></Banner>
      <div className="lg:w-1/2 mx-auto lg:px-0 px-5 my-10">
        <div className="grid grid-cols-1 gap-10">
          <div>
            <img className="w-full" src={product.image} alt={product.name} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-lg mb-4">Category : {product.category}</p>
            <p className="text-lg mb-4">Price : ${product.price}</p>
            <p className="text-lg mb-4">Brand : {product.brand}</p>
            <Rating style={{ maxWidth: 120 }} value={product.rating} readOnly />
            <p className="text-lg my-4">{product.description}</p>
            <p className="text-lg mb-4">
              Availability : {product.availability}
            </p>
            <h3 className="text-xl font-bold mb-2">Specifications : </h3>
            <ul className="list-disc pl-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key} className="text-lg">
                  {key} : {value}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-2">Reviews : </h3>
              {product.reviews.map((review) => (
                <div
                  key={review.username}
                  className="border border-gray-300 rounded p-4 mb-4"
                >
                  <p className="text-lg font-bold mb-2">
                    Reviewer : {review.username}
                  </p>
                  <p className="text-lg">Date : {review.date}</p>
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={product.rating}
                    readOnly
                  />
                  <p className="text-lg my-2">{review.text}</p>
                  <div className="flex justify-between">
                    <button className="text-lg text-blue-600 hover:underline">
                      Like ({review.likes})
                    </button>
                    <button className="text-lg text-red-600 hover:underline">
                      Dislike ({review.dislikes})
                    </button>
                  </div>
                  <button className="text-lg text-gray-600 hover:underline mt-2">
                    Reply
                  </button>
                  {review.replies.map((reply) => (
                    <div
                      key={reply.username}
                      className="border-t border-gray-300 mt-4 pt-2"
                    >
                      <p className="text-lg font-bold mb-2">
                        Replier : {reply.username}
                      </p>
                      <p className="text-lg">Date : {reply.date}</p>
                      <p className="text-lg my-2">{reply.text}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
