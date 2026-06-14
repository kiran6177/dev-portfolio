import CommitCard from "./CommitCard";
import { Experience } from "@/lib/types/common.types";

type ExperienceMainCardProps = {
  experiences: Experience[];
};

const colorVariants = [
  "ring-primary-900 bg-primary-900 shadow-[0_0_16px_1px_rgba(0,227,253,0.4)]",
  "ring-secondary-900 bg-secondary-900 shadow-[0_0_16px_1px_rgba(193,128,255,0.4)]",
  "ring-tertiary-900 bg-tertiary-900 shadow-[0_0_16px_1px_rgba(155,255,206,0.4)]",
];

function ExperienceMainCard({ experiences }: ExperienceMainCardProps) {
  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="hidden sm:absolute left-2.5 top-4 bottom-0 w-0.5 bg-linear-to-b from-border-900 to-border-900/30 h-[calc(100%-16rem)]"></div>

      {/* Experience cards with timeline dots */}
      <div className="space-y-8">
        {experiences.map((experience, index) => {
          const colorClass = colorVariants[index % colorVariants.length];

          return (
            <div key={experience.id} className="relative sm:pl-16">
              {/* Timeline dot */}
              <div
                className={`hidden absolute left-1.5 top-2 sm:inline-flex h-6 w-6 -translate-x-1.5 rounded-full ${colorClass} ring-1 border-background-900 border-4 `}
              ></div>

              {/* Commit card */}
              <CommitCard content={experience} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceMainCard;
