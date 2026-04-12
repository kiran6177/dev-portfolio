import PipelineCard from "../ui/Card/PipelineCard";
import { BugPlay, Code, Form, Lightbulb, PackageCheck } from "lucide-react";

function PipelineMain() {
  return (
    <div className="flex w-full justify-between items-center gap-2">
      <PipelineCard skill="PLAN" icon={<Lightbulb size={40}  />} />
      <div className="h-0.25 flex-1  bg-gradient-animated " />
      <PipelineCard skill="DESIGN" variant="secondary" icon={<Form size={40} />} />
      <div className="h-0.25 flex-1  bg-gradient-animated " />
      <PipelineCard skill="DEVELOP" icon={<Code size={40} />} />
      <div className="h-0.25 flex-1  bg-gradient-animated " />
      <PipelineCard skill="TEST" variant="secondary" icon={<BugPlay size={40} />} />
      <div className="h-0.25 flex-1  bg-gradient-animated " />
      <PipelineCard skill="DEPLOY" icon={<PackageCheck size={40} />} />
    </div>
  );
}

export default PipelineMain;
