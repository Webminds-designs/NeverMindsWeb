import React from 'react';
import { Link } from 'react-router-dom';
import nlogo from '../assets/nlogo.png';
import exclamation from '../assets/!!.png';
import group10 from '../assets/Group 10.png';
import group101 from '../assets/Group 10-1.png';
import heropic from '../assets/heropic.png';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center items-center bg-white text-black py-12 md:py-24 w-full h-auto md:h-screen">
      {/* Left Section: Image */}
      <div className="flex-1 flex justify-center md:justify-start w-full h-[40vh] md:h-full px-4 md:px-0">
        <img
          src={heropic}
          alt="Hero illustration"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Right Section: Content */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start px-6 md:px-12 text-center md:text-left">
        <h1 className="text-[28px] sm:text-[36px] md:text-[64px] lg:text-[80px] font-kulim-park font-semibold leading-tight mb-4">
          Nevermind with{' '}
          <span className="text-black flex items-center gap-2">
            <img
              src={nlogo}
              alt="nlogo"
              className="h-8 w-auto md:h-10 lg:h-12 align-middle"
            />
            everMinds
            <img
              src={exclamation}
              alt="Exclamation"
              className="h-6 w-auto md:h-8 lg:h-10"
            />
          </span>
        </h1>

        <blockquote className="italic text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-lg font-parkin-sans">
          <img
            src={group10}
            alt="Group 10"
            className="h-5 w-auto sm:h-6 md:h-8 inline-block mr-2"
          />
          Ready to test your knowledge? Whether you're a trivia enthusiast or
          just looking for some fun,{' '}
          <span className="inline-flex items-center gap-2">
            <img src={nlogo} alt="nlogo" className="h-4 w-auto sm:h-5 inline" />
            everMinds
          </span>{' '}
          has something for everyone. Dive into a variety of quizzes and
          challenge yourself across multiple categories!{' '}
          <img
            src={group101}
            alt="Group 10-1"
            className="h-5 w-auto sm:h-6 md:h-8 inline-block ml-2"
          />
        </blockquote>

        <Link to="/quizzes">
          <button className="bg-[#FFD448] text-white py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-lg hover:bg-yellow-600 transition duration-200 transform hover:scale-105 font-parkin-sans">
            Try Quizzes
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
