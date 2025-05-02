import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { QuizProvider } from './context/context';

import "./App.css";
import DashboardNavigater from "./components/DashboardNavigater";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Quizzes from "./pages/Quizzes";
import Statistics from "./pages/Statistics";
import Questions from "./components/Questions";
import Marks from "./pages/Marks";

function App() {
  const location = useLocation();
  
  return (
    <QuizProvider>
    <div>
      {/* Conditionally render the navigator */}
      {location.pathname !== "/question"  && <DashboardNavigater />}

      {/* Main Content */}
     
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/question" element={<Questions />} />
          <Route path="/allmarks" element={<Marks />} />
          
        </Routes>
     
    </div>
    </QuizProvider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
