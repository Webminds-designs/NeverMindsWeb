import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUpdateStudentProfileMutation } from "../redux/slices/userSlice";
import { toast } from "react-hot-toast";
import nlogo from "../assets/nlogo.png";

const SubjectSelection = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState("Grade 10");
  const [showGradeDropdown, setShowGradeDropdown] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  // RTK Query hook for updating student profile
  const [updateStudentProfile, { isLoading }] =
    useUpdateStudentProfileMutation();

  // Get user data from local storage
  useEffect(() => {
    const storedData = localStorage.getItem("registerData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      // If no data, redirect to register
      navigate("/register");
    }
  }, [navigate]);

  // Grades list
  const grades = [
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
    "Grade 13",
  ];

  // List of available subjects
  const subjects = [
    "Science",
    "Mathematics",
    "Sinhala",
    "History",
    "English Literature",
    "ICT",
    "English",
    "Buddhism",
    "Business studies & Accounting",
  ];

  const toggleSubject = (subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const handleGetStarted = async () => {
    if (!userData?.email) {
      toast.error("Missing user data. Please register again.");
      navigate("/register");
      return;
    }

    // Get the user ID from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;

    if (!userId) {
      toast.error("You need to be logged in to continue.");
      navigate("/login");
      return;
    }

    try {
      // Update student profile with selected subjects and grade
      await updateStudentProfile({
        id: userId,
        studentDetails: {
          interestTags: selectedSubjects,
          grade: selectedGrade,
        },
      }).unwrap();

      // Save selected subjects locally as well
      localStorage.setItem(
        "selectedSubjects",
        JSON.stringify(selectedSubjects)
      );
      localStorage.setItem("grade", selectedGrade);

      toast.success("Profile updated successfully!");

      // Navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error("Failed to update profile:", err);
      toast.error(err?.data?.message || "Failed to update profile");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-between items-center bg-[#FFD448] p-10">
      {/* Content part - same style as register page */}
      <div className="flex flex-col items-center justify-center bg-[#FFFEF6] w-1/2 h-full rounded-2xl shadow-lg p-8 overflow-y-auto">
        {/* Logo and brand */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2">
          <span>
            <img src={nlogo} alt="" />
          </span>
        </div>
        <div className="text-[#1E1E1E] text-[36px] font-script mb-6">
          nevermind
        </div>

        {/* Heading */}
        <h1 className="text-[60px] font-bold capitalize mb-4">
          Ready to Learn?
        </h1>

        {/* Subheading */}
        <p className="text-[#1B191C] text-[28px] capitalize text-center mb-8">
          Pick your subjects to kickstart your personalized learning experience!
        </p>

        {/* Grade Selector */}
        <div className="w-full max-w-md flex items-center justify-center mb-8">
          <div
            className="flex items-center justify-between bg-[#FFD4481A] px-6 py-2 rounded-2xl w-full cursor-pointer relative"
            onClick={() => setShowGradeDropdown(!showGradeDropdown)}
          >
            <div className="flex items-center">
              <span className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </span>
              <span className="text-lg">{selectedGrade}</span>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>

            {/* Grade Dropdown */}
            {showGradeDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {grades.map((grade, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedGrade(grade);
                      setShowGradeDropdown(false);
                    }}
                  >
                    {grade}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Subject Selection */}
        <div className="w-full max-w-3xl flex flex-wrap justify-center gap-4 mb-2">
          {subjects.map((subject, index) => (
            <button
              key={index}
              onClick={() => toggleSubject(subject)}
              className={`py-3 px-8 rounded-2xl border border-yellow-400 hover:border-yellow-500 text-center transition-all ${
                selectedSubjects.includes(subject)
                  ? "bg-[#FFD448] border-2 border-[#FFD448] text-black font-medium"
                  : "bg-white border-2 border-gray-300 hover:border-gray-400"
              } ${
                // Adjust widths dynamically based on subject name length or position
                subject.length > 15
                  ? "w-auto flex-grow"
                  : index % 3 === 0
                  ? "w-1/3"
                  : index % 2 === 0
                  ? "w-2/5"
                  : "w-1/4"
              }`}
            >
              {subject}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-end justify-center w-full mb-8 mr-[10rem]">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-gray-500 text-lg hover:underline"
          >
            skip
          </button>
        </div>

        {/* Get Started Button */}
        <div className="flex flex-col items-center w-full gap-4">
          <button
            onClick={handleGetStarted}
            disabled={isLoading}
            className={`bg-[#1B191C] text-white text-[22px] py-3 px-10 rounded-2xl hover:bg-gray-800 transition ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Saving..." : "Get Started"}
          </button>
        </div>

        {/* Sign In Link */}
        <div className="text-[22px] mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-600 font-medium hover:underline"
          >
            Log in
          </Link>
        </div>
      </div>

      {/* Image part */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <img
          src="https://via.placeholder.com/500x600?text=Learning+Illustration"
          alt="Learning Illustration"
          className="max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default SubjectSelection;
