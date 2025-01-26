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
import DashBarChart from "./DashBarChart";
import profileImage from "../assets/girl.jpg";
import Tutors from "./Tutors";

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

  const quizCardData = [
    {
      image: science1img,
      subject: "Biology",
      title: "Building Blocks of Life",
      score: "80",
      tutorIcon: tutorIcon,
      tutorName: " Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
    },
    {
      image: science2img,
      subject: "Biology",
      title: "Cracking the Code of Viruses",
      score: "100",
      tutorIcon: tutorIcon,
      tutorName: " Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
    },
    {
      image: science3img,
      subject: "Biology",
      title: "Bonding Basics",
      score: "30",
      tutorIcon: tutorIcon,
      tutorName: " Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
    },
    {
      image: science1img,
      subject: "Biology",
      title: "Building Blocks of Life",
      score: "80",
      tutorIcon: tutorIcon,
      tutorName: " Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
    },
    {
      image: science2img,
      subject: "Biology",
      title: "Cracking the Code of Viruses",
      score: "100",
      tutorIcon: tutorIcon,
      tutorName: " Dr. Charitha Munasinghe",
      tutorSubject: "Biology",
    }
  ]

  // Define handleEdit function
  const handleEdit = () => {
    alert("Edit button clicked!");
  };

  return (
    <div className="flex min-h-screen mx-5">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex w-full">
        {/* Left Section */}
        <div className="lg:w-8/12 max-w-full lg:p-8 py-4">
          {/* Search Bar */}
          <div className="mb-12 px-7 w-auto">
            <input
              type="text"
              placeholder="Search your course..."
              className="w-full p-4 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Showcard */}
          <div className="flex bg-[#fed448] p-6 rounded-3xl mb-16">
            <div className="flex-1">
              <h2 className="xl:text-xl md:text-sm text-xs font-bold mb-2">ONLINE QUIZZES</h2>
              <p className="xl:text-[50px] lg:text-[30px] md:text-[40px] text-[30px] font-semibold mb-4">
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
              <img src={showcardimg} alt="Banner" className="rounded-lg h-60" />
            </div>
          </div>

          {/* Favourite Quizzes Slider */}
          <div>
            <h3 className="xl:text-[40px] md:text-[30px] text-[25px] font-bold mb-12">Favourite Quizzes</h3>
          </div>
          <div className="flex my-6 gap-4 mb-12 overflow-x-auto scrollbar-hide">
            {quizCardData.map((quiz, index) => (
              <QuizCard key={index} {...quiz} />
            ))}
          </div>

          {/* Overall Progress */}
          <div>
            <h3 className="xl:text-[40px] md:text-[30px] text-[25px] font-bold mb-12">
              Your Overall Progress
            </h3>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 ">
            <div className="p-5 bg-white rounded-3xl  flex justify-between border border-gray-200">
              <h4 className="font-bold text-left md:text-[22px] text-[20px]">
                Attempted Quizzes
              </h4>
              <p className="text-right font-semibold md:text-[40px] text-[30px]">20</p>
            </div>
            <div className="p-5 bg-white rounded-3xl  flex justify-between border border-gray-200">
              <h4 className="font-bold text-left md:text-[22px] text-[20px]">
                Completed Quizzes
              </h4>
              <p className="text-right font-semibold md:text-[40px] text-[30px]">20</p>
            </div>
            <div className="p-5 bg-white rounded-3xl  flex justify-between border border-gray-200">
              <h4 className="font-bold text-left md:text-[22px] text-[20px]">
                Number of Favourites
              </h4>
              <p className="text-right font-semibold md:text-[40px] text-[30px]">5</p>
            </div>
            <div className="p-5 bg-white rounded-3xl  flex justify-between border border-gray-200">
              <h4 className="font-bold text-left md:text-[22px] text-[20px]">Score Points</h4>
              <p className="text-right font-semibold md:text-[40px] text-[30px]">200</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex flex-col w-4/12 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4">
              <IonIcon icon={mailOutline} size="large" />
              <IonIcon icon={notificationsOutline} size="large" />
            </div>
            <div className="flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-full shadow-md"
                src={profileImage}
                alt={`${name}'s profile`}
              />
              <span className="font-semibold">Dulsi Rathnayake</span>
            </div>
          </div>

          {/* Profile Card */}
          <div>
            <h3 className="text-[30px] font-bold mt-4 mb-4">Profiles</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ProfileCard
              name="Dulsi Rathnayake"
              email="dulsirathnayake@gmail.com"
              phone="077-060-0214"
              address="24/75 1st Lane Boralasgamuwa"
              profileImage={profileImage}
              greeting={getGreeting()} // Call a function to determine the greeting
              onEdit={handleEdit} // Pass handleEdit function here
            />
          </div>

          {/* Static Table */}
          <div>
            <h3 className="text-[30px] font-bold mb-4">Statistic</h3>
          </div>
          <div className="my-8">
            <DashBarChart />
          </div>

          {/* Tutors */}
          <div>
            <Tutors />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileDashboard;
