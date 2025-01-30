import React, { useState } from "react";
import Sidebar from "./SideBar";
import QuizCard from "./QuizCard";
import science1img from "../assets/science.svg";
import science2img from "../assets/science-2.svg";
import science3img from "../assets/science-3.svg";
import tutorIcon from "../assets/person.png";
import anubis from "../assets/anubis.svg";
import gramerphone from "../assets/gramophone.svg";
import science4img from "../assets/science-4.svg";
import science5img from "../assets/science-5.svg";
import science6img from "../assets/science-6.svg";
import science7img from "../assets/science-7.svg";
import science8img from "../assets/science-8.svg";
import science9img from "../assets/science-9.svg";
import science10img from "../assets/science-10.svg";


const Favourites = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const quizCardData = [
    {
      image: science1img,
      subject: "Biology",
      title: "Building Blocks of Life",
      score: "80",
      tutorIcon: tutorIcon,
      tutorName: "Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
    },
    {
      image: science2img,
      subject: "Biology",
      title: "Cracking the Code of Viruses",
      score: "100",
      tutorIcon: tutorIcon,
      tutorName: "Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
    },
    {
      image: science3img,
      subject: "Biology",
      title: "Boarding Basics",
      score: "30",
      tutorIcon: tutorIcon,
      tutorName: "Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
    },
    {
      image: gramerphone,
      subject: "Music",
      title: "Harmony Hunt",
      score: "100",
      tutorIcon: tutorIcon,
      tutorName: "LeeAnn Deemer",
      tutorSubject: "Music",
    },
    {
      image: anubis,
      subject: "History",
      title: "Through the Ages",
      score: "0",
      tutorIcon: tutorIcon,
      tutorName: "Merwin Fernando",
      tutorSubject: "History",
    },
    {
      image: science4img,
      subject: "Chemistry",
      title: "Atomic Adventures",
      score: "30",
      tutorIcon: tutorIcon,
      tutorName: "Senanui Perera",
      tutorSubject: "Chemistry",
    },
    {
      image: science5img,
      subject: "Chemistry",
      title: "Atomic Adventures",
      score: "30",
      tutorIcon: tutorIcon,
      tutorName: "Senanui Perera",
      tutorSubject: "Chemistry",
    },
    {
      image: science6img,
      subject: "Physics",
      title: "Forces and Motion",
      score: "75",
      tutorIcon: tutorIcon,
      tutorName: "Lakmal Jayasekara",
      tutorSubject: "Physics",
    },
    {
      image: science7img,
      subject: "Mathematics",
      title: "Calculus Simplified",
      score: "85",
      tutorIcon: tutorIcon,
      tutorName: "Anoma Rathnayake",
      tutorSubject: "Mathematics",
    },
    {
      image: science8img,
      subject: "Biology",
      title: "The Cell Structure",
      score: "95",
      tutorIcon: tutorIcon,
      tutorName: "Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
    },
    {
      image: science9img,
      subject: "History",
      title: "Ancient Civilizations",
      score: "60",
      tutorIcon: tutorIcon,
      tutorName: "Kamal Silva",
      tutorSubject: "History",
    },
    {
      image: science10img,
      subject: "Geography",
      title: "Mapping the World",
      score: "40",
      tutorIcon: tutorIcon,
      tutorName: "Nimal Perera",
      tutorSubject: "Geography",
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center p-8">
        {quizCardData.length === 0 ? (
          <p className="text-center text-gray-600">No quizzes to display</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-36 px-8">
            {quizCardData.map((quiz, index) => (
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
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Favourites;
