import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  homeOutline,
  heartOutline,
  trophyOutline,
  barChartOutline,
  personOutline,
  settingsOutline,
  logOutOutline,
} from "ionicons/icons";
import { FaBars } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5"; // Import home icon from react-icons
import logo from "../assets/nlogo2.png";
import { LanguageContext } from "../context/LanguageContext";
import content from "../components/content/SlideBarContent.json";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="fixed top-0 left-0 h-screen z-50">
      <div
        className={`absolute top-0 left-0 h-screen bg-[#fefae7] text-black overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "w-72 shadow-2xl" : "w-0"
        }`}
      >
        {isOpen && (
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-center px-6 py-4 mt-5">
              <div className="flex items-center gap-4">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-28 cursor-pointer hover:scale-110 transition-transform"
                />
                <span
                  className="text-lg font-bold tracking-wide text-black"
                  style={{
                    fontFamily: "'Courgette', cursive",
                    fontSize: "24px",
                  }}
                ></span>
              </div>
            </div>

            {/* R Logo between NeverMinds and Overview */}
            <div className="flex justify-end items-center px-6">
              <FaBars
                className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
                onClick={toggleSidebar}
              />
            </div>

            {/* Overview Section */}
            <ul className="mt-4 px-6 space-y-4 sm:mt-12">
              <li className="text-gray-500 text-sm uppercase font-bold tracking-wide">
                {content[language].overview}
              </li>
              {/* Add Home link here */}
              <li className="flex items-center gap-4 py-3 px-3 hover:bg-yellow-500 hover:text-black rounded-lg cursor-pointer transition-all duration-300">
                <IonIcon icon={homeOutline} size="large" />
                <Link to="/" className="text-lg font-medium">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-4 py-3 px-3 hover:bg-yellow-500 hover:text-black rounded-lg cursor-pointer transition-all duration-300">
                <IonIcon icon={barChartOutline} size="large" />
                <Link to="/dashboard" className="text-lg font-medium">
                  {" "}
                  {content[language].dashboard}
                </Link>
              </li>
              <li className="flex items-center gap-4 py-3 px-3 hover:bg-yellow-500 hover:text-black rounded-lg cursor-pointer transition-all duration-300">
                <IonIcon icon={heartOutline} size="large" />
                <Link to="/favourites" className="text-lg font-medium">
                  {" "}
                  {content[language].favourites}
                </Link>
              </li>
              <li className="flex items-center gap-4 py-3 px-3 hover:bg-yellow-500 hover:text-black rounded-lg cursor-pointer transition-all duration-300">
                <IonIcon icon={trophyOutline} size="large" />
                <Link to="/badges" className="text-lg font-medium">
                  {" "}
                  {content[language].badges}
                </Link>
              </li>
              <li className="flex items-center gap-4 py-3 px-3 hover:bg-yellow-500 hover:text-black rounded-lg cursor-pointer transition-all duration-300">
                <IonIcon icon={barChartOutline} size="large" />
                <Link to="/progress" className="text-lg font-medium">
                  {" "}
                  {content[language].progress}
                </Link>
              </li>
              <li className="flex items-center gap-4 py-3 px-3 hover:bg-yellow-500 hover:text-black rounded-lg cursor-pointer transition-all duration-300">
                <IonIcon icon={personOutline} size="large" />
                <Link to="/account" className="text-lg font-medium">
                  {" "}
                  {content[language].account}
                </Link>
              </li>
            </ul>

            {/* Logout Button */}
            <div className="mt-auto px-6 py-4">
              {/* Settings Section */}
              <ul className="mt-6 space-y-4">
                <li className="text-gray-500 text-sm uppercase font-bold tracking-wide">
                  {content[language].settings}
                </li>
                <li className="flex items-center gap-4 py-3 px-3 hover:bg-yellow-500 hover:text-black rounded-lg cursor-pointer transition-all duration-300">
                  <IonIcon icon={settingsOutline} size="large" />
                  <span className="text-lg font-medium">
                    {" "}
                    {content[language].settings}
                  </span>
                </li>
              </ul>
              <button className="flex items-center gap-4 w-full text-lg font-medium text-red-600 hover:text-red-800 hover:bg-gray-100 rounded-lg py-3 px-3 transition-all duration-300">
                <IonIcon icon={logOutOutline} size="large" />
                <span> {content[language].logout}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Menu Icon */}
      <div
        className="w-8 h-8 sm:w-16 sm:h-16 ml-2 mt-9 sm:mt-9 flex items-center justify-center text-black cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={toggleSidebar}
      >
        {!isOpen && (
          <FaBars className="w-10 h-10 hover:rotate-12 transition-transform" />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
