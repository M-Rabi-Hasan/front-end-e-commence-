import React from "react";
import Image from "next/image";
import OurFeaturesSection from "../../../components/aboutus-Features";
import ClientSaySection from "../../../components/about-ClientSay";

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-12">
      {/* Breadcrumb */}
      <div className="container bg-purple-50 max-h-48  mx-auto px-4 lg:px-16 flex flex-wrap items-center">
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 py-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
            About US
          </h1>
          <div className="">
            <span>Home.</span>
            <span>Pages.</span>
              <span className="text-pink-600 text-sm">About Us</span>
          </div>
        </div>
        </div>

      {/* About Content */}
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 items-center bg-white lg:mt-6 mt-3 rounded-lg shadow-md">
        
        <div className="relative">
          <Image
            src="/aboutus-1.png" 
            alt="About Us"
            width={500}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 border-4 border-purple-600 rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Know About Our Ecommerce Business, History
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
            Contact us
          </button>
        </div>
      </div>
      <OurFeaturesSection/>
      <ClientSaySection/>
    </section>
  );
};

export default AboutUsSection;
