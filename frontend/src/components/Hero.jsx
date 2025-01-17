import React from "react";
import landing from "../assets/landing.png";
import arrow from "../assets/arrow3.png";
import person from "../assets/person.png";

const Hero = () => {
  return (
    <>
    <div className="block md:hidden">
    <h1 className="text-[36px] text-center md:text-[48px] lg:text-[60px] font-bold leading-tight mb-4">
              Challenge Your <br /> Knowledge Beyond <br /> Limits
            </h1>
     </div>
    <div
      className="relative bg-cover bg-center md:h-screen w-full"
      style={{
        backgroundImage: `url(${landing})`,
      }}
    >
      {/* Overlay for content */}
      <div className="md:absolute relative inset-0 bg-gradient-to-r via-white/80 to-transparent flex flex-col md:flex-row p-8 md:p-16">
        {/* Left Section - Text Content */}
        <div className="w-full md:w-1/2 text-black flex items-center text-center">
          <div>
            <h1 className="text-[36px] md:text-[48px] lg:text-[60px] hidden md:block font-bold leading-tight mb-4">
              Challenge Your <br /> Knowledge Beyond <br /> Limits
            </h1>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] sm:text-center md:text-left mb-6">
              Dive into a variety of quizzes tailored to your<br className="hidden md:block"></br>interests and skill
              levels. Ready to test your<br className="hidden md:block"></br>limits?
            </p>
            <button className="bg-[#fbc72e] text-black text-[15px] md:text-[22px] font-medium px-6 py-3 rounded-full hover:bg-yellow-500 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 relative mt-[200px]">
          {/* Circle Text - Top Right */}
          <div className="md:absolute relative top-4 right-4 text-black border-2 border-[#fbc72e] rounded-full px-4 py-2 text-center text-[18px]">
            Mobile app coming soon!
          </div>

          {/* Powered by 15 minds - Bottom Right */}
          <div className="md:absolute relative bottom-4 right-4 bg-white border-2 border-[#fbc72e] rounded-lg p-6 sm:mt-[60px] shadow-md w-full md:w-auto max-w-md">
            <div className="flex items-center mb-4">
              {/* Profile Images */}
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, idx) => (
                  <img
                    key={idx}
                    src={person}
                    alt={`Profile picture of team member ${idx + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="ml-4 text-[20px] font-bold text-black">
                Powered by 15 minds
              </span>
            </div>
            <p className="text-gray-700 text-[16px]">
              This app is a testament to the dedication and creativity of 15
              incredible minds, united to empower students through engaging
              quizzes.
            </p>
            {/* Arrow Icon */}
            <div className="mt-4 flex justify-end">
              <img
                src={arrow}
                alt="Arrow icon pointing right"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
