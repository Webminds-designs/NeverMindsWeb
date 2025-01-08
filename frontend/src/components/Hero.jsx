import React from 'react';
import { Link } from 'react-router-dom'; 

const Hero = () => {
  return (
    <section className="flex justify-center items-center bg-white text-black py-24 px-12 h-screen">
      {/* Left Section: Image */}
      <div className="flex-1 flex justify-start h-screen w-full p-0">
        <img src="src/assets/heropic.png" alt="Hero illustration" className="h-full w-auto object-cover" />
      </div>

      {/* Right Section: Content */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-[100px] font-extrabold leading-tight mb-4 justify-start">
          Nevermind with <span className="text-[#FFD448]">NeverMinds</span>
        </h1>
        <blockquote className="italic text-xl mb-6 max-w-lg">
          Ready to test your knowledge? Whether you're a trivia enthusiast or just looking for some fun, NeverMinds has something for everyone.
        </blockquote>
        <Link to="/quizzes">
          <button className="bg-[#FFD448] text-white py-3 px-8 rounded-lg hover:bg-yellow-600 transition duration-200 transform hover:scale-105">
            Try Quizzes
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
