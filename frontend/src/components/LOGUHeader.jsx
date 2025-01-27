import React from "react";
import { IoMailOutline, IoNotificationsOutline } from "react-icons/io5"; // Correct import
import profileImg from "../assets/girl.jpg";

const LOGUHeader = () => {
  return (
    <div className="flex items-center justify-between bg-white  rounded-lg">
      {/* Search Bar */}
      <div className="lg:w-8/12 max-w-full lg:p-8">
        <div className="px-7 w-auto">
          <input
            type="text"
            placeholder="Search your course..."
            className="w-full p-4 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Search your course" // Accessibility improvement
          />
        </div>
      </div>

      {/* Icons and User Info */}
      <div className="hidden lg:flex flex-col w-4/12 p-8">
        <div className="flex justify-between items-center">
          {/* Notification Icons */}
          <div className="flex gap-4">
            <IoMailOutline className="text-black" fontSize="35px" />
            <IoNotificationsOutline className="text-black" fontSize="35px" />
          </div>
          {/* User Profile */}
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 rounded-full shadow-md"
              src={profileImg}
              alt="Dulsi Rathnayake's profile"
            />
            <span className="font-semibold">Dulsi Rathnayake</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LOGUHeader;
