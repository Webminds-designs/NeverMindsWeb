import React, { useContext } from "react";
import { BentoGrid, BentoGridItem } from "./ui/servise-Bentogrid";
import { LanguageContext } from "../context/LanguageContext";
import content from "../components/content/LatestQuizzesContent.json";

const LatestQuizzes = () => {
  const { language } = useContext(LanguageContext);
  const quizzes = content[language].quizzes;

  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-[40px] sm:text-[96px] font-regular text-black mb-6">
          {content[language].title}
        </h2>

        {/* BentoGrid Section */}
        <BentoGrid className="max-w-7xl px-4 md:px-0 mx-auto">
          {quizzes.map((quiz, i) => {
            let gridClass = "";

            // Assign row and column spans based on the desired grid structure
            switch (i) {
              case 0:
                gridClass = "md:row-span-1 md:col-span-3 rounded-3xl";
                break;
              case 1:
                gridClass = "md:row-span-2 md:col-span-6 rounded-3xl";
                break;
              case 2:
                gridClass = "md:row-span-2 md:col-span-3 rounded-3xl";
                break;
              case 3:
                gridClass = "md:row-span-1 md:col-span-3 rounded-3xl";
                break;
              case 4:
                gridClass = "md:row-span-1 md:col-span-3 rounded-3xl";
                break;
              default:
                gridClass = "";
            }

            return (
              <BentoGridItem
                key={i}
                title={quiz.title}
                header={<Skeleton />}
                className={gridClass}
              />
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
};

// Skeleton Component
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-[#f9c226]"></div>
);

export default LatestQuizzes;
