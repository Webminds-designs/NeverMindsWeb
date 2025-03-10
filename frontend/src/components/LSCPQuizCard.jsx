import React from "react";
import { useNavigate } from "react-router-dom";

const LSCPQuizCard = ({
  index,
  image,
  subject,
  title,
  score,
  tutorName,
  tutorSubject,
  tutorIcon,
  onTry,
  showScore,
}) => {
  const navigate = useNavigate();

  // Function to cycle background colors
  

  // Updated onTry function to handle navigation
  const handleTryClick = () => {
    const quiz = {
      title,
      description: "This is a placeholder description.", // Update as necessary
      icon: image || "https://via.placeholder.com/150",  // Placeholder icon
      duration: "20 Min",  // Adjust duration
      numQuestions: 10,    // Adjust number of questions
    };

    // Navigate to the quiz guide lines page
    navigate("/quizguidelines", { state: { quiz } });
  };

  return (
    <div
      className={`w-full bg-white border border-gray-400 rounded-3xl shadow-sm overflow-hidden flex flex-col sm:flex-row p-4 items-center sm:items-start gap-4 cursor-pointer`}
    >
      {/* Image Section */}
      <div
        className="w-full sm:w-1/3 h-32 sm:h-40 bg-yellow-100 flex items-center justify-center rounded-3xl overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        <img
          className="w-full h-full object-contain"
          src={image}
          alt={title || "Quiz image"}
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 w-full flex flex-col gap-2">
        {/* Subject */}
        <p className="inline-flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full bg-purple-100 text-purple-700">
          {subject}
        </p>

        {/* Quiz Title */}
        <h5 className="text-lg font-semibold text-gray-900 truncate">
          {title}
        </h5>

        {/* Score & Progress Bar */}
        {showScore && (
          <div className="flex items-center gap-2">
            <div className="relative w-full bg-gray-200 rounded-full h-1">
              <div
                className="absolute h-1 bg-gray-700 rounded-full transition-all"
                style={{ width: `${score}%` }}
              />
            </div>
            <span className="text-sm text-gray-500">{score}% score</span>
          </div>
        )}

        {/* Tutor Information */}
        <div className="flex items-center gap-3 mt-2">
          {/* Tutor Avatar */}
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            {tutorIcon ? (
              <img
                src={tutorIcon}
                alt={tutorName}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-sm font-bold text-gray-700">
                {tutorName?.charAt(0) || "?"}
              </span>
            )}
          </div>

          {/* Tutor Name & Subject */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {tutorName}
            </p>
            <p className="text-xs text-gray-500">{tutorSubject}</p>
          </div>

          {/* Try Button */}
          <button
            onClick={handleTryClick}
            className="ml-auto px-3 py-1 text-sm font-medium text-black bg-yellow-400 rounded-3xl hover:bg-yellow-500 transition"
          >
            Try
          </button>
        </div>
      </div>
    </div>
  );
};

export default LSCPQuizCard;
