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
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    return (
      location.pathname === "/quizguidelines" ||
      location.pathname === "/quizzes"
    );
  };

  const isQuizPage = () => {
    return location.pathname === "/quiz";
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const closeMenuOnClickOutside = (event) => {
      if (
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".hamburger-btn")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMenuOnClickOutside);
    return () => {
      document.removeEventListener("click", closeMenuOnClickOutside);
    };
  }, []);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full p-5 font-Parkinsans sm:bg-transparent sm:backdrop-blur-md transition-transform duration-300 z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={nlogo} alt="NeverMinds Logo" className="h-15 w-12" />
        </div>

        {isQuizPage() ? (
          <MdLanguage className="h-6 w-6 text-yellow-500 cursor-pointer" />
        ) : (
          <>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 ml-20">
              <ul className="flex space-x-6 text-[22px] font-regular text-black gap-10">
                <li>
                  <a
                    href="#home"
                    className="hover:text-[#FFD448] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <Link
                    to="/quizzes"
                    className="hover:text-[#FFD448] transition-colors"
                  >
                    Quizzes
                  </Link>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#FFD448] transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <Link
                    to="/aboutus"
                    className="hover:text-[#FFD448] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Desktop Profile & Language Icon */}
            <div className="hidden lg:flex text-lg items-center space-x-6 ml-auto">
              {shouldShowLanguageIcon() && (
                <MdLanguage className="h-6 w-6 text-yellow-500 cursor-pointer" />
              )}

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
                        <FaTachometerAlt size={18} /> Dashboard
                      </Link>
                      <Link
                        to="/logout"
                        className="flex items-center gap-2 text-gray-700 font-medium hover:text-[#FFD448] transition-colors mt-2"
                      >
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

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none hamburger-btn"
              >
                <RxHamburgerMenu size={30} />
              </button>

              {/* Mobile Menu Dropdown */}
              <div
                className={`fixed inset-0 w-full h-max backdrop-blur-xl bg-black/90 flex flex-col items-center justify-center space-y-6 text-xl font-normal transition-transform duration-300 ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
                }`}
              >
                <button
                  onClick={toggleMenu}
                  className="absolute top-6 right-6 text-white text-3xl"
                >
                  ✕
                </button>
                <Link
                  to="/quizzes"
                  className="text-white hover:text-yellow-500 transition-colors"
                >
                  Quizzes
                </Link>
                <a
                  href="#services"
                  className="text-white hover:text-yellow-500 transition-colors"
                >
                  Services
                </a>
                <Link
                  to="/aboutus"
                  className="text-white hover:text-yellow-500 transition-colors"
                >
                  About Us
                </Link>
                <hr className="w-2/3 border-gray-300" />

                {/* Profile or Login Buttons */}
                {user ? (
                  <div className="flex flex-col items-center space-y-4">
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-2 text-white hover:text-[#FFD448] transition-colors"
                    >
                      <FaTachometerAlt size={18} /> Dashboard
                    </Link>
                    <Link
                      to="/logout"
                      className="flex items-center gap-2 text-white hover:text-[#FFD448] transition-colors pb-4"
                    >
                      <FaSignOutAlt size={18} /> Logout
                    </Link>
                  </div>
                ) : (
                  <button className="bg-yellow-300 text-black font-bold py-3 px-8 rounded-2xl hover:bg-yellow-400 transition duration-200">
                    Login
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
