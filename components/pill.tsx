// A quiet tag, used for tools.
export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-ink bg-paper px-[14px] py-[6px] text-[13px] font-medium">
      {children}
    </span>
  );
}
