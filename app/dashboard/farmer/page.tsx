import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Bot, CalendarCheck, CircleDollarSign, PackagePlus, Stethoscope } from "lucide-react";

export default function FarmerDashboard() {
  const stats = [
    ["Registered livestock", "124"],
    ["Vaccines due", "18"],
    ["Marketplace listings", "36"],
    ["Monthly revenue", "NGN 8.4M"],
  ];

  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-10 text-[#111111] md:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/dashboard" className="text-sm font-semibold text-[#2E7D32]">Dashboard</Link>
        <h1 className="mt-6 text-4xl font-semibold md:text-6xl">Farmer Dashboard</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
              <p className="text-sm text-neutral-500">{label}</p>
              <p className="mt-2 text-2xl font-semibold">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {([
            ["Register livestock", "Create animal IDs, QR codes, breed records, and ownership history.", PackagePlus],
            ["Vaccination records", "Track upcoming vaccines, completed treatments, and veterinary proof.", CalendarCheck],
            ["Revenue tracking", "Monitor active listings, orders, payouts, and cooperative-level performance.", CircleDollarSign],
            ["AI livestock assistant", "Ask symptom, vaccine, feed, and mortality questions with escalation alerts.", Bot],
          ] as Array<[string, string, LucideIcon]>).map(([title, body, Icon]) => (
            <article key={String(title)} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
              <Icon className="text-[#2E7D32]" />
              <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-neutral-600">{body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-lg bg-[#111111] p-6 text-white">
          <div className="flex items-center gap-3"><Stethoscope className="text-[#B08D57]" /><h2 className="text-2xl font-semibold">Health alert queue</h2></div>
          <p className="mt-3 text-white/70">3 goats have vaccine records due within 7 days. 1 poultry mortality alert needs veterinary review.</p>
        </div>
      </div>
    </main>
  );
}
