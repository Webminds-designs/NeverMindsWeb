import React, { useState } from "react";
import { RiEditCircleFill } from "react-icons/ri";

const ProfileCard = ({
  name,
  email,
  phone,
  address,
  profileImage,
  greeting,
  onEdit,
  progress,
  role,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name,
    email,
    phone,
    address,
  });

  const firstName = name.split(" ")[0];
  const circumference = 2 * Math.PI * 16;
  const strokeDasharray = `${
    (progress / 100) * circumference
  } ${circumference}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Create appropriate payload based on role
    let payload;

    if (role === "student") {
      payload = {
        guardianContact: formData.phone,
      };
    } else if (role === "teacher") {
      payload = {
        contactNo: formData.phone,
      };
    } else {
      // Default payload if role is not specified
      payload = {
        phone: formData.phone,
      };
    }

    onEdit(payload);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({ name, email, phone, address });
    setIsEditing(false);
  };

  return (
    <div className="relative w-full bg-white border border-transparent rounded-3xl p-6">
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
        {/* Profile Image with Circular Progress Bar */}
        <div className="relative w-32 h-32">
          {/* Circular Progress Bar */}
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Circle */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
            ></circle>

            {/* Progress Circle */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#facc15"
              strokeWidth="2"
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
              transform="rotate(-90 18 18)"
            ></circle>
          </svg>

          {/* Profile Image */}
          <div className="absolute inset-4 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={profileImage}
              alt={`${name}'s profile`}
            />
          </div>

          {/* Percentage Label */}
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-white text-yellow-500 text-xs font-bold px-2 py-1 rounded-full shadow">
            {progress}%
          </div>
        </div>

        {/* Greeting */}
        <h5 className="mb-2 text-xl font-medium text-gray-900">
          {greeting}, {firstName}!
        </h5>

        {/* Contact Info */}
        {isEditing ? (
          <div className="w-full space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {role === "student" ? "Guardian Contact" : "Contact Number"}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="flex space-x-2 pt-3">
              <button
                onClick={handleSubmit}
                className="flex-1 bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full text-left">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Name:</strong> {name}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Email:</strong> {email}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Phone:</strong> {phone}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Role:</strong>{" "}
              {role && role.charAt(0).toUpperCase() + role.slice(1)}
            </p>
          </div>
        )}
      </div>

      {/* Edit Button with Icon Only */}
      {!isEditing && (
        <div className="absolute bottom-4 right-4">
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-[#f9c226] bg-white rounded-full hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <RiEditCircleFill className="text-3xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
