import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSignupMutation } from "../redux/slices/authSlice";
import { toast } from "react-hot-toast";
import nlogo from "../assets/nlogo.png";
import { motion } from "framer-motion";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // RTK Query hook for signup
  const [signup, { isLoading, isError, error, isSuccess }] =
    useSignupMutation();

  // If signup is successful, navigate to subject selection
  useEffect(() => {
    if (isSuccess) {
      navigate("/subject-selection");
    }
  }, [isSuccess, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      // Store complete registration data for subject selection page
      localStorage.setItem(
        "registerData",
        JSON.stringify({
          name,
          email,
          password,
          mobile,
          role: "student", // Always student
        })
      );

      // Call the signup mutation but wait for subject selection before creating account
      // Just navigate to subject selection without creating the account yet
      navigate("/subject-selection");
    } catch (err) {
      console.error("Registration failed:", err);
      toast.error(
        err.data?.message || "Registration failed. Please try again."
      );
    }
  };

  // Animation handler
  const handleLoginClick = () => {
    // Use localStorage to set animation direction
    localStorage.setItem("authDirection", "register-to-login");
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen flex justify-between items-center bg-[#FFD448] p-10 overflow-hidden">
      {/* Register part - animate from right to left */}
      <motion.div
        className="flex flex-col items-center justify-center bg-[#FFFEF6] w-1/2 h-full rounded-2xl shadow-lg p-8 overflow-y-auto"
        initial={{
          x:
            localStorage.getItem("authDirection") === "login-to-register"
              ? "100%"
              : 0,
        }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
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
          Step in and start exploring quizzes tailored just for you!
        </p>

        {/* Google Login Button */}
        <button className="flex items-center justify-center gap-3 w-full max-w-md border border-black rounded-2xl py-3 px-4 mb-6 hover:bg-gray-50 transition">
          <FcGoogle className="text-2xl" />
          <span className="text-gray-600 text-xl">Sign up with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center w-full max-w-md mb-5 mt-5">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="mx-4 text-gray-500">or</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Register Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-8 mb-6"
        >
          {/* Username Input (changed to Name) */}
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full py-3 px-12 border border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
              required
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full py-3 px-12 border border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full py-3 px-12 border border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Mobile Number Input */}
          <div className="relative">
            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Contact Number"
              className="w-full py-3 px-12 border border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
            />
          </div>

          {/* Error Message */}
          {isError && (
            <div className="text-red-500 text-center">
              {error?.data?.message || "Registration failed. Please try again."}
            </div>
          )}

          {/* Next Button */}
          <div className="flex justify-center w-full">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-1/2 bg-[#1B191C] text-white text-[28px] py-2 px-5 rounded-2xl hover:bg-gray-800 transition ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Signing Up..." : "Next"}
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="text-[22px] mt-5">
          Already have an account?{" "}
          <button
            onClick={handleLoginClick}
            className="text-yellow-600 font-medium hover:underline"
          >
            Log in
          </button>
        </div>
      </motion.div>

      {/* Image part - animate from left to right */}
      <motion.div
        className="w-1/2 h-full flex items-center justify-center"
        initial={{
          x:
            localStorage.getItem("authDirection") === "login-to-register"
              ? "-100%"
              : 0,
        }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <img
          src="https://via.placeholder.com/500x600?text=Learning+Illustration"
          alt="Learning Illustration"
          className="max-h-full object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Register;
