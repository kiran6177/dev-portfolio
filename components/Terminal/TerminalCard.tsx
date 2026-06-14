import { ReactNode } from "react";
import Image from "next/image";
import TerminalLayout from "./TerminalLayout";
import Tag from "../ui/Tag/Tag";
import LinkComponent from "../ui/Link/Link";
import { CircleArrowRight } from "lucide-react";
import { Project } from "@/lib/types/common.types";
import { cn } from "@/lib/utils";

type TerminalCardProps = {
  project?: Project;
  children?: ReactNode;
  classname?: string;
};

function TerminalCard({ project, classname, children }: TerminalCardProps) {
  return (
    <TerminalLayout className={cn("group", classname)} rounded={false}>
      {children ? (
        children
      ) : project ? (
        <div>
          <div>
            <Image
              src={project.image}
              className="grayscale group-hover:grayscale-0 transition-all duration-300"
              alt="terminal"
              width={800}
              height={600}
            />
          </div>
          <div className="p-6 ">
            <div className="flex gap-2 mb-4">
              {project.stack.slice(0, 3).map((tech, index) => (
                <Tag key={index} title={tech} index={index} />
              ))}
            </div>
            <h4>{project.name}</h4>
            <p className="line-clamp-5 small-p text-secondary mt-2">
              {project.description}
            </p>
            <LinkComponent
              href={'/projects/' + project.id}
              variant="terminal"
              className="text-secondary-900/60 hover:text-secondary-900 flex gap-2 items-center w-fit place-self-end mt-4"
            >
              IN  TO THE CORE
              <CircleArrowRight size={16} />
            </LinkComponent>
          </div>
        </div>
      ) : null}
    </TerminalLayout>
  );
}

export default TerminalCard;
