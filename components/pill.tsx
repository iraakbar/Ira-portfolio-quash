import Link from "next/link";

const base =
  "inline-flex items-center rounded-full border border-ink bg-paper font-medium";

// A quiet tag, used for tools.
export function Pill({ children }: { children: React.ReactNode }) {
  return <span className={`${base} px-[14px] py-[6px] text-[13px]`}>{children}</span>;
}

// A clickable pill that inverts on hover, used for buttons.
export function PillLink({
  href,
  external = false,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const className = `${base} px-[18px] py-[10px] text-sm transition-colors hover:bg-ink hover:text-paper`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
