import React,{useContext} from "react";
import landing from "../assets/landing.png";
import arrow from "../assets/arrow3.png";
import person from "../assets/person.png";
import rectangle from "../assets/Rectangle.svg"; 
import content from '../components/content/HeroContent.json'
import { LanguageContext } from "../context/LanguageContext"; 

const Hero = () => {

  const { language } = useContext(LanguageContext);
  
  return (
    <>
      <div className="md:hidden block p-12">
        <h1 className="lg:text-[50px] text-3xl font-semibold leading-tight mb-4 flex flex-col text-center lg:text-left">
          <p>
           {content[language].title1}<br></br>   {content[language].title2}<br></br>   {content[language].title3}
          </p>
        </h1>
        <span className=" text-[15px] md:text-[20px] lg:text-[24px] font-medium text-center lg:text-left mb-6">
          <p>
          {content[language].description1}<br></br>
          {content[language].description2}<br></br> {content[language].description3}
          </p>
        </span>
        <div className="flex justify-center">
          <button className="bg-[#fbc72e] text-black text-[15px] lg:text-[22px] font-medium md:px-6 md:py-3 px-3 py-2 rounded-full hover:bg-yellow-500 transition">
          {content[language].button}
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
          <div className="w-full text-black flex flex-col lg:items-start items-center lg:gap-y-7 lg:mt-32 lg:mb-0 mb-[600px]">
            <div className="hidden md:block">
              <h1 className="lg:text-[70px] text-3xl font-semibold leading-tight mb-8 text-center lg:text-left">
                <p>
                {content[language].title1}<br></br>   {content[language].title2}<br></br>   {content[language].title3}
                </p>
              </h1>
              <span className="text-[15px] md:text-[28px] lg:text-[28px] font-medium text-center lg:text-left mb-8">
                <p>
                {content[language].description1}<br></br>
                {content[language].description2}<br></br> {content[language].description3}
                </p>
              </span>
              <button className="bg-[#fbc72e] text-black text-[15px] lg:text-[28px] font-medium md:px-6 md:py-3 px-3 py-2 rounded-full hover:bg-yellow-500 transition sm:mt-8 mt-4">
              {content[language].button}
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full flex flex-col justify-center items-center">
            {/* Circle Text - Top Right */}
            <div className="absolute bottom-1/4 lg:bottom-2/3 left-3 lg:left-auto lg:right-10 w-full flex justify-start lg:justify-end">
              <div className="text-black border-2 border-[#fbc72e] rounded-full px-4 py-2 w-40 h-40 text-center flex items-center text-[18px]">
              {content[language].mobileApp}
              </div>
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
                  {content[language].poweredBy}
                  </span>
                  <span className="font-medium text-2xl lg:text-4xl mx-2">
                    15
                  </span>
                  <span className="font-light text-xl lg:text-2xl"> {content[language].minds}</span>
                </div>
              </div>
              <p className="text-gray-700 text-xs lg:text-sm">
              {content[language].credits}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
