import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/servise-Bentogrid";

const LatestQuizzes = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-[40px] sm:text-[96px] font-regular text-black mb-6">Latest Quizzes</h2>
        

        {/* BentoGrid Section */}
        <BentoGrid className="max-w-7xl px-4 md:px-0 mx-auto">
          {serviceItems.map((item, i) => {
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
                title={item.title}
                header={item.header}
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

// Service Items Data
const serviceItems = [
  { title: "QUIZ 01", header: <Skeleton /> },
  { title: "QUIZ 02", header: <Skeleton /> },
  { title: "QUIZ 03", header: <Skeleton /> },
  { title: "QUIZ 04", header: <Skeleton /> },
  { title: "QUIZ 05", header: <Skeleton /> },
];

export default LatestQuizzes;
