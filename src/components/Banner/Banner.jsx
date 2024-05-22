const Banner = () => {
  return (
    <div
      className="bg-cover bg-center text-white py-24"
      style={{
        backgroundImage: "url(https://source.unsplash.com/1600x400/?shopping)",
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Our E-Commerce Store
        </h1>
        <p className="text-lg mb-8">Discover the latest trends and shop now!</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
