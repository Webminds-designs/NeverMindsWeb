import React from "react";
import { cn } from "../lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, icon }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 shadow-lg dark:shadow-none p-6 bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-gray-800 dark:to-gray-900 flex flex-col space-y-4",
        className
      )}
    >
      {/* Icon Section */}
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-white">
          {icon}
        </div>
      )}

      {/* Title */}
      <div className="font-sans font-bold text-xl text-neutral-700 dark:text-neutral-100 mb-2 text-center">
        {title}
      </div>

      {/* Description */}
      <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300 text-center">
        {description}
      </div>
    </div>
  );
};
