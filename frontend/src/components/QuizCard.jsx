import React from "react";

const QuizCard = ({
  image,
  subject,
  title,
  score,
  tutorName,
  tutorSubject,
  tutorIcon,
}) => {
  // Determine background color for the card image
  const getImageBackgroundColor = (image) => {
    if (image?.includes("science1img")) {
      return "bg-blue-100"; // Light blue for science1img
    } else if (image?.includes("science2img")) {
      return "bg-green-100"; // Light green for science2img
    } else if (image?.includes("science3img")) {
      return "bg-yellow-100"; // Light yellow for science3img
    }
    return "bg-gray-200"; // Default background color
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
      {/* Card Image */}
      <div
        className={`flex items-center justify-center h-40 rounded-t-lg ${getImageBackgroundColor(
          image
        )}`}
      >
        <img className="h-28 object-cover" src={image} alt={title} />
      </div>

      <div className="p-5">
        {/* Quiz Subject */}
        <p
          className={`inline-block text-sm font-medium px-2 py-1 rounded-md ${
            subject === "Biology"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
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
