import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSignupMutation } from "../redux/slices/authSlice";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import nlogo from "../assets/nlogo.png";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form validation errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();
  const [signup, { isLoading, isSuccess, isError, error }] =
    useSignupMutation();

  // Validation functions
  const validateName = (value) => {
    if (!value.trim()) return "Name is required";
    if (value.length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "Email is required";
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return "";
  };

  const validatePassword = (value) => {
    if (!value) return "Password is required";
    if (value.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const validateConfirmPassword = (value, password) => {
    if (!value) return "Please confirm your password";
    if (value !== password) return "Passwords do not match";
    return "";
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const nameValidationError = validateName(name);
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);
    const confirmPasswordValidationError = validateConfirmPassword(
      confirmPassword,
      password
    );

    setNameError(nameValidationError);
    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);
    setConfirmPasswordError(confirmPasswordValidationError);

    // If validation passes, attempt registration
    if (
      !nameValidationError &&
      !emailValidationError &&
      !passwordValidationError &&
      !confirmPasswordValidationError
    ) {
      try {
        const result = await signup({ name, email, password, role }).unwrap();
        toast.success("Registration successful! Please log in.");
        navigate("/login");
      } catch (err) {
        console.error("Registration failed:", err);
        // More specific error handling
        if (err.status === "FETCH_ERROR") {
          toast.error(
            "Cannot connect to server. Please check if the backend is running."
          );
        } else if (err.data && err.data.message) {
          toast.error(err.data.message);
        } else {
          toast.error("Registration failed. Please try again later.");
        }
      }
    }
  };

  // Effect to handle API response states
  useEffect(() => {
    if (isError) {
      toast.error(
        error?.data?.message || "Registration failed. Please try again."
      );
    }
  }, [isError, error]);

  return (
    <div className="flex min-h-screen bg-[#fffbeb]">
      <div className="m-auto w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={nlogo} alt="NeverMinds Logo" className="h-16" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-yellow-500" />
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError("");
                }}
                className={`w-full pl-10 pr-4 py-2 border ${
                  nameError ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                placeholder="Enter your full name"
              />
            </div>
            {nameError && (
              <p className="mt-1 text-red-500 text-sm">{nameError}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-yellow-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                className={`w-full pl-10 pr-4 py-2 border ${
                  emailError ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                placeholder="Enter your email"
              />
            </div>
            {emailError && (
              <p className="mt-1 text-red-500 text-sm">{emailError}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-yellow-500" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
                className={`w-full pl-10 pr-12 py-2 border ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                placeholder="Create a password"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {passwordError && (
              <p className="mt-1 text-red-500 text-sm">{passwordError}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-yellow-500" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setConfirmPasswordError("");
                }}
                className={`w-full pl-10 pr-12 py-2 border ${
                  confirmPasswordError ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                placeholder="Confirm your password"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {confirmPasswordError && (
              <p className="mt-1 text-red-500 text-sm">
                {confirmPasswordError}
              </p>
            )}
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              I am a
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="student"
                  checked={role === "student"}
                  onChange={() => setRole("student")}
                  className="mr-2 text-yellow-500 focus:ring-yellow-500"
                />
                Student
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="teacher"
                  checked={role === "teacher"}
                  onChange={() => setRole("teacher")}
                  className="mr-2 text-yellow-500 focus:ring-yellow-500"
                />
                Teacher
              </label>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg text-white font-semibold ${
              isLoading
                ? "bg-yellow-300 cursor-not-allowed"
                : "bg-yellow-400 hover:bg-yellow-500"
            } transition-colors mt-6`}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>

          {/* Login Link */}
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-yellow-600 hover:text-yellow-700 font-medium"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
