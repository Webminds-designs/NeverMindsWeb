import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import Sidebar from "./SideBar";
import userimg from "../assets/person.png";
import {
  useGetUserProfileQuery,
  useUpdateStudentProfileMutation,
  useUpdateTeacherProfileMutation,
  useDeleteUserMutation,
} from "../redux/slices/userSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const navigate = useNavigate();

  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");

  // Validation states
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Get user from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  // Fetch user profile using the query hook
  const {
    data: profileData,
    isLoading,
    isError,
    error,
  } = useGetUserProfileQuery(userId, {
    skip: !userId,
  });

  // Update profile mutation hooks for different roles
  const [updateStudentProfile, { isLoading: isUpdatingStudent }] =
    useUpdateStudentProfileMutation();
  const [updateTeacherProfile, { isLoading: isUpdatingTeacher }] =
    useUpdateTeacherProfileMutation();
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  // Combined loading state
  const isUpdating = isUpdatingStudent || isUpdatingTeacher;

  // Populate form fields when profile data is loaded
  useEffect(() => {
    if (profileData) {
      const nameParts = profileData.name.split(" ");
      setFirstName(nameParts[0] || "");
      setLastName(nameParts.slice(1).join(" ") || "");
      setEmail(profileData.email || "");
      setRole(profileData.role || "");

      // Set phone based on role
      if (profileData.role === "student" && profileData.studentDetails) {
        setPhone(profileData.studentDetails.guardianContact || "");
      } else if (profileData.role === "teacher" && profileData.teacherDetails) {
        setPhone(profileData.teacherDetails.contactNo || "");
      }
    }
  }, [profileData]);

  // Handle validation and update error messages
  const handleNameChange = (setter) => (e) => {
    const value = e.target.value.replace(/[^A-Za-z]/g, "");
    setter(value.charAt(0).toUpperCase() + value.slice(1));
  };

  const validateEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(
      !re.test(value) && value ? "Please enter a valid email address" : ""
    );
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    setPasswordError(
      value.length > 0 && value.length < 8
        ? "Password must be at least 8 characters"
        : ""
    );
  };

  // Handle form submission
  const handleSaveProfile = async () => {
    if (emailError || passwordError) {
      toast.error("Please fix the validation errors before saving");
      return;
    }

    try {
      const fullName = `${firstName} ${lastName}`.trim();

      // Base payload with name
      const payload = {
        name: fullName,
      };

      if (role === "student") {
        // For student profile updates, include studentDetails properties
        await updateStudentProfile({
          id: userId,
          ...payload,
          studentDetails: {
            guardianContact: phone,
          },
        }).unwrap();
      } else if (role === "teacher") {
        // For teacher profile updates, include teacherDetails properties
        await updateTeacherProfile({
          id: userId,
          ...payload,
          teacherDetails: {
            contactNo: phone,
          },
        }).unwrap();
      }

      toast.success("Profile updated successfully!");

      // Refresh the data after successful update
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (err) {
      console.error("Failed to update profile:", err);
      toast.error(err?.data?.message || "Failed to update profile");
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  // Handle account deletion
  const handleDeleteAccount = async () => {
    if (
      confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      try {
        // Call delete user API
        await deleteUser(userId).unwrap();
        toast.success("Account deleted successfully");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      } catch (err) {
        console.error("Failed to delete account:", err);
        toast.error(err?.data?.message || "Failed to delete account");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 p-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
            <div className="h-40 bg-gray-200 rounded mb-6"></div>
            <div className="h-40 bg-gray-200 rounded mb-6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 p-6">
          <div className="bg-red-100 p-4 rounded-lg text-red-700">
            Failed to load account data:{" "}
            {error?.data?.message || "Unknown error"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen px-4 sm:px-8 lg:px-10 mt-8">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 p-4 sm:p-6 bg-white rounded-lg w-full container mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold">Account</h1>
        <p className="text-gray-600 font-semibold">
          Manage Your Profile and Personalize Your Experience
        </p>
        <hr className="border-yellow-500 my-4" />

        {/* Profile Picture Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={profileData?.profileImage || userimg}
              alt="Profile"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Profile Picture</p>
              <p className="text-sm font-semibold text-gray-500">
                PNG, JPEG under 15MB
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 font-semibold">
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
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <input
              type="text"
              value={firstName}
              onChange={handleNameChange(setFirstName)}
              className="border border-gray-300 px-4 py-2 w-full rounded-md"
              placeholder="First name"
            />
            <input
              type="text"
              value={lastName}
              onChange={handleNameChange(setLastName)}
              className="border border-gray-300 px-4 py-2 w-full rounded-md"
              placeholder="Last name"
            />
          </div>
        </div>
        <hr className="border-yellow-500 my-4" />

        {/* Role and Phone */}
        <div className="mt-6">
          <h2 className="font-semibold">Account Details</h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <div className="w-full sm:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <input
                type="text"
                value={role.charAt(0).toUpperCase() + role.slice(1)}
                className="border border-gray-300 px-4 py-2 w-full rounded-md bg-gray-50"
                disabled
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {role === "student" ? "Guardian Contact" : "Contact Number"}
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-gray-300 px-4 py-2 w-full rounded-md"
                placeholder={
                  role === "student" ? "Guardian contact" : "Phone number"
                }
              />
            </div>
          </div>
        </div>
        <hr className="border-yellow-500 my-4" />

        {/* Contact Email Section */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="w-full sm:w-3/4">
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
                disabled
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>
          </div>
          <button className="mt-2 sm:mt-0 font-semibold bg-gray-100 px-4 py-2 rounded-md text-sm flex items-center gap-2">
            Add another email
          </button>
        </div>
        <hr className="border-yellow-500 my-4" />

        {/* Password Section */}
        <div className="mt-6">
          <h2 className="font-semibold">Password</h2>
          <p className="text-sm font-semibold text-gray-500">
            Modify your current password
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="relative w-full sm:w-1/2">
                <FaLock className="absolute left-3 top-3 text-yellow-500" />
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="border border-gray-300 pl-10 pr-4 py-2 w-full rounded-md"
                  placeholder="Current password"
                />
              </div>
              <div className="relative w-full sm:w-1/2">
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
            <div className="flex gap-2 mt-4 sm:mt-0">
              <button className="font-semibold bg-gray-100 sm:ml-2 px-4 py-2 rounded-md text-sm">
                Confirm password
              </button>
              <button className="font-semibold bg-gray-100 px-4 py-2 rounded-md text-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
        <hr className="border-yellow-500 my-4" />

        {/* Save Changes Button */}
        <div className="mt-6">
          <button
            onClick={handleSaveProfile}
            disabled={isUpdating}
            className={`px-6 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition ${
              isUpdating ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isUpdating ? "Saving..." : "Save Changes"}
          </button>
        </div>

        {/* Account Security Section */}
        <div className="mt-6">
          <h2 className="font-semibold">Account security</h2>
          <p className="text-sm font-semibold text-gray-500">
            Manage your account security
          </p>
          <div className="mt-3 flex flex-wrap gap-4">
            <button
              onClick={handleLogout}
              className="flex items-center font-semibold gap-2 bg-gray-100 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition"
            >
              <BiLogOut /> Log out
            </button>
            <button
              onClick={handleDeleteAccount}
              className="flex items-center font-semibold gap-2 bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 transition"
            >
              <MdOutlineDelete /> Delete my account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
