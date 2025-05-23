import React, { useContext } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import logo from "../assets/logo-white.png";
import vector from "../assets/01.png";
import { LanguageContext } from "../context/LanguageContext";
import content from "../components/content/ContributorsContent.json";

// Import images
import box0img from "../assets/i1.png";
import box1img from "../assets/i2.png";
import box2img from "../assets/i3.png";
import box3img from "../assets/i4.png";
import box4img from "../assets/i5.png";
import box5img from "../assets/i6.png";

export function Contributors() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="bg-[#f9c226] min-w-screen min-h-screen py-8 sm:px-5">
      <div className="max-w-4xl px-4 md:px-0 flex flex-col mx-auto text-black mt-4">
        <div className="flex flex-row gap-6 md:gap-24">
          <div className="flex flex-col items-center md:items-start mb-1 ml-6 md:ml-0">
            <h1
              className={`${
                language === "si"
                  ? "text-3xl md:text-6xl"
                  : "text-3xl md:text-7xl"
              } font-medium left-0 mb-4`}
            >
              {content[language].title}
            </h1>

            <div className="flex flex-row gap-5 mb-6">
              <h1
                className={`${
                  language === "si"
                    ? "text-3xl md:text-6xl"
                    : "text-3xl md:text-7xl"
                } font-medium`}
              >
                {content[language].subtitle}
              </h1>

              <img
                src={logo}
                alt="Logo"
                className="w-16 h-12 md:w-32 md:h-auto mt-3"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={vector}
              alt="vector"
              className="h-auto w-20 md:w-44 md:h-auto"
            />
          </div>
        </div>

        <p
  className={`${
    language === "si" ? "text-base" : "text-lg"
  } font-sans font-semibold mb-10 text-center md:text-left`}
>
  {content[language].description}
</p>

      </div>

      {/* Updated BentoGrid with Fixed Image Overlap */}
      <BentoGrid className="max-w-4xl px-5 md:px-0 mx-auto gap-4">
        {items.map((item, i) => {
          let gridClass = "";

          switch (i) {
            case 0:
              gridClass = "md:col-span-6 sm:col-span-12";
              break;
            case 1:
              gridClass = "md:col-span-3 sm:col-span-6";
              break;
            case 2:
              gridClass = "md:col-span-3 sm:col-span-6";
              break;
            case 3:
              gridClass = "md:col-span-3 sm:col-span-6";
              break;
            case 4:
              gridClass = "md:col-span-3 sm:col-span-6";
              break;
            case 5:
              gridClass = "md:col-span-9 sm:col-span-12";
              break;
            default:
              gridClass = "";
          }

          return (
            <BentoGridItem
              key={i}
              header={
                <img
                  src={item.image}
                  alt={`Grid Image ${i + 1}`}
                  className="w-full h-full max-h-80 object-cover rounded-2xl"
                />
              }
              className={gridClass}
            />
          );
        })}
      </BentoGrid>
    </div>
  );
}

// Updated items with images only
const items = [
  { image: box0img },
  { image: box1img },
  { image: box2img },
  { image: box3img },
  { image: box4img },
  { image: box5img },
];

export default Contributors;