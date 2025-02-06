import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const QuizGuideLines = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get quiz details from navigation state
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
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Quiz Header */}
      <div className="max-w-3xl flex flex-col items-center">
        <img src={quiz.icon} alt="Quiz Icon" className="h-96 w-96 object-cover" />
        <h1 className="text-[34px] font-semibold mt-4">{quiz.title}</h1>
        <p className="text-gray-700 text-[20px] font-semibold mt-2">{quiz.description}</p>
      </div>

      {/* Quiz Instructions */}
      <div className="mt-6 max-w-lg w-full">
        <ul className="text-gray-800 text-[17px] space-y-3">
          <li><b>Focus Up:</b> Read each question carefully to make the best choice.</li>
          <li><b>Mind the Clock:</b> The timer is your guide—don’t let it run out.</li>
          <li><b>One Shot:</b> You’ve got one attempt, so make it count!</li>
          <li><b>No Do-Overs:</b> Once you answer, you can’t change your selection.</li>
        </ul>
      </div>

      {/* Quiz Details */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
        <p className="font-semibold text-blue-500 text-[20px]">{quiz.numQuestions} Questions</p>
        <p className="font-semibold text-blue-500 text-[20px]">{quiz.duration} minutes</p>
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
