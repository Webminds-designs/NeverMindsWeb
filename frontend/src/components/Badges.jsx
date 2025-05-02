import React, { useState, useContext } from "react";
import Sidebar from "./SideBar";
import Star3 from "../assets/star-3.svg";
import { LanguageContext } from "../context/LanguageContext";
import content from '../components/content/BadgesContent.json'


const Badges = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const { language, toggleLanguage } = useContext(LanguageContext); 
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative flex flex-col lg:flex-row h-screen w-full items-center justify-center px-4 md:px-10 lg:px-20 mt-10">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 max-w-4xl text-center">
        <header className="mb-12">
          {/* Heading */}
          <h1 className="text-[40px] md:text-[80px] lg:text-[100px] font-medium mb-4">
          {content[language].coming_soon}
          </h1>

          {/* Subheading */}
          <p className="text-[20px] md:text-[30px] text-gray-600 mb-4">
          {content[language].email_placeholder}
          </p>

          {/* Input and Button Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 bg-gray-300 rounded-lg p-3 w-full max-w-lg mx-auto">
            <input
              type="email"
              placeholder= {content[language].placeholder}
              className="text-[16px] md:text-[20px] p-3 w-64 md:w-80 rounded-lg border bg-transparent text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="text-[16px] md:text-[20px] px-3 py-2 md:px-4 md:py-3 ml-3 bg-black text-white rounded-lg hover:bg-gray-800">
            {content[language].notify_me} 
            </button>
          </div>

          {/* Footer Text */}
          <p className="mt-4 text-[20px] md:text-[30px] text-gray-500">
          {content[language].footer_text} 
          </p>
        </header>
      </main>

      {/* Star SVG at the Bottom-Right */}
      <img
        src={Star3}
        alt="Star"
        className="absolute bottom-4 right-4 w-20 h-20 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-40 lg:h-40"
      />
    </div>
  );
};

export default Badges;
