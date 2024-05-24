import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center text-white py-24"
      style={{
        backgroundImage: "url(https://source.unsplash.com/1600x400/?shopping)",
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 uppercase">Welcome to E-Shop</h1>
        <p className="text-lg mb-8">Discover the latest trends and shop now!</p>
        <Link to="productListing">
          <button className="bg-orange-600 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
