import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProfileDashboard from "./components/ProfileDashboard";
import Badges from "./components/Badges";
import Progress from "./components/Progress";
import Favourites from "./components/Favourites";
import dashboard from "./components/ProfileDashboard"


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

      {/* if user not null then show dashboard*/}
      {user && <Route path="/dashboard" element={<ProfileDashboard />} />}
      <Route path="/badges" element={<Badges />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/dashboard" element={<ProfileDashboard />} />
      

    </Routes>
  );
}

export default App;
