import React, { useState } from 'react';
import Search from '../assets/magnifier.png';
import edit from '../assets/edit.svg';
import { Link } from 'react-router-dom';
import NewQuiz from '../components/NewQuiz';
import { useGetAllQuizzesQuery } from '../redux/slices/quizSlice';

const Quizzes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Using RTK Query hook to fetch quizzes
  const { data: quizzes, isLoading, error } = useGetAllQuizzesQuery();

  // Filter quizzes based on search term
  const filteredQuizzes = quizzes?.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const newQuizzes = quizzes?.slice(0, 3) || [];

  if (isLoading) {
    return <div className="flex-1 ml-64 p-8">Loading quizzes...</div>;
  }

  if (error) {
    return <div className="flex-1 ml-64 p-8">Error loading quizzes: {error.message}</div>;
  }

  return (
    <div className="flex-1 ml-64 p-8">
      <div className="p-4">
        {/* New Quizzes Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">New Quizzes</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {newQuizzes.map((quiz) => (
              <div
                key={quiz._id}
                className="flex items-center bg-white rounded-lg p-4"
              >
                <div className="bg-yellow-400 rounded-lg w-28 h-28 flex-shrink-0">
                  {quiz.banner && (
                    <img 
                      src={quiz.banner.url} 
                      alt={quiz.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{quiz.title}</h3>
                      <p className="text-sm text-gray-500">{quiz.subject}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <p className="text-sm text-gray-500">
                      {new Date(quiz.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-between'>
          {/* Search Bar */}
          <div className="relative p-3">
            <input
              type="text"
              placeholder="Search Quizzes"
              className="pl-4 pr-10 py-2 rounded-full focus:outline-none focus:ring-2 w-full focus:ring-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-52 flex items-center pr-3">
              <img src={Search} alt="Search" width="15" height="15" />
            </div>
          </div>

          {/* New Button */}
          <div className="mb-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-400 text-white font-bold py-2 px-4 rounded-full"
            >
              New
            </button>
          </div>
        </div>

        {/* All Quizzes Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">All Quizzes</h2>
          <hr className="mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredQuizzes.map((quiz) => (
              <div
                key={quiz._id}
                className="flex items-center bg-gray-100 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-yellow-400 rounded-lg w-28 h-28 flex-shrink-0">
                  {quiz.banner && (
                    <img 
                      src={quiz.banner.url} 
                      alt={quiz.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>
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
                    <p className="text-sm text-gray-500">
                      {new Date(quiz.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Quiz Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <NewQuiz closeModal={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default Quizzes;
