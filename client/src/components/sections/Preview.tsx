"use client";

import { motion } from "motion/react";
import Image from "next/image";

import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function Preview() {
  return (
    <Section id="preview">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <SectionHeader
            eyebrow="Preview"
            title={
              <>
                See PaTo
                <br />
                in action.
              </>
            }
            description="Every event, expense, payment, and receipt lives in one beautiful interface."
          />
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className="relative overflow-hidden rounded-[40px] border border-zinc-200 bg-linear-to-b from-zinc-50 to-white p-6 shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
            {/* Browser */}
            <div className="flex items-center gap-2 border-b border-zinc-200 pb-4">
              <div className="h-3 w-3 rounded-full bg-red-300" />
              <div className="h-3 w-3 rounded-full bg-yellow-300" />
              <div className="h-3 w-3 rounded-full bg-green-300" />
              <div className="ml-4 h-9 flex-1 rounded-full bg-zinc-100" />
            </div>

            {/* Preview */}
            <div className="mt-8 flex aspect-video items-center justify-center rounded-[28px] border-2 border-dashed border-zinc-300 bg-white">
              <div className="text-center">
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/images/logo/logo-horizontal.png"
                    alt="PaTo"
                    width={420}
                    height={112}
                    priority
                    className="mx-auto h-20 w-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.3,
                    duration: 0.5,
                  }}
                  className="mt-8 inline-flex items-center rounded-full border border-[#4477BB]/15 bg-[#4477BB]/5 px-4 py-2"
                >
                  <span className="text-sm font-medium text-[#4477BB]">
                    Screenshot coming soon
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
