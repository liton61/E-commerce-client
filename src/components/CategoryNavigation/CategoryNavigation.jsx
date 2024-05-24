import { Link } from "react-router-dom";

const CategoryNavigation = () => {
  return (
    <div>
      <div className="flex gap-5 justify-center">
        <Link to="/electronicProduct">
          <button className="bg-orange-600 px-3 py-2 text-white font-semibold rounded">
            Electronics
          </button>
        </Link>
        <Link to="/fashionProduct">
          <button className="bg-orange-600 px-3 py-2 text-white font-semibold rounded">
            Fashion
          </button>
        </Link>
        <Link to="/homeProduct">
          <button className="bg-orange-600 px-3 py-2 text-white font-semibold rounded">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryNavigation;
