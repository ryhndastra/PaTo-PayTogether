"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    label: "Features",
    href: "features",
  },
  {
    label: "How It Works",
    href: "how-it-works",
  },
  {
    label: "Preview",
    href: "preview",
  },
  {
    label: "Use Cases",
    href: "use-cases",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  function scrollTo(id: string) {
    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-5 z-50">
        <Container>
          <motion.nav
            animate={{
              scale: scrolled ? 0.97 : 1,
              y: scrolled ? -2 : 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className={`mx-auto flex w-full items-center justify-between rounded-full border px-3 backdrop-blur-2xl transition-all duration-300 ${
              scrolled
                ? "border-zinc-200 bg-white/95 shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
                : "border-zinc-200/70 bg-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="rounded-full p-2">
              <motion.div
                animate={{
                  scale: scrolled ? 0.94 : 1,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <Image
                  src="/images/logo/logo-horizontal.png"
                  alt="PaTo"
                  width={120}
                  height={32}
                  priority
                  className="h-8 w-auto"
                />
              </motion.div>
            </Link>
            {/* Desktop */}
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="text-sm font-medium text-zinc-500 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#4477BB]"
                >
                  {item.label}
                </button>
              ))}
            </div>
            {/* Desktop CTA */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
            >
              <Button className="hidden rounded-full md:flex">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            {/* Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </motion.nav>
        </Container>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <div className="space-y-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="block text-left text-4xl font-bold tracking-tight"
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button
            className="mt-12 h-12 rounded-full"
            onClick={() => setOpen(false)}
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
