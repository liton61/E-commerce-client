import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryNavigation from "../../components/CategoryNavigation/CategoryNavigation";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="lg:w-3/4 mx-auto lg:px-0 px-5">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CategoryNavigation
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <ProductDisplay
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};

export default Home;
