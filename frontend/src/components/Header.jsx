import React, { useState } from "react";
import nlogo from "../assets/nlogo.png";
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white p-5">
      <div className="w-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-start">
          <img src={nlogo} alt="NeverMinds Logo" className="h-15 w-12" />
        </div>

        {/* Navigation Links */}
        <nav className={`flex-1 ml-20 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="lg:flex hidden space-y-4 lg:space-y-0 lg:space-x-6 text-[22px] font-medium text-gray-700">
            <li>
              <a href="/home" className="hover:text-[#FFD448] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/quizzes" className="hover:text-[#FFD448] transition-colors">
                Quizzes
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-[#FFD448] transition-colors">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/aboutus" className="hover:text-[#FFD448] transition-colors">
                About Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Login and Sign-Up Buttons */}
        <div className="lg:flex hidden text-[22px] items-center space-x-4 ml-auto">
          <button className=" text-black font-bold py-2 px-6 rounded-2xl hover:bg-yellow-300 transition duration-200">
            Login
          </button>
          <button className="bg-yellow-300 text-black font-bold py-2 px-6 rounded-2xl border border-[#FFD448] hover:bg-yellow-100 transition duration-200">
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <RxHamburgerMenu size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center mt-4 space-y-4 bg-gray-100 py-4 px-6 rounded-lg shadow-lg">
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
          <a
            href="#dashboard"
            className="text-gray-700 text-lg font-medium hover:text-[#FFD448] transition-colors"
          >
            Dashboard
          </a>
          <button className="text-black font-bold py-2 px-6 rounded-2xl hover:bg-yellow-300 transition duration-200">
            Login
          </button>
          <button className="bg-yellow-300 text-black font-bold py-2 px-6 rounded-2xl border border-[#FFD448] hover:bg-yellow-100 transition duration-200">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;