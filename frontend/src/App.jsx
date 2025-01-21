import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProfileDashboard from "./components/ProfileDashboard";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<ProfileDashboard />} />
        </Routes>
    );
}

export default App;
