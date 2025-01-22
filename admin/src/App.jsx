import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import DashboardNavigater from "./components/DashboardNavigater";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Quizzes from "./pages/Quizzes";
import Statistics from "./pages/Statistics";
import Questions from "./components/Questions";

function App() {
  const location = useLocation();

  return (
    <div >
      {/* Conditionally render the navigator */}
      {location.pathname !== "/question" && <DashboardNavigater />}

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/question" element={<Questions />} />
      </Routes>
    </div>
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
