import NewLineCursor from "./NewLineCursor";
import TerminalLayout from "./TerminalLayout";

type TerminalProps = {
  children: React.ReactNode;
};

function Terminal({ children }: TerminalProps) {
  return (
    <TerminalLayout>
      <div className="p-6">
        {children}
        <NewLineCursor />
      </div>
    </TerminalLayout>
  );
}

export default Terminal;
