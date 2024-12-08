import React from "react";
import Image from "next/image";

const NewBannerSection: React.FC = () => {
  return (
    <section className="relative bg-white">
      {/* Banner Background */}
      <div className="relative">
        <Image
          src="/newbanner-1.png" 
          alt="Banner Background"
          width={1200}
          height={600}
          className="w-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute pt-3 inset-0 flex flex-col items-center justify-center text-center">
          <h2 className="text-lg md:text-3xl font-bold text-blue-900 mb-4">
            Get Latest Update By Subscribe Our Newsletter
          </h2>
          <button className="hidden md:flex bg-pink-500 text-white px-6 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Logos Below the Banner */}
      <div className="flex justify-center items-center bg-white py-6">
        <Image
          src="/newbanner-2.png" 
          alt="Logos"
          width={600}
          height={100}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default NewBannerSection;
