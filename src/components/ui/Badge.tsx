import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  /** `accent` is for the "Solid" skill state; `muted` for everything else. */
  tone?: "accent" | "muted" | "outline";
};

const tones = {
  accent: "border-accent/40 bg-accent/10 text-accent",
  muted: "border-line bg-surface-2 text-text-muted",
  outline: "border-line-strong bg-transparent text-text-muted",
};

/** Small pill used for tech stacks and skill levels. */
export function Badge({ children, className, tone = "muted" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[0.72rem] leading-none tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
