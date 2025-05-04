import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useSignupMutation } from "../redux/slices/authSlice";
import logo from "../assets/logo_black.png";
import toast from "react-hot-toast";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const [signup, { isLoading }] = useSignupMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup({
        name,
        email,
        password,
        role: "admin"
      }).unwrap();
      
      toast.success("Registration successful!");
      navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err);
      toast.error(err.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#fffbeb]">
      <div className="m-auto w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-16" />
          <span className="text-lg font-semibold mt-4 ml-2">neverMinds</span>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Admin Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-yellow-500" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-yellow-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-yellow-500" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Create a password"
                required
                minLength={6}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg text-white font-semibold ${
              isLoading
                ? "bg-yellow-300 cursor-not-allowed"
                : "bg-yellow-400 hover:bg-yellow-500"
            } transition-colors`}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
