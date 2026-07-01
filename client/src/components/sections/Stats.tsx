import { ReceiptText, Users, Wallet } from "lucide-react";

import { Container } from "@/components/layout/Container";

const stats = [
  {
    icon: Users,
    title: "Invite by Link",
    description: "Anyone can join instantly without installing the app.",
  },
  {
    icon: ReceiptText,
    title: "Transparent Expenses",
    description: "Every expense is visible to all members in real time.",
  },
  {
    icon: Wallet,
    title: "Payment Tracking",
    description: "Know exactly who has paid and who hasn't.",
  },
];

export function Stats() {
  return (
    <section className="pb-28">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[28px] border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4477BB]/10">
                  <Icon className="h-6 w-6 text-[#4477BB]" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-7 text-zinc-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
