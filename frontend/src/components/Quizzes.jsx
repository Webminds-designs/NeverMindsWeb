import React, { useState, useMemo, useEffect ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import QuizCard from "./QuizCard";
import LSCPQuizCard from "./LSCPQuizCard";
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
import { IoSearchSharp } from "react-icons/io5";
import { FaFilter, FaSort } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { LanguageContext } from "../context/LanguageContext";
import content from "../components/content/QuizzersContent.json";


const Quizzes = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Public");
  const [publicQuizzes, setPublicQuizzes] = useState([]);
  const [privateQuizzes, setPrivateQuizzes] = useState([]);
   const { language } = useContext(LanguageContext);

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
      description:
        "Master the fundamentals of differentiation and integration.",
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
      image: science7img,
      subject: "Mathematics",
      title: "Calculus Simplified",
      description:
        "Master the fundamentals of differentiation and integration.",
      duration: "25 Min",
      numQuestions: "12",
      icon: science7img,
      tutorName: "Anoma Rathnayake",
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
    },
    {
      image: science2img,
      subject: "Biology",
      title: "Cracking the Code of Viruses",
      score: 72,
      tutorName: "Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
      tutorIcon: tutorIcon,
    },
    {
      image: science3img,
      subject: "Biology",
      title: "Boarding Basics",
      score: 90,
      tutorName: "Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
      tutorIcon: tutorIcon,
    },
    {
      image: gramerphone,
      subject: "Music",
      title: "Harmony Hunt",
      score: 65,
      tutorName: "LeeAnn Deemer",
      tutorSubject: "Music",
      tutorIcon: tutorIcon,
    },
    {
      image: anubis,
      subject: "History",
      title: "Through the Ages",
      score: 80,
      tutorName: "Merwin Fernando",
      tutorSubject: "History",
      tutorIcon: tutorIcon,
    },
    {
      image: science4img,
      subject: "Chemistry",
      title: "Atomic Adventures",
      score: 78,
      tutorName: "Senanui Perera",
      tutorSubject: "Chemistry",
      tutorIcon: tutorIcon,
    },
    {
      image: science5img,
      subject: "Chemistry",
      title: "Chemical Bonding Basics",
      score: 70,
      tutorName: "Senanui Perera",
      tutorSubject: "Chemistry",
      tutorIcon: tutorIcon,
    },
  ];

  const allQuizzes = [...quizCardData, ...recommendedQuizzes];

  useEffect(() => {
    const shuffled = [...allQuizzes].sort(() => Math.random() - 0.5);
    setPublicQuizzes(shuffled.slice(0, Math.ceil(shuffled.length / 2)));
    setPrivateQuizzes(shuffled.slice(Math.ceil(shuffled.length / 2)));
  }, []);

  const filteredQuizzes = useMemo(() => {
    return (activeTab === "Public" ? publicQuizzes : privateQuizzes).filter(
      (quiz) =>
        quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quiz.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quiz.tutorName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, activeTab, publicQuizzes, privateQuizzes]);

  const handleStartGuide = (quiz) => {
    navigate("/quizguidelines", { state: { quiz } });
  };

  return (
    <div className=" w-full mx-auto overflow-hidden container">
      {/* Tabs */}
      <div className="flex space-x-6 border-b pb-2 text-lg font-semibold">
        {content[language].tabs.map((tab) => (
          <span
            key={tab}
            className={`pb-1 cursor-pointer transition-all duration-300 ${
              activeTab === tab
                ? "border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab} 
          </span>
        ))}
      </div>

      {/* Recommended Quizzes Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mt-4">{content[language].recommendedTitle}</h2>
        <div className="flex gap-4 mt-4 overflow-x-auto w-[1000px] md:w-[2000px] scrollbar-hide">
          {recommendedQuizzes.map((quiz, index) => (
            <div
              key={index}
              className="min-w-[25%] flex-shrink-0" // 25% width for 4 cards
              style={{ width: "calc(25% - 1rem)" }} // Adjust for gap
            >
              <LSCPQuizCard
                key={index}
                index={index}
                image={quiz.image}
                subject={quiz.subject}
                title={quiz.title}
                score={quiz.score}
                tutorName={quiz.tutorName}
                tutorSubject={quiz.tutorSubject}
                tutorIcon={quiz.tutorIcon}
                onTry={() => handleStartGuide(quiz)}
                showScore={true}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Filters & Search */}
      <div className="mb-6 ">
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3 px-5">
            <span className="text-gray-600">{content[language].allMaterials}</span>
            <select className="border px-2 py-1 rounded-md text-gray-600">
              <option>200</option>
            </select>
            <div className="flex gap-3">
              <button className="bg-yellow-300 text-black font-medium px-4 py-1 rounded-md">
              {content[language].allQuizzes}
              </button>
              <button className="bg-gray-200 text-black font-medium px-4 py-1 rounded-md">
              {content[language].notStarted}
              </button>
              <button className="bg-gray-200 text-black font-medium px-4 py-1 rounded-md">
              {content[language].completed}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <IoSearchSharp className="absolute left-3 top-2 text-gray-400" />
              <input
                type="text"
                placeholder={content[language].searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>
            <button className="text-gray-600 flex items-center gap-1">
              <FaFilter />  {content[language].filter}
            </button>
            <button className="text-gray-600 flex items-center gap-1">
              <FaSort />{content[language].sortBy}
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
            <p className="text-center text-gray-600">{content[language].noQuizzesFound}</p>
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
                  showScore={false} // Hide progress bar & score
                />
              ))}
            </div>
          )}
        
      </div>
    </div>
  );
};

export default Quizzes;
