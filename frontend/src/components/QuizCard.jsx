import React from "react";
import { useNavigate } from "react-router-dom";
import { quizCardData, recommendedQuizzes } from "../data/quizCardData";

const QuizCard = ({
  index,
  image,
  subject,
  title,
  score,
  tutorName,
  tutorSubject,
  tutorIcon,
  showScore,
  isPrivate,
}) => {
  const navigate = useNavigate();

  const getCardBackgroundColor = (index) => {
    const colors = ["bg-blue-100", "bg-green-100", "bg-yellow-100"];
    return colors[index % colors.length] || "bg-gray-100";
  };

  const handleTryClick = () => {
    const fullQuizData = [...quizCardData, ...recommendedQuizzes].find(
      (q) => q.title === title
    );

    if (!fullQuizData) {
      console.error(`❌ No matching quiz found for title: ${title}`);
      return;
    }

    const quiz = {
      ...fullQuizData, // Ensure all quiz properties are included
      icon: image || "https://via.placeholder.com/150",
    };

    console.log("Navigating with Quiz Data:", quiz); // Debug log before navigation

    if (quiz.isPrivate) {
      navigate("/quizotpverification", { state: { quiz } });
    } else {
      navigate("/quizguidelines", { state: { quiz } });
    }
  };

  return (
    <div className="w-full sm:w-74 bg-white border border-gray-400 rounded-3xl transition-transform hover:scale-105 cursor-pointer my-4">
      {/* Card Image */}
      <div
        className={`h-48 rounded-3xl m-2 flex items-center justify-center ${getCardBackgroundColor(
          index
        )}`}
      >
        <img
          className="h-full object-contain p-4"
          src={image}
          alt={title || "Quiz image"}
        />
      </div>

      <div className="p-6">
        {/* Quiz Subject */}
        <p className="inline-block text-sm font-medium px-3 py-1 rounded-md bg-gray-100 text-gray-700">
          {subject}
        </p>

        {/* Quiz Title */}
        <h5 className="mt-2 text-lg font-bold text-gray-900 line-clamp-2">
          {title}
        </h5>

        {/* Score & Progress Bar */}
        {showScore && (
          <>
            <div className="my-3 w-full bg-gray-300 rounded-full h-1 relative">
              <div
                className="h-1 rounded-full bg-black transition-all"
                style={{ width: `${score}%` }}
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500 text-sm font-medium">Score:</span>
              <span className="text-lg font-semibold text-black">{score}%</span>
            </div>
          </>
        )}

        {/* Tutor Information */}
        <div className="flex items-center gap-4">
          {/* Tutor Profile Icon */}
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
            {tutorIcon ? (
              <img
                src={tutorIcon}
                alt={tutorName}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-lg font-bold text-gray-700">
                {tutorName?.charAt(0) || "?"}
              </span>
            )}
          </div>

          {/* Tutor Name & Subject (Truncated) */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate max-w-[120px]">
              {tutorName}
            </p>
            <p className="text-xs text-gray-500 truncate max-w-[120px]">
              {tutorSubject}
            </p>
          </div>

          {/* Try Button */}
          <button
            onClick={handleTryClick}
            className="ml-auto px-4 py-2 text-sm font-medium text-black bg-yellow-400 rounded-3xl hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
            aria-label={`Start quiz ${title}`}
          >
            Try
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
