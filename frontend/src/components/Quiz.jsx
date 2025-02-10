import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaRegClock, FaUserCircle } from "react-icons/fa";
import Breadcrumb from "./BreadCrumb";

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const quiz = location.state?.quiz || {
    title: "Default Quiz Title",
    description: "This is a placeholder description.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Animal_Cell.svg",
    duration: "20 Min",
    numQuestions: 15, // Default number of questions
  };

  // Generate questions (all single-answer)
  const generateQuestions = () => {
    return Array.from({ length: quiz.numQuestions }, (_, index) => ({
      id: index + 1,
      text: `What is a key concept in ${quiz.title}? (Question ${index + 1})`,
      options: ["Option A", "Option B", "Option C", "Option D"],
    }));
  };

  const [questions, setQuestions] = useState(generateQuestions());
  const totalSeconds = parseInt(quiz.duration) * 60;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(quiz.numQuestions).fill(null) // Initialize as an array of null values
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishQuiz(); // Automatically finish the quiz when time runs out
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")} : ${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAnswerSelect = (index) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = index; // Store the selected answer index
    setSelectedAnswers(updatedAnswers);
  };

  const handleFinishQuiz = () => {
    navigate("/quizresult", {
      state: {
        quiz,
        selectedAnswers,
        timeSpent: totalSeconds - timeLeft,
      },
    });
  };

  const progressPercentage =
    (selectedAnswers.filter((ans) => ans !== null).length / quiz.numQuestions) *
    100;

  return (
    <div className="flex min-h-screen w-full bg-[#fffbeb]">
      {/* Sidebar */}
      <div
        className={`bg-white p-4 transition-all duration-300 ${
          isSidebarOpen ? "w-96" : "w-16"
        }`}
      >
        <div className="flex items-center gap-2">
          <button
            className="text-gray-600 text-xl"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FaBars />
          </button>
          {isSidebarOpen && <span className="text-gray-600">Hide</span>}
        </div>
        {isSidebarOpen && (
          <>
            <h2 className="mt-4 text-[34px] font-semibold">{quiz.title}</h2>
            <div className="flex items-center gap-2 mt-2">
              <FaUserCircle className="text-gray-600 text-2xl" />
              <span className="text-gray-700 font-medium">User Name</span>
            </div>
            <div className="mt-4 bg-gray-200 w-full rounded-full h-2">
              <div
                className="bg-[#ffe132] h-2 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {Math.round(progressPercentage)}% completed
            </p>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {[...Array(quiz.numQuestions)].map((_, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 text-sm rounded-lg font-bold transition ${
                    index === currentQuestion
                      ? "bg-[#ffe132] text-white" // Highlight current question
                      : "bg-gray-200 hover:bg-yellow-300" // Default style
                  }`}
                  onClick={() => setCurrentQuestion(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
          {/* Centered Question Text */}
          <div className="flex-1 flex justify-center">
            <h1 className="text-xl font-semibold">
              Question {currentQuestion + 1} of {quiz.numQuestions}
            </h1>
          </div>

          {/* Timer and Navigation Buttons */}
          <div className="flex items-center gap-4">
            <FaRegClock className="text-[#ffe132] text-2xl" />
            <p className="text-black font-bold text-[24px]">
              {formatTime(timeLeft)}
            </p>
            {currentQuestion === quiz.numQuestions - 1 ? (
              <button
                onClick={handleFinishQuiz}
                className="px-4 py-2 bg-[#ffe132] text-Black rounded-lg text-[18px]"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() =>
                  setCurrentQuestion((prev) =>
                    prev < quiz.numQuestions - 1 ? prev + 1 : prev
                  )
                }
                disabled={currentQuestion === quiz.numQuestions - 1}
                className="px-4 py-2 bg-[#ffe132] text-black rounded-lg disabled:opacity-50 text-[18px]"
              >
                Next Question
              </button>
            )}
          </div>
        </div>

        {/* Breadcrumb - Centered */}
        <div className="flex mt-4 justify-center">
          <Breadcrumb
            currentStep={currentQuestion + 1}
            totalSteps={quiz.numQuestions}
          />
        </div>

        {/* Question Card */}
        <div className="mt-6 bg-white p-6 rounded-lg flex flex-col relative">
          <p className="text-lg font-semibold text-[24px] mt-10">
            {questions[currentQuestion].text}
          </p>

          <hr className="my-5 h-1 border-t border-black" />

          {/* Answer Selection & Image Side by Side */}
          <div className="flex items-center justify-between">
            {/* Answer Options */}
            <div className="w-3/4">
              {questions[currentQuestion].options.map((option, index) => (
                <label key={index} className="block mt-2 cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    checked={selectedAnswers[currentQuestion] === index}
                    onChange={() => handleAnswerSelect(index)}
                    className="hidden"
                  />
                  <div className="flex items-center p-2 rounded-lg transition bg-[#fffcf2] hover:bg-gray-200">
                    <div
                      className={`w-5 h-5 border-2 border-[#ffe132] flex items-center justify-center ${
                        selectedAnswers[currentQuestion] === index
                          ? "bg-[#ffe132] border-[#ffe132]"
                          : "bg-white"
                      }`}
                    ></div>
                    <span className="ml-3">{option}</span>
                  </div>
                </label>
              ))}
            </div>

            {/* Quiz Image - Right Side */}
            <div className="w-1/4 flex justify-end">
              <img
                src={quiz.icon}
                alt="Quiz Icon"
                className="h-60 w-60 border border-gray-900 rounded-lg p-2"
              />
            </div>
          </div>

          {/* Navigation Buttons - Left-Aligned */}
          <div className="flex justify-start mt-6">
            <button
              onClick={() =>
                setCurrentQuestion((prev) => Math.max(prev - 1, 0))
              }
              disabled={currentQuestion === 0}
              className="px-4 py-2 bg-[#ffe132] text-black hover:bg-[#fbc72e] rounded-lg disabled:opacity-50 text-[18px]"
            >
              Previous Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
