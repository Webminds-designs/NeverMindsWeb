import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/servise-Bentogrid";

const Services = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-[96px] font-regular text-black mb-6">Our Services</h2>
        <p className="text-black text-[20px] mb-12 max-w-2xl mx-auto leading-relaxed">
          At NeverMinds, we offer a wide range of interactive quizzes designed
          to entertain and educate. Whether you're looking to test your
          knowledge, explore new topics, or challenge friends, our quizzes
          cater to all interests and skill levels. Dive in and discover quizzes
          that are fun, engaging, and packed with learning opportunities!
        </p>

        {/* BentoGrid Section */}
        <BentoGrid className="max-w-7xl px-4 md:px-0 mx-auto">
          {serviceItems.map((item, i) => {
            let gridClass = "";

            // Assign row and column spans based on the desired grid structure
            switch (i) {
              case 0:
                gridClass = "md:row-span-2 md:col-span-3 rounded-3xl";
                break;
              case 1:
                gridClass = "md:row-span-1 md:col-span-3 rounded-3xl";
                break;
              case 2:
                gridClass = "md:row-span-1 md:col-span-3 rounded-3xl";
                break;
              case 3:
                gridClass = "md:row-span-2 md:col-span-6 rounded-3xl";
                break;
              case 4:
                gridClass = "md:row-span-1 md:col-span-3 rounded-3xl";
                break;
              case 5:
                gridClass = "md:row-span-2 md:col-span-6 rounded-3xl";
                break;
              case 6:
                gridClass = "md:row-span-1 md:col-span-3 rounded-3xl";
                break;
              case 7:
                gridClass = "md:row-span-2 md:col-span-3 rounded-3xl";
                break;
              case 8:
                gridClass = "md:row-span-1 md:col-span-3 rounded-3xl";
                break;
              case 9:
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
  { title: "Custom Quizzes", header: <Skeleton /> },
  { title: "Data Analytics", header: <Skeleton /> },
  { title: "Creative Design", header: <Skeleton /> },
  { title: "Collaborative Tools", header: <Skeleton /> },
  { title: "Knowledge Tracking", header: <Skeleton /> },
  { title: "Interactive Experiences", header: <Skeleton /> },
  { title: "Performance Insights", header: <Skeleton /> },
  { title: "Educational Resources", header: <Skeleton /> },
  { title: "Gamified Learning", header: <Skeleton /> },
  { title: "Community Engagement", header: <Skeleton /> },
];

export default Services;
