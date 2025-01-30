import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";  // Ensure Header is imported correctly
import LOGUHeader from "../components/LOGUHeader";  // Ensure LOGUHeader is imported correctly

export default function QuizzesMain() {
  const location = useLocation(); // Get the current location

  // Determine which header to display based on the path
  let header;

  if (
    location.pathname === "/home" ||
    location.pathname === "/checkout" ||
    location.pathname === "/quizzes" ||
    location.pathname === "/quizguidelines" ||
    location.pathname === "/quizresult"
  ) {
    header = <Header />; // Use the Header component for these paths
  } else if (
    location.pathname === "/dashboard" ||
    location.pathname === "/badges" ||
    location.pathname === "/progress" ||
    location.pathname === "/favourites" ||
    location.pathname === "/account"
  ) {
    header = <LOGUHeader />; // Use LOGUHeader component for these paths
  }

  return (
    <div>
      {header} {/* Render the correct header based on the current path */}
      <Outlet /> {/* Render the child routes */}
    </div>
  );
}
