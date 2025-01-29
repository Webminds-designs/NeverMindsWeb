import React from "react";
import { useNavigate } from "react-router-dom";
import nlogo from "../assets/nlogo.png"; // Ensure correct path

const QuizGuideLines = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz", { state: { startTimer: true } }); // Navigate to Quiz page and start timer
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
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
      <div className="mt-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Animal_Cell.svg"
          alt="Quiz Icon"
          className="h-20"
        />
        <h1 className="text-2xl font-bold mt-4">Cell Structure Quest</h1>
        <p className="text-gray-600 mt-2">
          Unlock the mysteries of the cell—test your knowledge and discover what you're made of!
        </p>
      </div>

      {/* Quiz Details */}
      <div className="flex space-x-12 mt-6">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-lg font-bold">⏳</div>
          <p className="font-semibold mt-2">Duration</p>
          <p className="text-gray-600">20 Min</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-lg font-bold">❓</div>
          <p className="font-semibold mt-2">Number of questions</p>
          <p className="text-gray-600">10</p>
        </div>
      </div>

      {/* Quiz Instructions */}
      <div className="mt-6 text-left max-w-lg">
        <h2 className="text-lg font-semibold">Quiz Instructions</h2>
        <p className="mt-2 text-gray-700"><b>Focus Up:</b> Read each question carefully to make the best choice.</p>
        <p className="mt-2 text-gray-700"><b>Mind the Clock:</b> The timer is your guide—don’t let it run out.</p>
        <p className="mt-2 text-gray-700"><b>One Shot:</b> You’ve got one attempt, so make it count!</p>
        <p className="mt-2 text-gray-700"><b>No Do-Overs:</b> Once you answer, you can’t change your selection.</p>
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
