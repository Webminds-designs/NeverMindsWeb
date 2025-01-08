import React from "react";
import nlogo from "../assets/nlogo.png"; // Correct relative path to the logo

const Header = () => {
  return (
    <header className="bg-white shadow-lg p-20">
      <div className="max-w-screen flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-start">
          <img src={nlogo} alt="NeverMinds Logo" className="h-15 w-12" /> 
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 ml-20">
          <ul className="flex space-x-6 text-lg font-medium text-gray-700">
            <li>
              <a href="#home" className="hover:text-[#FFD448] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:text-[#FFD448] transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#FFD448] transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#quizzes" className="hover:text-[#FFD448] transition-colors">
                Quizzes
              </a>
            </li>
          </ul>
        </nav>

        {/* Login and Sign-Up Buttons */}
        <div className="space-x-4 flex justify-end">
          <button className="bg-[#FFD448] text-white py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-200 ">
            Login
          </button>
          <button className="bg-white text-[#FFD448] py-2 px-6 rounded-lg border border-[#FFD448] hover:bg-yellow-100 transition duration-200">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
