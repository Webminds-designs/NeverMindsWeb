import React from "react";

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
  return (
    <div className="w-full bg-white border border-gray-400 rounded-xl shadow-sm overflow-hidden flex flex-col sm:flex-row p-4 items-center sm:items-start gap-4">
      {/* Image Section */}
      <div className="w-full sm:w-1/3 h-32 sm:h-40 bg-yellow-100 flex items-center justify-center rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={image}
          alt={title}
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
            onClick={onTry}
            className="ml-auto px-3 py-1 text-sm font-medium text-black bg-yellow-400 rounded-lg hover:bg-yellow-500 transition"
          >
            Try
          </button>
        </div>
      </div>
    </div>
  );
};

export default LSCPQuizCard;