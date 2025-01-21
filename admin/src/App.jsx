import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import DashboardNavigater from "./components/DashboardNavigater";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Quizzes from "./pages/Quizzes";
import Statistics from "./pages/Statistics";

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
