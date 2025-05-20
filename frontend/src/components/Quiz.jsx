import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaRegClock, FaUserCircle } from "react-icons/fa";
import Breadcrumb from "./BreadCrumb";

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const quiz = location.state?.quiz;

  // Initialize states after ensuring quiz data exists
  const [timeLeft, setTimeLeft] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  // Setup effect to initialize quiz data
  useEffect(() => {
    console.log("✅ Received Quiz Data in Quiz Page:", quiz);

    if (!quiz) {
      console.error("❌ No quiz data found! Redirecting to quizzes...");
      setTimeout(() => navigate("/quizzes"), 500);
      return;
    }

    // Check if the quiz has valid questions
    if (
      !quiz.questions ||
      !Array.isArray(quiz.questions) ||
      quiz.questions.length === 0
    ) {
      console.error("❌ No questions in quiz data! Redirecting to quizzes...");
      setTimeout(() => navigate("/quizzes"), 500);
      return;
    }

    // More flexible question validation - check if it has text/options or question/answers format
    const hasValidQuestions = quiz.questions.every((question) => {
      // Check if it follows frontend format with text and options
      const frontendFormatValid =
        question &&
        typeof question.text === "string" &&
        Array.isArray(question.options) &&
        question.options.length > 0;

      // Check if it follows backend format with question and answers
      const backendFormatValid =
        question &&
        typeof question.question === "string" &&
        Array.isArray(question.answers) &&
        question.answers.length > 0;

      return frontendFormatValid || backendFormatValid;
    });

    if (!hasValidQuestions) {
      console.error("❌ Invalid question format in quiz data!", quiz.questions);
      // Try to transform the data if possible instead of redirecting
      try {
        // Add data transformation logic here if needed in the future
        console.warn("Attempting to continue with possibly invalid quiz data");
      } catch (e) {
        console.error("Could not transform quiz data:", e);
        setTimeout(() => navigate("/quizzes"), 500);
        return;
      }
    }

    // Initialize states only once when quiz data is available
    if (!isInitialized) {
      // Calculate total seconds for the timer
      const totalSeconds = isNaN(parseInt(quiz.duration))
        ? 1200
        : parseInt(quiz.duration) * 60;

      setTimeLeft(totalSeconds);
      setSelectedAnswers(Array(quiz.questions.length).fill([]));
      setIsInitialized(true);
    }
  }, [quiz, navigate, isInitialized]);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleFinishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // If quiz data isn't loaded yet, show loading
  if (
    !quiz ||
    !quiz.questions ||
    !isInitialized ||
    !Array.isArray(quiz.questions)
  ) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-lg font-semibold">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          Loading quiz data...
        </div>
      </div>
    );
  }

  // Ensure current question is valid and normalize format
  let currentQuestionData = quiz.questions[currentQuestion];
  if (!currentQuestionData) {
    console.error("❌ Invalid question index! Redirecting to quizzes...");
    setTimeout(() => navigate("/quizzes"), 500);
    return null;
  }

  // Normalize question data format (handle both frontend and backend formats)
  const normalizedQuestion = {
    text:
      currentQuestionData.text ||
      currentQuestionData.question ||
      "Question not available",
    options:
      currentQuestionData.options ||
      (Array.isArray(currentQuestionData.answers)
        ? currentQuestionData.answers.map((a) => {
            // Handle different answer formats
            if (typeof a === "string") return a;
            if (a.text) return a.text;
            if (a.answer) {
              // If the answer is a nested object or has a mixed type
              return typeof a.answer === "string"
                ? a.answer
                : a.answer.text || JSON.stringify(a.answer);
            }
            return JSON.stringify(a);
          })
        : ["No options available"]),
    correctAnswers: currentQuestionData.correctAnswers || [],
    hasIcon: currentQuestionData.hasIcon || false,
  };

  // Use normalized data
  currentQuestionData = normalizedQuestion;

  // ✅ Timer Format Function
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "00 : 00";
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")} : ${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const isMultipleAnswer =
    Array.isArray(currentQuestionData.correctAnswers) &&
    currentQuestionData.correctAnswers.length > 1;

  const handleAnswerSelect = (index) => {
    const updatedAnswers = [...selectedAnswers];

    if (isMultipleAnswer) {
      updatedAnswers[currentQuestion] = updatedAnswers[
        currentQuestion
      ].includes(index)
        ? updatedAnswers[currentQuestion].filter((i) => i !== index)
        : [...updatedAnswers[currentQuestion], index];
    } else {
      updatedAnswers[currentQuestion] = [index];
    }

    setSelectedAnswers(updatedAnswers);
  };

  const handleFinishQuiz = () => {
    const totalSeconds = isNaN(parseInt(quiz.duration))
      ? 1200
      : parseInt(quiz.duration) * 60;

    navigate("/quizresult", {
      state: {
        quiz,
        selectedAnswers,
        timeSpent: totalSeconds - timeLeft,
      },
    });
  };

  const progressPercentage =
    (selectedAnswers.filter((ans) => ans.length > 0).length /
      quiz.questions.length) *
    100;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-[#fffbeb]">
      {/* Sidebar */}
      <div
        className={`bg-white p-4 transition-all duration-300 ${
          isSidebarOpen ? "w-full lg:w-96" : "w-16"
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
            <h2 className="mt-4 text-2xl lg:text-[34px] font-semibold">
              {quiz.title}
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <FaUserCircle className="text-gray-600 text-xl lg:text-2xl" />
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
            <div className="mt-4 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-7 mx-4 gap-2">
              {quiz.questions.map((_, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 text-sm rounded-lg font-bold transition ${
                    index === currentQuestion
                      ? "bg-[#ffe132] text-white"
                      : "bg-gray-200 hover:bg-yellow-300"
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
      <div className="flex-1 p-4 lg:p-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-sm gap-4">
          <h1 className="text-lg lg:text-xl font-semibold">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-[#ffe132] text-xl lg:text-2xl" />
              <p className="text-black font-bold text-lg lg:text-[24px]">
                {formatTime(timeLeft)}
              </p>
            </div>
            {currentQuestion === quiz.questions.length - 1 ? (
              <button
                onClick={handleFinishQuiz}
                className="px-3 py-2 lg:px-4 lg:py-2 bg-[#ffe132] text-black rounded-lg text-sm lg:text-[18px]"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                className="px-3 py-2 lg:px-4 lg:py-2 bg-[#ffe132] text-black rounded-lg text-sm lg:text-[18px]"
              >
                Next Question
              </button>
            )}
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="flex mt-4 justify-center">
          <Breadcrumb
            currentStep={currentQuestion + 1}
            totalSteps={quiz.questions.length}
          />
        </div>

        {/* Question Card */}
        <div className="mt-6 bg-white p-4 lg:p-6 rounded-lg flex flex-col relative">
          <p className="text-lg lg:text-[24px] font-semibold mt-6 lg:mt-10">
            {currentQuestionData.text}
          </p>

          <hr className="my-5 h-1 border-t border-black" />

          {/* Answer Section */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            {/* Answer Options */}
            <div
              className={`w-full ${
                currentQuestionData.hasIcon ? "md:w-3/4" : "w-full"
              }`}
            >
              {currentQuestionData.options.map((option, index) => (
                <label key={index} className="block mt-3 cursor-pointer">
                  <div className="flex items-center p-3 w-full rounded-md transition bg-[#fffcf2] hover:bg-gray-200">
                    {/* Custom Square Checkbox */}
                    <div
                      className={`w-5 h-5 border-2 flex items-center justify-center rounded-sm mr-3 ${
                        selectedAnswers[currentQuestion]?.includes(index)
                          ? "bg-[#ffe132] border-[#ffe132]"
                          : "bg-white border-gray-400"
                      }`}
                    ></div>
                    <span className="text-sm md:text-base">{option}</span>
                  </div>
                  <input
                    type={isMultipleAnswer ? "checkbox" : "radio"}
                    name={`question-${currentQuestion}`}
                    checked={
                      selectedAnswers[currentQuestion]?.includes(index) || false
                    }
                    onChange={() => handleAnswerSelect(index)}
                    className="hidden"
                  />
                </label>
              ))}
            </div>

            {/* Show quiz icon for specific questions */}
            {currentQuestionData.hasIcon && (
              <div className="flex justify-center items-center mt-4 md:mt-0 w-full md:w-1/4">
                <img
                  src={quiz.icon || ""}
                  alt="Question Icon"
                  className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 border border-gray-300 rounded-lg p-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/path/to/default/image.jpg";
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
