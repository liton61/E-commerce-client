/* eslint-disable react/prop-types */


const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mt-10">
      <input
      type="text"
      className="w-full p-3 border rounded mb-5 focus:outline-none"
      placeholder="Search products..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    </div>
  );
}

export default SearchBar;
