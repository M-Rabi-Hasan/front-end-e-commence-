import Image from "next/image";

const products = [
  { id: 1, title: "Vel elit euismod", price: "$26.00", discount: "$42.00", image: "/shop-1.png" },
  { id: 2, title: "Ultricies condimentum imperdiet", price: "$26.00", discount: "$42.00", image: "/shop-2.png" },
  { id: 2, title: "Ultricies condimentum imperdiet", price: "$26.00", discount: "$42.00", image: "/shop-3.png" },
  { id: 2, title: "Ultricies condimentum imperdiet", price: "$26.00", discount: "$42.00", image: "/shop-4.png" },
  { id: 2, title: "Ultricies condimentum imperdiet", price: "$26.00", discount: "$42.00", image: "/Category-2.png" },
  { id: 2, title: "Ultricies condimentum imperdiet", price: "$26.00", discount: "$42.00", image: "/Category-1.png" },
  { id: 2, title: "Ultricies condimentum imperdiet", price: "$26.00", discount: "$42.00", image: "/Category-3.png" },
  { id: 2, title: "Ultricies condimentum imperdiet", price: "$26.00", discount: "$42.00", image: "/Category-4.png" },
  // Add remaining products here...
];

export default function ShopPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-8">
      <h1 className="text-center text-2xl font-semibold text-blue-900">
        Ecommerce Accesories & Fashion item
      </h1>
      <p className="text-center text-gray-500 text-sm mt-2">
        About 9,620 results (0.62 seconds)
      </p>

      {/* Filters Section */}
      <div className="flex justify-between items-center mt-8">
        <div className="flex space-x-4">
          <label htmlFor="perPage" className="text-sm text-gray-600">
            Per Page:
          </label>
          <select id="perPage" className="border border-gray-300 rounded-md px-2 py-1 text-sm">
            <option>8</option>
            <option>16</option>
            <option>24</option>
          </select>
        </div>

        <div className="flex space-x-4">
          <label htmlFor="sortBy" className="text-sm text-gray-600">
            Sort By:
          </label>
          <select id="sortBy" className="border border-gray-300 rounded-md px-2 py-1 text-sm">
            <option>Best Match</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="flex items-center">
          <label className="text-sm text-gray-600 mr-2">View:</label>
          <div className="flex space-x-2">
            <button className="border border-gray-300 rounded p-2 hover:bg-gray-200">
              # (Grid View Icon)
            </button>
            <button className="border border-gray-300 rounded p-2 hover:bg-gray-200">
              ≡ (List View Icon)
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg p-4 text-center"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="text-blue-900 font-medium mt-4">{product.title}</h3>
            <p className="text-gray-600 mt-2">
              <span className="text-red-500 line-through">{product.discount}</span>{" "}
              <span>{product.price}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
