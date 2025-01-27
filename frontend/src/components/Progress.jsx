import React, { useState } from "react";
import Sidebar from "./SideBar"; // Import the Sidebar component

const Progress = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen mx-5">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex w-full">
        <div className="lg:w-8/12 max-w-full lg:p-8 py-4">
          <h1 className="text-3xl font-bold mb-6">Favourites</h1>
          <p className="text-lg">
            Here you can view and manage your favourite items, quizzes, or content.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Progress;
