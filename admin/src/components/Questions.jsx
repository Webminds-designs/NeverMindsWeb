import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import add from "../assets/add.png";
import back from "../assets/back.png";
import search from "../assets/magnifier.png";
import deleteIcon from "../assets/delete.png";
import dragIcon from "../assets/drag.png";
import copy from "../assets/copy.png";

const Questions = () => {
  const location = useLocation();
  const { quizDetails } = location.state || {};
  const [isPublished, setIsPublished] = useState(false);
  const [required, setRequired] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const validationCode = "A1B2C3";
  const [questions, setQuestions] = useState([
    {
      id: 1,
      answers: ["", "", ""],
      multipleAnswer: true,
      required: true,
      correctAnswers: [],
    },
  ]);

  // Add a new question
  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        answers: ["", "", ""],
        multipleAnswer: true,
        required: true,
        correctAnswers: [],
      },
    ]);
  };


  // Add an answer to a question
  const addAnswer = (questionId) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId ? { ...q, answers: [...q.answers, " "] } : q
      )
    );
  };

  // Remove an answer from a question
  const removeAnswer = (questionId, index) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? { ...q, answers: q.answers.filter((_, i) => i !== index) } // Remove the answer at the specified index
          : q
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
  // Toggle required
  const toggleRequired = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id
          ? { ...question, required: !question.required } // Toggle 'required'
          : question
      )
    );
  };
  //correct answer
  const setCorrectAnswer = (questionId, answerIndex) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId ? { ...q, correctAnswer: answerIndex } : q
      )
    );
  };
  // Correct multiple answers
  const setMultipleAnswer = (questionId, answerIndex) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? {
            ...q,
            correctAnswers: q.correctAnswers.includes(answerIndex)
              ? q.correctAnswers.filter((index) => index !== answerIndex) // Unmark if already marked
              : [...q.correctAnswers, answerIndex], // Mark as correct
          }
          : q
      )
    );
  };
  // Handle Question Text Change
  const handleQuestionTextChange = (questionId, value) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === questionId ? { ...q, questionText: value } : q))
    );
  };

  const handleSubmit = () => {
    let validationError = false;
  let errorMessage = "";

  
    questions.forEach((q) => {
      if (!q.questionText || q.questionText.trim() === "") {
        validationError = true;
        errorMessage = "Please ensure all questions have valid text.";
      }
      if (q.answers.every((answer) => !answer || answer.trim() === "")) {
        validationError = true;
        errorMessage = "Please ensure all questions have at least one valid answer.";
      }
      if (q.correctAnswers.length === 0) {
        validationError = true;
        errorMessage = "Please ensure each question has correct answers selected.";
      }
    });
  
    // If any validation error occurs, show the error message
    if (validationError) {
      alert(errorMessage);
      return; // Stop submission if validation fails
    }
  
  
    const allDetails = {
      quizDetails,
      required,
      questions,
    };
  
    console.log("All Details: ", allDetails);
    setIsPublished(true);
  };
  

  const handleCopy = () => {
    navigator.clipboard.writeText(validationCode)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 4000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  const deleteQuestion = (id) => {
    setQuestions((prev) => {
      // Remove the question with the matching ID
      const updatedQuestions = prev.filter((q) => q.id !== id);

      // Reassign IDs to maintain sequential order
      return updatedQuestions.map((q, index) => ({
        ...q,
        id: index + 1, // Set the new ID based on the current index
      }));
    });
  };


  return (
    <div className="h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow">
        <button className="bg-yellow-100 p-2 rounded-md">
          <img src={back} alt="Back" width="25" height="25" />
        </button>
        <h1 className="text-xl font-semibold">
          {quizDetails.title || "Quiz Title"}
        </h1>
        <button onClick={handleSubmit} className="bg-yellow-400 text-black px-4 py-2 rounded-lg">
          Publish
        </button>
      </header>
      <hr className=" h-[2px] bg-gray-100 border-0 rounded dark:bg-gray-300" />
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-1/4 bg-yellow-50 p-4 overflow-y-auto border-r-2 border-gray-300">
          <div className="space-y-4">
            {questions.map((q) => (
              <div
                key={q.id}
                className="flex items-start p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Question ID */}
                <div className="bg-yellow-500 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                  {q.id}
                </div>

                {/* Question Content */}
                <div className="ml-4 flex-1">

                  {/* Question Text */}
                  <p className="col-span-9 font-semibold text-gray-800">
                    {(q.questionText || "Question").length > 50
                      ? `${(q.questionText || "Question").substring(0, 50)}...`
                      : q.questionText || "Question"}
                  </p>




                  {/* Choices Information */}
                  <div className="flex justify-between">
                  <p className="text-sm text-gray-500 mt-2">
                    {q.answers?.length || 0} {q.answers?.length === 1 ? "Choice" : "Choices"}
                  </p>

                  {/* Delete Button */}

                  <button
                    onClick={() => deleteQuestion(q.id)}
                    className=" text-red-500 hover:text-red-700  transition-colors  duration-200"
                    aria-label="Delete Question"
                  >
                    <img src={deleteIcon} alt="Delete" width="20" />
                  </button>
                  </div>
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
              placeholder="Search "
              className="pl-4 pr-10 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <div className="absolute inset-y-0 left-52 flex items-center pr-3">
              <img src={search} alt="Search" width="15" height="15" />
            </div>
            <div className="border-l-2 border-gray-500 h-full"></div>
          </div>

          {/* Questions */}
          {questions.map((q) => (
            <div
              key={q.id}
              className="bg-white p-6 rounded-2xl border border-gray-300 mb-6"
            >
              {/* Question Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold bg-gray-200 p-2 rounded-md">
                  Question {q.id}
                </h2>
                <div className="flex items-center space-x-4">
                  {/* Multiple Answer Toggle */}
                  <div className="flex items-center space-x-2">
                    <span>Multiple Answer</span>

                    <label className="relative  inline-flex items-center cursor-pointer">
                      <input
                        id="Multiple"
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
                        id="Required"
                        type="checkbox"
                        checked={q.required}
                        onChange={() => toggleRequired(q.id)}
                        className="sr-only peer"
                      />
                      <span className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-green-400 peer-checked:after:translate-x-full after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all"></span>
                    </label>
                  </div>
                </div>
              </div>
              <hr className=" h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-400" />
              {/* Question Text */}
              <div className="flex">
                <textarea
                  className="w-full p-3 min-h-32 bg-gray-100 rounded-2xl mb-4"
                  value={q.questionText}
                  onChange={(e) =>
                    handleQuestionTextChange(q.id, e.target.value)
                  }
                />
                <button className="flex items-center p-3 w-1/3  justify-center bg-gray-200  mb-4 ml-3 rounded-3xl cursor-pointer">
                  <img src={add} alt="Add Question" width="55" height="55" />
                </button>
              </div>
              {/* Answers */}
              <div>
                {/* If `multipleAnswer` is true, render answers and buttons */}
                {q.multipleAnswer ? (
                  <div className="space-y-4">
                    {q.answers.map((answer, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        {/* Answer Input Field */}
                        <input
                          type="text"
                          value={answer} // Bind the input value to the specific answer
                          onChange={(e) => {
                            const updatedAnswers = [...q.answers];
                            updatedAnswers[index] = e.target.value; // Update the specific answer in the array
                            setQuestions((prev) =>
                              prev.map((qItem) =>
                                qItem.id === q.id
                                  ? { ...qItem, answers: updatedAnswers }
                                  : qItem
                              )
                            );
                          }}
                          className="w-full p-2 bg-gray-100 rounded-2xl"
                        />

                        {/* Drag Icon */}
                        <img
                          className="bg-gray-100 rounded-2xl"
                          src={dragIcon}
                          alt="Drag"
                          width="25"
                        />

                        {/* Correct Answer Button */}
                        <button
                          onClick={() => setMultipleAnswer(q.id, index)} // Mark this answer as correct
                          className={`p-1 rounded-full px-3 ${q.correctAnswers.includes(index)
                            ? "bg-green-500 text-white"
                            : "bg-yellow-100 text-gray-900"
                            }`}
                        >
                          {index + 1}
                        </button>

                        {/* Delete Button */}
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
                      <img
                        src={add}
                        alt="Add Question"
                        width="15"
                        height="15"
                      />{" "}
                      <span>Add Answer</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {q.answers.map((answer, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        {/* Answer Input Field */}
                        <input
                          type="text"
                          value={answer} // Bind the input value to the specific answer
                          onChange={(e) => {
                            const updatedAnswers = [...q.answers];
                            updatedAnswers[index] = e.target.value; // Update the specific answer in the array
                            setQuestions((prev) =>
                              prev.map((qItem) =>
                                qItem.id === q.id
                                  ? { ...qItem, answers: updatedAnswers }
                                  : qItem
                              )
                            );
                          }}
                          className="w-full p-2 bg-gray-100 rounded-2xl"
                        />

                        {/* Drag Icon */}
                        <img
                          className="bg-gray-100 rounded-2xl"
                          src={dragIcon}
                          alt="Drag"
                          width="25"
                        />

                        {/* Correct Answer Button */}
                        <button
                          onClick={() => setCorrectAnswer(q.id, index)} // Mark this answer as correct
                          className={`p-1 rounded-full px-3 ${q.correctAnswer === index
                            ? "bg-green-500 text-white"
                            : "bg-yellow-100 text-gray-900"
                            }`}
                        >
                          {index + 1}
                        </button>

                        {/* Delete Button */}
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
                      <img
                        src={add}
                        alt="Add Question"
                        width="15"
                        height="15"
                      />{" "}
                      <span>Add Answer</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </main>
        {/* Published Model */}
        {isPublished && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-[28rem]">
              {/* Header */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {quizDetails.title} Quiz Published  <span className="text-yellow-500">!</span>
              </h2>
              <p className="text-gray-700 text-center mb-6">
                Your quiz has been successfully published! Share the code below to allow users to join.
              </p>

              {/* Code Display and Copy Button */}
              <div className="flex items-center justify-between bg-gray-50 p-2 m-5 rounded-lg border border-gray-300 mb-6">
                <span className="font-mono text-lg text-gray-800">{validationCode}</span>
                <button
                  onClick={handleCopy}
                  className="bg-yellow-200 text-white px-4 py-2 rounded-md hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 transition"
                >
                  <img src={copy} alt="copy" width="25" height="25" />
                </button>
              </div>

              {/* Copy Feedback */}
              {isCopied && (
                <p className="text-sm text-green-600 text-center mb-4">
                  Validation code copied to clipboard!
                </p>
              )}

              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 transition"
                  onClick={() => setIsPublished(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Questions;
