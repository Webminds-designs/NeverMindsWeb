import React from 'react';
import teampic from '../assets/knight.png';

function App() {

  return (
    <>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 lg:col-span-2  h-64 border">
          <img
            src={teampic}
            alt="Friendly Knight"
            className="h-auto w-auto object-contain"
          />
        </div>
        <div class="col-span-12 lg:col-span-10 bg-gray-200 h-64 border">
          <h1 className="text-[80px] font-regular mb-4 text-center">Contact Our Friendly Team</h1>
          <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mb-4">
            <div className="h-80 bg-[#f9c226] rounded-3xl"></div>
            <div className="h-80 bg-[#f9c226] rounded-3xl"></div>
            <div className="h-80 bg-[#f9c226] rounded-3xl"></div>
            <div className="h-80 bg-[#f9c226] rounded-3xl"></div>
          </div>
          <p className="text-gray-700 text-[30px] text-center">
            We're here to help! Whether you have questions, need assistance, or want<br />
            to share feedback, our team is always ready to provide the support you<br />
            need. Reach out to us today!
          </p>
        </div>
      </div>
    </>
  )
}

export default ContactTeam;