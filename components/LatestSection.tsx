import React from "react";
import Image from "next/image";

const LatestSection: React.FC = () => {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Comfort Handy Craft",
      currentPrice: "$42.00",
      previousPrice: "$65.00",
      image: "/Latest-1.png", 
      isOnSale: false,
    },
    {
      id: 2,
      name: "Comfort Handy Craft",
      currentPrice: "$42.00",
      previousPrice: "$65.00",
      image: "/Latest-2.png",
      isOnSale: true,
    },
    {
      id: 3,
      name: "Comfort Handy Craft",
      currentPrice: "$42.00",
      previousPrice: "$65.00",
      image: "/Latest-3.png",
      isOnSale: false,
    },
    {
      id: 4,
      name: "Comfort Handy Craft",
      currentPrice: "$42.00",
      previousPrice: "$65.00",
      image: "/Latest-4.png",
      isOnSale: false,
    },
    {
      id: 5,
      name: "Comfort Handy Craft",
      currentPrice: "$42.00",
      previousPrice: "$65.00",
      image: "/Latest-5.png",
      isOnSale: false,
    },
    {
      id: 6,
      name: "Comfort Handy Craft",
      currentPrice: "$42.00",
      previousPrice: "$65.00",
      image: "/Latest-6.png",
      isOnSale: false,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-white">
      {/* Section Title */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Latest Products</h2>
        <div className="space-x-4 text-sm font-medium hidden md:flex">
          <button className="text-pink-500 underline">New Arrival</button>
          <button className="text-gray-700 hover:text-pink-500">Best Seller</button>
          <button className="text-gray-700 hover:text-pink-500">Featured</button>
          <button className="text-gray-700 hover:text-pink-500">Special Offer</button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4">
            {/* Product Image */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full object-contain"
              />
              {product.isOnSale && (
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  Sale
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
              <div className="flex justify-center space-x-2 mt-2">
                <span className="text-pink-500 font-bold">{product.currentPrice}</span>
                <span className="text-gray-400 line-through">{product.previousPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestSection;
