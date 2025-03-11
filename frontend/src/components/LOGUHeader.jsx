import React from "react";
import { IoMailOutline, IoNotificationsOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import profileImg from "../assets/girl.jpg";

const LOGUHeader = () => {
  const location = useLocation();
  const shouldHideSearchBar =
    location.pathname === "/account" ||
    location.pathname === "/badges" ||
    location.pathname === "/progress"||
    location.pathname === "/favourites";

  const shouldAlignTopRight =
    location.pathname === "/account" ||
    location.pathname === "/badges" ||
    location.pathname === "/progress"||
    location.pathname === "/favourites";

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 w-full">
      <div
        className={`flex flex-col lg:flex-row items-center justify-between ${
          shouldAlignTopRight ? "sm:items-start sm:justify-end" : ""
        }`}
      >
        {/* Left Section: Search Bar (Hidden on Specific Pages) */}
        {!shouldHideSearchBar && (
          <div className="w-full lg:w-8/12 max-w-full ml-16 sm:ml-4 p-2 md:p-4">
            <input
              type="text"
              placeholder="Search your course..."
              className="w-full p-3 md:p-4 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              aria-label="Search your course"
            />
          </div>
        )}

        {/* Right Section: Icons and User Profile (Aligned to Top Right Conditionally) */}
        <div
          className={`w-full lg:w-4/12 flex items-center gap-6 p-2 md:p-4 ${
            shouldAlignTopRight
              ? "sm:absolute sm:top-4 sm:right-4 sm:flex-row sm:gap-6"
              : "justify-between lg:justify-end"
          }`}
        >
          <div className="flex gap-3 md:gap-4">
            <IoMailOutline className="text-black text-xl md:text-2xl lg:text-3xl" />
            <IoNotificationsOutline className="text-black text-xl md:text-2xl lg:text-3xl" />
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <img
              className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md"
              src={profileImg}
              alt="Dulsi Rathnayake's profile"
            />
            <span className="font-semibold text-sm md:text-base lg:text-lg">
              Dulsi Rathnayake
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LOGUHeader;
