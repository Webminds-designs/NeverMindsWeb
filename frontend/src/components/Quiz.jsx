import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import nlogo from "../assets/nlogo.png";
import scienceIcon from "../assets/science-10.svg";

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // If navigated from QuizGuideLines.jsx, start the timer
  const startTimer = location.state?.startTimer || false;

  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes = 600 seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    let timer;
    if (startTimer) {
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [startTimer]);

  // Convert seconds to MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")} : ${secs.toString().padStart(2, "0")}`;
  };

  const handleFinish = () => {
    navigate("/quiz-results");
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      {/* Top Navigation */}
      <div className="w-full flex justify-between items-center p-4">
        <img src={nlogo} alt="Logo" className="h-8" />
        <button
          onClick={() => navigate(-1)}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Go back
        </button>
      </div>

      {/* Quiz Header */}
      <div className="mt-4 flex items-center gap-4">
        <img src={scienceIcon} alt="Quiz Icon" className="h-12" />
        <h1 className="text-2xl font-bold">The Cell Quest</h1>
      </div>

      {/* Timer */}
      <div className="mt-2 flex items-center gap-2 text-gray-700">
        <img src={scienceIcon} alt="Timer" className="h-6" />
        <p className="font-semibold">{formatTime(timeLeft)}</p>
      </div>

      {/* Finish Button (appears when time is up) */}
      {timeLeft === 0 && (
        <button
          onClick={handleFinish}
          className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg"
        >
          Time's Up! Finish Quiz
        </button>
      )}
    </div>
  );
};

export default Quiz;
