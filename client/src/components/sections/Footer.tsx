"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Download, ShieldCheck, FileText } from "lucide-react";

import { Container } from "@/components/layout/Container";

const productLinks = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Preview",
    href: "#preview",
  },
  {
    label: "Use Cases",
    href: "#use-cases",
  },
];

const resourceLinks = [
  {
    label: "Privacy Policy",
    href: "#",
    icon: ShieldCheck,
  },
  {
    label: "Terms of Service",
    href: "#",
    icon: FileText,
  },
  {
    label: "Contact",
    href: "mailto:hello@pato.app",
    icon: ChevronRight,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <Image
                src="/images/logo/logo-horizontal.png"
                alt="PaTo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />

              <p className="mt-6 max-w-sm leading-7 text-zinc-500">
                Create events, split expenses, and keep every payment
                transparent in one simple workspace.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-lg font-semibold">Product</h3>

              <div className="mt-6 space-y-4">
                {productLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-zinc-500 transition-colors hover:text-[#4477BB]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold">Resources</h3>

              <div className="mt-6 space-y-4">
                {resourceLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 text-zinc-500 transition-colors hover:text-[#4477BB]"
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}

                <div className="flex items-center gap-3 text-zinc-400">
                  <Download size={18} />
                  <span>Mobile App (Coming Soon)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="my-12 h-px bg-zinc-200" />

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
            <p>© 2026 PaTo. All rights reserved.</p>

            <p>Made for seamless group expense management.</p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
