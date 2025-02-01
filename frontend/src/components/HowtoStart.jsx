import React from "react";
import scribble01 from "../assets/scribble01.png";
import scribble02 from "../assets/scribble02.png";
import exclamation from "../assets/!.png";
import boy from "../assets/boy.png";

const HowToStart = () => {
  return (
    <div className="grid grid-cols-12 bg-[#fbc72e] text-black p-8 md:p-16">
      {/* Left Section */}
      <div className="col-span-12 md:col-span-8 text-center md:text-left flex flex-col justify-center">
        <h1 className="text-[24px] md:text-[48px] lg:text-[60px] font-semibold text-white mb-4 flex items-center justify-center md:justify-start">
          How To Start{" "}
          <img src={scribble01} alt="Scribble" className="ml-2 w-18 h-auto" />
        </h1>
        <p className="text-[30px] md:text-[30px] lg:text-[70px] font-medium mb-4 flex items-center justify-center md:justify-start">
          Tutors{" "}
          <img src={exclamation} alt="Exclamation" className="ml-2 w-6 h-20" />{" "}
          <span className="font-regular text-[20px] text-white md:text-[24px] lg:text-[28px] ml-2">
            Contact our team to carry<br></br>out the procedure,
          </span>
        </p>
        <p className="text-[24px] md:text-[30px] lg:text-[36px] flex flex-wrap items-center justify-center md:justify-start">
          Create an Account, Browse<br></br>for Quizzes and{" "}
          <img
            src={scribble02}
            alt="Scribble"
            className="ml-2 w-18 h-auto inline-block"
          />{" "}
          <span className="text-[24px] md:text-[30px] lg:text-[60px] font-medium text-black  ml-2">
          Students{" "}
          </span>
          
          <img src={exclamation} alt="Exclamation" className="ml-2 w-6 h-20" />
        </p>
      </div>

      {/* Right Section */}
      <div className="col-span-12 md:col-span-4 flex justify-center items-center">
        <img
          src={boy}
          alt="Confused Boy"
          className="w-full h-auto max-h-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default HowToStart;
