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
        "rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-[#1b191c] justify-between flex flex-col",
        className
      )}
    >
      {header}

      {/* Only render title if it exists to avoid extra empty space */}
      {title && (
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-bold text-black mb-2 mt-2 truncate line-clamp-2">
            {title}
          </div>
        </div>
      )}
    </div>
  );
};

