import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { BadgeCheck, BarChart3, ClipboardCheck, LineChart, ShieldAlert, Users } from "lucide-react";

export default function AdminDashboard() {
  const queues: Array<[string, string, LucideIcon]> = [
    ["User management", "842 pending profile updates", Users],
    ["Farmer verification", "128 farms awaiting field review", BadgeCheck],
    ["Livestock approvals", "2,418 passports in quality control", ClipboardCheck],
    ["Marketplace monitoring", "31 listings flagged for review", ShieldAlert],
    ["Revenue analytics", "$24M GMV pipeline", BarChart3],
    ["Investor lead management", "76 active investor conversations", LineChart],
  ];

  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-10 text-[#111111] md:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/dashboard" className="text-sm font-semibold text-[#2E7D32]">Dashboard</Link>
        <h1 className="mt-6 text-4xl font-semibold md:text-6xl">Admin Verification Center</h1>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {queues.map(([title, body, Icon]) => (
            <article key={String(title)} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
              <Icon className="text-[#2E7D32]" />
              <h2 className="mt-5 text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{body}</p>
            </article>
          ))}
        </div>
        <section className="mt-8 rounded-lg border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Content and operations management</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {["Landing content", "Partner profiles", "Market categories", "Risk alerts"].map((item) => (
              <div key={item} className="rounded-md bg-neutral-50 p-4 text-sm font-semibold">{item}</div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
