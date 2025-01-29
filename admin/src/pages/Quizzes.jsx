import React, { useState, useEffect } from 'react';
import Search from '../assets/magnifier.png';
import edit from '../assets/edit.svg';
import { Link } from 'react-router-dom';
import NewQuiz from '../components/NewQuiz';
import { useQuiz } from '../context/context.jsx';  


const Quizzes = () => {
   const { quizDetails } = useQuiz();
  const [newQuizzes, setNewQuizzes] = useState([]);
  const [allQuizzes, setAllQuizzes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  useEffect(() => {
    const fetchQuizzes = async () => {
      
      const quizzes = [
        {
          id: 1,
          title: "Introduction to Biology",
          description: "Learn the basics of biology, including cell structures and functions.",
          guidelines: [
            "Ensure a quiet environment while attempting the quiz.",
            "Each question carries equal marks.",
            "No negative marking.",
          ],
          type: "public",
          subject: "Biology",
          imageVector: "biology_intro_vector.png",
          tutor: "64b5c1e7a8244c45678ab123",
          verificationCode: null,
          quizTags: ["biology", "intro", "science"],
          timeDuration: "01:00:00",
          date: '12/03/2025',
          score: 20,
        },
        {
          id: 2,
          title: "Advanced Physics Concepts",
          description: "Dive deep into the concepts of quantum mechanics and relativity.",
          guidelines: [
            "Use of calculators is allowed.",
            "Ensure stable internet connectivity.",
            "Do not refresh the page during the quiz.",
          ],
          type: "private",
          subject: "Physics",
          imageVector: "physics_advanced_vector.png",
          tutor: "64b5c1e7a8244c45678ab456",
          verificationCode: "A1B2C3",
          quizTags: ["physics", "advanced", "science"],
          timeDuration: "02:30:00",
          date: '12/03/2025',
          score: 30,
        },
        {
          id: 3,
          title: "Basics of Organic Chemistry",
          description: "Explore the structure, properties, and reactions of organic compounds.",
          guidelines: [
            "Read each question carefully before answering.",
            "You can review answers before submitting.",
            "Ensure a steady internet connection.",
          ],
          type: "public",
          subject: "Chemistry",
          imageVector: "organic_chemistry_vector.png",
          tutor: "64b5c1e7a8244c45678ab789",
          verificationCode: null,
          quizTags: ["chemistry", "organic", "science"],
          timeDuration: "01:45:00",
          date: '12/03/2025',
          score: 12,
        },
        {
          id: 4,
          title: "Introduction to Biology",
          description: "Learn the basics of biology, including cell structures and functions.",
          guidelines: [
            "Ensure a quiet environment while attempting the quiz.",
            "Each question carries equal marks.",
            "No negative marking.",
          ],
          type: "public",
          subject: "Biology",
          imageVector: "biology_intro_vector.png",
          tutor: "64b5c1e7a8244c45678ab123",
          verificationCode: null,
          quizTags: ["biology", "intro", "science"],
          timeDuration: "01:00:00",
          date: '12/03/2025',
          score: 20,
        },
        {
          id: 5,
          title: "Advanced Physics Concepts",
          description: "Dive deep into the concepts of quantum mechanics and relativity.",
          guidelines: [
            "Use of calculators is allowed.",
            "Ensure stable internet connectivity.",
            "Do not refresh the page during the quiz.",
          ],
          type: "private",
          subject: "Physics",
          imageVector: "physics_advanced_vector.png",
          tutor: "64b5c1e7a8244c45678ab456",
          verificationCode: "A1B2C3",
          quizTags: ["physics", "advanced", "science"],
          timeDuration: "02:30:00",
          date: '12/03/2025',
          score: 30,
        },
        {
          id: 6,
          title: "Basics of Organic Chemistry",
          description: "Explore the structure, properties, and reactions of organic compounds.",
          guidelines: [
            "Read each question carefully before answering.",
            "You can review answers before submitting.",
            "Ensure a steady internet connection.",
          ],
          type: "public",
          subject: "Chemistry",
          imageVector: "organic_chemistry_vector.png",
          tutor: "64b5c1e7a8244c45678ab789",
          verificationCode: null,
          quizTags: ["chemistry", "organic", "science"],
          timeDuration: "01:45:00",
          date: '12/03/2025',
          score: 12,
        },
      ];

      setNewQuizzes(quizzes);
      setAllQuizzes(quizzes);
    };

    fetchQuizzes();
  }, []);

  // Filter quizzes based on search term
  const filteredQuizzes = allQuizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const openModal = () => {
    if (quizDetails !== null) {
        setIsModalOpen(true);
    } else {
        console.log("Quiz details are null. Modal cannot be opened.");
    }
};

useEffect(() => {
    if (quizDetails !== null) {
        openModal();
    }
}, [quizDetails]);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex-1 ml-64 p-8">
      <div className="p-4">
        {/* New Quizzes Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">New Quizzes</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {newQuizzes.slice(0, 3).map((quiz) => (
              <div
                key={quiz.id}
                className="flex items-center bg-white rounded-lg p-4 "
              >
                <div className="bg-yellow-400 rounded-lg w-28 h-28 flex-shrink-0"></div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{quiz.title}</h3>
                      <p className="text-sm text-gray-500">{quiz.subject}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <p className="text-sm text-gray-500">{quiz.date}</p>
                    <p className="text-lg font-semibold text-gray-800">{quiz.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex  justify-between'>
          {/* Search Bar */}

          <div className="relative p-3">
            <input
              type="text"
              placeholder="Search for Users"
              className="pl-4 pr-10 py-2 rounded-full focus:outline-none focus:ring-2 w-full focus:ring-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-52 flex items-center pr-3">
              <img src={Search} alt="Search" width="15" height="15" />
            </div>
          </div>

          {/* New Button */}
          <div className=" mb-4">
           
            <button     onClick={() => setIsModalOpen(true)}  className="bg-yellow-400 text-white font-bold py-2 px-4 rounded-full">
              New
            </button>
          </div>
        </div>
        {/* All Quizzes Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Title */}
          <h2 className="text-2xl font-bold mb-6">All Quizzes</h2>
          <hr className="mb-6" />

          {/* Quiz Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredQuizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="flex items-center bg-gray-100 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-yellow-400 rounded-lg w-28 h-28 flex-shrink-0"></div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{quiz.title}</h3>
                      <p className="text-sm text-gray-500">{quiz.subject}</p>
                    </div>
                    <img
                      className="cursor-pointer hover:opacity-80"
                      src={edit}
                      alt="edit"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <p className="text-sm text-gray-500">{quiz.date}</p>
                    <p className="text-lg font-semibold text-gray-800">{quiz.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       {/* New Quiz Modal */}
       {isModalOpen && (   <div className="fixed inset-0 bg-black bg-opacity-50  z-50"><NewQuiz closeModal={closeModal} /></div>)}

    </div>
  );
};

export default Quizzes;
