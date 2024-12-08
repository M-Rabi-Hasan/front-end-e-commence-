import React from "react";
import Image from "next/image";

const RelatedProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Mens Fashion Wear",
      price: "$45.00",
      rating: 5,
      image: "/productrelated-1.png", // Replace with actual image paths
    },
    {
      id: 2,
      name: "Women's Fashion",
      price: "$67.00",
      rating: 4,
      image: "/productrelated-2.png",
    },
    {
      id: 3,
      name: "Walk Dummy Fashion",
      price: "$62.00",
      rating: 5,
      image: "/productrelated-3.png",
    },
    {
      id: 4,
      name: "Top Wall Digital Clock",
      price: "$81.00",
      rating: 4,
      image: "/productrelated-4.png",
    },
  ];

  return (
    <section className="py-12 px-6 sm:px-8 lg:px-16 bg-white">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Related Products
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 text-center"
          >
            {/* Product Image */}
            <div className="relative w-full h-48">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <div className="flex justify-center items-center space-x-1 text-yellow-500 my-2">
                {Array.from({ length: product.rating }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
                {Array.from({ length: 5 - product.rating }).map((_, index) => (
                  <span key={index} className="text-gray-300">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-lg font-bold text-gray-800">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Logo Section */}
      <div className="mt-12 flex justify-center">
        <Image
          src="/newbanner-2.png" // Replace with actual path to logos
          alt="Brand Logos"
          width={600}
          height={100}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default RelatedProducts;
