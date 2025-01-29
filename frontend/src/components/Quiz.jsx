import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6"; // Timer Icon
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Navigation Icons
import nlogo from "../assets/nlogo.png";

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get quiz details from QuizGuideLines.jsx
  const quiz = location.state?.quiz || {
    title: "Default Quiz Title",
    description: "This is a placeholder description.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Animal_Cell.svg", // Default icon
    duration: "20 Min",
    numQuestions: 10,
  };

  // Convert quiz duration from minutes to seconds
  const totalSeconds = parseInt(quiz.duration) * 60;

  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Convert seconds to MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")} : ${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleFinish = () => {
    navigate("/quiz-results");
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-[#fcfcfc]">
      {/* Full-Width Page Header */}
      <div className="w-full flex justify-between items-center px-6 py-4 bg-white fixed top-0 left-0 right-0 ">
        {/* Logo - Top Left */}
        <img src={nlogo} alt="Logo" className="h-8 sm:h-8" />

        {/* Timer & Go Back - Top Right */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-700 text-lg font-semibold">
            <FaRegClock className="h-5 w-5 text-yellow-500" />
            <p>{formatTime(timeLeft)}</p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="mt-20 w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        {/* Quiz Header */}
        <div className="flex items-center gap-4">
          <img src={quiz.icon} alt="Quiz Icon" className="h-16 w-16" />
          <h1 className="text-2xl font-bold">{quiz.title}</h1>
        </div>

        {/* Question Box */}
        <div className="mt-6 bg-[#fdf8e8] p-6 rounded-lg">
          <h2 className="text-lg font-semibold">
            Question {currentQuestion + 1}
          </h2>
          <p className="mt-2 text-gray-700">
            {/* Example Question (Replace with real questions from data) */}
            What is a key concept in {quiz.title}?
          </p>

          {/* Answer Options */}
          <div className="mt-4 space-y-3">
            {["Option A", "Option B", "Option C", "Option D"].map(
              (option, index) => (
                <label
                  key={index}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${
                    selectedAnswer === index
                      ? "bg-yellow-100"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="radio"
                    name="quiz"
                    value={index}
                    checked={selectedAnswer === index}
                    onChange={() => setSelectedAnswer(index)}
                    className="hidden"
                  />
                  <div
                    className={`w-5 h-5 border-2 border-yellow-500 rounded-full flex items-center justify-center ${
                      selectedAnswer === index ? "bg-yellow-500" : "bg-white"
                    }`}
                  >
                    {selectedAnswer === index && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-gray-800">{option}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
            className="flex items-center gap-2 bg-yellow-300 px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
          >
            <FaArrowLeft /> Previous
          </button>
          <button
            onClick={() =>
              setCurrentQuestion((prev) =>
                prev < quiz.numQuestions - 1 ? prev + 1 : prev
              )
            }
            className="flex items-center gap-2 bg-yellow-300 px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
          >
            Next <FaArrowRight />
          </button>
        </div>

        {/* Questions Navigation */}
        <div className="mt-6 bg-[#fff6d5] p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-center">Questions</h3>
          <div className="flex gap-2 flex-wrap justify-center">
            {[...Array(10)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold transition ${
                  index === currentQuestion
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200 hover:bg-yellow-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Finish Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={() =>
              navigate("/quizresult", {
                state: { score: Math.floor(Math.random() * 100) },
              })
            }
            className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition flex items-center gap-2"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
