import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility to merge tailwind classes properly.
 * Handles conflicts like 'px-2 px-4' -> 'px-4'.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
