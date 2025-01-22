import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import add from "../assets/add.png";
import back from "../assets/back.png";
import search from "../assets/magnifier.png";
import deleteIcon from "../assets/delete.png";
import dragIcon from "../assets/drag.png";

const Questions = () => {
  const location = useLocation();
  const quizDetails = location.state?.quizDetails;
  const [required, setRequired] = useState(true);
  const [questions, setQuestions] = useState([{ id: 1, answers: 3, multipleAnswer: true, required: true }]);
console.log(quizDetails);
  // Add a new question
  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        answers: 3,
        multipleAnswer: true,
        required: true,
      },
    ]);
  };

  // Add an answer to a question
  const addAnswer = (questionId) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId ? { ...q, answers: q.answers + 1 } : q
      )
    );
  };

  // Remove an answer from a question
  const removeAnswer = (questionId, index) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId ? { ...q, answers: Math.max(1, q.answers - 1) } : q
      )
    );
  };

  // Toggle multiple answer option for a specific question
  const toggleMultipleAnswer = (id) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, multipleAnswer: !q.multipleAnswer } : q
      )
    );
  };

  const toggleRequired = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id
          ? { ...question, required: !question.required } // Toggle 'required'
          : question
      )
    );
  };

  return (
    <div className="h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow">
        <button className="bg-yellow-100 p-2 rounded-md">
          <img src={back} alt="Back" width="25" height="25" />
        </button>
        <h1 className="text-xl font-semibold">Quiz Title</h1>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg">
          Publish
        </button>
      </header>

      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-1/4 bg-yellow-50 p-4 overflow-y-auto">
          <div className="space-y-4">
            {questions.map((q) => (
              <div
                key={q.id}
                className="flex items-center p-4 bg-white border-2 border-yellow-500 rounded-2xl shadow"
              >
                <div className="bg-yellow-400 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  {q.id}
                </div>
                <div className="ml-2">
                  <p className="font-semibold">Question {q.id}</p>
                  {q.multipleAnswer ? (
  <p className="text-sm text-gray-500">{q.answers} Choices</p>
) : (
  <p className="text-sm text-gray-500">Single Answer</p>
)}

                </div>
              </div>
            ))}

            <button
              onClick={addQuestion}
              className="flex items-center w-full justify-center bg-[#f1edc8] p-5 rounded-2xl cursor-pointer"
            >
              <img src={add} alt="Add Question" width="55" height="55" />
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          {/* Search Bar */}
           <div className="relative p-3">
                          <input
                              type="text"
                              placeholder="Search for Users"
                              className="pl-4 pr-10 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
                          />
                          <div className="absolute inset-y-0 left-52 flex items-center pr-3">
                              <img src={search} alt="Search" width="15" height="15" />
                          </div>
                      </div>

          {/* Questions */}
          {questions.map((q) => (
            <div
              key={q.id}
              className="bg-white p-6 rounded-2xl border border-gray-300 mb-6"
            >
              {/* Question Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Question {q.id}</h2>
                <div className="flex items-center space-x-4">
                  {/* Multiple Answer Toggle */}
                  <div className="flex items-center space-x-2">
                    <span>Multiple Answer</span>

                    <label className="relative  inline-flex items-center cursor-pointer">
                      <input
                        id="private"
                        type="checkbox"
                        checked={q.multipleAnswer}
                        onChange={() => toggleMultipleAnswer(q.id)}
                        className="sr-only peer "
                      />
                      <span className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-yellow-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all"></span>
                    </label>
                  </div>

                  {/* Required Toggle */}
                  <div className="flex items-center space-x-2">
                    <span>Required</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        id="private"
                        type="checkbox"
                        checked={q.required}
                        onChange={() => toggleRequired(q.id)}
                        className="sr-only peer"
                      />
                      <span className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-yellow-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all"></span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Question Text */}
              <div className="flex">
              <textarea
                className="w-full p-3 min-h-32 bg-gray-100 rounded-2xl mb-4"
              />
 <button
              onClick={addQuestion}
              className="flex items-center p-3 w-1/3  justify-center bg-gray-200  mb-4 ml-3 rounded-3xl cursor-pointer"
            >
              <img src={add} alt="Add Question" width="55" height="55" />
            </button>
           </div>
              {/* Answers */}
              <div>
                {/* If `multipleAnswer` is true, render answers and buttons */}
                {q.multipleAnswer ? (
                  <div className="space-y-4">
                    {Array.from({ length: q.answers }).map((_, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <input
                          type="text"
                          className="w-full p-2 bg-gray-100  rounded-2xl"
                         
                        />
                        
                        <img className="bg-gray-100 rounded-2xl" src={dragIcon} alt="Drag" width="25" />
                        <button
                          onClick={() => removeAnswer(q.id, index)}
                          className="text-red-500"
                        >
                          <img src={deleteIcon} alt="Delete" width="25" />
                        </button>
                      </div>
                    ))}
                    {/* Add Answer Button */}
                    <button
                      onClick={() => addAnswer(q.id)}
                      className="mt-4 flex items-center space-x-2 px-4 py-2 border-2 border-dashed rounded-3xl"
                    >
                      <img src={add} alt="Add Question" width="15" height="15" /> <span>Add Answer</span>
                    </button>
                  </div>
                ) : (
                  // Else part when `multipleAnswer` is false, showing only one answer
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <input
                        type="text"
                        className="w-full p-2 bg-gray-100 border rounded-lg"
                        placeholder="Answer 1"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Questions;
