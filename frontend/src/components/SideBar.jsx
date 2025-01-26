import React from "react";
import { IonIcon } from "@ionic/react";
import {homeOutline,heartOutline,trophyOutline,barChartOutline,personOutline,settingsOutline,logOutOutline} from "ionicons/icons";
import {TbTransitionLeftFilled,TbTransitionRightFilled} from "react-icons/tb";
import logo from "../assets/logo.png";


const Sidebar = ({ isOpen, toggleSidebar }) => {
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
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-4">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-7 h-5 cursor-pointer hover:scale-110 transition-transform"
                />
                <span
                  className="text-lg font-bold tracking-wide text-black"
                  style={{
                    fontFamily: "'Courgette', cursive",
                    fontSize: "24px",
                  }}
                >
                  NeverMinds
                </span>
              </div>
            </div>

            {/* R Logo between NeverMinds and Overview */}
            <div className="flex justify-end items-center px-6">
              <TbTransitionLeftFilled
                className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
                onClick={toggleSidebar}
              />
            </div>

            {/* Overview Section */}
            <ul className="mt-4 px-6 space-y-4">
              <li className="text-gray-500 text-sm uppercase font-bold tracking-wide">
                Overview
              </li>
              <li className="flex items-center gap-4 py-3 px-3 hover:bg-yellow-500 hover:text-black rounded-lg cursor-pointer transition-all duration-300">
                <IonIcon icon={homeOutline} size="large" />
                <span className="text-lg font-medium">Dashboard</span>
              </li>
              <li className="flex items-center gap-4 py-3 px-3 hover:bg-yellow-500 hover:text-black rounded-lg cursor-pointer transition-all duration-300">
                <IonIcon icon={heartOutline} size="large" />
                <span className="text-lg font-medium">Favourites</span>
              </li>
              <li className="flex items-center gap-4 py-3 px-3 hover:bg-yellow-500 hover:text-black rounded-lg cursor-pointer transition-all duration-300">
                <IonIcon icon={trophyOutline} size="large" />
                <span className="text-lg font-medium">Badges</span>
              </li>
              <li className="flex items-center gap-4 py-3 px-3 hover:bg-yellow-500 hover:text-black rounded-lg cursor-pointer transition-all duration-300">
                <IonIcon icon={barChartOutline} size="large" />
                <span className="text-lg font-medium">Progress</span>
              </li>
              <li className="flex items-center gap-4 py-3 px-3 hover:bg-yellow-500 hover:text-black rounded-lg cursor-pointer transition-all duration-300">
                <IonIcon icon={personOutline} size="large" />
                <span className="text-lg font-medium">Account</span>
              </li>
            </ul>

            {/* Logout Button */}
            <div className="mt-auto px-6 py-4">
              {/* Settings Section */}
              <ul className="mt-6 space-y-4">
                <li className="text-gray-500 text-sm uppercase font-bold tracking-wide">
                  Settings
                </li>
                <li className="flex items-center gap-4 py-3 px-3 hover:bg-yellow-500 hover:text-black rounded-lg cursor-pointer transition-all duration-300">
                  <IonIcon icon={settingsOutline} size="large" />
                  <span className="text-lg font-medium">Settings</span>
                </li>
              </ul>
              <button className="flex items-center gap-4 w-full text-lg font-medium text-red-600 hover:text-red-800 hover:bg-gray-100 rounded-lg py-3 px-3 transition-all duration-300">
                <IonIcon icon={logOutOutline} size="large" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Menu Icon */}
      <div
        className="w-16 h-16 flex items-center justify-center text-black cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={toggleSidebar}
      >
        {!isOpen && (
          <TbTransitionRightFilled
            className="w-10 h-10 hover:rotate-12 transition-transform"
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
