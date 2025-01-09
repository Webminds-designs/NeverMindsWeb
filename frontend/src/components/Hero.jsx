import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center items-center bg-white text-black py-12 md:py-24 w-full h-auto md:h-screen">
      {/* Left Section: Image */}
      <div className="flex-1 flex justify-center md:justify-start w-full h-[50vh] md:h-full">
        <img
          src="src/assets/heropic.png"
          alt="Hero illustration"
          className="h-full w-auto object-cover"
        />
      </div>

      {/* Right Section: Content */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start px-6 md:px-12 text-center md:text-left">
        <h1 className="text-[36px] md:text-[64px] lg:text-[100px] font-extrabold leading-tight mb-4">
          Nevermind with <span className="text-[#FFD448]">NeverMinds</span>
        </h1>
        <blockquote className="italic text-lg md:text-xl mb-6 max-w-lg">
          Ready to test your knowledge? Whether you're a trivia enthusiast or
          just looking for some fun, NeverMinds has something for everyone.
        </blockquote>
        <Link to="/quizzes">
          <button className="bg-[#FFD448] text-white py-3 px-6 md:px-8 rounded-lg hover:bg-yellow-600 transition duration-200 transform hover:scale-105">
            Try Quizzes
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
