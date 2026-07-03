import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

interface AuthCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  children: ReactNode;
  footer: ReactNode;
  reverse?: boolean;
}

export function AuthCard({
  title,
  description,
  image,
  imageAlt,
  children,
  footer,
  reverse = false,
}: AuthCardProps) {
  return (
    <div className="relative w-full max-w-5xl overflow-hidden rounded-[40px] border border-zinc-200 bg-white shadow-[0_40px_120px_rgba(0,0,0,0.08)]">
      <div
        className={`grid min-h-170 lg:grid-cols-2 ${
          reverse
            ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
            : ""
        }`}
      >
        {/* Left Section */}
        <div className="relative hidden overflow-hidden bg-linear-to-br from-[#6E9FE0] via-[#4477BB] to-[#4567AB] lg:flex">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 flex flex-1 flex-col justify-between p-12 text-white">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo/logo-icon.png"
                alt="PaTo"
                width={44}
                height={44}
                priority
              />

              <span className="text-3xl font-bold tracking-tight text-white">
                PaTo
              </span>
            </Link>

            {/* Mascot */}
            <div className="flex justify-center">
              <Image
                src={image}
                alt={imageAlt}
                width={420}
                height={420}
                priority
                className="h-auto w-85 drop-shadow-2xl xl:w-105"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight">
                Manage expenses
                <br />
                together with ease.
              </h2>

              <p className="mt-4 max-w-md text-white/80 leading-7">
                Organize trips, BBQs, gatherings, and every shared expense in
                one beautiful workspace.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center bg-white p-8 sm:p-14">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <Link href="/" className="mb-10 flex justify-center lg:hidden">
              <Image
                src="/images/logo/logo-horizontal.png"
                alt="PaTo"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            <div>
              <h1 className="text-4xl font-bold tracking-tight">{title}</h1>

              <p className="mt-3 text-zinc-500 leading-7">{description}</p>
            </div>

            <div className="mt-10">{children}</div>

            <div className="mt-8 border-t border-zinc-100 pt-6 text-center text-sm text-zinc-500">
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
