"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-32">
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.98,
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
          className="relative overflow-hidden rounded-[40px] bg-[#4477BB] px-8 py-20 text-white lg:px-20"
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70"
            >
              GET STARTED
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-4xl font-bold leading-tight tracking-tight lg:text-6xl"
            >
              Ready to split expenses
              <br />
              the smarter way?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75"
            >
              Create your first event, invite everyone with a single link, and
              keep every payment transparent from start to finish.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white px-8 text-[#4477BB] hover:bg-white/90"
                >
                  <Link href="#">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full border border-white/20 bg-white/10 px-8 text-white hover:bg-white/20"
                >
                  <Link href="#features">Explore Features</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
