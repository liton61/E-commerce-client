import Banner from "../../components/Banner/Banner";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Recommended from "../../components/Recommended/Recommended";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="lg:w-3/4 mx-auto lg:px-0 px-5">
        <FeaturedProducts></FeaturedProducts>
        <About></About>
        <Recommended></Recommended>
        <TestimonialSection></TestimonialSection>
      </div>
    </div>
  );
};

export default Home;
