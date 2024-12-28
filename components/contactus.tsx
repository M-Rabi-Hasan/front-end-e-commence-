import React from "react";

const GetInTouch = () => {
  return (
    <div className="container mx-auto px-4 lg:px-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Contact Form */}
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

export default GetInTouch;
