import Link from "next/link";
import { Filter, MapPin, PackageCheck, Search, Truck } from "lucide-react";

export default function BuyerDashboard() {
  const listings = [
    ["Kaduna", "Goats", "420 available", "94 health score"],
    ["Oyo", "Cattle", "180 available", "91 health score"],
    ["Kano", "Sheep", "260 available", "89 health score"],
  ];

  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-10 text-[#111111] md:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/dashboard" className="text-sm font-semibold text-[#2E7D32]">Dashboard</Link>
        <h1 className="mt-6 text-4xl font-semibold md:text-6xl">Buyer Procurement Portal</h1>
        <div className="mt-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3"><Filter className="text-[#2E7D32]" /><h2 className="text-2xl font-semibold">Filters</h2></div>
            {["Species", "Location", "Weight range", "Health score", "Verification status", "Bulk quantity"].map((item) => (
              <div key={item} className="mt-4 rounded-md bg-neutral-50 p-3 text-sm font-medium">{item}</div>
            ))}
          </aside>
          <section className="grid gap-4">
            {listings.map(([location, species, count, score]) => (
              <article key={location} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7D32]"><MapPin size={16} /> {location}</p>
                    <h2 className="mt-2 text-2xl font-semibold">{species}</h2>
                    <p className="mt-2 text-neutral-600">{count} - {score}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="inline-flex h-10 items-center gap-2 rounded-md border border-black/10 px-4 text-sm font-semibold"><Search size={16} /> Passport</button>
                    <button className="inline-flex h-10 items-center gap-2 rounded-md bg-[#111111] px-4 text-sm font-semibold text-white"><PackageCheck size={16} /> Request bulk</button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
        <div className="mt-8 rounded-lg bg-[#111111] p-6 text-white">
          <div className="flex items-center gap-3"><Truck className="text-[#B08D57]" /><h2 className="text-2xl font-semibold">Order tracking</h2></div>
          <p className="mt-3 text-white/70">4 active bulk requests. 2 orders in transit. 1 delivery awaiting buyer confirmation.</p>
        </div>
      </div>
    </main>
  );
}
