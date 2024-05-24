import Banner from "../../components/Banner/Banner";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="lg:w-3/4 mx-auto lg:px-0 px-5">
        <FeaturedProducts></FeaturedProducts>
      </div>
    </div>
  );
};

export default Home;
