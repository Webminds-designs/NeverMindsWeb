import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import add from "../assets/add.png";
import back from "../assets/back.png";
import search from "../assets/magnifier.png";
import deleteIcon from "../assets/delete.png";
import dragIcon from "../assets/drag.png";
import copy from "../assets/copy.png";
import { useGetQuizByIdQuery, useUpdateQuizMutation } from '../redux/slices/quizSlice';
import toast from 'react-hot-toast';

const Questions = () => {
  const location = useLocation();
  const quizId = location.state?.quizId;
  const navigate = useNavigate();

  // RTK Query hooks
  const { data: quizDetails, isLoading: isLoadingQuiz, refetch } = useGetQuizByIdQuery(quizId);
  const [updateQuiz, { isLoading: isUpdating }] = useUpdateQuizMutation();

  const [isPublished, setIsPublished] = useState(false);
  const [required, setRequired] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      questionText: "",
      answers: ["", "", ""],
      multipleAnswer: true,
      image: null,
      required: true,
      correctAnswers: [],
    },
  ]);

  useEffect(() => {
    if (!quizId) {
      toast.error("No quiz selected. Please create a quiz first.");
      navigate('/quizzes');
    }
  }, [quizId, navigate]);

  useEffect(() => {
    if (quizDetails?.questions?.length) {
      const formattedQuestions = quizDetails.questions.map((q, index) => ({
        id: index + 1,
        _id: q._id, // Store the MongoDB ID
        questionText: q.question,
        multipleAnswer: q.answerType === 'multiple',
        image: q.image,
        required: true,
        correctAnswers: q.answers
          .map((a, idx) => a.isCorrect ? idx : null)
          .filter(idx => idx !== null),
        correctAnswer: q.answerType === 'single'
          ? q.answers.findIndex(a => a.isCorrect)
          : undefined,
        answers: q.answers.map(a => a.answer),
        answerIds: q.answers.map(a => a._id) // Store answer IDs
      }));

      setQuestions(formattedQuestions);
    }
  }, [quizDetails]);

  // Add a new question
  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        questionText: "",
        answers: ["", "", ""],
        multipleAnswer: true,
        required: true,
        correctAnswers: [],
        correctAnswer: undefined
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
          ? { ...q, answers: q.answers.filter((_, i) => i !== index) }
          : q
      )
    );
  };

  // Toggle multiple answer option for a specific question
  const toggleMultipleAnswer = (id) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id === id) {
          if (q.multipleAnswer) {
            // Switching from multiple to single
            return {
              ...q,
              multipleAnswer: false,
              correctAnswer: q.correctAnswers.length > 0 ? q.correctAnswers[0] : undefined,
              correctAnswers: []
            };
          } else {
            // Switching from single to multiple
            return {
              ...q,
              multipleAnswer: true,
              correctAnswers: q.correctAnswer !== undefined ? [q.correctAnswer] : [],
              correctAnswer: undefined
            };
          }
        }
        return q;
      })
    );
  };

  // Toggle required
  const toggleRequired = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id
          ? { ...question, required: !question.required }
          : question
      )
    );
  };

  // Set correct answer for single choice questions
  const setCorrectAnswer = (questionId, answerIndex) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId ? { ...q, correctAnswer: answerIndex } : q
      )
    );
  };

  // Set multiple correct answers
  const setMultipleAnswer = (questionId, answerIndex) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? {
            ...q,
            correctAnswers: q.correctAnswers.includes(answerIndex)
              ? q.correctAnswers.filter((index) => index !== answerIndex)
              : [...q.correctAnswers, answerIndex],
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

  const handleSubmit = async () => {
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
      if (q.multipleAnswer) {
        if (q.correctAnswers.length === 0) {
          validationError = true;
          errorMessage = "Please select at least one correct answer for multiple-choice questions.";
        }
      } else {
        if (q.correctAnswer === undefined) {
          validationError = true;
          errorMessage = "Please select the correct answer for single-choice questions.";
        }
      }
    });

    if (validationError) {
      toast.error(errorMessage);
      return;
    }

    try {
      // Format questions for the API, preserving IDs when they exist
      const formattedQuestions = questions.map(q => {
        return {
          _id: q._id, // Include ID if it exists from an existing question
          question: q.questionText,
          answerType: q.multipleAnswer ? 'multiple' : 'single',
          image: q.image,
          answers: q.answers.map((answerText, index) => ({
            _id: q.answerIds?.[index], // Include ID if this answer already exists
            answer: answerText,
            answerType: 'text',
            isCorrect: q.multipleAnswer
              ? q.correctAnswers.includes(index)
              : q.correctAnswer === index
          }))
        };
      });

      // Create form data for API call
      const formData = new FormData();
      formData.append('title', quizDetails.title);
      formData.append('description', quizDetails.description);
      formData.append('guidlines', quizDetails.guidlines);
      formData.append('type', quizDetails.type);
      formData.append('imageVector', quizDetails.imageVector);
      formData.append('tutor', quizDetails.tutor);
      formData.append('verificationCode', quizDetails.type == 'public' ? '' : quizDetails.verificationCode);
      formData.append('quizTags', quizDetails.quizTags);
      formData.append('timeDuration', quizDetails.timeDuration);
      formData.append('subject', quizDetails.subject);
      formData.append('passMark', quizDetails.passMark);
      formData.append('questions', JSON.stringify(formattedQuestions));

      // Update the quiz with questions
      await updateQuiz({
        id: quizId,
        quizData: formData
      }).unwrap();

      // Add this line to refetch the latest quiz details
      await refetch();

      toast.success("Quiz questions saved successfully!");
      setIsPublished(true);
    } catch (error) {
      console.error("Error saving quiz questions:", error);
      toast.error("Failed to save questions. Please try again.");
    }

    console.log("quizDetails", quizDetails);
    console.log(questions)
  };
