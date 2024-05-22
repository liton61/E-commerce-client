/* eslint-disable react/prop-types */




const CategoryNavigation = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['All', 'Electronics', 'Fashion', 'Home'];
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 lg:w-1/2">
      {categories.map(category => (
        <button
          key={category}
          className={`px-4 py-2 border rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryNavigation;
