import Link from "next/link";
import { ArrowRight, BarChart3, Bot, ClipboardCheck, PackageCheck, Search, Users } from "lucide-react";
import { dashboards } from "@/lib/data";

const dashboardCards = [
  {
    role: "Farmer",
    href: "/dashboard/farmer",
    icon: Users,
    metric: "318K livestock",
    items: dashboards.farmer,
  },
  {
    role: "Buyer",
    href: "/dashboard/buyer",
    icon: Search,
    metric: "6,400 verified buyers",
    items: dashboards.buyer,
  },
  {
    role: "Admin",
    href: "/dashboard/admin",
    icon: ClipboardCheck,
    metric: "$24M GMV pipeline",
    items: dashboards.admin,
  },
];

export default function DashboardIndex() {
  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-10 text-[#111111] md:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-semibold text-[#2E7D32]">AGRO-AFRIK</Link>
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2E7D32]">Platform console</p>
            <h1 className="mt-3 text-4xl font-semibold md:text-6xl">Role-based dashboards</h1>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            <span className="rounded-md bg-white p-3 shadow-sm"><BarChart3 className="mx-auto mb-2 text-[#2E7D32]" /> Analytics</span>
            <span className="rounded-md bg-white p-3 shadow-sm"><Bot className="mx-auto mb-2 text-[#2E7D32]" /> AI</span>
            <span className="rounded-md bg-white p-3 shadow-sm"><PackageCheck className="mx-auto mb-2 text-[#2E7D32]" /> Market</span>
          </div>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {dashboardCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.role} href={card.href} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <Icon className="text-[#2E7D32]" size={28} />
                <h2 className="mt-6 text-2xl font-semibold">{card.role} Dashboard</h2>
                <p className="mt-2 text-sm font-semibold text-[#B08D57]">{card.metric}</p>
                <div className="mt-6 grid gap-3 text-sm text-neutral-700">
                  {card.items.map((item) => <span key={item}>{item}</span>)}
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2E7D32]">Open console <ArrowRight size={16} /></span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
