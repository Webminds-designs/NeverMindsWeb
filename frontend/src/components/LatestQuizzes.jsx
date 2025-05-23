import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/servise-Bentogrid";
import { FaHeart } from "react-icons/fa";
import educationIcon from "../assets/education.svg";
import person from "../assets/girl.jpg";

const LatestQuizzes = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-screen-xl mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-[32px] sm:text-[40px] md:text-[96px] font-regular text-black mb-6">
          Latest Quizzes
        </h2>

        {/* BentoGrid Section */}
        <BentoGrid className="max-w-7xl px-2 md:px-0 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 gap-4">
          {[0, 2, 3, 4, 1].map((i) => {
            let gridClass = "";

            // Assign row and column spans based on design
            switch (i) {
              case 0:
                gridClass = "sm:col-span-2 md:col-span-3 md:row-span-1 lg:row-span-1 lg:col-span-3 rounded-3xl";
                break;
              case 1:
                gridClass = "sm:col-span-2 md:col-span-6 md:row-span-1 lg:row-span-1 lg:col-span-6 rounded-3xl";
                break;
              case 2:
                gridClass = "sm:col-span-2 md:col-span-3 md:row-span-1 lg:row-span-1 lg:col-span-3 rounded-3xl";
                break;
              case 3:
                gridClass = "sm:col-span-2 md:col-span-3 md:row-span-1 lg:row-span-1 lg:col-span-3 rounded-3xl";
                break;
              case 4:
                gridClass = "sm:col-span-2 md:col-span-3 md:row-span-1 lg:row-span-1 lg:col-span-3 rounded-3xl";
                break;
              default:
                gridClass = "";
            }

            return (
              <BentoGridItem
                key={i}
                title={<QuizCard quiz={quizItems[i]} />}
                header={null}
                className={gridClass}
              />
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
};

const QuizCard = ({ quiz }) => (
  <div className="relative flex flex-col p-4 sm:p-6 w-full">
    {/* Quiz Image Container */}
    <div className="relative w-full flex justify-center bg-white rounded-3xl p-4">
      {quiz.isNew && (
        <span className="absolute top-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-2xl">
          NEW
        </span>
      )}
      <img src={educationIcon} alt="Quiz" className="w-24 sm:w-32 h-auto" />
    </div>

    {/* Subject Badge */}
    <span className="mt-4 px-3 py-1 rounded-lg text-sm font-medium text-white w-max bg-gray-500/30 backdrop-blur-2xl">
      {quiz.subject}
    </span>

    {/* Quiz Title */}
    <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold mt-2 truncate">
      {quiz.title}
    </h3>

    {/* Author Details & Bottom Action Buttons */}
    <div className="flex justify-between items-center mt-4">
      {/* Author Info */}
      <div className="flex items-center">
        <img
          src={quiz.authorImage || person}
          alt={quiz.author}
          className="w-6 sm:w-8 h-6 sm:h-8 rounded-full mr-3"
        />
        <div className="text-left">
          <p className="text-xs sm:text-sm font-medium truncate">{quiz.author}</p>
          <p className="text-xs text-gray-600 truncate">{quiz.subject}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        {/* Heart Icon */}
        <button className="text-red-600 text-lg sm:text-xl bg-white rounded-full p-1">
          <FaHeart />
        </button>

        {/* Try Button */}
        <button className="bg-white text-black px-3 sm:px-4 py-1 rounded-3xl shadow">
          Try
        </button>
      </div>
    </div>
  </div>
);

//Quiz Items Data
const quizItems = [
  {
    title: "Earth’s Blueprint",
    subject: "Geography",
    author: "Senani Perera",
    authorImage: person,
    isNew: false,
  },
  {
    title: "Decoding the Past: Unraveling History’s Secrets",
    subject: "History",
    author: "Senani Perera",
    authorImage: person,
    isNew: true,
  },
  {
    title: "Breaking the Formula Barrier",
    subject: "Mathematics",
    author: "Senani Perera",
    authorImage: person,
    isNew: false,
  },
  {
    title: "The Geometry Challenge",
    subject: "Mathematics",
    author: "Senani Perera",
    authorImage: person,
    isNew: false,
  },
  {
    title: "Microbial Mysteries",
    subject: "Science",
    author: "Ann Deemer",
    authorImage: person,
    isNew: false,
  },
];

export default LatestQuizzes;