import { cn } from "@/lib/utils";
import React from "react";

const variants = {
  primary: {
    bg: "border-2 border-primary-900/40 bg-primary-900/10 text-primary-900",
    border: "bg-primary-900",
  },
  secondary: {
    bg: "border-2 border-secondary-900/40 bg-secondary-900/10 text-secondary-900",
    border: "bg-secondary-900",
  },
  teritiary: {
    bg: "border-2 border-tertiary-900/40 bg-tertiary-900/10 text-tertiary-900",
    border: "bg-tertiary-900",
  },
  red: {
    bg: "border-2 border-red-900/40 bg-red-900/10 text-red-900",
    border: "bg-red-900",
  },
  standard: {
    bg: "border-2 border-border-900/40 bg-border-900/10 text-secondary",
    border: "bg-border-900",
  },
} as const;

type TagProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  className?: string;
  index?: number;
  variant?: keyof typeof variants;
};

function Tag({ title, className, variant, index = 0, ...props }: TagProps) {
  const variantKeys = Object.keys(variants) as (keyof typeof variants)[];

  const randomVariant = variantKeys[index % variantKeys.length];

  const currentVariant = variant ? variants[variant] : variants[randomVariant];

  return (
    <div className={cn("px-3 py-1 rounded-md w-fit", currentVariant["bg"], className)} {...props}>
      <p className="font-terminal! uppercase xsmall-p w-fit flex items-center">
        <span
          className={cn("inline-block w-2 h-2 rounded-full mr-2", currentVariant["border"])}
        ></span>
        {title}
      </p>
    </div>
  );
}

export default Tag;
