import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import nlogo from "../assets/nlogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import profileImg from "../assets/girl.jpg";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const shouldShowLanguageIcon = () => {
    return location.pathname === "/quizguidelines" || location.pathname === "/quizzes";
  };

  const isQuizPage = () => {
    return location.pathname === "/quiz";
  };

  return (
    <header className="fixed z-50 w-full p-5 font-Parkinsans bg-white/10 backdrop-blur">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={nlogo} alt="NeverMinds Logo" className="h-15 w-12" />
        </div>

        {isQuizPage() ? (
          <MdLanguage className="h-6 w-6 text-yellow-500 cursor-pointer" />
        ) : (
          <>
            <nav className={`flex-1 ml-20 ${isMenuOpen ? "block" : "hidden"} lg:block`}>
              <ul className="lg:flex hidden space-y-4 lg:space-y-0 lg:space-x-6 text-[22px] font-regular text-black">
                <li>
                  <a href to="#home" className="hover:text-[#FFD448] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <Link to="/quizzes" className="hover:text-[#FFD448] transition-colors pl-20">
                    Quizzes
                  </Link>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#FFD448] transition-colors pl-20">
                    Services
                  </a>
                </li>
                <li>
                  <Link to="/aboutus" className="hover:text-[#FFD448] transition-colors pl-20">
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="lg:flex hidden text-lg items-center space-x-6 ml-auto">
              {shouldShowLanguageIcon() && (
                <MdLanguage className="h-6 w-6 text-yellow-500 cursor-pointer" />
              )}

              {user ? (
                <div
                  className="relative w-10 h-10 rounded-full border-2 border-[#FFD448] cursor-pointer"
                  onClick={handleProfileClick}
                >
                  <img src={profileImg} alt="User Profile" className="w-10 h-10 rounded-full" />
                  {isProfileOpen && (
                    <div className="absolute top-12 right-0 bg-white text-black py-4 px-5 rounded-lg shadow-lg z-50">
                      <Link to="/dashboard" className="flex items-center gap-2 text-gray-700 font-medium hover:text-[#FFD448] transition-colors">
                        <FaTachometerAlt size={18} /> Dashboard
                      </Link>
                      <Link to="/logout" className="flex items-center gap-2 text-gray-700 font-medium hover:text-[#FFD448] transition-colors mt-2">
                        <FaSignOutAlt size={18} /> Logout
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <button className="text-black font-bold py-2 px-6 rounded-2xl hover:bg-yellow-300 transition duration-200">
                    Login
                  </button>
                  <button className="bg-yellow-300 text-black font-bold py-2 px-6 rounded-2xl border border-[#FFD448] hover:bg-yellow-100 transition duration-200">
                    Sign Up
                  </button>
                </>
              )}
            </div>

            <div className="lg:hidden flex items-center ml-auto space-x-4">
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                <RxHamburgerMenu size={30} />
              </button>

              {user ? (
                <div
                  className="relative w-10 h-10 rounded-full border-2 border-[#FFD448] cursor-pointer"
                  onClick={handleProfileClick}
                >
                  <img src={profileImg} alt="User Profile" className="w-10 h-10 rounded-full" />
                  {isProfileOpen && (
                    <div className="absolute top-12 right-0 bg-white text-black py-4 px-5 rounded-lg shadow-lg z-50">
                      <Link to="/dashboard" className="flex items-center gap-2 text-gray-700 font-medium hover:text-[#FFD448] transition-colors">
                        <FaTachometerAlt size={18} /> Dashboard
                      </Link>
                      <Link to="/logout" className="flex items-center gap-2 text-gray-700 font-medium hover:text-[#FFD448] transition-colors mt-2">
                        <FaSignOutAlt size={18} /> Logout
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <button className="text-black font-bold py-2 px-4 rounded-2xl hover:bg-yellow-300 transition duration-200">
                  Login
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
