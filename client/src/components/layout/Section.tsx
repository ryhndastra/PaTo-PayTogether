import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn("relative py-32 lg:py-36", className)} {...props}>
      {children}
    </section>
  );
}
