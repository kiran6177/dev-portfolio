import { cn } from "@/lib/utils";
import { type ChangeEvent } from "react";

type InputProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  terminal?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
};

function Input({
  label,
  name,
  value,
  placeholder,
  type = "text",
  multiline = false,
  rows = 4,
  onChange,
  terminal = false,
  className,
}: InputProps) {
  return terminal ? (
    multiline ? (
      <textarea
        name={name}
        className={cn("font-terminal ml-4 w-full focus:outline-0 resize-none", className)}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    ) : (
      <input
        type={type}
        name={name}
        className={cn("font-terminal ml-4 focus:outline-0", className)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    )
  ) : (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-center gap-2">
        <span className="text-secondary text-sm">"{label}":</span>
        <span className="text-secondary/60">"</span>
      </div>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          rows={rows}
          placeholder={placeholder}
          onChange={onChange}
          className="min-h-30 w-full resize-none rounded-xl border border-border-900 bg-background-800 p-4 font-mono text-sm text-primary outline-none transition focus:border-primary-900 focus:ring-2 focus:ring-primary-900/20"
        />
      ) : (
        <input
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className="rounded-xl border border-border-900 bg-background-800 px-4 py-3 font-mono text-sm text-primary outline-none transition focus:border-primary-900 focus:ring-2 focus:ring-primary-900/20"
        />
      )}
      <span className="text-secondary text-sm">",</span>
    </div>
  );
}

export default Input;
