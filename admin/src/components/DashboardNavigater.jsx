import React from "react";
import logo from "../assets/logo_black.png";
import statistics from "../assets/pie-chart.png";
import quizzes from "../assets/file.png";
import users from "../assets/users-avatar.png";
import dashboard from "../assets/dashboard.png";
import logout from "../assets/logout.png";

const DashboardNavigater = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
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
            <a
              className="flex items-center p-2 text-base text-black mb-2 font-bold hover:bg-[#f1edc8] rounded-md"
              href="#"
            >
              <img src={dashboard} alt="Dashboard" width="15" height="15" />
              <div className="pl-1">Dashboard</div>
            </a>
            <a
              className="flex items-center p-2 text-base text-black mb-2 font-bold hover:bg-[#f1edc8] rounded-md"
              href="#"
            >
              <img src={users} alt="Users" width="20" height="20" />
              <div className="pl-1">Users</div>
            </a>
            <a
              className="flex items-center p-2 text-base text-black mb-2 font-bold hover:bg-[#f1edc8] rounded-md"
              href="#"
            >
              <img src={quizzes} alt="Quizzes" width="15" height="15" />
              <div className="pl-1">Quizzes</div>
            </a>
            <a
              className="flex items-center p-2 text-base text-black mb-2 font-bold hover:bg-[#f1edc8] rounded-md"
              href="#"
            >
              <img src={statistics} alt="Statistics" width="16" height="16" />
              <div className="pl-1">Statistics</div>
            </a>
          </nav>
        </div>
        <a
          className="flex items-center p-2 text-base text-gray-500 mb-2 font-bold hover:bg-[#f1edc8] rounded-md"
          href="#"
        >
          <img src={logout} alt="Log Out" width="16" height="16" />
          <div className="pl-1">Log Out</div>
        </a>
      </div>
      
      <div className="ml-64 flex-1 p-8">
        
      </div>
    </div>
  );
};

export default DashboardNavigater;
