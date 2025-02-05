import React, { useEffect, useState ,useContext } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation for page detection
import nlogo from "../assets/nlogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import profileImg from "../assets/girl.jpg";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import { MdLanguage } from "react-icons/md"; // Import Language Icon
import { LanguageContext } from "../context/LanguageContext";
import content from '../components/content/HeaderContent.json'

const Header = () => {
  const location = useLocation(); // Get the current route
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { language, toggleLanguage } = useContext(LanguageContext); 

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to determine when to show the Language Icon
  const shouldShowLanguageIcon = () => {
    return (
      location.pathname === "/quizguidelines" ||
      location.pathname === "/quizzes"
    );
  };

  // Function to determine if only the logo & language icon should be displayed
  const isQuizPage = () => {
    return location.pathname === "/quiz";
  };

  return (
    <header className="bg-transparent p-5 font-Parkinsans">
      <div className="w-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-start">
          <img src={nlogo} alt="NeverMinds Logo" className="h-15 w-12" />
        </div>

        {/* If on Quiz Page, show ONLY Logo & Language Icon */}
        {isQuizPage() ? (
          <MdLanguage className="h-6 w-6 text-yellow-500 cursor-pointer" />
        ) : (
          <>
            {/* Navigation Links - Hidden on Quiz Page */}
            <nav
              className={`flex-1 ml-20 ${isMenuOpen ? "block" : "hidden"
                } lg:block`}
            >
              <ul className="lg:flex hidden space-y-4 lg:space-y-0 lg:space-x-6 text-lg font-semibold text-gray-700">
                <li>
                  <Link
                    to="/hero"
                    className="hover:text-[#FFD448] transition-colors"
                  >
                    {content[language].home}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quizzes"
                    className="hover:text-[#FFD448] transition-colors"
                  >
                    {content[language].quizzes}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-[#FFD448] transition-colors"
                  >
                    {content[language].services}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutus"
                    className="hover:text-[#FFD448] transition-colors"
                  >
                    {content[language].aboutUs}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right Side: Profile & Language Icon */}
            <div className="lg:flex hidden text-lg items-center space-x-4 ml-auto">
              {/* Show Language Icon only on QuizGuidelines & Quizzes */}
              {shouldShowLanguageIcon() && (
                <MdLanguage className="h-6 w-6 text-yellow-500 cursor-pointer" />
              )}

              {/* Language button */}
              <button onClick={toggleLanguage} className="hover:text-[#FFD448] transition-colors ">
                {language === "en" ? "සිං | Eng" : "Eng | සිං"}
              </button>
              {user ? (
                <div
                  className="relative w-10 h-10 rounded-full border-2 border-[#FFD448] cursor-pointer"
                  onClick={handleProfileClick}
                >
                  <img
                    src={profileImg}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  {isProfileOpen && (
                    <div className="absolute top-12 right-0 bg-white text-black py-4 px-5 rounded-lg shadow-lg z-50">
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-2 text-gray-700 font-medium hover:text-[#FFD448] transition-colors"
                      >
                        <FaTachometerAlt size={18} />   {content[language].dashboard}
                      </Link>
                      <Link
                        to="/logout"
                        className="flex items-center gap-2 text-gray-700 font-medium hover:text-[#FFD448] transition-colors mt-2"
                      >
                        <FaSignOutAlt size={18} />  {content[language].logout}
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <button className="text-black font-bold py-2 px-6 rounded-2xl hover:bg-yellow-300 transition duration-200">
                    {content[language].login}
                  </button>
                  <button className="bg-yellow-300 text-black font-bold py-2 px-6 rounded-2xl border border-[#FFD448] hover:bg-yellow-100 transition duration-200">
                    {content[language].signUp}
                  </button>
                </>
              )}
            </div>

            {/* Mobile Header: Hamburger & Profile Icon Aligned to Right */}
            <div className="lg:hidden flex items-center ml-auto space-x-4">
              {/* Hamburger Menu */}
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                <RxHamburgerMenu size={30} />
              </button>

              {/* Profile Icon */}
              {user ? (
                <div className="relative w-10 h-10 rounded-full border-2 border-[#FFD448] cursor-pointer" onClick={handleProfileClick}>
                  <img src={profileImg} alt="User Profile" className="w-10 h-10 rounded-full" />
                  {isProfileOpen && (
                    <div className="absolute top-12 right-0 bg-white text-black py-4 px-5 rounded-lg shadow-lg z-50">
                      <Link to="/dashboard" className="flex items-center gap-2 text-gray-700 font-medium hover:text-[#FFD448] transition-colors">
                        <FaTachometerAlt size={18} />  {content[language].dashboard}
                      </Link>
                      <Link to="/logout" className="flex items-center gap-2 text-gray-700 font-medium hover:text-[#FFD448] transition-colors mt-2">
                        <FaSignOutAlt size={18} /> {content[language].logout}
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <button className="text-black font-bold py-2 px-4 rounded-2xl hover:bg-yellow-300 transition duration-200">
                  {content[language].login}
                </button>
              )}


            </div>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center mt-4 space-y-4 bg-gray-100 py-4 px-6 rounded-lg shadow-lg">
          <Link
            to="/home"
            className="text-gray-700 text-lg font-medium hover:text-[#FFD448] transition-colors"
          >
            {content[language].home}
          </Link>
          <Link
            to="/about-us"
            className="text-gray-700 text-lg font-medium hover:text-[#FFD448] transition-colors"
          >
            {content[language].aboutUs}
          </Link>
          <Link
            to="/services"
            className="text-gray-700 text-lg font-medium hover:text-[#FFD448] transition-colors"
          >
            {content[language].services}
          </Link>
          <Link
            to="/quizzes"
            className="text-gray-700 text-lg font-medium hover:text-[#FFD448] transition-colors"
          >
            {content[language].quizzes}
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-700 text-lg font-medium hover:text-[#FFD448] transition-colors"
          >
            {content[language].dashboard}
          </Link>
          <button className="text-black font-bold py-2 px-6 rounded-2xl hover:bg-yellow-300 transition duration-200">
            {content[language].login}
          </button>
          <button className="bg-yellow-300 text-black font-bold py-2 px-6 rounded-2xl border border-[#FFD448] hover:bg-yellow-100 transition duration-200">
            {content[language].signUp}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
