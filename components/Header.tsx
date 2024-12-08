"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { FiShoppingCart, FiHeart, FiSearch, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-purple-600 text-white text-sm px-4 lg:px-12 py-2 flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          <span>abc@gmail.com</span>
          <span>(12345)67890</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          <div className="cursor-pointer">English ▼</div>
          <div className="cursor-pointer">USD ▼</div>
          <Link href="#login" className="hover:underline">
            Login
          </Link>
          <Link href="#wishlist" className="hover:underline flex items-center">
            <FiHeart className="mr-1" />
            Wishlist
          </Link>
          <Link href="#cart" className="flex items-center">
            <FiShoppingCart className="text-lg" />
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="mx-auto px-4 lg:px-12 py-4 shadow-md flex flex-wrap items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-purple-600">Hekto</h1>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="#home" className="text-gray-700 hover:text-pink-500">
            Home
          </Link>
          <Link href="#pages" className="text-gray-700 hover:text-pink-500">
            Pages
          </Link>
          <Link href="#products" className="text-gray-700 hover:text-pink-500">
            Products
          </Link>
          <Link href="#blog" className="text-gray-700 hover:text-pink-500">
            Blog
          </Link>
          <Link href="#shop" className="text-gray-700 hover:text-pink-500">
            Shop
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-pink-500">
            Contact
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
            <FiSearch />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-700 hover:text-black text-2xl"
        >
          {isMenuOpen ? <FiX /> : <FaBarsStaggered />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="bg-white shadow-md mt-12 p-4 lg:hidden absolute top-16 left-0 right-0 z-50">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#home"
              className="text-gray-700 font-medium hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)} 
            >
              Home
            </Link>
            <Link
              href="#pages"
              className="text-gray-700 font-medium hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)} 
            >
              Pages
            </Link>
            <Link
              href="#products"
              className="text-gray-700 font-medium hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)} 
            >
              Products
            </Link>
            <Link
              href="#blog"
              className="text-gray-700 font-medium hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)} 
            >
              Blog
            </Link>
            <Link
              href="#shop"
              className="text-gray-700 font-medium hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)} 
            >
              Shop
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 font-medium hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)} 
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
