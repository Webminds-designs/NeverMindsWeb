import React from 'react';
import { Link } from 'react-router-dom'; 

const Hero = () => {
  return (
    <section className="flex items-center justify-between bg-white text-black py-24 px-12 h-screen shadow-lg">
      {/* Left Section: Image */}
      <div className="flex-1 flex justify-center h-screen w-full">
        <img src="src/assets/heropic.png" alt="Hero illustration" className="w-100 h-auto rounded-lg shadow-2xl" />
      </div>

      {/* Right Section: Content */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-6xl font-extrabold leading-tight mb-4">
          Nevermind with <span className="text-yellow-500">NeverMinds</span>
        </h1>
        <blockquote className="italic text-xl mb-6 max-w-lg">
          Ready to test your knowledge? Whether you're a trivia enthusiast or just looking for some fun, NeverMinds has something for everyone.
        </blockquote>
        <Link to="/quizzes">
          <button className="bg-yellow-500 text-white py-3 px-8 rounded-lg hover:bg-yellow-600 transition duration-200 transform hover:scale-105">
            Try Quizzes
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
