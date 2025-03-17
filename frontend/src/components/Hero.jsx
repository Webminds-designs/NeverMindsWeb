import React from "react";
import landing from "../assets/landing.png";
import landing2 from "../assets/landing2.png";

const Hero = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="lg:hidden block px-4 lg:px-12 pt-20">
        <h1 className="text-3xl lg:text-[50px] font-semibold leading-tight mb-4 text-center">
          Challenge Your <br /> Knowledge Beyond <br /> Limits
        </h1>
        <p className="text-[15px] md:text-[20px] lg:text-[24px] font-medium text-center mb-6">
          Dive into a variety of quizzes tailored to your <br /> interests and
          skill levels. Ready to test your limits?
        </p>
        <div className="flex justify-center">
          <button
            className="bg-[#fbc72e] text-black text-[15px] lg:text-[22px] font-medium px-3 py-2 md:px-6 md:py-3 rounded-full hover:bg-yellow-500 transition"
            aria-label="Get Started"
          >
            Get Started
          </button>
        </div>
        <img src={landing2} alt={landing} className="w-full" />
      </div>

      {/* Desktop View */}
      <div
        className="hidden lg:block bg-cover relative bg-center h-full min-h-screen w-full mt-15 pt-10 lg:mt-10"
        style={{ backgroundImage: `url(${landing})` }}
      >
        <div className="inset-0 bg-gradient-to-r via-white/80 to-transparent flex flex-col lg:flex-row p-8 md:p-16">
          {/* Left Section - Text Content */}
          <div className="w-full text-black flex flex-col items-center lg:items-start lg:gap-y-7 lg:mt-32">
            <h1 className="text-3xl lg:text-[70px] font-semibold leading-tight mb-8 text-center lg:text-left">
              Challenge Your <br /> Knowledge Beyond <br /> Limits
            </h1>
            <p className=" text-[15px] md:text-[28px] font-regular text-center lg:text-left mb-8">
              Dive into a variety of quizzes tailored to your <br />
              interests and skill levels. Ready to test your limits?
            </p>
            <button
              className="hidden md:flex items-center bg-[#fbc72e] text-black text-[15px] lg:text-[28px] font-semibold px-3 py-2 md:px-6 md:py-3 rounded-full hover:bg-yellow-500 transition"
              aria-label="Get Started"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
