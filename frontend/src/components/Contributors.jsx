import React, { useContext } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import logo from "../assets/logo-white.png";
import vector from "../assets/01.png";
import { LanguageContext } from "../context/LanguageContext";
import content from "../components/content/ContributorsContent.json";

export function Contributors() {
    const { language } = useContext(LanguageContext);

    return (
        <div className="bg-[#f9c226] min-w-screen min-h-screen py-8">
            <div className="max-w-4xl px-4 md:px-0 flex flex-col mx-auto text-black mt-4">
                <div className="flex flex-row gap-6 md:gap-24">
                    <div className="flex flex-col items-center md:items-start mb-1 ml-6 md:ml-0">
                        <h1 className="text-3xl md:text-7xl font-medium left-0 mb-4">
                            {content[language].title}
                        </h1>
                        <div className="flex flex-row gap-5 mb-6 ">
                            <h1 className="text-3xl md:text-7xl font-medium">
                                {content[language].subtitle}
                            </h1>
                            <img src={logo} alt="Logo" className="w-16 h-12 md:w-32 md:h-auto mt-3" />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img src={vector} alt="vector" className="h-auto w-20 md:w-44 md:h-auto" />
                    </div>
                </div>
                <p className="text-lg font-sans font-semibold mb-10">
                    {content[language].description}
                </p>
            </div>
            {/* bentoGrid */}
            <BentoGrid className="max-w-4xl px-4 md:px-0 mx-auto">
                {content[language].contributors.map((item, i) => {
                    let gridClass = "";
                    switch (i) {
                        case 0:
                            gridClass = "md:col-span-5";
                            break;
                        case 1:
                        case 2:
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
                        <BentoGridItem key={i} title={item.title} header={<Skeleton />} className={gridClass} />
                    );
                })}
            </BentoGrid>
        </div>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white"></div>
);
