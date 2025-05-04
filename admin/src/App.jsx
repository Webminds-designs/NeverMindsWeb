import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardNavigater from "./components/DashboardNavigater";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Quizzes from "./pages/Quizzes";
import Statistics from "./pages/Statistics";
import Questions from "./components/Questions";
import Marks from "./pages/Marks";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="question" element={<Questions />} />
          <Route path="allmarks" element={<Marks />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
