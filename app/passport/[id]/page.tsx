import Link from "next/link";
import { BadgeCheck, QrCode, ShieldCheck } from "lucide-react";
import { animalPassport } from "@/lib/data";

type PassportPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PassportPageProps) {
  const { id } = await params;
  return {
    title: `Verified Livestock Passport ${id} | AGRO-AFRIK`,
    description:
      "Public livestock verification page for animal identity, vaccination history, health score, ownership, and farm information.",
  };
}

export default async function PassportPage({ params }: PassportPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-10 text-[#111111] md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-[#2E7D32]">
          AGRO-AFRIK
        </Link>
        <section className="mt-6 rounded-lg border border-black/10 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2E7D32]">
                Public Verification
              </p>
              <h1 className="mt-3 text-3xl font-semibold md:text-5xl">{id}</h1>
              <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
                This animal passport verifies identity, health status, farm origin,
                ownership, vaccination timeline, and marketplace readiness.
              </p>
            </div>
            <div className="grid place-items-center rounded-lg bg-neutral-50 p-4">
              <QrCode size={120} strokeWidth={1.4} />
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-[#111111] p-5 text-white md:col-span-1">
              <p className="text-sm text-white/65">Health Score</p>
              <p className="mt-2 text-5xl font-semibold">{animalPassport.healthScore}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-[#B08D57]">
                <BadgeCheck size={17} /> {animalPassport.status}
              </p>
            </div>
            <div className="grid gap-3 md:col-span-2">
              {[
                ["Breed", animalPassport.breed],
                ["Date of birth", animalPassport.dateOfBirth],
                ["Owner", animalPassport.owner],
                ["Farm", animalPassport.farm],
                ["Location", animalPassport.location],
                ["Weight", animalPassport.weight],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between rounded-md bg-neutral-50 px-4 py-3 text-sm">
                  <span className="text-neutral-500">{label}</span>
                  <strong className="text-right">{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Vaccination and verification timeline</h2>
            <div className="mt-4 grid gap-3">
              {animalPassport.timeline.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-black/10 p-4 text-sm">
                  <ShieldCheck className="text-[#2E7D32]" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
