import React, { useState } from "react";
import Sidebar from "./SideBar"; // Ensure this file exists
import CommitGraph from "./CommitGraph"; // Ensure this file exists
import { Search } from "lucide-react"; // Ensure lucide-react is installed
import studentImage from "../assets/student-3.svg"; // Ensure this file exists

const Progress = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const recentlyAttemptedQuizzes = [
    {
      title: "Time Travelers",
      category: "History",
      color: "bg-blue-200 text-blue-700",
    },
    {
      title: "History Hunters",
      category: "History",
      color: "bg-blue-300 text-blue-800",
    },
    {
      title: "Inside the Cell",
      category: "Biology",
      color: "bg-green-200 text-green-700",
    },
    {
      title: "Rhythm & Beats",
      category: "Music",
      color: "bg-red-200 text-red-700",
    },
    {
      title: "Symphony of Sounds",
      category: "Music",
      color: "bg-pink-200 text-pink-700",
    },
    {
      title: "Atomic Adventures",
      category: "Chemistry",
      color: "bg-purple-300 text-purple-700",
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 p-5">
        <div className="flex items-center justify-end space-x-4">
          <div className="relative flex bg-gray-200 rounded-full p-1 shadow-lg w-fit">
            {/* Week Option */}
            <input
              type="radio"
              id="week"
              name="duration"
              className="sr-only peer"
              defaultChecked
            />
            <label
              htmlFor="week"
              className="flex items-center justify-center px-6 py-2 text-sm font-medium text-gray-600 bg-white rounded-full cursor-pointer transition-all peer-checked:text-white peer-checked:bg-black"
            >
              Week
            </label>

            {/* Month Option */}
            <input
              type="radio"
              id="month"
              name="duration"
              className="sr-only peer"
            />
            <label
              htmlFor="month"
              className="flex items-center justify-center px-6 py-2 text-sm font-medium text-gray-600 bg-white rounded-full cursor-pointer transition-all peer-checked:text-white peer-checked:bg-black"
            >
              Month
            </label>

            {/* Year Option */}
            <input
              type="radio"
              id="year"
              name="duration"
              className="sr-only peer"
            />
            <label
              htmlFor="year"
              className="flex items-center justify-center px-6 py-2 text-sm font-medium text-gray-600 bg-white rounded-full cursor-pointer transition-all peer-checked:text-white peer-checked:bg-black"
            >
              Year
            </label>
          </div>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Total Quizzes Attempted */}
          <div className="p-6 bg-white shadow rounded-lg">
            <div className="flex justify-between items-center">
              <p className="text-gray-700 font-medium">
                Total Quizzes Attempted
              </p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <h2 className="text-4xl font-bold">125 quizzes</h2>
              <p className="text-blue-700 font-medium text-[23px] mr-7">
                +12.67%
              </p>
            </div>
            <p className="mt-4 text-gray-700">
              Available to attempt:{" "}
              <span className="text-black font-medium">200 Quizzes</span>
            </p>
            <div className="mt-4 flex justify-center">
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-3xl hover:bg-gray-700">
                Start a new Quiz
              </button>
            </div>
          </div>

          {/* Average Score */}
          <div className="p-6 bg-white shadow rounded-lg">
            <p className="text-Black font-semibold text-[23px] flex justify-center">
              Average Score
            </p>
            <h2 className="text-4xl font-bold">85%</h2>
            <div className="mt-2 bg-gray-300 rounded-lg h-10">
              <div
                className="bg-yellow-400 h-10 rounded-lg"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          {/* Time Spent Studying */}
          <div className="p-6 bg-white shadow rounded-lg">
            <p className="text-Black font-semibold text-[23px] flex justify-center">
              Time Spent Studying
            </p>
            <h2 className="text-4xl font-bold">36 h</h2>
            <div className="mt-4 flex gap-1">
              {Array.from({ length: 36 }).map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-10 bg-yellow-400 rounded"
                ></div>
              ))}
            </div>
          </div>

          {/* Total Topics Mastered */}
          <div className="flex flex-col items-center p-6 bg-white shadow rounded-lg">         
            <p className="text-Black font-semibold text-[23px] flex justify-center">Total Topics Mastered</p>
            {/* Number and Bars Side by Side */}
            <div className="flex items-center gap-3">
              {/* Number Centered Vertically */}
              <h2 className="text-4xl font-bold">15</h2>

              {/* Bars Stacked Vertically */}
              <div className="flex flex-col gap-1 items-center">
                {Array.from({ length: 7 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-8 h-2 bg-yellow-400 rounded"
                    style={{ opacity: (index + 1) / 7 }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Quizzes and Activity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Recommended Quizzes */}
          <div className="p-6 bg-white shadow rounded-lg flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Recommended Quizzes</h3>

            {/* Quiz List */}
            <div className="w-full flex flex-col space-y-4">
              {/* Quiz 1 */}
              <div className="flex items-center space-x-3">
                <span className="w-4 h-4 bg-pink-400 rounded-full"></span>
                <p className="font-medium flex-1">
                  Strengthen your skills in Algebra II
                </p>
                <button className="text-sm px-3 py-1 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500">
                  Try
                </button>
              </div>

              {/* Quiz 2 */}
              <div className="flex items-center space-x-3">
                <span className="w-4 h-4 bg-green-400 rounded-full"></span>
                <p className="font-medium flex-1">Advanced Biology Concepts</p>
                <button className="text-sm px-3 py-1 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500">
                  Try
                </button>
              </div>
            </div>

            {/* Student Image */}
            <img
              src={studentImage}
              alt="Student Illustration"
              className="mt-6 w-40"
            />
          </div>

          {/* Activity by Time */}
          <div className="p-6 bg-[#1a191c] text-white shadow rounded-3xl">
            <h3 className="text-xl font-bold mb-4">Activity by time</h3>
            <CommitGraph />
          </div>

          {/* Recently Attempted */}
          <div className="p-6 bg-white shadow rounded-lg relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Recently Attempted</h3>
              <button className="p-2 bg-black rounded-full hover:bg-gray-200">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
            <ul className="space-y-3">
              {recentlyAttemptedQuizzes.map((quiz, index) => (
                <li
                  key={quiz.title}
                  className="flex justify-between items-center"
                >
                  <p className="text-sm font-medium">{quiz.title}</p>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${quiz.color} bg-opacity-50`}
                  >
                    {quiz.category}
                  </span>
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
