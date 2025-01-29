import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import file from "../assets/file-y.png";
import Search from "../assets/magnifier.png";
import arrow from '../assets/right-arrow.png';

const quizzes = [
  {
    id: 1,
    title: "Biology Quiz",
    subject: "biology",
    questions: 30,
    type: "Multiple Choice",
    date: "10 Jan 2025",
    timer: { hours: 2, minutes: 30 },
    marks: 20,
    passMarks: 10,
  },
  {
    id: 2,
    title: "Mathematics Quiz",
    subject: "Mathematics",
    questions: 30,
    type: "Multiple Choice",
    date: "10 Jan 2025",
    timer: { hours: 2, minutes: 30 },
    marks: 20,
    passMarks: 12,
  },
  {
    id: 3,
    title: "Biology Quiz",
    subject: "biology",
    questions: 30,
    type: "Multiple Choice",
    date: "10 Jan 2025",
    timer: { hours: 2, minutes: 30 },
    marks: 20,
    passMarks: 10,
  },
  {
    id: 4,
    title: "Mathematics Quiz",
    subject: "Mathematics",
    questions: 30,
    type: "Multiple Choice",
    date: "10 Jan 2025",
    timer: { hours: 2, minutes: 30 },
    marks: 20,
    passMarks: 12,
  }
];

const Statistics = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleViewMarks = (quiz) => {
    navigate("/allmarks", { state: { quizDetails: quiz } });
  };

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 ml-64 p-8">
      <div className="relative p-3 -mx-2">
        <input
          type="text"
          placeholder="Search by Subject"
          className="pl-4 pr-10 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute inset-y-0 left-52 flex items-center pr-3">
          <img src={Search} alt="Search" width="15" height="15" />
        </div>
      </div>
      {filteredQuizzes.map((quiz) => (
        <div key={quiz.id} className="bg-white p-6 rounded-xl shadow-md mx-auto mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="flex text-2xl font-semibold p-2">
                <img className="mr-3" src={file} alt="quiz" width="30" height="20" />
                {quiz.title}
              </h1>
              <p className="text-gray-600 ml-12">Subject: {quiz.subject}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Date : {quiz.date}</p>
              <p className="text-gray-600">Teacher : Bodini de Silva</p>
              <div className="flex space-x-2 mt-2">
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded">
                  🕒 {quiz.timer?.hours} h : {quiz.timer?.minutes} min
                </span>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded">
                  📊 {quiz.marks} Marks (Pass Marks: {quiz.passMarks})
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            <div className="bg-white p-4 border border-gray-100 m-4 rounded-lg shadow-md flex items-center">
              <div>
                <p className="text-gray-600">
                  <span className="bg-green-500 w-3 h-3 rounded-full inline-block"></span> Total Students
                </p>
                <p className="text-2xl font-semibold">65</p>
              </div>
            </div>
            <div className="bg-white p-4 border border-gray-100 m-4 rounded-lg shadow-md flex items-center">
              <div>
                <p className="text-gray-600">
                  <span className="bg-yellow-500 w-3 h-3 rounded-full inline-block"></span> Average Score
                </p>
                <p className="text-2xl font-semibold">67</p>
              </div>
            </div>
            <div className="bg-white p-4 border border-gray-100 m-4 rounded-lg shadow-md flex items-center">
              <div>
                <p className="text-gray-600">
                  <span className="bg-orange-500 w-3 h-3 rounded-full inline-block"></span> Total Passed Students
                </p>
                <p className="text-2xl font-semibold">54</p>
              </div>
            </div>
            <div className="mb-4 flex justify-end items-end">
              <button onClick={() => handleViewMarks(quiz)} className="bg-yellow-400 text-xl text-black p-2 flex rounded-lg">
                View All Marks     <span className="p-2"><img src={arrow} alt="arrow" width="15" height="15" /></span> 
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
