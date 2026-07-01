"use client";

import { motion } from "motion/react";
import {
  Backpack,
  Beef,
  BriefcaseBusiness,
  GraduationCap,
  PartyPopper,
  Plane,
} from "lucide-react";

import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const useCases = [
  {
    title: "BBQ",
    description: "Split groceries, drinks, and equipment effortlessly.",
    icon: Beef,
  },
  {
    title: "Trip",
    description: "Keep transportation, hotels, and meals organized.",
    icon: Plane,
  },
  {
    title: "Gathering",
    description: "Manage contributions and shared expenses together.",
    icon: PartyPopper,
  },
  {
    title: "Graduation",
    description: "Collect payments for events without confusion.",
    icon: GraduationCap,
  },
  {
    title: "Projects",
    description: "Track team expenses from start to finish.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Camping",
    description: "Know exactly who paid for what during the trip.",
    icon: Backpack,
  },
];

export function UseCases() {
  return (
    <Section id="use-cases">
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
            eyebrow="Perfect For"
            title="Every shared moment."
            description="Whether you're traveling with friends or organizing a class project, PaTo keeps every expense transparent."
          />
        </motion.div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-[28px] border border-zinc-200 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
              >
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4477BB]/10 text-[#4477BB]"
                >
                  <Icon size={30} />
                </motion.div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-500">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
