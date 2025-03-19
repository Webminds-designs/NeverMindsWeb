import React, { useState, useRef } from "react";
import Sidebar from "./SideBar";
import { IonIcon } from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import QuizCard from "./QuizCard";
import ProfileCard from "./ProfileCard";
import DashBarChart from "./DashBarChart";
import Tutors from "./Tutors";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import quizCardData from "../data/quizCardData";
import { tutorsData } from "../data/quizCardData";
import profileImage from "../assets/girl.jpg";
import showcardimg from "../assets/star-2.svg";
import tutorIcon from "../assets/person.png";

const ProfileDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good Morning";
    if (currentHour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const quizContainerRef = useRef(null);

  const scrollLeft = () => {
    if (quizContainerRef.current) quizContainerRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    if (quizContainerRef.current) quizContainerRef.current.scrollLeft += 300;
  };

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
          {/* Showcard */}
          <div className="flex bg-[#fed448] p-6 rounded-3xl mb-16">
            <div className="flex-1">
              <h2 className="xl:text-xl md:text-sm text-xs font-bold mb-2">
                ONLINE QUIZZES
              </h2>
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

          {/* Favourite Quizzes Header with Buttons */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="xl:text-[40px] md:text-[30px] text-[25px] font-bold">
              Favourite Quizzes
            </h3>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={scrollLeft}
                className="text-yellow-400 hover:text-black"
              >
                <IoIosArrowDropleftCircle size={40} />
              </button>
              <button
                onClick={scrollRight}
                className="text-yellow-400 hover:text-black"
              >
                <IoIosArrowDroprightCircle size={40} />
              </button>
            </div>
          </div>

          {/* Quiz Cards Container */}
          <div
            ref={quizContainerRef}
            className="overflow-x-auto scrollbar-hide flex gap-4 mb-12 px-2 md:px-0"
            style={{ scrollBehavior: "smooth" }}
          >
            {quizCardData.map((quiz, index) => (
              <div
                key={index}
                className="min-w-[60%] md:min-w-[30%] lg:min-w-[25%] flex-shrink-0"
              >
                <QuizCard
                  key={index}
                  index={index}
                  image={quiz.image}
                  subject={quiz.subject}
                  title={quiz.title}
                  score={quiz.score}
                  tutorName={quiz.tutorName}
                  tutorSubject={quiz.tutorSubject}
                  tutorIcon={quiz.tutorIcon || tutorIcon} // ✅ Ensure tutorIcon is always provided
                  showScore={true}
                />
              </div>
            ))}
          </div>

          {/* Overall Progress */}
          <h3 className="xl:text-[40px] md:text-[30px] text-[25px] font-bold mb-12">
            Your Overall Progress
          </h3>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            {[
              { title: "Attempted Quizzes", value: "20" },
              { title: "Completed Quizzes", value: "20" },
              { title: "Number of Favourites", value: "5" },
              { title: "Score Points", value: "200" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-white rounded-3xl flex justify-between items-center border border-gray-200"
              >
                <h4 className="font-bold text-left md:text-[22px] text-[20px]">
                  {item.title}
                </h4>
                <p className="text-right font-semibold md:text-[40px] text-[30px]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex flex-col w-4/12 p-8">
          {/* Profile Card */}
          <h3 className="xl:text-[40px] md:text-[30px] text-[25px] font-bold mb-4">
            Profile
          </h3>
          <div className="flex flex-col items-center justify-center">
            <ProfileCard
              name="Dulsi Rathnayake"
              email="dulsirathnayake@gmail.com"
              phone="077-060-0214"
              address="24/75 1st Lane Boralasgamuwa"
              profileImage={profileImage}
              greeting={getGreeting()}
              onEdit={handleEdit}
              progress={85}
            />
          </div>

          {/* Statistics */}
          <h3 className="xl:text-[40px] md:text-[30px] text-[25px] font-bold mt-8 mb-4">
            Statistic
          </h3>
          <DashBarChart />

          {/* Tutors */}
          <h3 className="xl:text-[40px] md:text-[30px] text-[25px] font-bold mt-8 mb-4">
            Tutors
          </h3>
          <Tutors tutors={tutorsData} />
        </div>
      </main>
    </div>
  );
};

export default ProfileDashboard;
