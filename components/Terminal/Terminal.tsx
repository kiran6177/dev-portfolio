import NewLineCursor from "./NewLineCursor";

type TerminalProps = {
  children: React.ReactNode;
};

function Terminal({ children }: TerminalProps) {
  return (
    <article className=" rounded-xl overflow-hidden border-2 border-border-900 bg-background-500">
      <div className="relative bg-background-700 border-b-2 border-border-900 h-8 flex items-center justify-center px-4">
        <div className="flex gap-1.5 absolute left-4">
          <span className="bg-red-900 w-4 h-4 rounded-full inline-block opacity-40"></span>
          <span className="bg-green-900 w-4 h-4 rounded-full inline-block opacity-40 "></span>
          <span className="bg-blue-900 w-4 h-4 rounded-full inline-block opacity-40"></span>
        </div>
        <p className="font-terminal! text-secondary small-p">TERMINAL</p>
        {/*DUMMY DIV */}
        <div></div>
      </div>
      <div className="p-6">
        {children}
        <NewLineCursor />
      </div>
    </article>
  );
}

export default Terminal;
