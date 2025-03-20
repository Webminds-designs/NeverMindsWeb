import React from "react";
import { IoMailOutline, IoNotificationsOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import profileImg from "../assets/girl.jpg";

const LOGUHeader = () => {
  const location = useLocation();

  // Conditions for hiding the search bar
  const shouldHideSearchBar =
    location.pathname === "/account" ||
    location.pathname === "/badges" ||
    location.pathname === "/progress" ||
    location.pathname === "/favourites";

  // Conditions for aligning the right section to the top-right corner
  const shouldAlignTopRight =
    location.pathname === "/account" ||
    location.pathname === "/badges" ||
    location.pathname === "/progress" ||
    location.pathname === "/favourites";

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 w-full">
      <div
        className={`flex flex-col lg:flex-row items-center justify-between ${
          shouldAlignTopRight ? "lg:items-start lg:justify-end" : ""
        }`}
      >
        {/* Left Section: Search Bar (Hidden on Specific Pages) */}
        {!shouldHideSearchBar && (
          <div className="w-full lg:w-8/12 max-w-full sm:ml-10 p-2 md:p-4">
            <input
              type="text"
              placeholder="Search your course..."
              className="w-full p-3 md:p-4 mx-5 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              aria-label="Search your course"
            />
          </div>
        )}

        {/* Right Section: Icons and User Profile (Always Right-Aligned) */}
        <div
          className={`w-full lg:w-4/12 flex items-center gap-6 p-2 md:p-4 ${
            shouldAlignTopRight
              ? "absolute top-4 right-4 lg:right-8 flex-row justify-end"
              : "justify-between lg:justify-end"
          }`}
        >
          {/* Notification & Mail Icons */}
          <div className="flex gap-3 md:gap-4">
            <IoMailOutline className="text-black text-xl md:text-2xl lg:text-3xl" />
            <IoNotificationsOutline className="text-black text-xl md:text-2xl lg:text-3xl" />
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3 md:gap-4">
            <img
              className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md"
              src={profileImg}
              alt="Dulsi Rathnayake's profile"
            />
            <span className="font-semibold text-sm md:text-base lg:text-md">
              Dulsi Rathnayake
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LOGUHeader;
