import React, { useState, useMemo, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QuizCard from "./QuizCard";
import LSCPQuizCard from "./LSCPQuizCard";
import { IoSearchSharp, IoGrid } from "react-icons/io5";
import { FaFilter, FaSort } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import content from "../components/content/QuizzersContent.json";
import tutorIcon from "../assets/person.png";
import { useGetAllQuizzesQuery } from "../redux/slices/quizSlice";

const Quizzes = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Public");
  const [publicQuizzes, setPublicQuizzes] = useState([]);
  const [privateQuizzes, setPrivateQuizzes] = useState([]);
  const [quizStatusFilter, setQuizStatusFilter] = useState("all");
  const recommendedScrollRef = useRef(null);
  const { language } = useContext(LanguageContext);

  // Fetch quizzes from the backend
  const { data: quizzes, isLoading, isError, error } = useGetAllQuizzesQuery();

  useEffect(() => {
    if (quizzes) {
      const public_quizzes = quizzes.filter((quiz) => quiz.type === "public");
      const private_quizzes = quizzes.filter((quiz) => quiz.type === "private");

      console.log("Public Quizzes:", public_quizzes);
      console.log("Private Quizzes:", private_quizzes);

      setPublicQuizzes(public_quizzes);
      setPrivateQuizzes(private_quizzes);
    }
  }, [quizzes]);

  // Extract recommended quizzes (you could use various criteria)
  const recommendedQuizzes = useMemo(() => {
    if (!quizzes) return [];
    // Example: Get quizzes with most recent timestamps or featured flag
    return quizzes.slice(0, 5); // Just get first 5 for now as recommended
  }, [quizzes]);

  const filteredQuizzes = useMemo(() => {
    let filteredList = activeTab === "Public" ? publicQuizzes : privateQuizzes;

    return filteredList.filter((quiz) => {
      const matchesSearchTerm =
        quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quiz.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (quiz.tutor &&
          quiz.tutor.name &&
          quiz.tutor.name.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesStatus =
        quizStatusFilter === "all" || quiz.status === quizStatusFilter;

      return matchesSearchTerm && matchesStatus;
    });
  }, [searchTerm, activeTab, publicQuizzes, privateQuizzes, quizStatusFilter]);

  const handleStartGuide = (quiz) => {
    if (!quiz) {
      console.error("No quiz data! Cannot navigate.");
      return;
    }

    if (quiz.type === "private") {
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

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="text-center text-red-500 p-4">
        Error loading quizzes: {error?.data?.message || "Unknown error"}
      </div>
    );
  }

  return (
    <div className="container w-full mx-auto overflow-hidden px-2 sm:px-4 lg:px-6 mt-10">
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
        <h2 className="text-xl font-semibold mt-4">
          {content[language].recommendedTitle}
        </h2>
        <div
          className="flex gap-4 mt-4 overflow-x-auto w-[1000px] md:w-[2000px] scrollbar-hide"
          ref={recommendedScrollRef}
        >
          {recommendedQuizzes.map((quiz, index) => (
            <div
              key={quiz._id || index}
              className="min-w-[280px] sm:min-w-[30%] flex-shrink-0"
            >
              <LSCPQuizCard
                key={index}
                index={index}
                image={quiz.banner?.url || "/path/to/default/image.jpg"}
                subject={quiz.subject}
                title={quiz.title}
                tutorName={quiz.tutor?.name || "Unknown Teacher"}
                tutorSubject={quiz.subject}
                tutorIcon={tutorIcon}
                onTry={() => handleStartGuide(quiz)}
                showScore={false}
                isPrivate={quiz.type === "private"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Filters & Search */}
      <div className="mb-6 ">
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3 px-5">
            <span className="text-gray-600">
              {content[language].allMaterials}
            </span>
            <select className="border px-2 py-1 rounded-md text-gray-600">
              <option>{quizzes?.length || 0}</option>
            </select>
            <div className="flex gap-3">
              <button className="bg-yellow-300 text-black font-medium px-4 py-1 rounded-md">
                {content[language].allQuizzes}
              </button>
              <button className="bg-gray-200 text-black font-medium px-3 py-1 text-sm sm:text-base rounded-md whitespace-nowrap">
                {content[language].notStarted}
              </button>
              <button className="bg-gray-200 text-black font-medium px-4 py-1 rounded-md">
                {content[language].completed}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1">
              <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={content[language].searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none text-sm sm:text-base"
              />
            </div>
            <button className="text-gray-600 flex items-center gap-1">
              <FaFilter /> {content[language].filter}
            </button>
            <button className="text-gray-600 flex items-center gap-1">
              <FaSort />
              {content[language].sortBy}
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
          <p className="text-center text-gray-600">
            {content[language].noQuizzesFound}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {filteredQuizzes.map((quiz, index) => (
              <QuizCard
                key={quiz._id || index}
                index={index}
                image={quiz.banner?.url || "/path/to/default/image.jpg"}
                subject={quiz.subject}
                title={quiz.title}
                tutorName={quiz.tutor?.name || "Unknown Teacher"}
                tutorSubject={quiz.subject}
                tutorIcon={tutorIcon}
                isPrivate={quiz.type === "private"}
                quizData={quiz} // Pass the entire quiz object
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
