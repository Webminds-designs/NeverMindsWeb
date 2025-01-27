import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom"; // Import to get the current path
import LOGUHeader from "../components/LOGUHeader";
import Header from "../components/Header"; // Assuming you have a Header component

export default function Home() {
  const location = useLocation(); // Get the current location

  // Determine which header to display based on the path
  let header;

  if (location.pathname === "/dashboard" || location.pathname === "/badges" || location.pathname === "/progress" || location.pathname === "/favourites" ) {
    header = <LOGUHeader />;
  } else if (location.pathname === "/home" || location.pathname === "/checkout") {
    header = <Header />;
  }

  return (
    <div>
      {header}
      
      <Outlet />
    </div>
  );
}
