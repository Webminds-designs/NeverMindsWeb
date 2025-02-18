import React,{useContext} from "react";
import { LanguageContext } from "../context/LanguageContext";
import content from "../components/content/FooterContent.json";

  
const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
    <footer className="bg-[#1B191C] text-white py-20 mt-20 mx-5 md:mx-20 rounded-t-3xl">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:justify-end mx-5 md:mx-20 gap-10 md:gap-20 mt-8 md:mt-0 text-center md:text-center">
        {/* Resources Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg md:text-xl">{content[language].resources}</h3>
          <ul className="space-y-1">
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].quizzes}</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].notes}</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].papers}</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].reviews}</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].others}</li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg md:text-xl">{content[language].about_us}</h3>
          <ul className="space-y-1">
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].glimpse}</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].careers}</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].news}</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].others}</li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg md:text-xl">{content[language].socials}</h3>
          <ul className="space-y-1">
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].facebook}</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].instagram}</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].youtube}</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].tiktok}</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].x}</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="space-y-2">
          <h3 className="font-bold text-lg md:text-xl">{content[language].legal}</h3>
          <ul className="space-y-1">
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].terms}</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].privacy}</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].cookies}</li>
            <li className="hover:text-[#FFD448] cursor-pointer transition-colors">{content[language].settings}</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center">
        <hr className="border-t-4 border-white w-11/12 mx-auto mb-6" />
        <p className="text-sm text-[#FFD448]">
          © NeverMinds 2025, All Rights Reserved. Developed By WebMinds
        </p>
      </div>
    </footer>
  );
};

export default Footer;
