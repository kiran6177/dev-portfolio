import Collaborate from "@/components/Contact/Collaborate";
import SectionLayout from "@/components/Layout/SectionLayout";
import PipelineMain from "@/components/Pipeline/PipelineMain";
import SkillCarousel from "@/components/SkillCarousel/SkillCarousel";
import CommandStart from "@/components/Terminal/CommandStart";
import Terminal from "@/components/Terminal/Terminal";
import TerminalCard from "@/components/Terminal/TerminalCard";
import LinkComponent from "@/components/ui/Link/Link";
import { CircleArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <SectionLayout count="01" title="IDENTITY">
        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="display-h2">Engineering </h2>
              <h2 className="display-h2 text-gradient w-fit">Scalable</h2>
              <h2 className="display-h2">Systems with</h2>
              <h2 className="display-h2">Absolute Precision.</h2>
            </div>
            <p className="text-secondary large-p">
              Full-stack engineer specializing in designing scalable systems with a focus on
              reliability, observability, and performance. Experienced in building and deploying
              production-ready applications, optimizing backend services, and ensuring systems
              operate efficiently under real-world scale.
            </p>
          </div>
          <div>
            <Terminal>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3">
                  <CommandStart /> <p className="font-terminal">whoami</p>
                </div>
                <p className="font-terminal text-tertiary-900">
                  <span className="text-primary font-terminal">name:</span> {`'Kiran'`}
                </p>
                <p className="font-terminal text-tertiary-900">
                  <span className="text-primary font-terminal">role:</span>{" "}
                  {`'Full Stack Engineer'`}
                </p>
                <p className="font-terminal text-secondary-900">
                  <span className="text-primary font-terminal">experience:</span> 2.5{" "}
                  <span className="text-secondary/60 font-terminal">{`// years`}</span>
                </p>
                <p className="font-terminal text-tertiary-900">
                  <span className="text-primary font-terminal">location:</span>{" "}
                  {`'Kochi, Kerala, India'`}
                </p>
                <p className="font-terminal text-tertiary-900">
                  <span className="text-primary font-terminal">skills:</span>
                  <span className="text-primary-900"> [</span>
                  {`'JavaScript', 'Node' , 'React',
                  'MongoDB',...+10`}
                  <span className="text-primary-900">]</span>
                </p>
                <p className="font-terminal text-tertiary-900">
                  <span className="text-primary font-terminal">status:</span>{" "}
                  {`'Available_for_build'`}
                </p>
              </div>
            </Terminal>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout count="02" title="SYSTEMS" className="my-20">
        <LinkComponent
          href="/projects"
          variant="terminal"
          className="absolute top-0 right-0 flex gap-2 items-center"
        >
          EXPLORE CORE
          <CircleArrowRight />
        </LinkComponent>
        <h2 className="mb-4">RECENT SYSTEMS </h2>
        <div className="grid grid-cols-3 gap-6">
          <TerminalCard />
          <TerminalCard />
          <TerminalCard />
        </div>
      </SectionLayout>
      <SectionLayout count="03" title="ENGINE" className="my-20 ">
        <h2 className="mb-4">RUNTIME</h2>
        <SkillCarousel />
      </SectionLayout>
      <SectionLayout count="04" title="PIPELINE" className="my-20 ">
        <h2 className="mb-4">BUILD PIPELINE</h2>
        <PipelineMain />
      </SectionLayout>
      <Collaborate />
    </div>
  );
}
