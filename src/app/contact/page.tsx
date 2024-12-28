import React from "react";

const ContactPage = () => {
  return (
    <div className="container mx-auto  py-12 space-y-12">
      {/* Page Title */}
      <div className="container bg-purple-50 max-h-48  mx-auto px-4 lg:px-16 flex flex-wrap items-center">
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 py-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
            Contact
          </h1>
          <div className="">
            <span>Home.</span>
            <span>Pages.</span>
              <span className="text-pink-600 text-sm">Contact</span>
          </div>
        </div>
        </div>

      {/* Information and Contact Way */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-blue-800">Information About Us</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <div className="flex space-x-4 mt-6">
            <div className="w-8 h-8 rounded-full bg-pink-500"></div>
            <div className="w-8 h-8 rounded-full bg-pink-500"></div>
            <div className="w-8 h-8 rounded-full bg-pink-500"></div>
          </div>
        </div>

        {/* Contact Way */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800">Contact Way</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <p className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-purple-500 mr-2"></span>
                Tel: 877-67-88-99
              </p>
              <p className="flex items-center mt-2">
                <span className="w-4 h-4 rounded-full bg-pink-500 mr-2"></span>
                E-Mail: shop@store.com
              </p>
            </div>
            <div>
              <p className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-orange-400 mr-2"></span>
                20 Margaret st, London <br />
                Great Britain, 3NM98-LK
              </p>
              <p className="flex items-center mt-2">
                <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
                Free standard shipping <br />
                on all orders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-800">Get In Touch</h2>
          <p className="text-gray-600 mt-4 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </p>
          {/* Contact Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="email"
                placeholder="Your E-mail*"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject*"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              placeholder="Type Your Message*"
              className="w-full border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
            >
              Send Mail
            </button>
          </form>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <img
            src="/contactus-pic.png" 
            alt="Contact Us Illustration"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
