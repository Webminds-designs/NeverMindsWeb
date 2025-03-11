import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import nlogo from "../assets/nlogo.png"; // Logo
import educationIcon from "../assets/education.svg"; // Quiz Icon

const QuizOTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isError, setIsError] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    const enteredOTP = otp.join("");
    // Using 111111 as the correct OTP
    if (enteredOTP === "111111") {
      setIsError(false);
      setIsVerified(true);
      setTimeout(() => navigate("/quizguidelines"), 1000); // Redirect after 1 second
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fdf6e4] relative">
      {/* Logo on top left */}
      <div className="absolute top-6 left-6">
        <img src={nlogo} alt="Logo" className="w-12 h-8" />
      </div>

      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 right-6 bg-black text-white px-4 py-2 rounded-lg"
      >
        Go Back
      </button>

      {/* OTP Box */}
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-lg w-full text-center">
        <img src={educationIcon} alt="Quiz Icon" className="w-24 mx-auto mb-6" />
        <h2 className="text-3xl font-semibold">Algebra Fundamentals</h2>
        <p className="text-gray-600 mt-3">
          Please enter the verification code sent to your email to access the quiz
        </p>

        <div className="mt-6">
          <p className="text-left font-medium mb-2 text-gray-800">Verification Code</p>
          {isError && (
            <p className="text-red-500 text-sm font-medium text-left mb-2">Incorrect Verification Code</p>
          )}
          <div className="flex justify-center gap-3">
            {otp.map((value, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                className={`w-14 h-14 text-center text-2xl font-semibold border-2 rounded-lg focus:outline-none transition-all ${
                  isError ? "border-red-500 text-red-600 bg-red-100" : "border-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={isVerified}
          className={`mt-6 w-full py-3 text-lg rounded-lg text-white font-semibold transition-all ${
            isVerified ? "bg-green-500 hover:bg-green-600" : isError ? "bg-red-400 hover:bg-red-500" : "bg-yellow-400 hover:bg-yellow-500"
          }`}
        >
          {isVerified ? "Verified" : isError ? "Try Again" : "Verify Code"}
        </button>

        <p className="text-sm text-gray-500 mt-4">
          Having trouble? <a href="#" className="text-black font-medium">Contact Support</a>
        </p>
      </div>
    </div>
  );
};

export default QuizOTPVerification;
