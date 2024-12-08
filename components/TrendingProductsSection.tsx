import React from "react";
import Image from "next/image";

const TrendingProductsSection: React.FC = () => {
  const trendingProducts = [
    {
      id: 1,
      name: "Cantilever chair",
      price: "$30.00",
      oldPrice: "$40.00",
      image: "/trending_1.png",
    },
    {
      id: 2,
      name: "Cantilever chair",
      price: "$30.00",
      oldPrice: "$40.00",
      image: "/trending_2.png",
    },
    {
      id: 3,
      name: "Cantilever chair",
      price: "$30.00",
      oldPrice: "$40.00",
      image: "/trending_3.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      price: "$30.00",
      oldPrice: "$40.00",
      image: "/trending_4.png",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-white">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
        Trending Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {trendingProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 text-center transition-transform transform hover:scale-105"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="w-full object-contain"
            />
            {/* Product Name */}
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {product.name}
            </h3>
            {/* Pricing */}
            <div className="mt-2 flex justify-center space-x-2">
              <span className="text-pink-500 font-bold">{product.price}</span>
              <span className="text-gray-400 line-through">{product.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Offer Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Offer Box 1 */}
        <div className="bg-pink-50 p-6 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105">
          <Image
            src="/trending_5.png"
            alt="Offer"
            width={80}
            height={80}
            className="object-contain"
          />
          <div className="ml-6">
            <h4 className="text-xl font-bold text-gray-900">
              23% off in all products
            </h4>
            <p className="text-pink-500 font-medium mt-2">Shop Now</p>
          </div>
        </div>
        {/* Offer Box 2 */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105">
          <Image
            src="/trending_6.png"
            alt="Offer"
            width={80}
            height={80}
            className="object-contain"
          />
          <div className="ml-6">
            <h4 className="text-xl font-bold text-gray-900">
              23% off in all products
            </h4>
            <p className="text-blue-500 font-medium mt-2">View Collection</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProductsSection;
