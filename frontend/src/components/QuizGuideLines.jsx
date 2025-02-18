import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const QuizGuideLines = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const quiz = location.state?.quiz || {
    title: "Default Quiz Title",
    description: "This is a placeholder description.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Animal_Cell.svg",
    duration: "20 Min",
    numQuestions: "10",
  };

  const handleStartQuiz = () => {
    navigate("/quiz", { state: { quiz, startTimer: true } });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      {/* Quiz Header */}
      <div className="max-w-2xl w-full flex flex-col items-center">
        <img
          src={quiz.icon}
          alt="Quiz Icon"
          className="w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-lg mb-6"
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4">{quiz.title}</h1>
        <p className="text-gray-700 text-lg sm:text-xl font-semibold mt-2">{quiz.description}</p>
      </div>

      {/* Quiz Instructions */}
      <div className="mt-8 max-w-xl w-full">
        <ul className="text-gray-800 text-base sm:text-lg space-y-4">
          <li>
            <b>Focus Up:</b> Read each question carefully to make the best choice.
          </li>
          <li>
            <b>Mind the Clock:</b> The timer is your guide—don’t let it run out.
          </li>
          <li>
            <b>One Shot:</b> You’ve got one attempt, so make it count!
          </li>
          <li>
            <b>No Do-Overs:</b> Once you answer, you can’t change your selection.
          </li>
        </ul>
      </div>

      {/* Quiz Details */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
        <p className="font-semibold text-blue-500 text-lg sm:text-xl">{quiz.numQuestions} Questions</p>
        <p className="font-semibold text-blue-500 text-lg sm:text-xl">{quiz.duration} minutes</p>
      </div>

      {/* Start Button */}
      <button
        onClick={handleStartQuiz}
        className="mt-8 bg-yellow-400 text-black font-bold py-3 px-8 rounded-2xl hover:bg-yellow-300 transition duration-200"
      >
        Start
      </button>
    </div>
  );
};

export default QuizGuideLines;
