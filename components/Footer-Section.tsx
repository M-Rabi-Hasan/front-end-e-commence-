import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Left Column - Brand and Signup */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hekto</h2>
          <form className="flex items-center mb-6">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-pink-500 text-white px-6 rounded-r-lg hover:bg-pink-600 transition">
              Sign Up
            </button>
          </form>
          <p className="text-sm text-gray-400">
            Contact Info:
            <br />
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-pink-500">
              Laptops & Computers
            </li>
            <li className="text-gray-400 hover:text-pink-500">
              Cameras & Photography
            </li>
            <li className="text-gray-400 hover:text-pink-500">
              Smart Phones & Tablets
            </li>
            <li className="text-gray-400 hover:text-pink-500">
              Video Games & Consoles
            </li>
            <li className="text-gray-400 hover:text-pink-500">
              Waterproof Headphones
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Customer Care</h3>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-pink-500">My Account</li>
            <li className="text-gray-400 hover:text-pink-500">Discount</li>
            <li className="text-gray-400 hover:text-pink-500">Returns</li>
            <li className="text-gray-400 hover:text-pink-500">Orders History</li>
            <li className="text-gray-400 hover:text-pink-500">Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pages</h3>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-pink-500">Blog</li>
            <li className="text-gray-400 hover:text-pink-500">Browse the Shop</li>
            <li className="text-gray-400 hover:text-pink-500">Category</li>
            <li className="text-gray-400 hover:text-pink-500">Pre-Built Pages</li>
            <li className="text-gray-400 hover:text-pink-500">
              Visual Composer Elements
            </li>
            <li className="text-gray-400 hover:text-pink-500">
              WooCommerce Pages
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center">
        <p className="text-sm text-gray-600">
          ©Webecy - All Rights Reserved
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-pink-500 transition"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-pink-500 transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
