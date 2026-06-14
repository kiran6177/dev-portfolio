import { cn } from "@/lib/utils";

type SectionLayoutProps = {
  id?: string;
  count: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

function SectionLayout({ id, count, title, children, className }: SectionLayoutProps) {
  return (
    <section className={cn("relative px-8 max-w-full", className)} id={id}>
      <p className="display-d1 text-secondary-900 opacity-5 absolute -top-10 -left-12">{count}</p>
      <p className="font-terminal text-secondary-900 mb-6 uppercase">
        {count} {title}
      </p>
      {children}
    </section>
  );
}

export default SectionLayout;
