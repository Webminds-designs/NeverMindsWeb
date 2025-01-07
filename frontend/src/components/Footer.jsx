import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Resources Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-xl">Resources</h3>
          <ul className="space-y-1">
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Quizzes</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Notes</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Papers</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Reviews</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Others</li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-xl">About Us</h3>
          <ul className="space-y-1">
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Glimpse</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">News</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Others</li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-xl">Socials</h3>
          <ul className="space-y-1">
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Facebook</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Instagram</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">YouTube</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">TikTok</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">X</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-xl">Legal</h3>
          <ul className="space-y-1">
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Terms</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Privacy</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Cookies</li>
            <li className="hover:text-yellow-500 cursor-pointer transition-colors">Settings</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-sm">
        <p>© NeverMinds 2025, All Rights Reserved. Developed By WebMinds</p>
      </div>
    </footer>
  );
};

export default Footer;
