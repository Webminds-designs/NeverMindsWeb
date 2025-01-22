import React from "react";

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
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-6">
      {/* Header with Title and Menu */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800">Profile</h2>
        <button
          id="dropdownButton"
          className="text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg p-2"
          type="button"
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M7.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
          </svg>
        </button>
      </div>

      {/* Profile Details */}
      <div className="flex flex-col items-center mt-4">
        {/* Profile Image with Yellow Border */}
        <div className="relative mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-yellow-500"></div>
          <img
            className="w-24 h-24 rounded-full shadow-md"
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

        {/* Edit Button */}
        <button
          onClick={onEdit}
          className="mt-6 px-4 py-2 text-sm font-medium text-yellow-600 bg-white border border-yellow-600 rounded-lg hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
