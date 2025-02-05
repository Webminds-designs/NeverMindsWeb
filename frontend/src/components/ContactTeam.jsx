import React, { useContext } from "react";
import teampic from "../assets/knight.png";
import { LanguageContext } from "../context/LanguageContext";
import content from "../components/content/ContactTeam.json";

const ContactTeam = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 items-center py-8 md:pl-0 px-6 md:pr-20 bg-white">
      {/* Left Section - Image */}
      <div className="w-full md:col-span-4 flex justify-center md:justify-start px-0 mb-6 md:mb-0">
        <img
          src={teampic}
          alt="Friendly Knight"
          className="h-60 md:h-[606px] w-auto object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Section - Content */}
      <div className="w-full md:col-span-8 text-center md:text-left">
        <h1 className="text-[36px] md:text-[55px] lg:text-[80px] font-regular text-center mb-4">
          {content[language].title}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-40 md:h-80 bg-[#f9c226] rounded-3xl hover:shadow-lg hover:bg-[#f9a826] transition-all duration-300"
            ></div>
          ))}
        </div>
        <p className="text-gray-700 text-[18px] md:text-[24px] lg:text-[30px] text-center hover:text-gray-900 transition-colors duration-300">
          {content[language].description}
        </p>
      </div>
    </div>
  );
};

export default ContactTeam;
