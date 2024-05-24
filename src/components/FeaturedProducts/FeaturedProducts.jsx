import { useState } from "react";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const products = [
  {
    _id: 1,
    price: 1200,
    rating: 5,
    name: "iPhone 15 Pro",
    category: "Electronics",
    brand: "Brand A",
    image: "https://i.ibb.co/ykwdHgn/iphone15.jpg",
  },
  {
    _id: 2,
    price: 20,
    rating: 4,
    name: "T-Shirt",
    category: "Fashion",
    brand: "Brand B",
    image: "https://i.ibb.co/z4pcRjj/t-shirt.jpg",
  },
  {
    _id: 3,
    price: 100,
    rating: 4.5,
    name: "Sofa",
    category: "Home",
    brand: "Brand C",
    image: "https://i.ibb.co/2cxD3V0/sofa.jpg",
  },
];

const FeaturedProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="my-10">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mb-10">
        <CategoryNavigation />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        {filteredProducts.map((product) => (
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
  );
};

export default FeaturedProducts;
