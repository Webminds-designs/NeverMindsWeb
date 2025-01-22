import React, { useState } from "react";
import Sidebar from "./SideBar";
import { IonIcon } from "@ionic/react";
import {
  arrowForward,
  mailOutline,
  notificationsOutline,
} from "ionicons/icons";
import QuizCard from "./QuizCard";
import showcardimg from "../assets/star-2.svg";
import science1img from "../assets/science.svg";
import science2img from "../assets/science-2.svg";
import science3img from "../assets/science-3.svg";
import tutorIcon from "../assets/person.png";
import ProfileCard from "./ProfileCard";
import profileImage from "../assets/girl.jpg";

const ProfileDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  // Define handleEdit function
  const handleEdit = () => {
    alert("Edit button clicked!");
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex flex-1">
        {/* Left Section */}
        <div className="w-8/12 p-8">
          {/* Search Bar */}
          <div className="mb-6 w-auto">
            <input
              type="text"
              placeholder="Search your course..."
              className="w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Showcard */}
          <div className="flex bg-[#fed448] p-6 rounded-lg shadow-lg mb-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">ONLINE QUIZZES</h2>
              <p className="text-[50px] font-semibold mb-4">
                Master your skills with
                <br />
                Quizzes that pack a punch!
              </p>
              <button className="flex items-center text-lg font-medium text-white hover:text-yellow bg-black py-2 px-4 rounded-full">
                Try now
                <IonIcon icon={arrowForward} className="ml-2" />
              </button>
            </div>
            <div className="w-1/3">
              <img
                src={showcardimg}
                alt="Banner"
                className="rounded-lg h-60"
              />
            </div>
          </div>

          {/* Favourite Quizzes Slider */}
          <div className="flex my-6 gap-4">
            <QuizCard
              image={science1img}
              subject="Biology"
              title="Building Blocks of Life"
              score="80"
              tutorIcon={tutorIcon}
              tutorName=" Dr. Charitha Munasinghe"
              tutorSubject="Biology"
            />
            <QuizCard
              image={science2img}
              subject="Biology"
              title="Cracking the Code of Viruses"
              score="100"
              tutorIcon={tutorIcon}
              tutorName=" Dr. Charitha Munasinghe"
              tutorSubject="Biology"
            />
            <QuizCard
              image={science3img}
              subject="Biology"
              title="Bonding Basics"
              score="30"
              tutorIcon={tutorIcon}
              tutorName=" Dr. Charitha Munasinghe"
              tutorSubject="Biology"
            />
          </div>

          {/* Overall Progress */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-200 rounded-lg shadow-md flex justify-between">
              <h4 className="font-bold text-left">Attempted Quizzes</h4>
              <p className="text-right font-bold">20</p>
            </div>
            <div className="p-4 bg-gray-200 rounded-lg shadow-md flex justify-between">
              <h4 className="font-bold text-left">Completed Quizzes</h4>
              <p className="text-right font-bold">20</p>
            </div>
            <div className="p-4 bg-gray-200 rounded-lg shadow-md flex justify-between">
              <h4 className="font-bold text-left">Number of Favourites</h4>
              <p className="text-right font-bold">5</p>
            </div>
            <div className="p-4 bg-gray-200 rounded-lg shadow-md flex justify-between">
              <h4 className="font-bold text-left">Score Points</h4>
              <p className="text-right font-bold">200</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-4/12 bg-gray-100 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4">
              <IonIcon icon={mailOutline} size="large" />
              <IonIcon icon={notificationsOutline} size="large" />
            </div>
            <div className="flex items-center gap-4">
              <span>Dulsi Rathnayake</span>
            </div>
          </div>

          {/* Profile Card */}
          <ProfileCard
            name="Dulsi Rathnayake"
            email="dulsi@example.com"
            phone="+94 712345678"
            address="123, Example Street, Colombo"
            profileImage="src/assets/girl.png" // Replace with actual image path or URL
            greeting={getGreeting()} // Call a function to determine the greeting
            onEdit={handleEdit} // Pass handleEdit function here
          />

          {/* Static Table */}
          <table className="w-full mb-6">
            <thead>
              <tr>
                <th>20</th>
                <th>40</th>
                <th>60</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1-10 Jan</td>
                <td>11-20 Jan</td>
                <td>21-30 Jan</td>
              </tr>
            </tbody>
          </table>

          {/* Tutors */}
          <div>
            <h3 className="text-lg font-bold mb-4">Your Tutors</h3>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md mb-4"
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-bold">Tutor {i + 1}</p>
                  <p>Subject {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileDashboard;

