"use client";

import { CreditCard, Link2, QrCode, ReceiptText, Users } from "lucide-react";
import { motion } from "motion/react";
import { FeatureCard } from "@/components/features/FeatureCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function Features() {
  return (
    <Section id="features" className="overflow-hidden">
      <Container>
        <motion.div
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
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <SectionHeader
            eyebrow="Features"
            title={
              <>
                Everything your group
                <br />
                needs in one place.
              </>
            }
            description="From creating an event to tracking every payment, PaTo keeps everything organized in one simple workspace."
          />
        </motion.div>

        <motion.div
          className="mt-20 grid gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          <FeatureCard
            className="min-h-90 lg:col-span-2"
            icon={<ReceiptText size={30} />}
            title="Shared Expenses"
            description="Keep every expense transparent so everyone always knows where the money goes."
          >
            <div className="flex items-center justify-between rounded-2xl border border-zinc-100 bg-zinc-50 px-5 py-4">
              <div>
                <p className="text-sm font-semibold">24 Expenses</p>

                <p className="text-sm text-zinc-500">Updated 2 minutes ago</p>
              </div>

              <div className="rounded-full bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-600">
                Live
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            className="min-h-90"
            icon={<Link2 size={30} />}
            title="Invite by Link"
            description="Share one secure invitation link so everyone can join instantly."
          >
            <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4">
              <p className="truncate font-medium">pato.app/join/X8K2PQ</p>

              <div className="mt-4 h-2 rounded-full bg-zinc-200">
                <div className="h-full w-full rounded-full bg-[#4477BB]" />
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            className="min-h-80"
            icon={<CreditCard size={30} />}
            title="Payment Tracking"
            description="Know exactly who has paid and who's still pending."
          >
            <div>
              <div className="mb-3 flex items-center justify-between text-sm">
                <span>Progress</span>

                <span className="font-semibold">75%</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-zinc-100">
                <div className="h-full w-3/4 rounded-full bg-[#4477BB]" />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-50 px-3 py-2 text-sm text-emerald-600">
                  6 Paid
                </span>

                <span className="rounded-full bg-orange-50 px-3 py-2 text-sm text-orange-500">
                  2 Pending
                </span>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            className="min-h-80 lg:col-span-2"
            icon={<QrCode size={30} />}
            title="QRIS & Receipt"
            description="Collect payments faster and keep every receipt documented."
          >
            <div className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-zinc-50 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4477BB]/10">
                <QrCode size={22} className="text-[#4477BB]" />
              </div>

              <div>
                <p className="font-medium">QRIS Ready</p>

                <p className="text-sm text-zinc-500">
                  Upload once, everyone can scan.
                </p>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            className="min-h-70 lg:col-span-3"
            icon={<Users size={30} />}
            title="Built for Every Event"
            description="Whether it's a BBQ, trip, birthday, gathering, or class project, PaTo adapts to every occasion."
          >
            <div className="flex flex-wrap gap-3">
              {[
                "BBQ",
                "Trip",
                "Bukber",
                "Camping",
                "Birthday",
                "Graduation",
                "Project",
                "Gathering",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </FeatureCard>
        </motion.div>
      </Container>
    </Section>
  );
}
