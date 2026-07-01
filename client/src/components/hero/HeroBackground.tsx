export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-24 h-180 w-180 -translate-x-1/2 rounded-full bg-[#4477BB]/10 blur-[150px]" />
      <div className="absolute -right-20 top-0 h-520px w-130 rounded-full bg-[#7CA4D6]/10 blur-[130px]" />
      <div className="absolute -left-32 bottom-0 h-105 w-105 rounded-full bg-[#4477BB]/5 blur-[120px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(15 23 42) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(15 23 42) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Fade */}
      <div className="absolute inset-x-0 bottom-0 h-60 bg-linear-to-b from-transparent via-white/40 to-white" />
    </div>
  );
}
