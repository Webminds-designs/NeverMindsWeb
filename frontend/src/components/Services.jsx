import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/servise-Bentogrid";

import edu2 from "../assets/education-2.svg";
import project from "../assets/project-status.svg";
import std33 from "../assets/student-33.svg";
import trophy from "../assets/trophy.svg";
import book from "../assets/book.svg";
import creativity from "../assets/creativity.svg";
import target from "../assets/target.svg";
import maths5 from "../assets/maths-5.svg";
import graph from "../assets/graph.svg";
import creativity2 from "../assets/creativity-2.svg";

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
        <BentoGrid className="max-w-7xl md:px-0 mx-auto">
          {serviceItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              header={item.header}
              className={gridClasses[i]}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

//Define Skeleton Component Before Using It
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-[#000000]"></div>
);


const serviceItems = [
  // Box 1
  {
    title: (
      <div className="flex flex-col items-left text-left text-black p-6 h-full">
        {/* Image*/}
        <img src={edu2} alt="Learning Fun" className="w-40 h-40 mb-4" />

        {/* Title */}
        <h3 className="text-[40px] sm:text-[50px] md:text-[45px] text-left font-semibold leading-tight mb-4">
          Turn <br /> learning <br /> into fun.
        </h3>

        {/* Description */}
        <p className="text-[18px] sm:text-[24px] text-left leading-tight font-normal mb-4">
          Transform boring topics<br></br> into engaging quizzes that<br></br> make learning
          enjoyable<br></br> and effective.
        </p>

        {/* Bottom Link */}
        <span className="text-[16px] sm:text-[22px] font-light mt-auto text-black cursor-pointer">
          More about learning
        </span>
      </div>
    ),
    header: null,
  },

  // Box 2
  {
    title: (
      <div className="relative flex flex-col text-left items-left text-black p-6 h-full">
        {/* Image Positioned*/}
        <img
          src={project}
          alt="24/7 Support"
          className="w-20 sm:w-28 h-20 sm:h-24"
        />
        {/* Title */}
        <h3 className="text-[30px] sm:text-[28px] font-semibold leading-tight">
          Track Your <br /> Progress
        </h3>

        {/* Subtitle */}
        <p className="text-[18px] sm:text-[20px] font-normal leading-tight mt-2">
          Monitor quiz scores and<br></br> performance trends over time.{" "}
        </p>
      </div>
    ),
    header: null,
  },

  // Box 3
  {
    title: (
      <div className="relative flex flex-col text-center items-center text-black p-6 h-full">
        {/* Image Positioned Top-Right */}
        <img
          src={std33}
          alt="24/7 Support"
          className="items-center w-20 sm:w-24 h-20 sm:h-24"
        />

        {/* Title */}
        <h3 className="text-[30px] sm:text-[28px] font-semibold">
          For Students
        </h3>

        {/* Subtitle */}
        <p className="text-[18px] sm:text-[20px] font-normal leading-tight mt-2">
          Designed to make learning<br></br> interactive, engaging, and<br></br> effective.{" "}
        </p>
      </div>
    ),
    header: null,
  },

  // Box 4
  {
    title: (
      <div className="relative flex flex-col items-end text-black p-6 h-full">
        {/* "Try Quizzes" Top Left */}
        <span className="absolute top-4 left-4 text-[14px] sm:text-[25px] font-light text-black cursor-pointer">
          Try Quizzes
        </span>

        {/* Image Right */}
        <img
          src={book}
          alt="Quiz Learning"
          className="w-56 sm:w-56 h-auto mb-4 items-right"
        />

        {/* Title */}
        <h3 className="text-[26px] sm:text-[32px] md:text-[65px] font-semibold text-right">
          A Vast Quiz Bank
        </h3>

        {/* Subtitle */}
        <p className="text-[16px] sm:text-[30px] text-right font-normal mt-2">
          Access quizzes tailored to your syllabus for <br /> better learning.
        </p>
      </div>
    ),
    header: null,
  },
  // Box 5
  {
    title: (
      <div className="relative flex flex-col text-right text-black h-full p-6">
        {/* Text Section at the Top */}
        <div className="mb-16">
          {/* Title */}
          <h3 className="text-[30px] sm:text-[25px] font-semibold">
            Interactive <br /> Challenges and <br /> Rewards
          </h3>
          {/* Subtitle */}
          <p className="text-[18px] sm:text-[20px] font-normal leading-tight mt-4">
            Engage in fun challenges<br></br> and earn rewards to keep<br></br> learning exciting.
          </p>
        </div>
        {/* Image Positioned at Top Right */}
        <div className="absolute bottom-2 left-4 sm:left-4">
          <img
            src={trophy}
            alt="Rewards Icon"
            className="w-16 sm:w-20 h-16 sm:h-20"
          />
        </div>
      </div>
    ),
    header: null,
  },

    
  // Box 6
  {
    title: (
      <div className="flex flex-col items-center text-left text-black p-6 h-full">
        {/* Image (Centered) */}
        <img src={creativity} alt="Learning Fun" className="w-40 h-40 mb-6" />

        {/* Title (Multi-Line) */}
        <h3 className="text-[38px] sm:text-[50px] md:text-[40px] text-center font-semibold leading-tight mb-4">
          Exclusive <br /> Tutor <br /> Promotions.
        </h3>

        {/* Description */}
        <p className="text-[18px] sm:text-[24px] text-center leading-tight font-normal mb-4">
          Get featured as a top<br></br> educator and attract<br></br> more
          students with<br></br> exclusive promotions.
        </p>
      </div>
    ),
    header: null,
  },

  // Box 7
  {
    title: (
      <div className="relative flex flex-col text-left items-left text-black p-6 h-full">
        {/* Title */}
        <h3 className="text-[30px] sm:text-[28px] font-semibold leading-tight">
          Instant, Detailed <br /> Quiz Reports
        </h3>

        {/* Subtitle */}
        <p className="text-[18px] sm:text-[20px] font-normal leading-tight mt-4">
          Get real-time, detailed<br></br> performance insights.{" "}
        </p>
        {/* Image Positioned Top-Right */}
        <img
          src={graph}
          alt="24/7 Support"
          className="w-20 sm:w-24 h-20 sm:h-24"
        />
      </div>
    ),
    header: null,
  },

  // Box 8
  {
    title: (
      <div className="relative flex flex-col text-end items-end text-black p-6 h-full">
        {/* Image Positioned Top-Right */}
        <img
          src={maths5}
          alt="24/7 Support"
          className="items-center w-20 sm:w-24 h-20 sm:h-24"
        />

        {/* Title */}
        <h3 className="text-[30px] sm:text-[25px] font-semibold">
          For Teachers{" "}
        </h3>

        {/* Subtitle */}
        <p className="text-[18px] sm:text-[20px] font-normal leading-tight mt-4">
          Enhancing teaching with<br></br> smart, interactive tools.{" "}
        </p>
      </div>
    ),
    header: null,
  },

  // Box 9
  {
    title: (
      <div className="relative flex flex-col items-start text-black p-6 h-full">
        {/* "Try Quizzes" Top Left */}
        <span className="absolute top-4 right-4 text-[14px] sm:text-[25px] font-light text-black cursor-pointer">
        Make your own Quizzes        </span>

        {/* Image Right */}
        <img
          src={target}
          alt="Quiz Learning"
          className="w-40 sm:w-52 sm:h-52 m-4 items-right
      "
        />

        {/* Title */}
        <h3 className="text-[26px] sm:text-[32px] md:text-[65px] font-semibold text-left">
          Effortless Quiz<br></br> Hosting{" "}
        </h3>

        {/* Subtitle */}
        <p className="text-[16px] sm:text-[30px] text-left font-normal mt-2">
          Create and host quizzes in a<br></br> few clicks.{" "}
        </p>
      </div>
    ),
    header: null,
  },
  // Box 10
  {
    title: (
      <div className="relative flex flex-col text-center items-center text-black p-6 h-full">
        {/* Image Positioned Top-Right */}
        <img
          src={creativity2}
          alt="24/7 Support"
          className="items-center w-20 sm:w-24 h-20 sm:h-24"
        />

        {/* Title */}
        <h3 className="text-[30px] sm:text-[28px] font-semibold">
        Comprehensive<br></br>Technical Support
        </h3>

        {/* Subtitle */}
        <p className="text-[18px] sm:text-[20px] font-normal leading-tight">
        24/7 assistance for a<br></br> smooth experience.
        </p>
      </div>
    ),
    header: null,
  },
];

const gridClasses = [
  "md:row-span-2 md:col-span-3 rounded-3xl",
  "md:row-span-1 md:col-span-3 rounded-3xl",
  "md:row-span-1 md:col-span-3 rounded-3xl",
  "md:row-span-2 md:col-span-6 rounded-3xl",
  "md:row-span-1 md:col-span-3 rounded-3xl",

  "md:row-span-2 md:col-span-3 rounded-3xl",
  "md:row-span-1 md:col-span-3 rounded-3xl",
  "md:row-span-1 md:col-span-3 rounded-3xl",
  "md:row-span-2 md:col-span-6 rounded-3xl",
  "md:row-span-1 md:col-span-3 rounded-3xl",
];

export default Services;
