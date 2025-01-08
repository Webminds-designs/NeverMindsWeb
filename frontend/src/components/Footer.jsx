import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1B191C] text-white py-10 mt-20 mx-20 rounded-t-lg">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:justify-end gap-10 md:gap-20 mt-8 md:mt-0 text-center md:text-right mx-20 pr-20">
        {/* Resources Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-xl">Resources</h3>
          <ul className="space-y-1">
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">Quizzes</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">Notes</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">Papers</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">Reviews</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">Others</li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-xl">About Us</h3>
          <ul className="space-y-1">
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">Glimpse</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">News</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">Others</li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-xl">Socials</h3>
          <ul className="space-y-1">
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">Facebook</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">Instagram</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">YouTube</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">TikTok</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">X</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-xl">Legal</h3>
          <ul className="space-y-1">
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">Terms</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">Privacy</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">Cookies</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">Settings</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center">
        <hr className="border-t-2 border-gray-300 w-1/2 mx-auto mb-6" />
        <p className="text-sm text-[#FFD448]">
          © NeverMinds 2025, All Rights Reserved. Developed By WebMinds
        </p>
      </div>
    </footer>
  );
};

export default Footer;