console.log(quizDetails);
  const handleCopy = () => {
    if (!quizDetails?.verificationCode) {
      toast.error("No verification code available");
      return;
    }

    navigator.clipboard.writeText(quizDetails.verificationCode)
      .then(() => {
        setIsCopied(true);
        toast.success("Verification code copied to clipboard!");
        setTimeout(() => setIsCopied(false), 4000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        toast.error("Failed to copy verification code");
      });
  };

  const deleteQuestion = (id) => {
    setQuestions((prev) => {
      const updatedQuestions = prev.filter((q) => q.id !== id);
      return updatedQuestions.map((q, index) => ({
        ...q,
        id: index + 1,
      }));
    });
  };

  const scrollToQuestion = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleImageUpload = (e, questionId) => {
    const file = e.target.files[0];
    if (!file) return;

    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId ? { ...q, isLoading: true } : q
      )
    );

    const reader = new FileReader();
    reader.onload = () => {
      setTimeout(() => {
        setQuestions((prev) =>
          prev.map((q) =>
            q.id === questionId
              ? { ...q, image: reader.result, isLoading: false }
              : q
          )
        );
      }, 1500);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e, questionId) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleImageUpload({ target: { files: [file] } }, questionId);
    }
  };

  if (isLoadingQuiz) {
    return <div className="flex justify-center items-center h-screen">Loading quiz details...</div>;
  }

  if (!quizDetails) {
    return <div className="flex justify-center items-center h-screen">Quiz not found</div>;
  }

  return (
    <div className="h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow">
        <button onClick={handleBack} className="bg-yellow-100 p-2 rounded-md">
          <img src={back} alt="Back" width="25" height="25" />
        </button>
        <h1 className="text-xl font-semibold">
          {quizDetails.title || "Quiz Title"}
        </h1>
        <button
          onClick={handleSubmit}
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg"
          disabled={isUpdating}
        >
          {isUpdating ? "Saving..." : "Publish"}
        </button>
      </header>

      {/* Rest of the component remains mostly the same */}
      <hr className="h-[2px] bg-gray-100 border-0 rounded dark:bg-gray-300" />
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-1/4 bg-yellow-50 p-4 overflow-y-auto border-r-2 border-gray-300">
          <div className="space-y-4">
            {questions.map((q) => (
              <a
                key={q.id}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToQuestion(q.id);
                }}
                href={`#${q.id}`}
                className=""
              >
                {/* Question sidebar item structure remains the same */}
                <div className="flex items-start p-4 m-2 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-yellow-500 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                    {q.id}
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="col-span-9 font-semibold text-gray-800">
                      {(q.questionText || "Question").length > 50
                        ? `${(q.questionText || "Question").substring(0, 50)}...`
                        : q.questionText || "Question"}
                    </p>
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-500 mt-2">
                        {q.answers?.length || 0} {q.answers?.length === 1 ? "Choice" : "Choices"}
                      </p>
                      <button
                        onClick={() => deleteQuestion(q.id)}
                        className="text-red-500 hover:text-red-700 transition-colors duration-200"
                        aria-label="Delete Question"
                      >
                        <img src={deleteIcon} alt="Delete" width="20" />
                      </button>
                    </div>
                  </div>
                </div>
              </a>
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
              id={q.id}
              className="bg-white p-6 rounded-2xl border border-gray-300 mb-6"
            >
              {/* Question header and toggle controls remain the same */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold bg-gray-200 p-2 rounded-md">
                  Question {q.id}
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span>Multiple Answer</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={q.multipleAnswer}
                        onChange={() => toggleMultipleAnswer(q.id)}
                        className="sr-only peer"
                      />
                      <span className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-yellow-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all"></span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>Required</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
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
              <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-400" />

              {/* Question text area and image uploader */}
              <div className="flex">
                <textarea
                  className="w-full p-3 min-h-32 bg-gray-100 rounded-2xl mb-4"
                  value={q.questionText}
                  onChange={(e) => handleQuestionTextChange(q.id, e.target.value)}
                  placeholder="Enter your question here..."
                />
                <div
                  className="flex items-center p-3 w-1/3 justify-center bg-gray-200 mb-4 ml-3 rounded-3xl cursor-pointer relative"
                  onDrop={(e) => handleDrop(e, q.id)}
                  onDragOver={(e) => e.preventDefault()}
                >
                  {q.isLoading ? (
                    <div className="flex justify-center items-center">
                      <svg
                        className="animate-spin h-8 w-8 text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                    </div>
                  ) : q.image ? (
                    <img
                      src={q.image}
                      alt="Uploaded"
                      className="max-h-24 object-contain rounded-2xl"
                    />
                  ) : (
                    <div className="text-gray-500 text-center">
                      <img src={add} alt="Add Question" width="55" height="55" />
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, q.id)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>

              {/* Answers section */}
              <div>
                {q.multipleAnswer ? (
                  <div className="space-y-4">
                    {q.answers.map((answer, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <input
                          type="text"
                          value={answer}
                          onChange={(e) => {
                            const updatedAnswers = [...q.answers];
                            updatedAnswers[index] = e.target.value;
                            setQuestions((prev) =>
                              prev.map((qItem) =>
                                qItem.id === q.id
                                  ? { ...qItem, answers: updatedAnswers }
                                  : qItem
                              )
                            );
                          }}
                          className="w-full p-2 bg-gray-100 rounded-2xl"
                          placeholder={`Answer ${index + 1}`}
                        />
                        <img
                          className="bg-gray-100 rounded-2xl"
                          src={dragIcon}
                          alt="Drag"
                          width="25"
                        />
                        <button
                          onClick={() => setMultipleAnswer(q.id, index)}
                          className={`p-1 rounded-full px-3 ${q.correctAnswers.includes(index)
                            ? "bg-green-500 text-white"
                            : "bg-yellow-100 text-gray-900"
                            }`}
                        >
                          {index + 1}
                        </button>
                        <button
                          onClick={() => removeAnswer(q.id, index)}
                          className="text-red-500"
                        >
                          <img src={deleteIcon} alt="Delete" width="25" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addAnswer(q.id)}
                      className="mt-4 flex items-center space-x-2 px-4 py-2 border-2 border-dashed rounded-3xl"
                    >
                      <img src={add} alt="Add Answer" width="15" height="15" />
                      <span>Add Answer</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {q.answers.map((answer, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <input
                          type="text"
                          value={answer}
                          onChange={(e) => {
                            const updatedAnswers = [...q.answers];
                            updatedAnswers[index] = e.target.value;
                            setQuestions((prev) =>
                              prev.map((qItem) =>
                                qItem.id === q.id
                                  ? { ...qItem, answers: updatedAnswers }
                                  : qItem
                              )
                            );
                          }}
                          className="w-full p-2 bg-gray-100 rounded-2xl"
                          placeholder={`Answer ${index + 1}`}
                        />
                        <img
                          className="bg-gray-100 rounded-2xl"
                          src={dragIcon}
                          alt="Drag"
                          width="25"
                        />
                        <button
                          onClick={() => setCorrectAnswer(q.id, index)}
                          className={`p-1 rounded-full px-3 ${q.correctAnswer === index
                            ? "bg-green-500 text-white"
                            : "bg-yellow-100 text-gray-900"
                            }`}
                        >
                          {index + 1}
                        </button>
                        <button
                          onClick={() => removeAnswer(q.id, index)}
                          className="text-red-500"
                        >
                          <img src={deleteIcon} alt="Delete" width="25" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addAnswer(q.id)}
                      className="mt-4 flex items-center space-x-2 px-4 py-2 border-2 border-dashed rounded-3xl"
                    >
                      <img src={add} alt="Add Answer" width="15" height="15" />
                      <span>Add Answer</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </main>

        {/* Published Modal */}
        {isPublished && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-[28rem]">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {quizDetails.title} Quiz Published <span className="text-yellow-500">!</span>
              </h2>
              <p className="text-gray-700 text-center mb-6">
                Your quiz has been successfully published!
              </p>

              {quizDetails.type === 'private' && (
                <div className="flex items-center justify-between bg-gray-50 p-2 m-5 rounded-lg border border-gray-300 mb-6">
                  <span className="font-mono text-lg text-gray-800">{quizDetails.verificationCode}</span>
                  <button
                    onClick={handleCopy}
                    className="bg-yellow-200 text-white px-4 py-2 rounded-md hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 transition"
                  >
                    <img src={copy} alt="copy" width="25" height="25" />
                  </button>
                </div>
              )}

              {isCopied && (
                <p className="text-sm text-green-600 text-center mb-4">
                  Verification code copied to clipboard!
                </p>
              )}

              <div className="flex justify-end">
                <button
                  className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300 transition"
                  onClick={() => navigate('/quizzes')}
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
