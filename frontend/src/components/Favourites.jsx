import React, { useState } from "react";
import Sidebar from "./SideBar";
import QuizCard from "./QuizCard";
import { quizCardData } from "../data/quizCardData";

const Favourites = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const filteredQuizzes = quizCardData.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.tutorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="flex-1 flex flex-col items-center p-4 md:p-8">
        {/* Search Bar */}
        <div className="w-full max-w-3xl mb-6 px-4 md:px-7 mt-10">
          <input
            type="text"
            placeholder="Search by title, subject, or tutor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Display Quizzes */}
        <div className="flex justify-center">
          {filteredQuizzes.length === 0 ? (
            <p className="text-center text-gray-600">
              No quizzes match your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 px-2 sm:px-4 lg:px-6">
              {filteredQuizzes.map((quiz, index) => (
                <QuizCard
                  key={index}
                  index={index}
                  image={quiz.image}
                  subject={quiz.subject}
                  title={quiz.title}
                  score={quiz.score}
                  tutorName={quiz.tutorName}
                  tutorSubject={quiz.tutorSubject}
                  tutorIcon={quiz.tutorIcon}
                  showScore={true}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Favourites;
