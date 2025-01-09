import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import logo from "../assets/logo-white.png";
import vector from "../assets/01.png";

export function Contributors() {
    return (

    <div className="bg-[#f9c226] min-w-screen min-h-screen py-8">

      <div className="max-w-4xl px-4 md:px-0 flex flex-col mx-auto text-black mt-4">
        
        <div className="flex flex-row gap-6 md:gap-24">

          <div className="flex flex-col items-center md:items-start mb-1 ml-6 md:ml-0">

            <h1 className="text-5xl md:text-7xl font-medium left-0 mb-4">Meet the Minds</h1>

            <div className="flex flex-row gap-5 mb-6 ">
                <h1 className="text-5xl md:text-7xl font-medium">Behind the</h1>

                <img src={logo} alt="Logo" className="w-16 h-12 md:w-32 md:h-auto mt-3" />

            </div>

          </div>

          <div className="hidden md:block">
          <img src={vector} alt="vector" className="h-auto w-20 md:w-44 md:h-auto " />
          </div>
        </div>


        <p className="text-lg font-sans font-semibold mb-10">
          At NeverMinds, we're a passionate team united by one goal: to create fun, engaging, and thought-provoking experiences.
           From developers to content creators, each of us brings something unique to the table to challenge and inspire you. 
           Get to know the people behind the app, and see how curiosity drives everything we do!
        </p>
      </div>

        {/* bentoGrid */}
      <BentoGrid className="max-w-4xl px-4 md:px-0 mx-auto">
        {items.map((item, i) => {
          let gridClass = "";
  
          switch (i) {
            case 0:
              gridClass = "md:col-span-5";
              break;
            case 1:
              gridClass = "md:col-span-2";
              break;
            case 2:
              gridClass = "md:col-span-2";
              break;
            case 3:
              gridClass = "md:col-span-2";
              break;
            case 4:
              gridClass = "md:col-span-3";
              break;
            case 5:
              gridClass = "md:col-span-7";
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
    );
  }
  
  

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white"></div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    header: <Skeleton />,
    
  },
  {
    title: "The Digital Revolution",
    header: <Skeleton />,

  },
  {
    title: "The Art of Design",
    header: <Skeleton />,
  },
  {
    title: "The Power of Communication",
    header: <Skeleton />,
  },
  {
    title: "The Pursuit of Knowledge",
    header: <Skeleton />,
  },
  {
    title: "The Joy of Creation",
    header: <Skeleton />,
  }
];
