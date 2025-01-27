import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import to get the current path
import ProfileDashboard from "../components/ProfileDashboard";
import LOGUHeader from "../components/LOGUHeader";
import Header from "../components/Header"; // Assuming you have a Header component

export default function Home() {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const location = useLocation(); // Get the current location

  // Determine which header to display based on the path
  let header;
  if (
    location.pathname === "/" ||
    location.pathname === "/dashboard" ||
    location.pathname === "/badges"
  ) {
    header = <LOGUHeader />;
  } else if (location.pathname === "/home" || location.pathname === "/checkout") {
    header = <Header setOverlayVisible={setOverlayVisible} />;
  }

  return (
    <>
      {header}
      <div className={`relative ${overlayVisible ? "overflow-hidden" : ""}`}>
        {/* Dark Overlay */}
        {overlayVisible && (
          <div className="fixed inset-0 bg-secondary bg-opacity-90 z-40"></div>
        )}

        <main>
          <section id="profiledashboard">
            <ProfileDashboard />
          </section>
        </main>
      </div>
    </>
  );
}
