import React, { useState } from "react";
import Sidebar from "./SideBar"; // Import the Sidebar component
import CommitGraph from "./CommitGraph"; // Import the CommitGraph component

const Progress = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 p-5">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-medium">Total Attempted Quizzes</h1>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              Week
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">
              Month
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              Year
            </button>
          </div>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Total Quizzes Attempted */}
          <div className="p-6 bg-white shadow rounded-lg">
            <p className="text-gray-600">Total Quizzes Attempted</p>
            <h2 className="text-4xl font-bold">125 quizzes</h2>
            <p className="text-green-500 font-medium">+12.67%</p>
            <p className="mt-4 text-gray-500">Available to attempt: 200 Quizzes</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700">
              Start a new Quiz
            </button>
          </div>

          {/* Average Score */}
          <div className="p-6 bg-white shadow rounded-lg">
            <p className="text-gray-600">Average Score</p>
            <h2 className="text-4xl font-bold">85%</h2>
            <div className="mt-2 bg-gray-300 rounded-full h-4">
              <div className="bg-yellow-400 h-4 rounded-full" style={{ width: "85%" }}></div>
            </div>
          </div>

          {/* Time Spent Studying */}
          <div className="p-6 bg-white shadow rounded-lg">
            <p className="text-gray-600">Time Spent Studying</p>
            <h2 className="text-4xl font-bold">36 h</h2>
            <div className="mt-4 flex gap-1">
              {Array.from({ length: 36 }).map((_, index) => (
                <div key={index} className="w-2 h-6 bg-yellow-400 rounded"></div>
              ))}
            </div>
          </div>

          {/* Total Topics Mastered */}
          <div className="p-6 bg-white shadow rounded-lg">
            <p className="text-gray-600">Total Topics Mastered</p>
            <h2 className="text-4xl font-bold">15</h2>
            <div className="mt-4 flex gap-1">
              {Array.from({ length: 15 }).map((_, index) => (
                <div key={index} className="w-2 h-6 bg-yellow-400 rounded"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Quizzes and Activity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Recommended Quizzes */}
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-bold mb-4">Recommended Quizzes</h3>
            <div className="mb-4">
              <p className="font-medium">Strengthen your skills in Algebra II</p>
              <button className="text-sm px-3 py-1 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500">
                Try
              </button>
            </div>
            <div>
              <p className="font-medium">Advanced Biology Concepts</p>
              <button className="text-sm px-3 py-1 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500">
                Try
              </button>
            </div>
          </div>

          {/* Activity by Time */}
          <div className="p-6 bg-black text-white shadow rounded-lg">
            <h3 className="text-xl font-bold mb-4">Activity by time</h3>
            {/* Commit Graph */}
            <CommitGraph />
          </div>

          {/* Recently Attempted */}
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-bold mb-4">Recently Attempted</h3>
            <ul>
              {["Time Travelers", "History Hunters", "Inside the Cell"].map((quiz, index) => (
                <li key={index} className="mb-2 flex justify-between items-center">
                  <p className="text-sm font-medium">{quiz}</p>
                  <span className="text-xs text-blue-500">History</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Progress;
