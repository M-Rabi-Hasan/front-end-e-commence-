import React from "react";
import Image from "next/image";
import ProductDescriptionSection from "../../../components/productdes";
import RelatedProducts from "../../../components/Related-Products-Section";

const ProductHeroSection: React.FC = () => {
  return (
    <section className="py-12 px-6 sm:px-8 lg:px-16 bg-gray-50">
      {/* Breadcrumb */}
      <div className="mb-8 text-gray-600">
        <span className="text-gray-500">Home</span> &nbsp;.&nbsp; 
        <span className="text-gray-500">Pages</span> &nbsp;.&nbsp; 
        <span className="text-pink-500">Product Details</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-md">
        {/* Left Side (Images) */}
        <div className="flex flex-col space-y-4">
          {/* Thumbnail Images */}
          <div className="flex space-x-4">
            <Image
              src="/product-hero-1.png"
              alt="Thumbnail 1"
              width={100}
              height={100}
              className="rounded-md border hover:border-pink-500"
            />
            <Image
              src="/product-hero-2.png"
              alt="Thumbnail 2"
              width={100}
              height={100}
              className="rounded-md border hover:border-pink-500"
            />
            <Image
              src="/product-hero-3.png"
              alt="Thumbnail 3"
              width={100}
              height={100}
              className="rounded-md border hover:border-pink-500"
            />
          </div>

          {/* Main Image */}
          <div className="relative w-full h-96">
            <Image
              src="/product-hero-4.png" 
              alt="Main Product"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Side (Details) */}
        <div className="flex flex-col space-y-6">
          {/* Title and Ratings */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Playwood Arm Chair</h1>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-gray-500">(22 Reviews)</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-800">$32.00</span>
            <span className="text-xl line-through text-gray-400">$52.00</span>
          </div>

          {/* Color Options */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Color</h4>
            <div className="flex space-x-4">
              <span className="w-6 h-6 bg-black rounded-full cursor-pointer border hover:border-pink-500"></span>
              <span className="w-6 h-6 bg-gray-400 rounded-full cursor-pointer border hover:border-pink-500"></span>
              <span className="w-6 h-6 bg-pink-500 rounded-full cursor-pointer border hover:border-pink-500"></span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
          </p>

          {/* Add to Cart Button */}
          <div className="flex items-center space-x-4">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
              Add To Cart
            </button>
            <button className="text-gray-600 hover:text-pink-500 transition">
              ♥
            </button>
          </div>

          {/* Categories and Tags */}
          <div className="text-sm text-gray-500">
            <p>
              <strong>Categories:</strong> Furniture, Chair
            </p>
            <p>
              <strong>Tags:</strong> Modern, Minimalist
            </p>
          </div>

          {/* Share Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:underline">Facebook</a>
            <a href="#" className="text-blue-300 hover:underline">Twitter</a>
            <a href="#" className="text-pink-500 hover:underline">Pinterest</a>
          </div>
        </div>
      </div>
      <ProductDescriptionSection/>
      <RelatedProducts/>
    </section>
  );
};

export default ProductHeroSection;
