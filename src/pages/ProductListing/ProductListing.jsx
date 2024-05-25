import { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterBrand, setFilterBrand] = useState("");

  useEffect(() => {
    fetch("https://e-commerce-server-rust-five.vercel.app/product")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the fetched data to check the rating structure
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterCategoryChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleFilterBrandChange = (e) => {
    setFilterBrand(e.target.value);
  };

  const sortedAndFilteredProducts = products
    .filter(
      (product) =>
        (filterCategory ? product.category === filterCategory : true) &&
        (filterBrand ? product.brand === filterBrand : true)
    )
    .sort((a, b) => {
      if (sortOption === "priceLowToHigh") {
        return a.price - b.price;
      }
      if (sortOption === "priceHighToLow") {
        return b.price - a.price;
      }
      if (sortOption === "ratingLowToHigh") {
        return a.rating.average - b.rating.average;
      }
      if (sortOption === "ratingHighToLow") {
        return b.rating.average - a.rating.average;
      }
      return 0;
    });

  return (
    <div>
      <Banner />
      <div className="lg:w-3/4 mx-auto lg:px-0 px-5">
        <div className="lg:flex justify-between grid grid-cols-1 gap-5 my-10">
          <div>
            <label className="mr-2">Sort by :</label>
            <select
              onChange={handleSortChange}
              className="border p-2 rounded focus:outline-none"
            >
              <option value="">Select</option>
              <option value="priceLowToHigh">Price : Low to High</option>
              <option value="priceHighToLow">Price : High to Low</option>
              <option value="ratingLowToHigh">Rating : Low to High</option>
              <option value="ratingHighToLow">Rating : High to Low</option>
            </select>
          </div>
          <div>
            <label className="mr-2">Filter by Category :</label>
            <select
              onChange={handleFilterCategoryChange}
              className="border p-2 rounded focus:outline-none"
            >
              <option value="">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Home">Home</option>
            </select>
          </div>
          <div>
            <label className="mr-2">Filter by Brand :</label>
            <select
              onChange={handleFilterBrandChange}
              className="border p-2 rounded focus:outline-none"
            >
              <option value="">All</option>
              <option value="Brand A">Brand A</option>
              <option value="Brand B">Brand B</option>
              <option value="Brand C">Brand C</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {sortedAndFilteredProducts.map((product) => (
            <div key={product._id} className="border rounded">
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
                      value={product.rating.average}
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

export default ProductListing;
