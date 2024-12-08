import React from "react";
import Image from "next/image";

const CategorySection: React.FC = () => {
  // Dummy category data
  const categories = [
    {
      id: 1,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/Category-1.png", 
      isHighlighted: true, 
    },
    {
      id: 2,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/Category-2.png",
      isHighlighted: false,
    },
    {
      id: 3,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/Category-3.png",
      isHighlighted: false,
    },
    {
      id: 4,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/Category-4.png",
      isHighlighted: false,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-white">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
        Top Categories
      </h2>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center text-center relative"
          >
            {/* Highlighted Circle */}
            <div
              className={`w-48 h-48 rounded-full flex items-center justify-center bg-gray-100 ${
                category.isHighlighted ? "border-4 border-purple-500" : ""
              }`}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={120}
                height={120}
                className="object-contain"
              />
             
            </div>
            {/* Category Info */}
            <h3 className="mt-6 text-lg font-semibold text-gray-800">
              {category.name}
            </h3>
            <p className="text-pink-500 font-bold">{category.price}</p>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="mt-8 flex justify-center space-x-2">
        {[...Array(3)].map((_, index) => (
          <span
            key={index}
            className={`h-2 w-6 rounded-full ${
              index === 0 ? "bg-pink-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
