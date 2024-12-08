import React from "react";
import Image from "next/image";

const DiscountSection: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-white">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Discount Item</h2>
        <div className="mt-4 flex justify-center space-x-4 text-sm font-medium text-pink-500">
          <a href="#wood-chair" className="underline">
            Wood Chair
          </a>
          <a href="#plastic-chair" className="hover:underline">
            Plastic Chair
          </a>
          <a href="#sofa-collection" className="hover:underline">
            Sofa Collection
          </a>
        </div>
      </div>

      {/* Discount Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            20% Discount Of All Products
          </h3>
          <p className="text-gray-600 mb-6">
            Eames Sofa Compact Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <span className="inline-block w-4 h-4 bg-pink-500 rounded-full mr-4"></span>
              Material expose like metals
            </li>
            <li className="flex items-center text-gray-700">
              <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-4"></span>
              Clear lines and geometric figures
            </li>
            <li className="flex items-center text-gray-700">
              <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-4"></span>
              Simple neutral colours
            </li>
          </ul>
          <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative">
          {/* Circular Background */}
          <div className="absolute bg-pink-200 rounded-full w-96 h-96 -z-10"></div>
          <Image
            src="/Discount-1.png"
            alt="Discount Chair"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
