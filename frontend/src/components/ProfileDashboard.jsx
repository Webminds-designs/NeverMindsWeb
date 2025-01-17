import React from 'react';

const ProfileDashboard = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-yellow-50 p-5">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-gray-800">NeverMinds</h1>
        </div>
        <nav className="space-y-4">
          <a href="#" className="block text-lg font-semibold text-yellow-600">Dashboard</a>
          <a href="#" className="block text-lg text-gray-600">Favourites</a>
          <a href="#" className="block text-lg text-gray-600">Badges</a>
          <a href="#" className="block text-lg text-gray-600">Progress</a>
          <a href="#" className="block text-lg text-gray-600">Account</a>
        </nav>
        <div className="absolute bottom-5">
          <a href="#" className="block text-red-600">Settings</a>
          <a href="#" className="block text-red-600">Logout</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search your course..."
            className="px-4 py-2 w-1/2 border border-gray-300 rounded-lg"
          />
          <div className="flex items-center space-x-4">
            <img
              src="/path/to/avatar.jpg"
              alt="User avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">Dulsi Ratnayake</p>
              <span className="text-xs text-gray-500">Good Morning Dulsi</span>
            </div>
          </div>
        </header>

        {/* Online Quizzes */}
        <div className="bg-yellow-100 p-6 rounded-lg mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Master your skills with quizzes that pack a punch!
            </h2>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Try now</button>
          </div>
          <img src="/path/to/star-character.png" alt="Character" className="w-24 h-24" />
        </div>

        {/* Favourite Quizzes */}
        <section>
          <h3 className="text-xl font-bold mb-4">Favourite Quizzes</h3>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((quiz) => (
              <div key={quiz} className="bg-white shadow rounded-lg p-4">
                <img
                  src={`/path/to/quiz-${quiz}.png`}
                  alt="Quiz illustration"
                  className="w-full h-32 object-cover mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800">Quiz Title</h4>
                <p className="text-sm text-gray-500">By Dr. Charitha Munasinghe</p>
                <button className="bg-yellow-500 text-white mt-4 px-4 py-2 rounded-lg">Try</button>
              </div>
            ))}
          </div>
        </section>

        {/* Overall Progress */}
        <section className="mt-8">
          <h3 className="text-xl font-bold mb-4">Your Overall Progress</h3>
          <div className="grid grid-cols-4 gap-6">
            {[
              { label: 'Attempted Quizzes', value: '20' },
              { label: 'Completed Quizzes', value: '20' },
              { label: 'Number of Favourites', value: '5' },
              { label: 'Score Points', value: '200' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white shadow rounded-lg p-6 text-center"
              >
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </h4>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics and Tutors */}
        <section className="mt-8 grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Statistic</h3>
            <p className="text-gray-500">Continue quizzing to achieve your target!</p>
            <div className="mt-4">{/* Bar Chart placeholder */}</div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Your Tutors</h3>
            {["Biology", "Law", "Business Studies"].map((tutor, index) => (
              <p key={index} className="text-sm text-gray-600">Dr. Tutor {tutor}</p>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfileDashboard;
