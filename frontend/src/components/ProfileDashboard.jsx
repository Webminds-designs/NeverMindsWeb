import React, { useState } from "react";
import logo from "../assets/logo.png";
import L from "../assets/L.png";
import R from "../assets/R.png";
import { IonIcon } from "@ionic/react";
import {
  homeOutline,
  heartOutline,
  trophyOutline,
  barChartOutline,
  personOutline,
  settingsOutline,
  logOutOutline,
  mailOutline,
  notificationsOutline,
} from "ionicons/icons";

const ProfileDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen z-50">
        <div
          className={`absolute top-0 left-0 h-screen bg-[#fefae7] text-black overflow-hidden transition-all duration-500 ease-in-out ${
            isSidebarOpen ? "w-72 shadow-2xl" : "w-0"
          }`}
        >
          {isSidebarOpen && (
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
                    Neverminds
                  </span>
                </div>
                <img
                  src={R}
                  alt="Close Sidebar"
                  className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
                  onClick={toggleSidebar}
                />
              </div>

              {/* Overview Section */}
              <ul className="mt-6 px-6 space-y-4">
                <li className="text-gray-700 text-sm uppercase font-bold tracking-wide">
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
                <li className="text-gray-700 text-sm uppercase font-bold tracking-wide">
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
          {!isSidebarOpen && (
            <img
              src={L}
              alt="Open Sidebar"
              className="w-10 h-10 hover:rotate-12 transition-transform"
            />
          )}
        </div>
      </div>


      {/* Main Content */}
      <main className="flex flex-1">
        {/* Left Section */}
        <div className="w-8/12 p-8">
          {/* Search Bar */}
          <div className="mb-6 w-auto">
            <input
              type="text"
              placeholder="Search your course..."
              className="w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          {/* Showcard */}
          <div className="flex bg-yellow-100 p-6 rounded-lg shadow-lg mb-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">Online Quizzes</h2>
              <p className="text-3xl font-semibold mb-4">Master your skills with<br />Quizzes that pack a punch</p>
              <button className="flex items-center text-lg font-medium text-yellow-600 hover:text-yellow-800">
                Try now
                <IonIcon icon={homeOutline} className="ml-2" />
              </button>
            </div>
            <div className="w-1/3">
              <img src={R} alt="Banner" className="w-full h-auto rounded-lg" />
            </div>
          </div>
          {/* Favourite Quizzes Slider */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Favourite Quizzes</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
                  &lt;
                </button>
                <button className="p-2 bg-gray-300 rounded-full hover:bg-gray-400">
                  &gt;
                </button>
              </div>
            </div>
            <div className="flex gap-4 overflow-x-auto">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1/3 min-w-[200px] bg-blue-100 p-4 rounded-lg shadow-md"
                >
                  Quiz {i + 1}
                </div>
              ))}
            </div>
          </div>
          {/* Overall Progress */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-green-100 rounded-lg shadow-md">
              <h4 className="font-bold">Attempted Quizzes</h4>
              <p>20</p>
            </div>
            <div className="p-4 bg-green-100 rounded-lg shadow-md">
              <h4 className="font-bold">Completed Quizzes</h4>
              <p>20</p>
            </div>
            <div className="p-4 bg-green-100 rounded-lg shadow-md">
              <h4 className="font-bold">Number of Favourites</h4>
              <p>5</p>
            </div>
            <div className="p-4 bg-green-100 rounded-lg shadow-md">
              <h4 className="font-bold">Score Points</h4>
              <p>200</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-4/12 bg-gray-100 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4">
              <IonIcon icon={mailOutline} size="large" />
              <IonIcon icon={notificationsOutline} size="large" />
            </div>
            <div className="flex items-center gap-4">
              <span>Dulsi Rathnayake</span>
            </div>
          </div>
          {/* Profile Card */}
          <div className="p-4 bg-white rounded-lg shadow-md mb-6">
            <div className="flex justify-between mb-4">
              <span>...</span>
              <button className="text-blue-600">Edit</button>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div>
                <p className="text-lg font-bold">Hellow</p>
                <p>Dulsi Rathnayake</p>
                <p>email@example.com</p>
              </div>
            </div>
          </div>
          {/* Static Table */}
          <table className="w-full mb-6">
            <thead>
              <tr>
                <th>20</th>
                <th>40</th>
                <th>60</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1-10 Jan</td>
                <td>11-20 Jan</td>
                <td>21-30 Jan</td>
              </tr>
            </tbody>
          </table>
          {/* Tutors */}
          <div>
            <h3 className="text-lg font-bold mb-4">Your Tutors</h3>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md mb-4"
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-bold">Tutor {i + 1}</p>
                  <p>Subject {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileDashboard;
