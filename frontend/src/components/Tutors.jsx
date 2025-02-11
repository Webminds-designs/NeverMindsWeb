import React from "react";
import tutorIcon from "../assets/person.png"; // Import the tutor icon

const Tutors = ({ tutors = [] }) => {
  return (
    <div>
      <h3 className="text-[30px] font-bold mt-5 mb-4">Your Tutors</h3>
      <div className="bg-[#fff8e7] rounded-3xl p-6">
        {tutors.length > 0 ? (
          tutors.map((tutor, i) => (
            <div key={i}>
              {/* Tutor Details */}
              <div className="flex items-center gap-4">
                {/* Tutor Profile */}
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                  <img
                    src={tutor.profileIcon || tutorIcon} 
                    alt={`Profile of ${tutor.name}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Tutor Information */}
                <div>
                  <p className="font-semibold text-gray-800 text-lg">{tutor.name}</p>
                  <p className="text-sm text-gray-600">{tutor.subject}</p>
                </div>
              </div>
              {/* Divider */}
              {i < tutors.length - 1 && (
                <hr className="my-4 border-t border-dashed border-[#f9c226]" />
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No tutors available.</p>
        )}
        {/* See All Button */}
        <div className="mt-4 text-center">
          <button className="bg-yellow-500 text-white text-lg font-semibold py-2 px-8 rounded-full shadow-md hover:bg-yellow-600 transition duration-200">
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutors;
