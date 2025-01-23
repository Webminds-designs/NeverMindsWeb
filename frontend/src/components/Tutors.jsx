import React from "react";

const Tutors = () => {
  return (
    <div>
      <h3 className="text-[30px] font-bold mt-5 mb-4">Your Tutors</h3>
      <div className="bg-[#fff8e7] rounded-lg shadow-xl p-6">
        {[...Array(3)].map((_, i) => (
          <div key={i}>
            {/* Tutor Details */}
            <div className="flex items-center gap-4">
              {/* Tutor Profile */}
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-lg font-semibold">T{i + 1}</span>
              </div>
              {/* Tutor Information */}
              <div>
                <p className="font-semibold text-gray-800 text-lg">Dr. Tutor {i + 1}</p>
                <p className="text-sm text-gray-600">Subject {i + 1}</p>
              </div>
            </div>
            {/* Divider */}
            {i < 2 && (
              <hr className="my-4 border-t border-dashed border-[#f9c226]" />
            )}
          </div>
        ))}
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
