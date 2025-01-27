import React from "react";
import { RiEditCircleFill } from "react-icons/ri";

const ProfileCard = ({
  name,
  email,
  phone,
  address,
  profileImage,
  greeting,
  onEdit,
}) => {
  // Extract the first name from the full name
  const firstName = name.split(" ")[0];

  return (
    <div className="relative w-full bg-white border border-gray-200 rounded-3xl p-6">
      {/* Header with Title and Dropdown Menu */}
      <div className="flex justify-between items-center">
        <button
          id="dropdownButton"
          className="ml-auto text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg p-2"
          type="button"
          aria-label="Open menu"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M7.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
          </svg>
        </button>
      </div>

      {/* Profile Details */}
      <div className="flex flex-col items-center mt-4">
        {/* Profile Image with Yellow Border */}
        <div className="relative mb-4 rounded-full">
          <img
            className="w-24 h-24 rounded-full border-4 border-[#f9c226] shadow-md"
            src={profileImage}
            alt={`${name}'s profile`}
          />
        </div>

        {/* Greeting */}
        <h5 className="mb-2 text-xl font-medium text-gray-900">
          {greeting}, {firstName}!
        </h5>

        {/* Contact Info */}
        <div className="w-full text-left">
          <p className="text-sm text-gray-600 mb-2">
            <strong>Email:</strong> {email}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Phone:</strong> {phone}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Address:</strong> {address}
          </p>
        </div>
      </div>

      {/* Edit Button with Icon Only */}
      <div className="absolute bottom-4 right-4">
        <button
          onClick={onEdit}
          className="p-2 text-[#f9c226] bg-white rounded-full hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          <RiEditCircleFill className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
