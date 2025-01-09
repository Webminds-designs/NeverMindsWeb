import React, { useState } from "react";
import nlogo from "../assets/nlogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg p-5 md:p-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={nlogo} alt="NeverMinds Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-6 text-lg font-medium text-gray-700">
          <a href="#home" className="hover:text-[#FFD448] transition-colors">
            Home
          </a>
          <a href="#about-us" className="hover:text-[#FFD448] transition-colors">
            About Us
          </a>
          <a href="#services" className="hover:text-[#FFD448] transition-colors">
            Services
          </a>
          <a href="#quizzes" className="hover:text-[#FFD448] transition-colors">
            Quizzes
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-[#FFD448] text-white py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-200">
            Login
          </button>
          <button className="bg-white text-[#FFD448] py-2 px-6 rounded-lg border border-[#FFD448] hover:bg-yellow-100 transition duration-200">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4 bg-gray-100 py-4 px-6 rounded-lg shadow-md">
          <a
            href="#home"
            className="text-gray-700 text-lg font-medium hover:text-[#FFD448] transition-colors"
          >
            Home
          </a>
          <a
            href="#about-us"
            className="text-gray-700 text-lg font-medium hover:text-[#FFD448] transition-colors"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-gray-700 text-lg font-medium hover:text-[#FFD448] transition-colors"
          >
            Services
          </a>
          <a
            href="#quizzes"
            className="text-gray-700 text-lg font-medium hover:text-[#FFD448] transition-colors"
          >
            Quizzes
          </a>
          <button className="bg-[#FFD448] text-white py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-200">
            Login
          </button>
          <button className="bg-white text-[#FFD448] py-2 px-6 rounded-lg border border-[#FFD448] hover:bg-yellow-100 transition duration-200">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
