import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      <span className="inline-flex items-center rounded-full border border-[#4477BB]/15 bg-[#4477BB]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4477BB]">
        {eyebrow}
      </span>

      <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-zinc-950 md:text-5xl lg:text-6xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-500">{description}</p>
    </div>
  );
}
