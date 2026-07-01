"use client";

import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ReceiptText, Users } from "lucide-react";

import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Create an Event",
    description:
      "Start a new event for your trip, BBQ, gathering, or any shared activity.",
  },
  {
    number: "02",
    icon: ArrowRight,
    title: "Invite Your Friends",
    description:
      "Share one invite link. Everyone joins instantly without installing anything.",
  },
  {
    number: "03",
    icon: ReceiptText,
    title: "Track Expenses",
    description:
      "Add expenses, upload receipts, and let everyone stay informed in real time.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Complete Payments",
    description:
      "Members upload proof of payment while everyone can monitor the progress.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
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
            eyebrow="How It Works"
            title="Four simple steps."
            description="Everything from creating an event until everyone completes their payment."
          />
        </motion.div>

        <div className="relative mt-24">
          {/* Timeline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-8 hidden h-px bg-zinc-200 lg:block"
          />

          <div className="grid gap-12 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
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
                    amount: 0.3,
                  }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm"
                  >
                    <Icon size={28} className="text-[#4477BB]" />
                  </motion.div>

                  <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#4477BB]">
                    {step.number}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-500">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
