import React, { useState } from "react";
import Sidebar from "./SideBar"; 
import CommitGraph from "./CommitGraph";
import { Search } from "lucide-react";
import studentImage from "../assets/student-3.svg";

const Progress = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState("week");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const recentlyAttemptedQuizzes = [
    { title: "Time Travelers", category: "History", color: "bg-blue-200 text-blue-700" },
    { title: "History Hunters", category: "History", color: "bg-blue-300 text-blue-800" },
    { title: "Inside the Cell", category: "Biology", color: "bg-green-200 text-green-700" },
    { title: "Rhythm & Beats", category: "Music", color: "bg-red-200 text-red-700" },
    { title: "Symphony of Sounds", category: "Music", color: "bg-pink-200 text-pink-700" },
    { title: "Atomic Adventures", category: "Chemistry", color: "bg-purple-300 text-purple-700" },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-8 w-full mt-6">
        {/* Duration Selection */}
        <div className="flex justify-center md:justify-end mb-6">
          <div className="flex bg-gray-200 rounded-full p-1 w-fit">
            {["week", "month", "year"].map((duration) => (
              <label
                key={duration}
                className={`px-6 py-2 text-sm font-medium rounded-full cursor-pointer transition-all ${
                  selectedDuration === duration
                    ? "text-black bg-[#facc15]" 
                    : "text-gray-600 bg-white" 
                }`}
              >
                <input
                  type="radio"
                  name="duration"
                  value={duration}
                  className="sr-only"
                  checked={selectedDuration === duration}
                  onChange={() => setSelectedDuration(duration)}
                />
                {duration.charAt(0).toUpperCase() + duration.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { title: "Total Quizzes Attempted", value: "125 quizzes", stat: "+12.67%" },
            { title: "Average Score", value: "85%", barWidth: "85%" },
            { title: "Time Spent Studying", value: "36 h", bars: 36 },
            { title: "Total Topics Mastered", value: "15", stackedBars: 7 },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg">
              <p className="text-black font-semibold text-center border-b-2 border-gray-950 pb-2 border-dashed">
                {item.title}
              </p>
              <h2 className="text-4xl font-bold text-center my-2">{item.value}</h2>

              {item.stat && <p className="text-blue-700 font-medium text-center">{item.stat}</p>}

              {item.barWidth && (
                <div className="mt-2 bg-gray-300 rounded-lg h-10">
                  <div className="bg-yellow-400 h-10 rounded-lg" style={{ width: item.barWidth }}></div>
                </div>
              )}

              {item.bars && (
                <div className="mt-4 flex flex-wrap gap-1 justify-center">
                  {Array.from({ length: item.bars }).map((_, i) => (
                    <div key={i} className="w-2 h-10 bg-yellow-400 rounded"></div>
                  ))}
                </div>
              )}

              {item.stackedBars && (
                <div className="flex flex-col items-center mt-4">
                  {Array.from({ length: item.stackedBars }).map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-2 bg-yellow-400 rounded"
                      style={{ opacity: (i + 1) / item.stackedBars }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Recommended Quizzes & Activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recommended Quizzes */}
          <div className="p-6 bg-white rounded-3xl flex flex-col items-center border border-gray-950 shadow">
            <h3 className="text-xl font-bold mb-4">Recommended Quizzes</h3>
            <div className="w-full flex flex-col space-y-4 border-t border-gray-950 pt-4">
              {["Strengthen your skills in Algebra II", "Advanced Biology Concepts"].map((quiz, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <span className={`w-4 h-4 rounded-full ${idx === 0 ? "bg-pink-400" : "bg-green-400"}`}></span>
                  <p className="font-medium flex-1">{quiz}</p>
                  <button className="text-sm px-3 py-1 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500">
                    Try
                  </button>
                </div>
              ))}
            </div>

            {/* Student Image */}
            <img src={studentImage} alt="Student Illustration" className="mt-6 w-40" />
          </div>

          {/* Activity by Time 
          <div className="p-6 bg-[#1a191c] text-white rounded-3xl shadow">
            <h3 className="text-xl font-bold mb-4">Activity by Time</h3>
            <CommitGraph />
          </div>*/}

          {/* Recently Attempted */}
          <div className="p-6 bg-white rounded-3xl border border-gray-950 shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Recently Attempted</h3>
              <button className="p-2 bg-black rounded-full hover:bg-gray-200">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
            <ul className="space-y-3">
              {recentlyAttemptedQuizzes.map((quiz, index) => (
                <li key={quiz.title} className="flex justify-between items-center">
                  <p className="text-sm font-medium">{quiz.title}</p>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${quiz.color} bg-opacity-50`}>
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
