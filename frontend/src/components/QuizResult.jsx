import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaMedal, FaTrophy, FaHome, FaRedo } from "react-icons/fa";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import nlogo from "../assets/nlogo.png";

const QuizResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  // Retrieve score from state (default to 0 if undefined)
  const score = location.state?.score || 0;

  // State to manage confetti visibility
  const [showConfetti, setShowConfetti] = useState(false);

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

  // Start confetti for 10 seconds when the component is mounted
  useEffect(() => {
    if (score >= 70) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 10000); // Confetti will show for 10 seconds

      return () => clearTimeout(timer);
    }
  }, [score]);

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-[#fcfcfc] relative pt-24">
      {/* Confetti Effect for High Scores */}
      {showConfetti && <Confetti width={width} height={height} />}

      {/* Content */}
      <div className="flex flex-col items-center justify-center w-full max-w-4xl p-8 bg-yellow-50 rounded-lg shadow-lg">
        {/* Result Title */}
        <h1 className="text-[60px] font-semibold mb-4">Quiz Completed!</h1>
        <p className="mt-2 text-[20px] font-medium text-gray-600 mb-6">Here is how you performed:</p>

        {/* Score Section */}
        <div className="bg-[#fff6d5] p-8 rounded-lg shadow-md mb-6 flex flex-col items-center">
          <h2 className="text-6xl font-bold text-yellow-600">{score}%</h2>
          <p className={`mt-2 text-lg font-semibold ${getFeedback().color}`}>
            {getFeedback().message}
          </p>
        </div>

        {/* Medal/Trophy Icon */}
        <div className="mt-8 mb-6">
          {score >= 70 ? (
            <FaTrophy className="text-yellow-500 text-8xl mx-auto" />
          ) : (
            <FaMedal className="text-gray-500 text-8xl mx-auto" />
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-8 mt-6">
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
