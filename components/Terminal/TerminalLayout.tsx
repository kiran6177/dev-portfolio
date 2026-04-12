import { cn } from "@/lib/utils";

type TerminalLayoutProps = {
  children: React.ReactNode;
  title?: string;
  rounded?: boolean;
  className?: string
};
function TerminalLayout({ children, title = "TERMINAL", rounded = true , className}: TerminalLayoutProps) {
  return (
    <article
      className={cn(
        " overflow-hidden border-2 border-border-900 bg-background-500",
        rounded && "rounded-xl",
        className
      )}
    >
      <div className="relative bg-background-700 border-b-2 border-border-900 h-8 flex items-center justify-center px-4">
        <div className="flex gap-1.5 absolute left-4">
          <span className="bg-red-900 w-4 h-4 rounded-full inline-block opacity-40"></span>
          <span className="bg-green-900 w-4 h-4 rounded-full inline-block opacity-40 "></span>
          <span className="bg-blue-900 w-4 h-4 rounded-full inline-block opacity-40"></span>
        </div>
        <p className="font-terminal! text-secondary small-p">{title}</p>
        {/*DUMMY DIV */}
        <div></div>
      </div>
      {children}
    </article>
  );
}

export default TerminalLayout;
