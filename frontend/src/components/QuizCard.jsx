import React from "react";

const QuizCard = ({
  index, // Add an index prop for card order
  image,
  subject,
  title,
  score,
  tutorName,
  tutorSubject,
  tutorIcon,
}) => {
  // New function to cycle background colors based on the card's index
  const getCardBackgroundColor = (index) => {
    const colors = ["bg-blue-100", "bg-green-100", "bg-yellow-100"];
    return colors[index % colors.length];
  };

  return (
    <div className="max-w-[22rem] bg-white border border-gray-200 rounded-3xl">
      {/* Card Image */}
      <div
        className={`flex items-center justify-center h-64 rounded-t-lg ${getCardBackgroundColor(
          index
        )}`}
      >
        <img
          className="h-full object-cover"
          src={image}
          alt={title || "Quiz image"}
        />
      </div>

      <div className="p-10">
        {/* Quiz Subject */}
        <p className="inline-block text-sm font-medium px-2 py-1 rounded-md bg-gray-100 text-gray-700">
          {subject}
        </p>

        {/* Quiz Title */}
        <h5 className="mb-2 text-[18px] font-bold tracking-tight text-black">
          {title}
        </h5>

        {/* Horizontal Progress Bar */}
        <div className="my-3 w-full bg-gray-300 rounded-full h-1">
          <div
            className="h-1 rounded-full bg-black transition-all"
            style={{
              width: `${score}%`,
              fontWeight: score >= 50 ? "bold" : "normal",
            }}
          />
        </div>

        {/* Score Percentage */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500 text-sm font-medium">Score:</span>
          <span className="text-lg font-semibold text-black">{score}%</span>
        </div>

        {/* Tutor Information */}
        <div className="flex items-center gap-4">
          {/* Tutor Profile Icon */}
          <div className="w-12 h-12 rounded-[50px] overflow-hidden bg-gray-300 flex items-center justify-center">
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
          {/* Tutor Name and Subject */}
          <div>
            <p className="text-sm font-semibold text-gray-800">{tutorName}</p>
            <p className="text-xs text-gray-500">{tutorSubject}</p>
          </div>
          {/* Try Button */}
          <button className="ml-auto px-3 py-1 text-sm font-medium text-black bg-[#fed448] rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300">
            Try
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
