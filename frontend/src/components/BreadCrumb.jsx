const Breadcrumb = ({...props}) => {
    const totalSteps = props.totalSteps;
    const currentStep = props.currentStep;
  
    return (
      <div className="flex items-center gap-2 bg-amber-50 p-4">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full flex items-center justify-center border-2 ${
              index + 1 === currentStep
              ? "bg-yellow-500 text-white" // Highlight current step
              : "bg-gray-200 hover:bg-yellow-300" // Default style
            }`}
          >
            {index + 1 === currentStep && (
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default Breadcrumb;
  