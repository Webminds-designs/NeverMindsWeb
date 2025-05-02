import React, { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QuizCard from "./QuizCard";
import LSCPQuizCard from "./LSCPQuizCard";
import { quizCardData, recommendedQuizzes } from "../data/quizCardData";
import { IoSearchSharp } from "react-icons/io5";
import { FaFilter, FaSort } from "react-icons/fa";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import tutorIcon from "../assets/person.png";

const Quizzes = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Public");
  const [publicQuizzes, setPublicQuizzes] = useState([]);
  const [privateQuizzes, setPrivateQuizzes] = useState([]);
  const [quizStatusFilter, setQuizStatusFilter] = useState("all");
  const recommendedScrollRef = useRef(null);

  
  const allQuizzes = [...quizCardData, ...recommendedQuizzes];

  useEffect(() => {
    const publicQuizzes = allQuizzes.filter((quiz) => !quiz.isPrivate);
    const privateQuizzes = allQuizzes.filter((quiz) => quiz.isPrivate);

    console.log("Public Quizzes:", publicQuizzes);
    console.log("Private Quizzes:", privateQuizzes);

    setPublicQuizzes(publicQuizzes);
    setPrivateQuizzes(privateQuizzes);
  }, []);

  const filteredQuizzes = useMemo(() => {
    let quizzes = activeTab === "Public" ? publicQuizzes : privateQuizzes;

    return quizzes.filter((quiz) => {
      const matchesSearchTerm =
        quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quiz.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quiz.tutorName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        quizStatusFilter === "all" || quiz.status === quizStatusFilter;

      return matchesSearchTerm && matchesStatus;
    });
  }, [searchTerm, activeTab, publicQuizzes, privateQuizzes, quizStatusFilter]);

  const handleStartGuide = (quiz) => {
    console.log(quiz)
    if (!quiz) {
      console.error("No quiz data! Cannot navigate.");
      return;
    }

    if (quiz.isPrivate) {
      console.log(
        "Navigating to OTP Verification for private quiz:",
        quiz.title
      );
      navigate("/quizotpverification", { state: { quiz } });
    } else {
      console.log(
        "Navigating directly to Quiz Guidelines for public quiz:",
        quiz.title
      );
      navigate("/quizguidelines", { state: { quiz } });
    }
  };

  const scrollRecommended = (direction) => {
    if (recommendedScrollRef.current) {
      const { scrollLeft, clientWidth } = recommendedScrollRef.current;
      const scrollAmount = clientWidth * 0.5;
      recommendedScrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container w-full mx-auto overflow-hidden px-2 sm:px-4 lg:px-6 mt-10">
      {/* Tabs */}
      <div className="flex space-x-4 sm:space-x-6 border-b pb-2 text-base sm:text-lg font-semibold mt-8 sm:mt-12">
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
      <div className="mb-6 relative mt-4 sm:mt-6">
        <div className=" flex justify-between items-center px-2">
          <h2 className="text-lg sm:text-xl font-semibold">
            Recommended Quizzes
          </h2>
          <div className="flex gap-2">
            <button
              aria-label="Scroll left"
              onClick={() => scrollRecommended("left")}
              className="p-1 sm:p-2 bg-yellow-400 rounded-full hover:bg-gray-300"
            >
              <IoChevronBackOutline className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollRecommended("right")}
              className="p-1 sm:p-2 bg-yellow-400 rounded-full hover:bg-gray-300"
            >
              <IoChevronForwardOutline className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
        <div
          ref={recommendedScrollRef}
          className="flex gap-4 mt-4 overflow-x-auto w-full scrollbar-hide pb-4"
        >
          {recommendedQuizzes.map((quiz, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[30%] flex-shrink-0"
            >
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
                isPrivate={quiz.isPrivate}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Filters & Search */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 mt-4 sm:mt-6">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm sm:text-base">
                All Materials
              </span>
              <select className="border px-2 py-1 rounded-md text-gray-600 text-sm sm:text-base">
                <option>200</option>
              </select>
            </div>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              <button
                className={`${
                  quizStatusFilter === "all" ? "bg-yellow-300" : "bg-gray-200"
                } text-black font-medium px-3 py-1 text-sm sm:text-base rounded-md whitespace-nowrap`}
                onClick={() => setQuizStatusFilter("all")}
              >
                All Quizzes
              </button>
              <button
                className={`${
                  quizStatusFilter === "notStarted"
                    ? "bg-yellow-300"
                    : "bg-gray-200"
                } text-black font-medium px-3 py-1 text-sm sm:text-base rounded-md whitespace-nowrap`}
                onClick={() => setQuizStatusFilter("notStarted")}
              >
                Not Started
              </button>
              <button
                className={`${
                  quizStatusFilter === "completed"
                    ? "bg-yellow-300"
                    : "bg-gray-200"
                } text-black font-medium px-3 py-1 text-sm sm:text-base rounded-md whitespace-nowrap`}
                onClick={() => setQuizStatusFilter("completed")}
              >
                Completed
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1">
              <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search quizzes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none text-sm sm:text-base"
              />
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <button className="text-gray-600 flex items-center gap-1 text-sm sm:text-base">
                <FaFilter /> Filter
              </button>
              <button className="text-gray-600 flex items-center gap-1 text-sm sm:text-base">
                <FaSort /> Sort by
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quizzes Grid Section */}
      <div className="container mx-auto flex justify-center items-center mt-4 sm:mt-6 mb-6">
        {filteredQuizzes.length === 0 ? (
          <p className="text-center text-gray-600">No quizzes found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full">
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
                isPrivate={quiz.isPrivate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizzes;
