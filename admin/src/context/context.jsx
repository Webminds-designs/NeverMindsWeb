import React, { createContext, useContext, useState } from 'react';

// Create the context
const QuizContext = createContext();

// Provider component
export const QuizProvider = ({ children }) => {
  const [quizDetails, setQuizDetails] = useState(null);

  return (
    <QuizContext.Provider value={{ quizDetails, setQuizDetails }}>
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook to access the context
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
