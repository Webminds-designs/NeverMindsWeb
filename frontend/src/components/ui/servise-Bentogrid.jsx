import { cn } from "../../lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols- md:grid-cols-9 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, header }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-[#ffc726] justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}

      <div className="group-hover/bento:translate-x-2 transition duration-200">

        <div className="font-bold text-black mb-2 mt-2">
          {title}
        </div>
        
      </div>
    </div>
  );
};
