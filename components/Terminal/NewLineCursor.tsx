import CommandStart from "./CommandStart";

function NewLineCursor() {
  return (
    <div className="h-6 flex gap-3 mt-2">
      <CommandStart />
      <span className="inline-block bg-primary-900 h-full w-2 animate-blink"></span>
    </div>
  );
}

export default NewLineCursor;
