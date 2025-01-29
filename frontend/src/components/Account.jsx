import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import Sidebar from "./SideBar"; // Import Sidebar
import userimg from "../assets/person.png"; // Profile Image

const Account = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const [firstName, setFirstName] = useState(""); // Empty Default
  const [lastName, setLastName] = useState(""); // Empty Default
  const [email, setEmail] = useState(""); // Empty Default
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="flex min-h-screen px-16">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white rounded-lg w-full">
        {/* Header */}
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold">Account</h1>
          <p className="text-gray-600">
            Manage Your Profile and Personalize Your Experience
          </p>
        </div>
        <hr className="border-yellow-500 my-4" />

        {/* Profile Picture */}
        <div className="flex items-center gap-4">
          <img
            src={userimg}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <p className="text-sm text-gray-500">PNG, JPEG under 15MB</p>
            <div className="flex items-end  gap-2 mt-2">
              <button className="bg-gray-100 px-4 py-2 rounded-md text-sm">
                Upload new picture
              </button>
              <button className="bg-gray-200 px-4 py-2 rounded-md text-sm">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Full Name */}
        <div className="mt-6">
          <h2 className="font-semibold">Full name</h2>
          <div className="flex gap-4 mt-2">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-gray-300 px-4 py-2 w-full rounded-md"
              placeholder="First name"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-gray-300 px-4 py-2 w-full rounded-md"
              placeholder="Last name"
            />
          </div>
        </div>

        {/* Contact Email */}
        <div className="mt-6">
          <h2 className="font-semibold">Contact email</h2>
          <p className="text-sm text-gray-500">
            Manage your account's email address
          </p>
          <div className="relative mt-2">
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 pl-10 pr-4 py-2 w-full rounded-md"
              placeholder="Email address"
            />
          </div>
          <button className="mt-2 flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md text-sm">
            <AiOutlinePlus /> Add another email
          </button>
        </div>

        {/* Password Section */}
        <div className="mt-6">
          <h2 className="font-semibold">Password</h2>
          <p className="text-sm text-gray-500">Modify your current password</p>
          <div className="relative mt-2">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="border border-gray-300 pl-10 pr-4 py-2 w-full rounded-md"
              placeholder="Current password"
            />
          </div>
          <div className="relative mt-2">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border border-gray-300 pl-10 pr-4 py-2 w-full rounded-md"
              placeholder="New password"
            />
          </div>
          <div className="mt-2 flex gap-2">
            <button className="bg-gray-200 px-4 py-2 rounded-md text-sm">
              Confirm new password
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-md text-sm">
              Cancel
            </button>
          </div>
        </div>

        {/* Account Security */}
        <div className="mt-6">
          <h2 className="font-semibold">Account security</h2>
          <p className="text-sm text-gray-500">Manage your account security</p>
          <div className="mt-3 flex gap-4">
            <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md text-sm">
              <BiLogOut /> Log out
            </button>
            <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md text-sm">
              <MdOutlineDelete /> Delete my account
            </button>
          </div>
        </div>

        <hr className="border-yellow-500 mt-6" />
      </div>
    </div>
  );
};

export default Account;
