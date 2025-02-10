import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/servise-Bentogrid";
import dragon from "../assets/year-of-the-dragon.svg";
import std3 from "../assets/student-3.svg";
import star2 from "../assets/star-2.svg";

const Services = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-[32px] sm:text-[50px] md:text-[75px] font-regular text-black mb-6">
          It’s more than quizzes. We’re redefining learning.
        </h2>
        <p className="text-black text-[18px] sm:text-[20px] mb-12 max-w-2xl mx-auto leading-relaxed">
          At NeverMinds, we offer a wide range of interactive quizzes designed
          to entertain and educate. Whether you're looking to test your
          knowledge, explore new topics, or challenge friends, our quizzes cater
          to all interests and skill levels. Dive in and discover quizzes that
          are fun, engaging, and packed with learning opportunities!
        </p>

        {/* BentoGrid Section */}
        <BentoGrid className="max-w-7xl px-4 md:px-0 mx-auto">
          {serviceItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              header={item.header}
              className={gridClasses[i]} // Uses predefined grid layout
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

// ✅ Define Skeleton Component Before Using It
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-[#000000]"></div>
);

// ✅ Service Items Data
const serviceItems = [
  // Box 1 - All Centered
  {
    title: (
      <div className="flex flex-col items-start text-left text-white p-6 h-full">
        {/* Image (Centered) */}
        <img src={std3} alt="Learning Fun" className="w-28 h-28 mb-6" />

        {/* Title (Multi-Line) */}
        <h3 className="text-[40px] sm:text-[50px] md:text-[45px] text-left font-semibold leading-tight mb-4">
          Turn <br /> learning <br /> into fun.
        </h3>

        {/* Description */}
        <p className="text-[18px] sm:text-[24px] text-left leading-tight font-normal mb-4">
          Transform boring topics into engaging quizzes that make learning
          enjoyable and effective.
        </p>

        {/* Bottom Link */}
        <span className="text-[16px] sm:text-[22px] font-light mt-auto underline text-white cursor-pointer">
          More about learning
        </span>
      </div>
    ),
    header: null,
  },

  // Box 2 - Left-aligned Text
  {
    title: (
      <div className="flex flex-col text-left text-white p-6 h-full">
        {/* Title */}
        <h3 className="text-[30px] sm:text-[30px] font-semibold leading-tight">
          A Vast Quiz Bank <br /> Tailored to Your Syllabus
        </h3>

        {/* Subtitle */}
        <p className="text-[18px] sm:text-[20px] font-normal leading-tight mt-4">
          Access quizzes designed specifically for your curriculum.
        </p>
      </div>
    ),
    header: null,
  },

  // Box 3 - Laptop in Top Right, Text Left
  {
    title: (
      <div className="relative flex flex-col text-left text-white p-6 h-full">
        {/* Image Positioned Top-Right */}
        <img
          src={star2}
          alt="24/7 Support"
          className="absolute top-3 right-3 w-16 sm:w-20 h-16 sm:h-20"
        />

        {/* Title */}
        <h3 className="text-[30px] sm:text-[30px] font-semibold">
          24/7 Educational <br /> Support
        </h3>

        {/* Subtitle */}
        <p className="text-[18px] sm:text-[20px] font-normal leading-tight mt-4">
          Get help anytime to ensure uninterrupted learning.
        </p>
      </div>
    ),
    header: null,
  },

  // Box 4 - Laptop Center Left, Title Right, Subtitle Center
  {
    title: (
      <div className="flex flex-col md:flex-row items-center text-white p-6 h-full gap-4">
        {/* Image on Left */}
        <div className="flex flex-col items-center">
          <img
            src={dragon}
            alt="Work in Progress"
            className="w-80 h-80 md:w-96 md:h-96"
          />
        </div>

        {/* Text on Right */}
        <div className="text-right">
          {/* Title */}
          <h3 className="text-[40px] sm:text-[50px] md:text-[50px] font-semibold">
            Self- <br /> Evaluation <br /> Dashboard
          </h3>

          {/* Subtitle */}
          <p className="text-[18px] sm:text-[24px] font-normal text-right  my-4">
            Track your progress and identify areas for improvement.
          </p>

          {/* Bottom Link */}
          <span className="text-[16px] sm:text-[22px] text-left font-light mt-4 underline text-white cursor-pointer">
            More about tracking
          </span>
        </div>
      </div>
    ),
    header: null,
  },

  // Box 5 - All Right-Aligned
  {
    title: (
      <div className="flex flex-col  text-right text-white h-full">
        {/* Title */}
        <h3 className="text-[30px] sm:text-[35px] font-semibold">
          Interactive <br /> Challenges and <br /> Rewards
        </h3>
<div className="flex flex-col items-start"> 
         {/* Subtitle */}
         <p className="text-[18px] sm:text-[20px] font-normal leading-tight mt-4">
          Engage in fun challenges and earn rewards to keep learning exciting.
        </p>

        {/* Image Positioned Bottom-Left 
        <img
          src={laptopIcon}
          alt="Rewards Icon"
          className="w-16 sm:w-10 h-16 sm:h-10 "
        />*/}
</div>
       
      </div>
    ),
    header: null,
  },

  // ✅ Placeholder Boxes (6-10) - Skeleton Placeholder
  { title: <Skeleton />, header: null },
  { title: <Skeleton />, header: null },
  { title: <Skeleton />, header: null },
  { title: <Skeleton />, header: null },
  { title: <Skeleton />, header: null },
];

// ✅ Optimized Grid Layout Classes
const gridClasses = [
  "md:row-span-2 md:col-span-3 rounded-3xl", // Box 1
  "md:row-span-1 md:col-span-3 rounded-3xl", // Box 2
  "md:row-span-1 md:col-span-3 rounded-3xl", // Box 3
  "md:row-span-2 md:col-span-6 rounded-3xl", // Box 4
  "md:row-span-1 md:col-span-3 rounded-3xl", // Box 5
  "md:row-span-2 md:col-span-6 rounded-3xl", // Box 6
  "md:row-span-1 md:col-span-3 rounded-3xl", // Box 7
  "md:row-span-2 md:col-span-3 rounded-3xl", // Box 8
  "md:row-span-1 md:col-span-3 rounded-3xl", // Box 9
  "md:row-span-1 md:col-span-3 rounded-3xl", // Box 10
];

export default Services;
