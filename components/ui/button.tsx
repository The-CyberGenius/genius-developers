import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
                    // Size variants
                    {
                        "px-4 py-2 text-sm": size === "sm",
                        "px-6 py-3 text-base": size === "md",
                        "px-8 py-4 text-lg": size === "lg",
                        "h-10 w-10": size === "icon",
                    },
                    // Style variants
                    {
                        // Primary: Cyan Background + Glow
                        "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(0,112,243,0.3)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)] hover:-translate-y-0.5":
                            variant === "primary",
                        // Secondary: Darker/Subtle
                        "bg-secondary text-secondary-foreground hover:bg-secondary/80":
                            variant === "secondary",
                        // Outline: Border only
                        "border border-primary/30 text-foreground hover:border-primary hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]":
                            variant === "outline",
                        // Ghost: Text only
                        "bg-transparent hover:bg-white/5 text-foreground":
                            variant === "ghost",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };
