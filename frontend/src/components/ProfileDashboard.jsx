import React, { useState , useContext } from "react";
import { useRef } from "react";
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
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { LanguageContext } from "../context/LanguageContext";
import content from '../components/content/ProfileDashboardContent.json'

const tutorsData = [
  { name: "Dr. John Doe", subject: "Mathematics", profileIcon: tutorIcon },
  { name: "Dr. Jane Smith", subject: "Physics", profileIcon: tutorIcon },
  { name: "Dr. Alex Brown", subject: "Chemistry", profileIcon: tutorIcon }
];
const ProfileDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext); 

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
    {
      image: science4img,
      subject: "Chemistry",
      title: "Atomic Adventures",
      score: "30",
      tutorIcon: tutorIcon,
      tutorName: "Senanui Perera",
      tutorSubject: "Chemistry",
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

  const quizContainerRef = useRef(null);

  const scrollLeft = () => {
    if (quizContainerRef.current) {
      quizContainerRef.current.scrollLeft -= 300; // Adjust scroll amount
    }
  };

  const scrollRight = () => {
    if (quizContainerRef.current) {
      quizContainerRef.current.scrollLeft += 300;
    }
  };

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
            <h2
  className={`${
    language === "si"
      ? "xl:text-lg md:text-[12px] text-[10px]"
      : "xl:text-xl md:text-sm text-xs"
  } font-bold mb-2`}
>
  {content[language].title}
</h2>

<p
  className={`${
    language === "si"
      ? "xl:text-[40px] lg:text-[25px] md:text-[35px] text-[28px]"
      : "xl:text-[50px] lg:text-[30px] md:text-[40px] text-[30px]"
  } font-semibold mb-4`}
>
  {content[language].description}
  <br />
  {content[language].description2}
</p>

              <button className="flex items-center text-lg font-medium text-white hover:text-yellow bg-black py-2 px-4 rounded-full">
              {content[language].button}
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
            {content[language].favourite_quizzes}
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
          <div ref={quizContainerRef} className="overflow-x-auto scrollbar-hide flex gap-4 mb-12 px-2 md:px-0" style={{ scrollBehavior: "smooth" }}>
            {quizCardData.map((quiz, index) => (
              <div key={index} className="min-w-[60%] md:min-w-[30%] lg:min-w-[25%] flex-shrink-0"
               
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
                  showScore={true}
                />
              </div>
            ))}
          </div>

          {/* Overall Progress */}
          <div>
          <h3
  className={`${
    language === "si"
      ? "xl:text-[35px] md:text-[25px] text-[20px]"
      : "xl:text-[40px] md:text-[30px] text-[25px]"
  } font-bold mb-12`}
>
  {content[language].your_overall_progress}
</h3>

          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 ">
            <div className="p-5 bg-white rounded-3xl  flex justify-between items-center border border-gray-200">
            <h4
  className={`${
    language === "si"
      ? "md:text-[18px] text-[16px]"
      : "md:text-[22px] text-[20px]"
  } font-bold text-left`}
>
  {content[language].attempted_quizzes}
</h4>

              <p className="text-right font-semibold md:text-[40px] text-[30px]">
                20
              </p>
            </div>
            <div className="p-5 bg-white rounded-3xl  flex justify-between items-center border border-gray-200">
            <h4
  className={`${
    language === "si"
      ? "md:text-[18px] text-[16px]"
      : "md:text-[22px] text-[20px]"
  } font-bold text-left`}
>
  {content[language].completed_quizzes}
</h4>

              <p className="text-right font-semibold md:text-[40px] text-[30px]">
                20
              </p>
            </div>
            <div className="p-5 bg-white rounded-3xl  flex justify-between items-center border border-gray-200">
            <h4
  className={`${
    language === "si"
      ? "md:text-[18px] text-[16px]"
      : "md:text-[22px] text-[20px]"
  } font-bold text-left`}
>
  {content[language].number_of_favourites}
</h4>

              <p className="text-right font-semibold md:text-[40px] text-[30px]">
                5
              </p>
            </div>
            <div className="p-5 bg-white rounded-3xl  flex justify-between items-center border border-gray-200">
            <h4
  className={`${
    language === "si"
      ? "md:text-[18px] text-[16px]"
      : "md:text-[22px] text-[20px]"
  } font-bold text-left`}
>
  {content[language].score_points}
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
          <h3
  className={`${
    language === "si"
      ? "xl:text-[35px] md:text-[25px] text-[20px]"
      : "xl:text-[40px] md:text-[30px] text-[25px]"
  } font-bold mb-4`}
>
  {content[language].profiles}
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
              progress={85}
            />
          </div>

          {/* Static Table */}
          <div className="mt-8">
          <h3
  className={`${
    language === "si"
      ? "xl:text-[35px] md:text-[25px] text-[20px]"
      : "xl:text-[40px] md:text-[30px] text-[25px]"
  } font-bold mb-4`}
>
  {content[language].statistic}
</h3>

          </div>
          <div className="mt-8">
            <DashBarChart />
          </div>

          {/* Tutors */}
          <div className="mt-8">
            <Tutors tutors={tutorsData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileDashboard;
