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
import { LanguageContext } from "../context/LanguageContext";
import content from "../components/content/ServicesContent.json";
import { useContext } from "react";

const Services = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const serviceItems = [
    // Box 1
    {
      title: (
        <div className="flex font-sinhala flex-col items-left text-left text-black p-6 h-full">
          {/* Image*/}
          <img src={edu2} alt="Learning Fun" className="w-40 h-40 mb-4" />

          {/* Title */}
          <h3
            className={`${
              language === "si"
                ? "text-[35px] sm:text-[40px] md:text-[30px]"
                : "text-[40px] sm:text-[50px] md:text-[45px]"
            } text-left font-semibold leading-tight mb-4`}
          >
            {content[language].service1_title} <br />
            {content[language].service1_title2} <br />
            {content[language].service1_title3}
          </h3>

          {/* Description */}
          <p
            className={`${
              language === "si"
                ? "text-[16px] sm:text-[20px]"
                : "text-[18px] sm:text-[24px]"
            } text-left leading-tight font-normal mb-4`}
          >
            {content[language].service1_description} <br />
            {content[language].service1_description2} <br />
            {content[language].service1_description3} <br />
            {content[language].service1_description4}
          </p>

          {/* Bottom Link */}
          <span className="text-[16px] sm:text-[22px] font-light mt-auto text-black cursor-pointer">
            {content[language].service1_subtitle}
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
          <h3
            className={`${
              language === "si"
                ? "text-[25px] sm:text-[23px]"
                : "text-[30px] sm:text-[28px]"
            } font-semibold leading-tight`}
          >
            {content[language].service2_title} <br />
            {content[language].service2_title2}
          </h3>

          {/* Subtitle */}
          <p
            className={`${
              language === "si"
                ? "text-[16px] sm:text-[18px]"
                : "text-[18px] sm:text-[20px]"
            } font-normal leading-tight mt-2`}
          >
            {content[language].service2_description} <br />
            {content[language].service2_description2}
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
          <h3
            className={`${
              language === "si"
                ? "text-[25px] sm:text-[23px]"
                : "text-[30px] sm:text-[28px]"
            } font-semibold`}
          >
            {content[language].service3_title}
          </h3>

          {/* Subtitle */}
          <p
            className={`${
              language === "si"
                ? "text-[16px] sm:text-[18px]"
                : "text-[18px] sm:text-[20px]"
            } font-normal leading-tight mt-2`}
          >
            {content[language].service3_description} <br />
            {content[language].service3_description2} <br />
            {content[language].service3_description3}{" "}
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
          <span
            className={`${
              language === "si"
                ? "text-[12px] sm:text-[22px]"
                : "text-[14px] sm:text-[25px]"
            } absolute top-4 left-4 font-light text-black cursor-pointer`}
          >
            {content[language].service4_tryquizz}
          </span>

          {/* Image Right */}
          <img
            src={book}
            alt="Quiz Learning"
            className="w-56 sm:w-56 h-auto mb-4 items-right"
          />

          {/* Title */}
          <h3
            className={`${
              language === "si"
                ? "text-[22px] sm:text-[28px] md:text-[55px]"
                : "text-[26px] sm:text-[32px] md:text-[65px]"
            } font-semibold text-right`}
          >
            {content[language].service4_title}
          </h3>

          {/* Subtitle */}
          <p
            className={`${
              language === "si"
                ? "text-[14px] sm:text-[26px]"
                : "text-[16px] sm:text-[30px]"
            } text-right font-normal mt-2`}
          >
            {content[language].service4_description} <br />
            {content[language].service4_description2}
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
            <h3
              className={`${
                language === "si"
                  ? "text-[25px] sm:text-[20px]"
                  : "text-[30px] sm:text-[25px]"
              } font-semibold`}
            >
              {content[language].service5_title} <br />
              {content[language].service5_title2} <br />
              {content[language].service5_title3}
            </h3>

            {/* Subtitle */}
            <p
              className={`${
                language === "si"
                  ? "text-[16px] sm:text-[18px]"
                  : "text-[18px] sm:text-[20px]"
              } font-normal leading-tight mt-4`}
            >
              {content[language].service5_description}
              <br />
              {content[language].service5_description2}
              <br />
              {content[language].service5_description3}
            </p>
          </div>
          {/* Image Positioned at Top Right */}
          <div className="absolute bottom-2 left-4 sm:bottom-20 sm:left-4">
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
          <h3
            className={`${
              language === "si"
                ? "text-[35px] sm:text-[45px] md:text-[40px]"
                : "text-[40px] sm:text-[50px] md:text-[45px]"
            } text-center font-semibold leading-tight mb-4`}
          >
            {content[language].service6_title} <br />
            {content[language].service6_title2} <br />
            {content[language].service6_title3}
          </h3>

          {/* Description */}
          <p
            className={`${
              language === "si"
                ? "text-[16px] sm:text-[20px]"
                : "text-[18px] sm:text-[24px]"
            } text-center leading-tight font-normal mb-4`}
          >
            {content[language].service6_description} <br />
            {content[language].service6_description2} <br />
            {content[language].service6_description3} <br />
            {content[language].service6_description4}
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
          <h3
            className={`${
              language === "si"
                ? "text-[25px] sm:text-[23px]"
                : "text-[30px] sm:text-[28px]"
            } font-semibold leading-tight`}
          >
            {content[language].service7_title} <br />
            {content[language].service7_title2}
          </h3>

          {/* Subtitle */}
          <p
            className={`${
              language === "si"
                ? "text-[16px] sm:text-[18px]"
                : "text-[18px] sm:text-[20px]"
            } font-normal leading-tight mt-4`}
          >
            {content[language].service7_description} <br />
            {content[language].service7_description2}{" "}
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
          <h3
            className={`${
              language === "si"
                ? "text-[25px] sm:text-[22px]"
                : "text-[30px] sm:text-[25px]"
            } font-semibold`}
          >
            {content[language].service8_title}
          </h3>

          {/* Subtitle */}
          <p
            className={`${
              language === "si"
                ? "text-[16px] sm:text-[18px]"
                : "text-[18px] sm:text-[20px]"
            } font-normal leading-tight mt-4`}
          >
            {content[language].service8_description} <br />
            {content[language].service8_description2}{" "}
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
          <span
            className={`${
              language === "si"
                ? "text-[12px] sm:text-[22px]"
                : "text-[14px] sm:text-[25px]"
            } absolute top-4 right-4 font-light text-black cursor-pointer`}
          >
            {content[language].service9_Quizz}
          </span>

          {/* Image Right */}
          <img
            src={target}
            alt="Quiz Learning"
            className="w-40 sm:w-52 sm:h-52 m-4 items-right
      "
          />

          {/* Title */}
          <h3
            className={`${
              language === "si"
                ? "text-[22px] sm:text-[28px] md:text-[55px]"
                : "text-[26px] sm:text-[32px] md:text-[65px]"
            } font-semibold text-left`}
          >
            {content[language].service9_title} <br />
            {content[language].service9_title2}
          </h3>

          {/* Subtitle */}
          <p
            className={`${
              language === "si"
                ? "text-[14px] sm:text-[24px]"
                : "text-[16px] sm:text-[30px]"
            } text-left font-normal mt-2`}
          >
            {content[language].service9_description} <br />
            {content[language].service9_description2}
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
          <h3
            className={`${
              language === "si"
                ? "text-[25px] sm:text-[22px]"
                : "text-[30px] sm:text-[28px]"
            } font-semibold`}
          >
            {content[language].service10_title} <br />
            {content[language].service10_title2}
          </h3>

          {/* Subtitle */}
          <p
            className={`${
              language === "si"
                ? "text-[16px] sm:text-[18px]"
                : "text-[18px] sm:text-[20px]"
            } font-normal leading-tight`}
          >
            {content[language].service10_description} <br />
            {content[language].service10_description2}
          </p>
        </div>
      ),
      header: null,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto text-center px-6">
        {/* Section Title */}
        <h2
          className={`${
            language === "si"
              ? "text-[28px] sm:text-[45px] md:text-[60px]"
              : "text-[32px] sm:text-[50px] md:text-[75px]"
          } font-regular text-black mb-6`}
        >
          {content[language].title}
        </h2>

        <p
          className={`${
            language === "si"
              ? "text-[16px] sm:text-[18px]"
              : "text-[18px] sm:text-[20px]"
          } text-black mb-12 max-w-2xl mx-auto leading-relaxed`}
        >
          {content[language].description}
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
