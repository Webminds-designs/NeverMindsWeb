import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import nlogo from "../assets/nlogo.png";
import educationIcon from "../assets/education.svg";

const QuizOTPVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { quiz } = location.state || {};
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isError, setIsError] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef([]);

  console.log("Quiz Data in OTP Page:", quiz);

  useEffect(() => {
    if (!quiz) {
      console.error("No quiz data found! Redirecting to quizzes...");
      navigate("/quizzes");
    } else {
      console.log("Quiz Data in OTP Page:", quiz);
    }
  }, [quiz, navigate]);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    if (!quiz) {
      console.error("Quiz data missing, cannot proceed.");
      return;
    }

    const enteredOTP = otp.join("");

    if (enteredOTP === "111111") {
      // Assuming "111111" is the correct OTP
      setIsError(false);
      setIsVerified(true);

      console.log("OTP Verified! Navigating to Quiz Guidelines...");

      setTimeout(() => {
        navigate("/quizguidelines", { state: { quiz } });
      }, 1000);
    } else {
      setIsError(true);
      console.error("Incorrect OTP! Showing 'Try Again'.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fdf6e4] relative">
      {/* Logo */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <img src={nlogo} alt="Logo" className="w-10 sm:w-12" />
      </div>

      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-gray-900 transition"
      >
        Go Back
      </button>

      {/* OTP Box */}
      <div className="bg-white px-6 sm:px-10 py-8 rounded-xl shadow-lg max-w-sm sm:max-w-lg w-full text-center">
        <img
          src={educationIcon}
          alt="Quiz Icon"
          className="w-16 sm:w-24 mx-auto mb-4 sm:mb-6"
        />
        <h2 className="text-xl sm:text-2xl font-semibold">
          {quiz?.title || "Private Quiz"}
        </h2>
        <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base">
          Enter the verification code sent to your email to access the quiz.
        </p>

        {/* OTP Inputs */}
        <div className="mt-4 sm:mt-6">
          <p className="text-left font-medium mb-2 text-gray-800">
            Verification Code
          </p>
          {isError && (
            <p className="text-red-500 text-sm font-medium text-left mb-2">
              Incorrect Verification Code
            </p>
          )}
          <div className="flex justify-center gap-2 sm:gap-3">
            {otp.map((value, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                className={`w-10 sm:w-12 h-10 sm:h-12 text-center text-lg sm:text-2xl font-semibold border-2 rounded-lg focus:outline-none transition-all ${
                  isError
                    ? "border-red-500 text-red-600 bg-red-100"
                    : "border-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Verify Button */}
        <button
          onClick={handleSubmit}
          disabled={isVerified}
          className={`mt-5 sm:mt-6 w-full py-2 sm:py-3 text-lg rounded-lg text-white font-semibold transition-all ${
            isVerified
              ? "bg-green-500 hover:bg-green-600"
              : isError
              ? "bg-red-400 hover:bg-red-500"
              : "bg-yellow-400 hover:bg-yellow-500"
          }`}
        >
          {isVerified ? "Verified" : isError ? "Try Again" : "Verify Code"}
        </button>

        <p className="text-sm text-gray-500 mt-4">
          Having trouble?{" "}
          <a href="#" className="text-black font-medium">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default QuizOTPVerification;
