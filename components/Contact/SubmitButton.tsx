type SubmitButtonProps = {
  label: string;
};

function SubmitButton({ label }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center rounded-2xl border border-primary-900 bg-primary-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900 transition hover:bg-primary-800"
    >
      {label}
    </button>
  );
}

export default SubmitButton;
