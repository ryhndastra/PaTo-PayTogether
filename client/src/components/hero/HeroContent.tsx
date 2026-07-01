"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

export function HeroContent() {
  return (
    <motion.div
      className="max-w-xl"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="inline-flex items-center gap-2 rounded-full border border-[#4477BB]/15 bg-[#4477BB]/5 px-4 py-2"
      >
        <Sparkles size={16} className="text-[#4477BB]" />

        <span className="text-sm font-medium text-[#4477BB]">
          Mobile First Progressive Web App
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.7,
          ease: "easeOut",
        }}
        className="mt-8 text-5xl font-bold leading-[0.92] tracking-tighter text-zinc-950 lg:text-7xl"
      >
        Pay together.
        <br />
        <span className="text-[#4477BB]">Track everything.</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.35,
          duration: 0.6,
          ease: "easeOut",
        }}
        className="mt-8 max-w-lg text-lg leading-8 text-zinc-500"
      >
        Create an event, invite everyone with a single link, record every shared
        expense, and monitor payment progress transparently in one place.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.6,
          ease: "easeOut",
        }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Button
            size="lg"
            className="h-12 rounded-full bg-[#4477BB] px-7 hover:bg-[#3968a7]"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="outline"
            size="lg"
            className="h-12 rounded-full px-7"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.65,
          duration: 0.6,
          ease: "easeOut",
        }}
        className="mt-12 flex flex-wrap gap-8"
      >
        <div>
          <p className="text-2xl font-bold tracking-tight">No Install</p>

          <span className="text-sm text-zinc-500">Join instantly via link</span>
        </div>

        <div>
          <p className="text-2xl font-bold tracking-tight">Real-time</p>

          <span className="text-sm text-zinc-500">
            Expense & payment updates
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
