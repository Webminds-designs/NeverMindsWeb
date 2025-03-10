import React from "react";
import landing from "../assets/landing.png"; 
import arrow from "../assets/arrow3.png";
import person from "../assets/person.png";
import rectangle from "../assets/Rectangle.png"; 
import mobileApp from "../assets/mobileApp.png"; 

const Hero = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden block px-4 md:px-12 py-12">
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
      </div>

      {/* Desktop View */}
      <div
        className="bg-cover relative bg-center h-full min-h-screen w-full"
        style={{ backgroundImage: `url(${landing})` }}
      >
        <div className="inset-0 bg-gradient-to-r via-white/80 to-transparent flex flex-col lg:flex-row p-8 md:p-16">
          {/* Left Section - Text Content */}
          <div className="w-full text-black flex flex-col items-center lg:items-start lg:gap-y-7 lg:mt-32">
            <h1 className="hidden md:block text-3xl lg:text-[70px] font-semibold leading-tight mb-8 text-center lg:text-left">
              Challenge Your <br /> Knowledge Beyond <br /> Limits
            </h1>
            <p className="hidden md:block text-[15px] md:text-[28px] font-regular text-center lg:text-left mb-8">
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

          {/* Right Section */}
          <div className="w-full flex flex-col justify-center items-center relative bg-red-500">
            {/* Mobile App Coming Soon */}
            <div
              className="absolute  bottom-1/4 lg:bottom-2/3 left-3 lg:left-auto lg:right-8 flex justify-start lg:justify-end"
              style={{
                height: 200,
                width: 200,
                backgroundImage: `url(${mobileApp})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
            </div>
            <div className="absolute bottom-1/4 lg:bottom-2/3 left-3 lg:top-6 lg:left-auto lg:right-12 text-black border-2 bg-transparent border-transparent rounded-full px-4 py-2 w-36 h-36 text-center flex items-center text-[18px]">
                Mobile app coming soon!
              </div>

            {/* Powered by 15 minds */}
            <div
              className="absolute bottom-2 lg:bottom-5 lg:right-10 bg-transparent border-2 border-transparent rounded-lg p-4 w-64 lg:w-72"
              style={{
                backgroundImage: `url(${rectangle})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="mb-2">
                {/* Profile Images */}
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, idx) => (
                    <img
                      key={idx}
                      src={person}
                      alt={`Team member ${idx + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div>
                  <span className="font-light text-xl lg:text-2xl">
                    Powered by
                  </span>
                  <span className="font-medium text-2xl lg:text-4xl mx-2">
                    15
                  </span>
                  <span className="font-light text-xl lg:text-2xl">minds</span>
                </div>
              </div>
              <p className="text-gray-700 text-xs lg:text-sm">
                This app is a testament to the dedication and creativity of 15
                incredible minds, united to empower students through engaging
                quizzes.
              </p>

              {/* Arrow Icon */}
              <div className="flex justify-end">
                <img
                  src={arrow}
                  alt="Arrow icon pointing right"
                  className="w-4 h-4"
                  loading="lazy"
                />
              </div>
            </div>
          </div>*
        </div>
      </div>
    </>
  );
};

export default Hero;
