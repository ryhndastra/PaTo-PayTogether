"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const barWidths = [
  3, 5, 2, 4, 6, 2, 3, 5, 4, 2, 6, 3, 2, 5, 4, 3, 2, 6, 4, 3, 5, 2, 4, 3, 6, 2,
  5, 3, 4, 2,
];

export default function NotFound() {
  const pathname = usePathname();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F6F8FC] px-6 py-16 text-[#1C2B3A]">
      {/* dotted ledger-paper background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(rgba(68,119,187,0.16) 1px, transparent 1.6px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* header */}
      <div className="relative mx-auto flex max-w-5xl items-center justify-between">
        <span className="font-display text-lg font-bold tracking-tight text-[#2C5488]">
          PaTo
        </span>
        <span className="hidden font-mono text-xs uppercase tracking-widest text-[#7C93B3] sm:block">
          Kode Kesalahan · 404
        </span>
      </div>

      <div className="relative mx-auto mt-10 grid max-w-5xl grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* mascot */}
        <div className="flex justify-center lg:justify-end">
          <div className="animate-float">
            <Image
              src="/images/PaTo-mascot.png"
              alt="Maskot PaTo bingung sambil memegang tanda tanya"
              width={460}
              height={460}
              priority
              className="h-auto w-80 drop-shadow-[0_20px_25px_rgba(44,84,136,0.25)] sm:w-104 lg:w-120"
            />
          </div>
        </div>

        {/* receipt / struk */}
        <div className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="rounded-t-2xl border border-b-0 border-[#D9E3F2] bg-white px-7 pb-6 pt-7 shadow-[0_25px_50px_-20px_rgba(44,84,136,0.35)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8CA0BE]">
              Struk Pencarian
            </p>
            <h1 className="mt-2 font-display text-6xl font-extrabold leading-none text-[#2C5488] sm:text-7xl">
              404
            </h1>
            <h2 className="mt-3 text-xl font-semibold text-[#1C2B3A]">
              Halaman tidak ditemukan
            </h2>

            <div className="my-5 border-t border-dashed border-[#C9D6E8]" />

            <dl className="space-y-2 font-mono text-xs text-[#5A6E8C]">
              <div className="flex justify-between gap-4">
                <dt>Status</dt>
                <dd className="text-right font-semibold text-[#B54747]">
                  Gagal · 404
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>URL tujuan</dt>
                <dd
                  className="max-w-47.5 truncate text-right"
                  title={pathname || undefined}
                >
                  {pathname || "/tidak-diketahui"}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Kemungkinan</dt>
                <dd className="text-right">Dipindahkan / dihapus</dd>
              </div>
            </dl>

            <div className="my-5 border-t border-dashed border-[#C9D6E8]" />

            <p className="text-sm text-[#5A6E8C]">
              Tenang, PaTo juga ikut mencari. Halaman ini sepertinya sudah
              pindah tempat atau memang belum pernah ada.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="flex-1 rounded-full bg-[#4477BB] px-5 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-[#4477BB]/30 transition hover:bg-[#3968a7]"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>

          {/* perforated tear line */}
          <div className="perforation" aria-hidden />

          {/* barcode footer */}
          <div className="flex items-end gap-0.75 rounded-b-2xl border border-t-0 border-[#D9E3F2] bg-white px-7 pb-5 pt-4 shadow-[0_25px_50px_-20px_rgba(44,84,136,0.35)]">
            {barWidths.map((w, i) => (
              <span
                key={i}
                className="bg-[#2C5488]"
                style={{ width: `${w}px`, height: i % 5 === 0 ? 26 : 18 }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .font-display { font-family: 'Baloo 2', system-ui, sans-serif; }
        main { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
        .font-mono, dl, dt, dd { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        .animate-float {
          animation: float 4.5s ease-in-out infinite;
        }

        .perforation {
          height: 16px;
          background-color: #ffffff;
          background-image: radial-gradient(circle at 8px 8px, #F6F8FC 7px, transparent 7.5px);
          background-size: 20px 16px;
          background-repeat: repeat-x;
          border-left: 1px solid #D9E3F2;
          border-right: 1px solid #D9E3F2;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float { animation: none; }
        }
      `}</style>
    </main>
  );
}
