import React from "react";
import Image from "next/image";

const BannerSection: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-purple-50">
      <div className="container mx-auto flex flex-wrap items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center relative">
          {/* Circular Background */}
          <div className="absolute bg-pink-200 rounded-full w-96 h-96 -z-10"></div>
          <Image
            src="/Bannar.png" 
            alt="Sofa"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Unique Features Of Latest & Trending Products
          </h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-gray-700">
              <span className="inline-block w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex items-center text-gray-700">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Reinforced with double wood dowels, glue, screws, nails, and machine nails
            </li>
            <li className="flex items-center text-gray-700">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              Arms, backs, and seats are structurally reinforced
            </li>
          </ul>

          <div className="flex items-center space-x-6">
            {/* Add to Cart Button */}
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition">
              Add To Cart
            </button>
            {/* Product Info */}
            <div>
              <h4 className="text-gray-800 font-semibold text-lg">
                B&B Italian Sofa
              </h4>
              <p className="text-pink-500 font-bold text-lg">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
