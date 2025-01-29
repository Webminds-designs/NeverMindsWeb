import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaMedal, FaTrophy, FaHome, FaRedo } from "react-icons/fa";
import nlogo from "../assets/nlogo.png";

const QuizResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Retrieve score from state (default to 0 if undefined)
  const score = location.state?.score || 0;

  // Generate user feedback based on score
  const getFeedback = () => {
    if (score >= 90) {
      return { message: "🏆 Excellent! You're a quiz champion!", color: "text-green-600" };
    } else if (score >= 70) {
      return { message: "🥇 Great Job! Keep it up!", color: "text-blue-600" };
    } else if (score >= 50) {
      return { message: "🎖 Good Effort! Try again!", color: "text-yellow-600" };
    } else {
      return { message: "😔 You Can Do Better! Keep Practicing!", color: "text-red-600" };
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-[#fcfcfc]">
      {/* Header */}
      <div className="w-full flex justify-between items-center px-6 py-4 bg-white fixed top-0 left-0 right-0">
        <img src={nlogo} alt="Logo" className="h-8 sm:h-8" />
        <button
          onClick={() => navigate("/")}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition flex items-center gap-2"
        >
          <FaHome /> Home
        </button>
      </div>

      {/* Result Box */}
      <div className="mt-20 w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold">Quiz Completed!</h1>
        <p className="mt-2 text-gray-600">Here is how you performed:</p>

        {/* Score Section */}
        <div className="mt-6 bg-[#fff6d5] p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-yellow-600">{score}%</h2>
          <p className={`mt-2 text-lg font-semibold ${getFeedback().color}`}>
            {getFeedback().message}
          </p>
        </div>

        {/* Medal/Trophy Icon */}
        <div className="mt-6">
          {score >= 70 ? (
            <FaTrophy className="text-yellow-500 text-6xl mx-auto" />
          ) : (
            <FaMedal className="text-gray-500 text-6xl mx-auto" />
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => navigate("/quizzes")}
            className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-300 transition flex items-center gap-2"
          >
            <FaRedo /> Try Again
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-800 text-white font-bold px-6 py-2 rounded-lg hover:bg-gray-700 transition flex items-center gap-2"
          >
            <FaHome /> Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
