import React from 'react';
import teampic from '../assets/knight.png';

const ContactTeam = () => {
  return (
    <div className="grid grid-cols-12 md:flex-row items-center md:items-start py-8 pr-20 bg-white">
      {/* Left Section - Image */}
      <div className=" h-1/2 md:h-full md:col-span-4 flex items-end px-0">
        <img
          src={teampic}
          alt="Friendly Knight"
          className="h-[606px] w-auto] object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Section - Content */}
      <div className="w-full md:col-span-8 mt-6 md:mt-0 md:pl-8 text-center">
        <h1 className="text-[80px] font-regular mb-4 hover:text-[#f9c226] transition-colors duration-300">Contact Our Friendly Team</h1>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mb-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-80 bg-[#f9c226] rounded-3xl hover:shadow-lg hover:bg-[#f9a826] transition-all duration-300"
            ></div>
          ))}
        </div>
        <p className="text-gray-700 text-[30px] hover:text-gray-900 transition-colors duration-300 text-center">
          We're here to help! Whether you have questions, need assistance, or want<br />
          to share feedback, our team is always ready to provide the support you<br />
          need. Reach out to us today!
        </p>
      </div>
    </div>
  );
};

export default ContactTeam;
