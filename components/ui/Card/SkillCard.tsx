import { statuses } from "@/lib/constants/skills.config";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Status = keyof typeof statuses;

const statusStyles = {
  [statuses.RUNNING]: {
    text: "text-primary-900/80",
    bg: "bg-primary-900 shadow-[0_0_16px_1px] shadow-primary-900/20",
  },
  [statuses.BUILDING]: {
    text: "text-green-900/80",
    bg: "bg-green-900 shadow-[0_0_16px_1px] shadow-green-900/20",
  },
  [statuses.LISTENING]: {
    text: "text-secondary-900/80",
    bg: "bg-secondary-900 shadow-[0_0_16px_1px] shadow-secondary-900/20",
  },
  [statuses.DEPLOYING]: {
    text: "text-red-900/80",
    bg: "bg-red-900 shadow-[0_0_16px_1px] shadow-red-900/20",
  },
  [statuses.CONNECTED]: {
    text: "text-green-900/80",
    bg: "bg-green-900 shadow-[0_0_16px_1px] shadow-green-900/20",
  },
  [statuses.STRICT]: {
    text: "text-blue-900/80",
    bg: "bg-blue-900 shadow-[0_0_16px_1px] shadow-blue-900/20",
  },
};

type SkillCardProps = {
  status?: Status;
  skill: string;
  imageURL: string;
  className?: string;
};

function SkillCard({ status = "RUNNING", skill, imageURL , className }: SkillCardProps) {
  return (
    <div className={cn("group flex flex-col gap-2 border-2 border-border-900 p-4 rounded-xl bg-background-700/40", className)}>
      <div className="relative w-16 h-16 overflow-hidden">
        <Image src={imageURL} alt={skill} fill sizes="max" className="object-cover grayscale group-hover:grayscale-0" />
      </div>
      <div>
        <h5>{skill}</h5>
        <p
          className={cn(
            "small-p flex items-center gap-1 font-terminal!",
            statusStyles[statuses[status]].text
          )}
        >
          <span
            className={cn(
              "inline-block w-2 h-2 rounded-full mr-2",
              statusStyles[statuses[status]].bg,
              "animate-pulse"
            )}
          ></span>
          {status}
        </p>
      </div>
    </div>
  );
}

export default SkillCard;
