import React, { useState } from "react";
import Sidebar from "./SideBar"; // Import the Sidebar component
import science1img from "../assets/science.svg";
import science2img from "../assets/science-2.svg";
import science3img from "../assets/science-3.svg";
import tutorIcon from "../assets/person.png";

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
      title: "Bonding Basics",
      score: "30",
      tutorIcon: tutorIcon,
      tutorName: "Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
    },
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
      title: "Bonding Basics",
      score: "30",
      tutorIcon: tutorIcon,
      tutorName: "Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
    },
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
      title: "Bonding Basics",
      score: "30",
      tutorIcon: tutorIcon,
      tutorName: "Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
    },
  ];

  return (
    <div className="flex min-h-screen mx-5">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 lg:p-8 py-4">
        

        {/* Quiz Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {quizCardData.map((quiz, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <img
                src={quiz.image}
                alt={quiz.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{quiz.title}</h3>
              <p className="text-gray-600 mb-1">
                Subject: <strong>{quiz.subject}</strong>
              </p>
              <p className="text-gray-600 mb-1">
                Score: <strong>{quiz.score}</strong>
              </p>
              <div className="flex items-center mt-4">
                <img
                  src={quiz.tutorIcon}
                  alt={quiz.tutorName}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <p className="text-sm font-medium">{quiz.tutorName}</p>
                  <p className="text-sm text-gray-500">{quiz.tutorSubject}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Favourites;
