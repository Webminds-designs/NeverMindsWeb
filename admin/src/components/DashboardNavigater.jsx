import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_black.png";
import statistics from "../assets/pie-chart.png";
import quizzes from "../assets/file.png";
import users from "../assets/users-avatar.png";
import dashboard from "../assets/dashboard.png";
import logout from "../assets/logout.png";

const DashboardNavigater = () => {
  const location = useLocation(); 
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-yellow-50 w-64 p-12 flex flex-col justify-between fixed h-full">
      <div>
        <div className="flex items-center mb-24">
          <img src={logo} alt="Logo" />
          <span className="absolute text-lg font-semibold left-20 top-10">
            neverMinds
          </span>
        </div>
        <nav className="space-y-4">
          <div className="text-base text-gray-500 uppercase mb-2 font-bold">
            Main Menu
          </div>
          <Link
            to="/"
            className={`flex items-center p-2 text-base mb-2  rounded-md ${
              isActive("/") ? "bg-[#f1edc8] text-black font-bold" : "text-black font-medium hover:bg-[#f1edc8]"
            }`}
          >
            <img src={dashboard} alt="Dashboard" width="15" height="15" />
            <div className="pl-1">Dashboard</div>
          </Link>
          <Link
            to="/users"
            className={`flex items-center p-2 text-base mb-2  rounded-md ${
              isActive("/users") ? "bg-[#f1edc8] text-black font-bold" : "text-black font-medium hover:bg-[#f1edc8]"
            }`}
          >
            <img src={users} alt="Users" width="20" height="20" />
            <div className="pl-1">Users</div>
          </Link>
          <Link
            to="/quizzes"
            className={`flex items-center p-2 text-base mb-2  rounded-md ${
              isActive("/quizzes") ? "bg-[#f1edc8] text-black font-bold" : "text-black font-medium hover:bg-[#f1edc8]"
            }`}
          >
            <img src={quizzes} alt="Quizzes" width="15" height="15" />
            <div className="pl-1">Quizzes</div>
          </Link>
          <Link
            to="/statistics"
            className={`flex items-center p-2 text-base mb-2  rounded-md ${
              isActive("/statistics") ? "bg-[#f1edc8] text-black font-bold" : "text-black font-medium hover:bg-[#f1edc8]"
            }`}
          >
            <img src={statistics} alt="Statistics" width="16" height="16" />
            <div className="pl-1">Statistics</div>
          </Link>
        </nav>
      </div>
      <Link
        to="/logout"
        className="flex items-center p-2 text-base text-gray-500 mb-2 font-bold hover:bg-[#f1edc8] rounded-md"
      >
        <img src={logout} alt="Log Out" width="16" height="16" />
        <div className="pl-1">Log Out</div>
      </Link>
    </div>
  );
};

export default DashboardNavigater;
