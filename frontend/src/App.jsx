import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer'; // Import Footer component

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-gray-50">
        {/* Header Component */}
        <Header />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Routes for different pages */}
        <Routes>
          {/* Add more routes for other pages */}
        </Routes>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
