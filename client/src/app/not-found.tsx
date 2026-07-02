import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-[#4477BB]">404</h1>

      <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>

      <p className="mt-4 max-w-md text-zinc-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-[#4477BB] px-6 py-3 text-white transition hover:bg-[#3968a7]"
      >
        Back to Home
      </Link>
    </main>
  );
}
