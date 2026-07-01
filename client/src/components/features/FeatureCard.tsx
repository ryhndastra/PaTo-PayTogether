"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  children,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      whileInView="show"
      initial="hidden"
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      className={cn(
        "group relative overflow-hidden rounded-[32px] border border-zinc-200 bg-white p-8",
        "shadow-[0_10px_30px_rgba(0,0,0,0.03)]",
        className,
      )}
    >
      {/* Glow */}
      <motion.div
        className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#4477BB]/5 blur-3xl"
        transition={{
          duration: 0.35,
        }}
      />

      <div className="relative z-10 flex h-full flex-col">
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.08,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4477BB]/10 text-[#4477BB]"
        >
          {icon}
        </motion.div>

        <h3 className="mt-8 text-2xl font-semibold tracking-tight">{title}</h3>

        <p className="mt-4 max-w-md leading-7 text-zinc-500">{description}</p>

        <div className="mt-auto pt-8">{children}</div>
      </div>
    </motion.div>
  );
}
