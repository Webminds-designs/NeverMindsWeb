import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import DashboardNavigater from "./components/DashboardNavigater";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Quizzes from "./components/Quizzes";
import Statistics from "./components/Statistics";

function App() {
  return (
    <Router>
       <div className="flex h-screen">
        <DashboardNavigater />

        {/* Main Content Area */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/quizzes" element={< Quizzes/>} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
          </div>
    </Router>
  );
}

export default App;
