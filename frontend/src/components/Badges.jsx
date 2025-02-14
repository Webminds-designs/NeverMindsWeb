import React, { useState, useContext } from "react";
import Sidebar from "./SideBar";
import Star3 from "../assets/star-3.svg";
import { LanguageContext } from "../context/LanguageContext";
import content from '../components/content/BadgesContent.json'


const Badges = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const { language, toggleLanguage } = useContext(LanguageContext); 
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const profileImage = "https://via.placeholder.com/150"; // Replace with dynamic profile image if needed
  const name = "Dulsi Rathnayake"; // Replace with dynamic name if needed

  return (
    <div className="relative flex h-screen items-center justify-center mx-5 w-full">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 max-w-4xl mx-auto">
        <header className="text-center mb-12">
          {/* Heading */}
          <h1 className="text-[40px] md:text-[80px] lg:text-[100px] font-medium mb-4">
          {content[language].coming_soon}
          </h1>
          {/* Subheading */}
          <p className="text-[20px] md:text-[30px] text-gray-600 mb-4">
          {content[language].email_placeholder}
          </p>
          {/* Input and Button */}
          <div className="inline-block py-2 px-2 text-[15px] justify-center gap-2 bg-gray-300 rounded-lg">
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
        className="absolute bottom-4 right-4 w-50 h-50 md:w-50 md:h-50 lg:w-50 lg:h-50"
      />
    </div>
  );
};

export default Badges;
