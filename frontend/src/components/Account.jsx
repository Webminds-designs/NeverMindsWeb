import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import Sidebar from "./SideBar";
import userimg from "../assets/person.png";

const Account = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  // Error states
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Name validation handler
  const handleNameChange = (setter) => (e) => {
    const value = e.target.value.replace(/[^A-Za-z]/g, "");
    const processedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setter(processedValue);
  };

  // Email validation handler
  const validateEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(value) && value) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  // Password validation handler
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    if (value.length > 0 && value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="flex min-h-screen px-10">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 p-6 bg-white rounded-lg w-full container mx-auto">
        <h1 className="text-2xl font-bold">Account</h1>
        <p className="text-gray-600 font-semibold">
          Manage Your Profile and Personalize Your Experience
        </p>
        <hr className="border-yellow-500 my-4" />

        {/* Profile Picture Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={userimg}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Profile Picture</p>
              <p className="text-sm font-semibold text-gray-500">
                PNG, JPEG under 15MB
              </p>
            </div>
          </div>
          <div className="flex gap-2 font-semibold">
            <button className="bg-gray-100 px-4 py-2 rounded-md text-sm">
              Upload new picture
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-md text-sm">
              Delete
            </button>
          </div>
        </div>

        {/* Full Name Section */}
        <div className="mt-6">
          <h2 className="font-semibold">Full name</h2>
          <div className="flex gap-4 mt-2">
            <input
              type="text"
              value={firstName}
              onChange={handleNameChange(setFirstName)}
              className="border border-gray-300 px-4 py-2 w-full rounded-md"
              placeholder="First name"
              pattern="[A-Za-z]+"
              title="Only letters allowed"
            />
            <input
              type="text"
              value={lastName}
              onChange={handleNameChange(setLastName)}
              className="border border-gray-300 px-4 py-2 w-full rounded-md"
              placeholder="Last name"
              pattern="[A-Za-z]+"
              title="Only letters allowed"
            />
          </div>
        </div>
        <hr className="border-yellow-500 my-4" />

        {/* Contact Email Section */}
        <div className="mt-6 flex justify-between items-center">
          <div className="w-3/4">
            <h2 className="font-semibold">Contact email</h2>
            <p className="text-sm font-semibold text-gray-500">
              Manage your account's email address
            </p>
            <div className="relative mt-2">
              <FaEnvelope className="absolute left-3 top-3 text-yellow-500" />
              <input
                type="email"
                value={email}
                onChange={validateEmail}
                onBlur={validateEmail}
                className={`border ${
                  emailError ? "border-red-500" : "border-gray-300"
                } pl-10 pr-4 py-2 w-full rounded-md`}
                placeholder="Email address"
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>
          </div>
          <button className="font-semibold bg-gray-100 px-4 py-2 rounded-md text-sm flex items-center gap-2 h-fit">
            <AiOutlinePlus /> Add another email
          </button>
        </div>
        <hr className="border-yellow-500 my-4" />

        {/* Password Section */}
        <div className="mt-6">
          <div className="flex justify-between py-2">
            <div>
              <h2 className="font-semibold">Password</h2>
              <p className="text-sm font-semibold text-gray-500">
                Modify your current password
              </p>
            </div>
            <div className="mt-2 flex justify-end gap-2">
              <button className="font-semibold bg-gray-200 px-4 py-2 rounded-md text-sm">
                Confirm new password
              </button>
              <button className="font-semibold bg-gray-100 px-4 py-2 rounded-md text-sm">
                Cancel
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-2">
            <div className="relative w-1/2">
              <FaLock className="absolute left-3 top-3 text-yellow-500" />
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="border border-gray-300 pl-10 pr-4 py-2 w-full rounded-md"
                placeholder="Current password"
              />
            </div>
            <div className="relative w-1/2">
              <FaLock className="absolute left-3 top-3 text-yellow-500" />
              <input
                type="password"
                value={newPassword}
                onChange={handlePasswordChange}
                className={`border ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } pl-10 pr-4 py-2 w-full rounded-md`}
                placeholder="New Password"
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>
          </div>
        </div>
        <hr className="border-yellow-500 my-4" />

        {/* Account Security Section */}
        <div className="mt-6">
          <h2 className="font-semibold">Account security</h2>
          <p className="text-sm font-semibold text-gray-500">
            Manage your account security
          </p>
          <div className="mt-3 flex gap-4">
            <button className="flex items-center font-semibold gap-2 bg-gray-100 px-4 py-2 rounded-md text-sm">
              <BiLogOut /> Log out
            </button>
            <button className="flex items-center font-semibold gap-2 bg-red-500 text-white px-4 py-2 rounded-md text-sm">
              <MdOutlineDelete /> Delete my account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;