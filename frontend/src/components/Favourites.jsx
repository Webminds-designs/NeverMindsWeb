import React, { useState } from "react";
import Sidebar from "./SideBar";
import QuizCard from "./QuizCard";
import tutorIcon from "../assets/person.png";
import science1img from "../assets/science.svg";
import science2img from "../assets/science-2.svg";
import science3img from "../assets/science-3.svg";
import science4img from "../assets/science-4.svg";
import science5img from "../assets/science-5.svg";
import science6img from "../assets/science-6.svg";
import science7img from "../assets/science-7.svg";
import science8img from "../assets/science-8.svg";
import science9img from "../assets/science-9.svg";
import science10img from "../assets/science-10.svg";
import anubis from "../assets/anubis.svg";
import gramerphone from "../assets/gramophone.svg";

const Favourites = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const quizCardData = [
    { image: science1img, subject: "Biology", title: "Building Blocks of Life", score: "80", tutorIcon, tutorName: "Dr. Charitha Munasinghe", tutorSubject: "Biology" },
    { image: science2img, subject: "Biology", title: "Cracking the Code of Viruses", score: "100", tutorIcon, tutorName: "Dr. Charitha Munasinghe", tutorSubject: "Biology" },
    { image: science3img, subject: "Biology", title: "Boarding Basics", score: "30", tutorIcon, tutorName: "Dr. Charitha Munasinghe", tutorSubject: "Biology" },
    { image: gramerphone, subject: "Music", title: "Harmony Hunt", score: "100", tutorIcon, tutorName: "LeeAnn Deemer", tutorSubject: "Music" },
    { image: anubis, subject: "History", title: "Through the Ages", score: "0", tutorIcon, tutorName: "Merwin Fernando", tutorSubject: "History" },
    { image: science4img, subject: "Chemistry", title: "Atomic Adventures", score: "30", tutorIcon, tutorName: "Senanui Perera", tutorSubject: "Chemistry" },
    { image: science5img, subject: "Chemistry", title: "Chemical Reactions", score: "45", tutorIcon, tutorName: "Senanui Perera", tutorSubject: "Chemistry" },
    { image: science6img, subject: "Physics", title: "Forces and Motion", score: "75", tutorIcon, tutorName: "Lakmal Jayasekara", tutorSubject: "Physics" },
    { image: science7img, subject: "Mathematics", title: "Calculus Simplified", score: "85", tutorIcon, tutorName: "Anoma Rathnayake", tutorSubject: "Mathematics" },
    { image: science8img, subject: "Biology", title: "The Cell Structure", score: "95", tutorIcon, tutorName: "Dr. Charitha Munasinghe", tutorSubject: "Biology" },
    { image: science9img, subject: "History", title: "Ancient Civilizations", score: "60", tutorIcon, tutorName: "Kamal Silva", tutorSubject: "History" },
    { image: science10img, subject: "Geography", title: "Mapping the World", score: "40", tutorIcon, tutorName: "Nimal Perera", tutorSubject: "Geography" },
  ];

  const filteredQuizzes = quizCardData.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.tutorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="flex-1 flex flex-col items-center p-4 md:p-8">
        <div className="w-full max-w-3xl mb-6 px-4 md:px-0">
          <input
            type="text"
            placeholder="Search by title, subject, or tutor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {filteredQuizzes.length === 0 ? (
          <p className="text-center text-gray-600">No quizzes match your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8">
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
      </main>
    </div>
  );
};

export default Favourites;
