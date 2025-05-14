import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Badges from "./components/Badges";
import Progress from "./components/Progress";
import Favourites from "./components/Favourites";
import Dashboard from './Pages/Dashboard';
import ProfileDashboard from "./components/ProfileDashboard";
import QuizzesMain from "./Pages/QuizzesMain";
import Quizzes from "./components/Quizzes";
import QuizGuideLines from "./components/QuizGuideLines";
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";
import Account from "./components/Account";
import Services from "./components/Services";
import { LanguageProvider } from "./context/LanguageContext";
import QuizOTPVerification from "./components/QuizOTPVerification";
import Login from "./components/Login";
import Register from "./components/Register";
import SubjectSelection from "./components/SubjectSelection";

function App() {
  return (
    <LanguageProvider>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subject-selection" element={<SubjectSelection />} />


        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/dashboard" element={<ProfileDashboard />} />
          <Route path="/account" element={<Account />} />
        </Route>

        <Route path="/" element={<QuizzesMain />}>
          <Route path="home" element={<Home />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="quizguidelines" element={<QuizGuideLines />} />
          <Route path="quizresult" element={<QuizResult />} />
        </Route>
        
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/services" element={<Services />} />
        <Route path="/quizotpverification" element={<QuizOTPVerification />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
