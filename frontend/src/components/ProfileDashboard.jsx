import React, { useState } from "react";
import Sidebar from "./SideBar";
import { IonIcon } from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import QuizCard from "./QuizCard";
import showcardimg from "../assets/star-2.svg";
import science1img from "../assets/science.svg";
import science2img from "../assets/science-2.svg";
import science3img from "../assets/science-3.svg";
import science4img from "../assets/science-4.svg";
import anubis from "../assets/anubis.svg";
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
      image: anubis,
      subject: "History",
      title: "Through the Ages",
      score: "0",
      tutorIcon: tutorIcon,
      tutorName: "Merwin Fernando",
      tutorSubject: "History",
    },
    {
      image: science4img,
      subject: "Chemistry",
      title: "Atomic Adventures",
      score: "30",
      tutorIcon: tutorIcon,
      tutorName: "Senanui Perera",
      tutorSubject: "Chemistry",
    },
  ];

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

          {/* Favourite Quizzes Slider */}
          <div>
            <h3 className="xl:text-[40px] md:text-[30px] text-[25px] font-bold mb-12">
              Favourite Quizzes
            </h3>
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 mb-12" style={{ width: "max-content" }}>
              {quizCardData.map((quiz, index) => (
                <div
                  key={index}
                  className="min-w-[25%] flex-shrink-0" // 25% width for 4 cards
                  style={{ width: "calc(25% - 1rem)" }} // Adjust for gap
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
                    tutorIcon={quiz.tutorIcon}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Overall Progress */}
          <div>
            <h3 className="xl:text-[40px] md:text-[30px] text-[25px] font-bold mb-12">
              Your Overall Progress
            </h3>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 ">
            <div className="p-5 bg-white rounded-3xl  flex justify-between items-center border border-gray-200">
              <h4 className="font-bold text-left md:text-[22px] text-[20px]">
                Attempted Quizzes
              </h4>
              <p className="text-right font-semibold md:text-[40px] text-[30px]">
                20
              </p>
            </div>
            <div className="p-5 bg-white rounded-3xl  flex justify-between items-center border border-gray-200">
              <h4 className="font-bold text-left md:text-[22px] text-[20px]">
                Completed Quizzes
              </h4>
              <p className="text-right font-semibold md:text-[40px] text-[30px]">
                20
              </p>
            </div>
            <div className="p-5 bg-white rounded-3xl  flex justify-between items-center border border-gray-200">
              <h4 className="font-bold text-left md:text-[22px] text-[20px]">
                Number of Favourites
              </h4>
              <p className="text-right font-semibold md:text-[40px] text-[30px]">
                5
              </p>
            </div>
            <div className="p-5 bg-white rounded-3xl  flex justify-between items-center border border-gray-200">
              <h4 className="font-bold text-left md:text-[22px] text-[20px]">
                Score Points
              </h4>
              <p className="text-right font-semibold md:text-[40px] text-[30px]">
                200
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex flex-col w-4/12 p-8">
          {/* Profile Card */}
          <div className="">
            <h3 className="xl:text-[40px] md:text-[30px] text-[25px] font-bold mb-4">
              Profiles
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ProfileCard
              name="Dulsi Rathnayake"
              email="dulsirathnayake@gmail.com"
              phone="077-060-0214"
              address="24/75 1st Lane Boralasgamuwa"
              profileImage={profileImage}
              greeting={getGreeting()}
              onEdit={handleEdit}
              progress={75}
            />
          </div>

          {/* Static Table */}
          <div className="mt-8">
            <h3 className="xl:text-[40px] md:text-[30px] text-[25px] font-bold mb-4">
              Statistic
            </h3>
          </div>
          <div className="mt-8">
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
