import React, { useState } from "react";
import Sidebar from "./SideBar"; // Import the Sidebar component

const Badges = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const profileImage = "https://via.placeholder.com/150"; // Replace with dynamic profile image if needed
  const name = "Dulsi Rathnayake"; // Replace with dynamic name if needed

  return (
    <div className="flex min-h-screen items-center justify-center mx-5 w-full">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 p-6 max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-[100px] font-medium mb-4">Coming Soon!</h1>
          <p className="text-[30px] text-gray-600 mb-4">
            Get ready to celebrate your milestones like never before!
          </p>
          <div className="inline-block py-2 px-2 text-[15px] justify-center gap-2 bg-gray-300 rounded-lg">
            <input
              type="email"
              placeholder="Please enter your email address"
              className="text-[20px] p-3 w-80 rounded-lg border bg-transparent text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              
            />
            <button className="text-[20px] px-4 py-3 ml-3 bg-black text-white rounded-lg hover:bg-gray-800">
              Notify me
            </button>
          </div>
          <p className="mt-4 text-[30px] text-gray-500">
            Stay tuned for the badge rollout - your achievements are about to shine!
          </p>
        </header>
      </main>
    </div>
  );
};

export default Badges;
