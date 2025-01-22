import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProfileDashboard from "./components/ProfileDashboard";

function App() {
  //set local storage for user
  const user = {
    id: 1,
    name: "John Doe",
    email: "e@gmail.com",
  };

  //   //user null
  //   const user = null;

  localStorage.setItem("user", JSON.stringify(user));

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* if user not null then show dashboard
       */}
      {user && <Route path="/dashboard" element={<ProfileDashboard />} />}
    </Routes>
  );
}

export default App;
