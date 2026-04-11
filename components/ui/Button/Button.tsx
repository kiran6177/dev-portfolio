import { cn } from "@/lib/utils";
import React from "react";

const variants = {
  primary: "bg-primary-900 text-black-accent",
  secondary: "bg-secondary-900 text-black-accent",
  gradient: "bg-gradient-to-r from-primary-900 to-blue-900 text-black-accent shadow-[0_0_16px_1px] shadow-primary-900/20",
} as const;

type Variant = keyof typeof variants;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "h-11 rounded-xl flex items-center justify-center px-4 font-medium font-heading",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
