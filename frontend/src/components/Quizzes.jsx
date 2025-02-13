import React, { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QuizCard from "./QuizCard";
import LSCPQuizCard from "./LSCPQuizCard";
import science1img from "../assets/science.svg";
import science2img from "../assets/science-2.svg";
import science3img from "../assets/science-3.svg";
import tutorIcon from "../assets/person.png";
import gramerphone from "../assets/gramophone.svg";
import science4img from "../assets/science-4.svg";
import science5img from "../assets/science-5.svg";
import science6img from "../assets/science-6.svg";
import science7img from "../assets/science-7.svg";
import science8img from "../assets/science-8.svg";
import science9img from "../assets/science-9.svg";
import science10img from "../assets/science-10.svg";
import { IoSearchSharp } from "react-icons/io5";
import { FaFilter, FaSort } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const Quizzes = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Public");
  const [publicQuizzes, setPublicQuizzes] = useState([]);
  const [privateQuizzes, setPrivateQuizzes] = useState([]);
  const [quizStatusFilter, setQuizStatusFilter] = useState("all");
  const recommendedScrollRef = useRef(null);

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
      status: "notStarted",
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
      status: "notStarted",
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
      status: "notStarted",
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
      status: "notStarted",
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
      status: "completed",
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
      status: "completed",
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
      status: "completed",
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
      status: "completed",
    },
    {
      image: science4img,
      subject: "Biology",
      title: "The Cell Structure",
      description: "Understand the intricate details of cell biology.",
      duration: "20 Min",
      numQuestions: "10",
      icon: science4img,
      tutorName: "Dr. Charitha Munasinghe",
      status: "completed",
    },
    {
      image: science5img,
      subject: "Biology",
      title: "The Cell Structure",
      description: "Understand the intricate details of cell biology.",
      duration: "20 Min",
      numQuestions: "10",
      icon: science5img,
      tutorName: "Dr. Charitha Munasinghe",
      status: "completed",
    },
  ];

  const recommendedQuizzes = [
    {
      image: science1img,
      subject: "Biology",
      title: "Building Blocks of Life",
      score: 85,
      tutorName: "Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
      tutorIcon: tutorIcon,
      status: "completed", 
    },
    {
      image: science2img,
      subject: "Biology",
      title: "Cracking the Code of Viruses",
      score: 72,
      tutorName: "Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
      tutorIcon: tutorIcon,
      status: "notStarted", 
    },
    {
      image: science3img,
      subject: "Biology",
      title: "Boarding Basics",
      score: 95,
      tutorName: "Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
      tutorIcon: tutorIcon,
      status: "completed", 
    },
    {
      image: science4img,
      subject: "Biology",
      title: "The Cell Structure",
      score: 80,
      tutorName: "Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
      tutorIcon: tutorIcon,
      status: "completed", 
    },
    {
      image: science5img,
      subject: "Biology",
      title: "The Cell Structure",
      score: 85,
      tutorName: "Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
      tutorIcon: tutorIcon,
      status: "completed", 
    },
    {
      image: science6img,
      subject: "Biology",
      title: "The Cell Structure",
      score: 90,
      tutorName: "Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
      tutorIcon: tutorIcon,
      status: "completed", 
    },

  ];

  const allQuizzes = [...quizCardData, ...recommendedQuizzes];

  useEffect(() => {
    const shuffled = [...allQuizzes].sort(() => Math.random() - 0.5);
    setPublicQuizzes(shuffled.slice(0, Math.ceil(shuffled.length / 2)));
    setPrivateQuizzes(shuffled.slice(Math.ceil(shuffled.length / 2)));
  }, []);

  const filteredQuizzes = useMemo(() => {
    let quizzes = activeTab === "Public" ? publicQuizzes : privateQuizzes;

    return quizzes.filter((quiz) => {
      const matchesSearchTerm =
        quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quiz.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quiz.tutorName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        quizStatusFilter === "all" ||
        quiz.status === quizStatusFilter;

      return matchesSearchTerm && matchesStatus;
    });
  }, [searchTerm, activeTab, publicQuizzes, privateQuizzes, quizStatusFilter]);

  const handleStartGuide = (quiz) => {
    navigate("/quizguidelines", { state: { quiz } });
  };

  const scrollRecommended = (direction) => {
    if (recommendedScrollRef.current) {
      const { scrollLeft, clientWidth } = recommendedScrollRef.current;
      const scrollAmount = clientWidth * 0.5;
      recommendedScrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full mx-auto overflow-hidden container">
      {/* Tabs */}
      <div className="flex space-x-6 border-b pb-2 text-lg font-semibold mt-20">
        {["Public", "Private"].map((tab) => (
          <span
            key={tab}
            className={`pb-1 cursor-pointer transition-all duration-300 ${
              activeTab === tab
                ? "border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab} Quizzes
          </span>
        ))}
      </div>

      {/* Recommended Quizzes Section */}
      <div className="mb-6 relative">
        <h2 className="text-xl font-semibold mt-4">Recommended Quizzes</h2>
        <div className="flex justify-end gap-2 mt-2">
          <button
            aria-label="Scroll left"
            onClick={() => scrollRecommended("left")}
            className="p-2 bg-yellow-400 rounded-full hover:bg-gray-300"
          >
            <IoChevronBackOutline size={20} />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollRecommended("right")}
            className="p-2 bg-yellow-400 rounded-full hover:bg-gray-300"
          >
            <IoChevronForwardOutline size={20} />
          </button>
        </div>
        <div ref={recommendedScrollRef} className="flex gap-4 mt-4 overflow-x-auto w-full scrollbar-hide">
          {recommendedQuizzes.map((quiz, index) => (
            <div key={index} className="min-w-[25%] flex-shrink-0">
              <LSCPQuizCard
                key={index}
                index={index}
                image={quiz.image}
                subject={quiz.subject}
                title={quiz.title}
                tutorName={quiz.tutorName}
                tutorSubject={quiz.subject}
                tutorIcon={tutorIcon}
                onTry={() => handleStartGuide(quiz)}
                showScore={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Filters & Search */}
      <div className="mb-6">
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3 px-5">
            <span className="text-gray-600">All Materials</span>
            <select className="border px-2 py-1 rounded-md text-gray-600">
              <option>200</option>
            </select>
            <div className="flex gap-3">
              <button
                className={`${
                  quizStatusFilter === "all"
                    ? "bg-yellow-300"
                    : "bg-gray-200"
                } text-black font-medium px-4 py-1 rounded-md`}
                onClick={() => setQuizStatusFilter("all")}
              >
                All Quizzes
              </button>
              <button
                className={`${
                  quizStatusFilter === "notStarted"
                    ? "bg-yellow-300"
                    : "bg-gray-200"
                } text-black font-medium px-4 py-1 rounded-md`}
                onClick={() => setQuizStatusFilter("notStarted")}
              >
                Not Started
              </button>
              <button
                className={`${
                  quizStatusFilter === "completed"
                    ? "bg-yellow-300"
                    : "bg-gray-200"
                } text-black font-medium px-4 py-1 rounded-md`}
                onClick={() => setQuizStatusFilter("completed")}
              >
                Completed
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <IoSearchSharp className="absolute left-3 top-2 text-gray-400" />
              <input
                type="text"
                placeholder="Search quizzes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>
            <button className="text-gray-600 flex items-center gap-1">
              <FaFilter /> Filter
            </button>
            <button className="text-gray-600 flex items-center gap-1">
              <FaSort /> Sort by
            </button>
            <button className="text-gray-600 bg-yellow-500 p-1 rounded">
              <IoGrid />
            </button>
          </div>
        </div>
      </div>

      {/* Quizzes Grid Section */}
      <div className="flex justify-center items-center mt-6">
        {filteredQuizzes.length === 0 ? (
          <p className="text-center text-gray-600">No quizzes found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
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
                showScore={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizzes;