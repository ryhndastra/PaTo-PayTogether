import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

import { LenisProvider } from "@/components/providers/LenisProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pato-paytogether.vercel.app"),

  title: {
    default: "PaTo — Pay Together",
    template: "%s | PaTo",
  },

  description:
    "PaTo is a modern mobile-first PWA for managing shared expenses transparently. Create events, invite friends with a link, and track payments together.",

  applicationName: "PaTo",

  keywords: [
    "PaTo",
    "Pay Together",
    "Group Expense",
    "Shared Expense",
    "Split Bill",
    "Expense Tracker",
    "Patungan",
    "QRIS",
    "PWA",
  ],

  authors: [
    {
      name: "Reyhand Astra",
    },
  ],

  creator: "Reyhand Astra",

  publisher: "PaTo",

  manifest: "/site.webmanifest",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://pato.app",
    siteName: "PaTo",
    title: "PaTo — Pay Together",
    description:
      "Manage shared expenses transparently with a modern mobile-first experience.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "PaTo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PaTo — Pay Together",
    description: "Manage shared expenses transparently with PaTo.",
    images: ["/images/og-image.png"],
  },

  appleWebApp: {
    capable: true,
    title: "PaTo",
    statusBarStyle: "default",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#4477BB",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <LenisProvider>{children}</LenisProvider>

        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
