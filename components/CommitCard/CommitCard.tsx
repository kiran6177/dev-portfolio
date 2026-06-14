import { Education, Experience } from "@/lib/types/common.types";
import Tag from "@/components/ui/Tag/Tag";
import { cn } from "@/lib/utils";

const variants = {
  primary: " text-primary-900",
  secondary: " text-secondary-900",
  teritiary: " text-tertiary-900",
  red: " text-red-900",
} as const;

type CommitCardProps = {
  content: Experience | Education;
  index: number;
  variant?: keyof typeof variants;
  type?: "experience" | "education";
};

function CommitCard({ content, index, variant, type = "experience" }: CommitCardProps) {
  const variantKeys = Object.keys(variants) as (keyof typeof variants)[];

  const randomVariant = variantKeys[index % variantKeys.length];

  const currentVariant = variant ? variants[variant] : variants[randomVariant];

  const experience = content as Experience;
  const education = content as Education;

  return (
    <article className="overflow-hidden rounded-3xl border border-border-900 bg-background-500 p-6 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
      <div className="space-y-4">
        <div className="space-y-3">
          <p
            className={cn(
              "font-terminal uppercase text-[0.75rem] tracking-[0.35em]",
              currentVariant
            )}
          >
            {type === "education" ? "STASH" : "COMMIT"} {content.commit}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-start">
            <div className="flex flex-col gap-1 justify-between">
              <h3 className="text-2xl font-semibold leading-tight tracking-tight text-primary">
                {type === "education" ? education.degree : experience.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 ">
                <span className="text-primary-900 font-terminal uppercase">
                  {type === "education" ? education.institution : experience.company}
                </span>
              </div>
            </div>
            <p className=" font-terminal! text-secondary small-p">{content.period}</p>
          </div>
        </div>

        {type === "experience" && <p className="text-secondary  max-w-2xl">{experience.quote}</p>}

        <div className="flex flex-wrap gap-3 ">
          {(type === "education" ? education.tags : experience.tags)?.map((tag, tagIndex) => (
            <Tag key={tag} title={`#${tag}`} variant="standard" />
          ))}
        </div>
      </div>
    </article>
  );
}

export default CommitCard;
