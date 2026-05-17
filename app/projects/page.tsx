import SectionLayout from "@/components/Layout/SectionLayout";
import TerminalCard from "@/components/Terminal/TerminalCard";
import { projects } from "@/lib/constants/projects.config";

export default function Projects() {
  return (
    <SectionLayout count="01" title="SYSTEMS" >
      <div className="grid gap-12 lg:grid-cols-[minmax(45%,1fr)_minmax(45%,1fr)] items-start">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="display-h2">System</h2>
            <h2 className="display-h2 text-gradient w-fit">Architecture</h2>
          </div>
          <p className="text-secondary large-p max-w-2xl">
            Explore the core systems I have built, designed, and deployed. Each project is a
            demonstration of scalable architecture, production-ready engineering, and modern
            application design.
          </p>
        </div>
      </div>
      <section className="grid gap-6 lg:grid-cols-3 my-20">
        {projects.map((project) => (
          <TerminalCard key={project.id} project={project} />
        ))}
      </section>
    </SectionLayout>
  );
}
