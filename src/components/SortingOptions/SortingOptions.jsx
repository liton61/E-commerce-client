/* eslint-disable react/prop-types */

const SortingOptions = ({ sortOption, setSortOption }) => {
  return (
    <div className="mb-5">
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="p-2 border rounded focus:outline-none"
      >
        <option value="default">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortingOptions;
