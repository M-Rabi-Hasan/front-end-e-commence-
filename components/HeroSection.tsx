import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-purple-50 overflow-x-hidden py-12 mt-3 lg:px-0">
      <div className="container mx-auto px-4 lg:px-16 flex flex-wrap items-center">
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <p className="text-pink-600 text-sm font-medium uppercase mb-2">
            Best Furniture For Your Castle....
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-pink-600 transition">
            Shop Now
          </button>

          {/* Dot Navigation */}
          <div className="flex space-x-2 mt-6">
            {[...Array(3)].map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === 0 ? "bg-pink-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          {/* Circular Background */}
          <div className="absolute bg-purple-200 rounded-full w-72 h-72 lg:w-96 lg:h-96 -z-10"></div>

          {/* Chair Image */}
          <Image
            src="/Herosections.png" 
            alt="Chair"
            width={400}
            height={400}
            className="relative"
          />

          {/* 50% Off Badge */}
          <div className="absolute top-8 right-8 bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg">
            50% off
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
