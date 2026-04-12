"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const variants = {
  primary: "text-primary-900 border-primary-900/40 bg-background-700/20",
  secondary: "text-secondary-900 border-secondary-900/40 bg-background-700/20",
  tertiary: "text-tertiary-900 border-tertiary-900/40 bg-background-700/20",
} as const;

type Variant = keyof typeof variants;

type PipelineCardProps = {
  skill: string;
  icon?: ReactNode;
  variant?: Variant;
  className?: string;
};

function PipelineCard({ skill, icon, variant = "primary", className }: PipelineCardProps) {
  const IconComponent = icon;

  return (
      <div
        className={cn(
          "flex flex-col border-2 gap-2 p-4 rounded-xl w-fit min-w-48",
          className,
          variants[variant]
        )}
      >
        <div className="overflow-hidden">{IconComponent}</div>
        <div>
          <h5 className="text-gradient w-fit">{skill}</h5>
        </div>
      </div>
  );
}

export default PipelineCard;
