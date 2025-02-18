import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { LanguageProvider } from "./context/LanguageContext";


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
    <LanguageProvider>
      <Routes>
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
        
        
        
        
        
        

        {/* if user not null then show dashboard*/}
        {/* {user && <Route path="/dashboard" element={<Dashboard />} />} */}
      </Routes>
      </LanguageProvider>
  );
}

export default App;
