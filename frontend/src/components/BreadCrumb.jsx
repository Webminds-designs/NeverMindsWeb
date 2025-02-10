const Breadcrumb = ({ totalSteps, currentStep, answeredSteps = [] }) => {
  return (
    <div className="w-full flex items-center justify-center gap-2 bg-amber-50 p-4">
      {[...Array(totalSteps)].map((_, index) => {
        const stepNumber = index + 1;
        const isAnswered = answeredSteps?.includes(stepNumber); // Check if answered
        const isCurrent = stepNumber === currentStep;

        return (
          <div
            key={index}
            className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
              isCurrent
                ? "bg-yellow-500 text-white border-yellow-500 shadow-md" // Current question
                : isAnswered
                ? "bg-yellow-300 border-yellow-500" // Answered questions
                : "bg-gray-200 border-gray-300 hover:bg-yellow-300" // Default/skipped steps
            }`}
          >
            {isCurrent && <div className="w-3 h-3 rounded-full bg-white"></div>}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
