import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


// Utility function to merge and conditionally apply class names
export const cn = (...classes) => {
  return twMerge(clsx(classes));
};
