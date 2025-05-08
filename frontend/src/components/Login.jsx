import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLoginMutation } from "../redux/slices/authSlice";
import { toast } from "react-hot-toast";
import nlogo from "../assets/nlogo.png";
import { motion } from "framer-motion";
import buwa from "../assets/buwa.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // RTK Query hook for login
  const [login, { isLoading, isError, error, isSuccess, data }] =
    useLoginMutation();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      // Call the login mutation with credentials
      const result = await login({ email, password }).unwrap();

      // Store the token and user info in localStorage
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      toast.success("Login successful!");

      // Redirect based on user role
      if (result.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Login failed:", err);
      toast.error(
        err.data?.message || "Login failed. Please check your credentials."
      );
    }
  };

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  // Animation handler
  const handleRegisterClick = () => {
    // Use localStorage to set animation direction
    localStorage.setItem("authDirection", "login-to-register");
    navigate("/register");
  };

  return (
    <div className="w-screen h-screen flex justify-between items-center bg-[#FFD448] p-10 overflow-hidden">
      {/* Image part - animate from right to left */}
      <motion.div
        className="w-1/2 h-full flex items-center justify-center"
        initial={{
          x:
            localStorage.getItem("authDirection") === "register-to-login"
              ? "100%"
              : 0,
        }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <img
          src={buwa}
          alt="Learning Illustration"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Login part - animate from left to right */}
      <motion.div
        className="flex flex-col items-center justify-center bg-[#FFFEF6] w-1/2 h-full rounded-2xl shadow-lg p-8"
        initial={{
          x:
            localStorage.getItem("authDirection") === "register-to-login"
              ? "-100%"
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
        <h1 className="text-[60px] font-bold capitalize mb-4">Step Back In</h1>

        {/* Subheading */}
        <p className="text-[#1B191C] text-[28px] capitalize text-center mb-8">
          Pick up right where you left off and keep the learning going!
        </p>

        {/* Google Login Button */}
        <button className="flex items-center justify-center gap-3 w-full max-w-md border border-black rounded-2xl py-3 px-4 mb-6 hover:bg-gray-50 transition mt-10">
          <FcGoogle className="text-2xl" />
          <span className="text-gray-600 text-xl">Login with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center w-full max-w-md mb-10 mt-10">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="mx-4 text-gray-500">or</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="w-full max-w-md space-y-8 mb-6">
          {/* Email Input - Changed from Username */}
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full py-3 px-12 border border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
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
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Login Button */}
          <div className="flex justify-center w-full">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-1/2 bg-[#1B191C] text-white text-[28px] py-2 px-5 rounded-2xl hover:bg-gray-800 transition ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </div>

          {/* Error Message */}
          {isError && (
            <div className="text-red-500 text-center">
              {error?.data?.message || "Login failed. Please try again."}
            </div>
          )}
        </form>

        {/* Sign Up Link */}
        <div className="text-[22px] mt-10">
          Don't have an account?{" "}
          <button
            onClick={handleRegisterClick}
            className="text-yellow-600 font-medium hover:underline"
          >
            Sign up
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
