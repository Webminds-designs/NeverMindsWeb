import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Quizzes = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const quizCardData = [
    {
      image: science1img,
      subject: "Biology",
      title: "Building Blocks of Life",
      description: "Explore the essential components of living organisms.",
      duration: "20 Min",
      numQuestions: "10",
      icon: science1img,
      tutorName: "Dr. Charitha Munasinghe",
    },
    {
      image: science2img,
      subject: "Biology",
      title: "Cracking the Code of Viruses",
      description: "Understand viruses and how they impact health.",
      duration: "15 Min",
      numQuestions: "8",
      icon: science2img,
      tutorName: "Dr. Charitha Munasinghe",
    },
    {
      image: science3img,
      subject: "Biology",
      title: "Boarding Basics",
      description: "Learn the foundation of cell functions and structures.",
      duration: "25 Min",
      numQuestions: "12",
      icon: science3img,
      tutorName: "Dr. Charitha Munasinghe",
    },
    {
      image: gramerphone,
      subject: "Music",
      title: "Harmony Hunt",
      description: "Dive into the world of sound, rhythm, and harmony.",
      duration: "10 Min",
      numQuestions: "7",
      icon: gramerphone,
      tutorName: "LeeAnn Deemer",
    },
    {
      image: anubis,
      subject: "History",
      title: "Through the Ages",
      description: "Discover the greatest civilizations and their impact.",
      duration: "30 Min",
      numQuestions: "15",
      icon: anubis,
      tutorName: "Merwin Fernando",
    },
    {
      image: science4img,
      subject: "Chemistry",
      title: "Atomic Adventures",
      description: "Explore the structure of atoms and chemical reactions.",
      duration: "18 Min",
      numQuestions: "9",
      icon: science4img,
      tutorName: "Senanui Perera",
    },
    {
      image: science5img,
      subject: "Chemistry",
      title: "Chemical Bonding Basics",
      description: "Understand how elements combine to form compounds.",
      duration: "22 Min",
      numQuestions: "11",
      icon: science5img,
      tutorName: "Senanui Perera",
    },
    {
      image: science6img,
      subject: "Physics",
      title: "Forces and Motion",
      description: "Learn the principles of movement and energy transfer.",
      duration: "20 Min",
      numQuestions: "10",
      icon: science6img,
      tutorName: "Lakmal Jayasekara",
    },
    {
      image: science7img,
      subject: "Mathematics",
      title: "Calculus Simplified",
      description: "Master the fundamentals of differentiation and integration.",
      duration: "25 Min",
      numQuestions: "12",
      icon: science7img,
      tutorName: "Anoma Rathnayake",
    },
    {
      image: science8img,
      subject: "Biology",
      title: "The Cell Structure",
      description: "Understand the intricate details of cell biology.",
      duration: "20 Min",
      numQuestions: "10",
      icon: science8img,
      tutorName: "Dr. Charitha Munasinghe",
    },
    {
      image: science9img,
      subject: "History",
      title: "Ancient Civilizations",
      description: "Explore the rise and fall of historical empires.",
      duration: "30 Min",
      numQuestions: "15",
      icon: science9img,
      tutorName: "Kamal Silva",
    },
    {
      image: science10img,
      subject: "Geography",
      title: "Mapping the World",
      description: "Learn about the Earth's landscapes and geographic wonders.",
      duration: "18 Min",
      numQuestions: "9",
      icon: science10img,
      tutorName: "Nimal Perera",
    },
  ];

  const filteredQuizzes = quizCardData.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStartGuide = (quiz) => {
    navigate("/quizguidelines", { state: { quiz } });
  };

  return (
    <>
    <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search quizzes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>
    <div className="flex flex-col min-h-screen py-8 px-4">
      <main className="flex-1 px-4">
        
        {filteredQuizzes.length === 0 ? (
          <p className="text-center text-gray-600">No quizzes found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredQuizzes.map((quiz, index) => (
              <QuizCard
                key={index}
                index={index}
                image={quiz.image}
                subject={quiz.subject}
                title={quiz.title}
                tutorName={quiz.tutorName}
                tutorSubject={quiz.subject}
                tutorIcon={tutorIcon}
                onTry={() => handleStartGuide(quiz)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
    </>
  );
};

export default Quizzes;
