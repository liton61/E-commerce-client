/* eslint-disable react/prop-types */

const brands = ["All", "Brand A", "Brand B", "Brand C"];

const BrandFilter = ({ selectedBrand, setSelectedBrand }) => {
  return (
    <div className="my-5">
      <h1 className="mb-5 text-xl font-bold">Brands</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 lg:w-1/2">
        {brands.map((brand) => (
          <button
            key={brand}
            className={`px-4 py-2 border rounded ${
              selectedBrand === brand ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setSelectedBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;
