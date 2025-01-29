import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { LuMessageCircleQuestion } from "react-icons/lu";
import nlogo from "../assets/nlogo.png";

const QuizGuideLines = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get quiz details from navigation state
  const quiz = location.state?.quiz || {
    title: "Default Quiz Title",
    description: "This is a placeholder description.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Animal_Cell.svg", // Default icon
    duration: "20 Min",
    numQuestions: "10",
  };

  const handleStartQuiz = () => {
    navigate("/quiz", { state: { quiz, startTimer: true } }); // Pass quiz data to Quiz page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      {/* Full-Width Page Header */}
      <div className="w-full flex items-center justify-between px-6 py-4 fixed top-0 left-0 right-0">
        {/* Logo - Top Left */}
        <img src={nlogo} alt="Logo" className="h-8 sm:h-8" />

        {/* Go Back - Top Right */}
        <button
          onClick={() => navigate(-1)}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Go Back
        </button>
      </div>

      {/* Quiz Header */}
      <div className="mt-4 flex flex-col items-center text-center max-w-3xl">
        <img
          src={quiz.icon}
          alt="Quiz Icon"
          className="h-40 w-40 object-cover"
        />
        <h1 className="text-[50px] font-semibold mt-4">{quiz.title}</h1>
        <p className="text-gray-700 text-[20px] font-semibold mt-2 px-4 sm:px-0">
          {quiz.description}
        </p>
      </div>

      {/* Quiz Details */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
        {/* Duration */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-lg">
            <FaRegClock size={30} />
          </div>
          <p className="font-semibold mt-2 text-[20px]">Duration</p>
          <p className="text-gray-800">{quiz.duration}</p>
        </div>

        {/* Number of Questions */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-lg">
            <LuMessageCircleQuestion size={30} />
          </div>
          <p className="font-semibold mt-2 text-[20px]">Number of questions</p>
          <p className="text-gray-800">{quiz.numQuestions}</p>
        </div>
      </div>

      {/* Quiz Instructions */}
      <div className="mt-6 text-left max-w-lg w-full px-4 sm:px-0">
        <h2 className="text-lg font-semibold text-center text-[35px] mb-6">
          Quiz Instructions
        </h2>
        <ul className="mt-2 text-gray-800 space-y-3 text-[17px]">
          <li>
            <b>Focus Up:</b> Read each question carefully to make the best
            choice.
          </li>
          <li>
            <b>Mind the Clock:</b> The timer is your guide—don’t let it run out.
          </li>
          <li>
            <b>One Shot:</b> You’ve got one attempt, so make it count!
          </li>
          <li>
            <b>No Do-Overs:</b> Once you answer, you can’t change your
            selection.
          </li>
        </ul>
      </div>

      {/* Start Button */}
      <button
        onClick={handleStartQuiz}
        className="mt-6 bg-yellow-400 text-black font-bold py-2 px-6 rounded-2xl hover:bg-yellow-300 transition duration-200"
      >
        Start
      </button>
    </div>
  );
};

export default QuizGuideLines;
