import React from "react";
import ShopPage from "../../../../components/Product-Listing-Page";

const page = () => {
  return (
    <section className="overflow-x-hidden py-12  lg:px-0">
      <div className="container bg-purple-50 max-h-48  mx-auto px-4 lg:px-16 flex flex-wrap items-center">
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 py-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
            Shop Grid default
          </h1>
          <div className="">
            <span>Home.</span>
            <span>Pages.</span>
              <span className="text-pink-600 text-sm">Shop Grid Default</span>
          </div>
        </div>
      </div>
      <ShopPage/>
    </section>
  );
};

export default page;
