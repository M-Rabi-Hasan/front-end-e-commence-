import React from "react";
import Image from "next/image";
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";

const FeaturedSection: React.FC = () => {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/featured-1.png", 
      isHighlighted: false,
    },
    {
      id: 2,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/featured-2.png",
      isHighlighted: true,
    },
    {
      id: 3,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/featured-3.png",
      isHighlighted: false,
    },
    {
      id: 4,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/featured-4.png",
      isHighlighted: false,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-white">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 ${
              product.isHighlighted ? "bg-indigo-700 text-white" : "text-gray-900"
            }`}
          >
            {/* Action Icons */}
            <div
              className={`absolute top-4 right-4 flex space-x-2 ${
                product.isHighlighted ? "text-gray-500" : "text-gray-500"
              }`}
            >
              <button className="p-2 rounded-full hover:bg-gray-200 transition">
                <FiShoppingCart />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200 transition">
                <FiHeart />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200 transition">
                <FiSearch />
              </button>
            </div>

            {/* Product Image */}
            <div className="flex justify-center p-6">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Product Info */}
            <div
              className={`p-4 text-center flex flex-col items-center justify-center space-y-2 ${
                product.isHighlighted ? "text-black" : "text-gray-900"
              }`}
            >
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm">Code - {product.code}</p>
              <p className="text-lg font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="mt-8 flex justify-center space-x-2">
        {[...Array(3)].map((_, index) => (
          <span
            key={index}
            className={`h-2 w-6 rounded-full ${
              index === 1 ? "bg-pink-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
