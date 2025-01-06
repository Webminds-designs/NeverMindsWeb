import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg p-6">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-4xl font-extrabold text-yellow-500 flex items-center space-x-2">
          <span className="text-gray-900">n</span>
          <span className="text-yellow-500">everMinds</span>
        </div>
        <nav className="space-x-6 text-lg font-medium">
          <a href="#home" className="text-gray-700 hover:text-yellow-500 transition-colors">Home</a>
          <a href="#about-us" className="text-gray-700 hover:text-yellow-500 transition-colors">About Us</a>
          <a href="#services" className="text-gray-700 hover:text-yellow-500 transition-colors">Services</a>
          <a href="#quizzes" className="text-gray-700 hover:text-yellow-500 transition-colors">Quizzes</a>
        </nav>
        <div className="space-x-4">
          <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-200">Login</button>
          <button className="bg-white text-yellow-500 py-2 px-6 rounded-lg border border-yellow-500 hover:bg-yellow-100 transition duration-200">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
