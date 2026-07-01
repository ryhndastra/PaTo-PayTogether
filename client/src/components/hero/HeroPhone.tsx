"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Link2, Wallet } from "lucide-react";

export function HeroPhone() {
  return (
    <motion.div
      className="relative flex items-center justify-center px-6 lg:px-16 xl:px-28"
      initial={{
        opacity: 0,
        x: 80,
        scale: 0.94,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.25,
        ease: "easeOut",
      }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute h-115 w-115 rounded-full bg-[#4477BB]/10 blur-[120px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Card Left */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [-5, -3, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-30 top-24 z-20 hidden w-56 rounded-[28px] border border-zinc-200 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] xl:block"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4477BB]/10">
          <Link2 size={24} className="text-[#4477BB]" />
        </div>

        <h3 className="mt-5 text-lg font-semibold">Invite by Link</h3>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Everyone joins instantly using one invitation link.
        </p>

        <div className="mt-5 inline-flex rounded-full bg-[#4477BB]/10 px-3 py-1 text-xs font-medium text-[#4477BB]">
          Fast & Easy
        </div>
      </motion.div>

      {/* Floating Card Right */}
      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [5, 3, 5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-34 top-24 z-20 hidden w-60 rounded-[28px] border border-zinc-200 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] xl:block"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
          <Wallet size={24} className="text-emerald-600" />
        </div>

        <h3 className="mt-5 text-lg font-semibold">Track Payments</h3>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Monitor everyone&apos;s payment progress in real time.
        </p>

        <div className="mt-5 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
          Live Sync
        </div>
      </motion.div>

      {/* Phone */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-30 rounded-[52px] border border-zinc-200/80 bg-white p-3 shadow-[0_40px_120px_rgba(0,0,0,0.12)]"
      >
        {/* Reflection */}
        <div className="pointer-events-none absolute inset-0 rounded-[52px] bg-linear-to-br from-white/60 via-transparent to-transparent" />

        {/* Screen */}
        <div className="relative h-140 w-70 overflow-hidden rounded-[40px] bg-linear-to-b from-zinc-50 to-white lg:h-160 lg:w-[320px]">
          <div className="absolute left-1/2 top-3 z-20 h-7 w-28 -translate-x-1/2 rounded-full bg-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4477bb10,transparent_60%)]" />

          {/* Content */}
          <div className="flex h-full flex-col items-center justify-center px-8 text-center">
            <Image
              src="/images/logo/logo-icon.png"
              alt="PaTo"
              width={96}
              height={96}
              priority
              className="drop-shadow-xl"
            />

            <Image
              src="/images/logo/logo-horizontal.png"
              alt="PaTo"
              width={170}
              height={46}
              priority
              className="mt-8 h-10 w-auto"
            />

            <p className="mt-6 max-w-55 text-sm leading-7 text-zinc-500">
              The latest mobile interface will appear here once the application
              is ready.
            </p>

            <div className="mt-8 inline-flex items-center rounded-full border border-[#4477BB]/15 bg-[#4477BB]/5 px-4 py-2">
              <span className="text-sm font-medium text-[#4477BB]">
                Preview Coming Soon
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute hidden h-155 w-155 rounded-full border border-[#4477BB]/5 xl:block"
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.3, 0.15, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
