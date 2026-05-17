import SectionLayout from "@/components/Layout/SectionLayout";
import ExperienceMainCard from "@/components/CommitCard/ExperienceMainCard";
import { experiences } from "@/lib/constants/experience.config";
import EducationCard from "@/components/CommitCard/EducationCard";
import { education } from "@/lib/constants/education.config";

export default function Skills() {
  return (
    <>
      <SectionLayout count="01" title="TECH">
        <div className="space-y-3 mb-12">
          <h2 className="display-h2">
            Technical <span className=" text-gradient">Architecture</span>
          </h2>
          <p className="text-secondary large-p max-w-2xl">
            A comprehensive overview of my technical journey, showcasing the core systems I've
            built, designed, and deployed. Each project is a demonstration of scalable architecture,
            production-ready engineering, and modern application design.
          </p>
        </div>
      </SectionLayout>
      <SectionLayout count="02" title="COMMIT HISTORY" className="my-20">
        <h2 className="mb-10">EXPERIENCE</h2>
        <ExperienceMainCard experiences={experiences} />
      </SectionLayout>
      <SectionLayout count="03" title="STASH LIST" className="my-20">
        <h2 className="mb-10">EDUCATION</h2>
        <EducationCard content={education} />
      </SectionLayout>
    </>
  );
}
