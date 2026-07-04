import Image from "next/image";
import HeroAnimation from "@/components/hero";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleDollarSign,
  Mail,
  MessageSquareText,
  QrCode,
  ScanLine,
  Send,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { submitLead } from "./actions";
import { MarketChart, ProblemChart, RevenueChart } from "@/components/investor-charts";
import {
  animalPassport,
  dashboards,
  impact,
  metrics,
  photos,
  problems,
  products,
  revenueStreams,
  roadmap,
  solutionFlow,
  whyNow,
} from "@/lib/data";

function SectionImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <figure className="relative min-h-80 overflow-hidden rounded-lg border border-black/10 bg-neutral-100">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
      <figcaption className="absolute bottom-4 left-4 rounded-md bg-white/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-800 shadow-sm">
        {label}
      </figcaption>
    </figure>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2E7D32]">{children}</p>;
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111111] md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-neutral-650 md:text-lg">{body}</p>
    </div>
  );
}

function LeadForm({ type }: { type: string }) {
  return (
    <form
      action={submitLead}
      className="grid gap-3 rounded-lg border border-black/10 bg-white p-5 shadow-sm"
      suppressHydrationWarning
    >
      <input suppressHydrationWarning type="hidden" name="type" value={type} />
      <input
        suppressHydrationWarning
        className="h-11 rounded-md border border-black/10 px-3 text-sm outline-none focus:border-[#2E7D32]"
        name="name"
        placeholder="Full name"
        required
      />
      <input
        suppressHydrationWarning
        className="h-11 rounded-md border border-black/10 px-3 text-sm outline-none focus:border-[#2E7D32]"
        name="email"
        type="email"
        placeholder="Email address"
        required
      />
      <input
        suppressHydrationWarning
        className="h-11 rounded-md border border-black/10 px-3 text-sm outline-none focus:border-[#2E7D32]"
        name="organization"
        placeholder="Organization"
      />
      <textarea
        suppressHydrationWarning
        className="min-h-24 rounded-md border border-black/10 px-3 py-3 text-sm outline-none focus:border-[#2E7D32]"
        name="message"
        placeholder="What should we discuss?"
      ></textarea>
      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#111111] px-4 text-sm font-semibold text-white transition hover:bg-[#2E7D32]"
      >
        <Send size={16} /> Submit inquiry
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Agro-Afrik Logo" className="grid h-10 w-10 place-items-center rounded-md " />
            <span>
              <span className="block text-sm font-bold tracking-[0.22em]">AGRO-AFRIK</span>
              <span className="block text-xs text-neutral-500">Digital livestock infrastructure</span>
            </span>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-neutral-700 lg:flex">
            <a href="#problem">Problem</a>
            <a href="#passport">Passport</a>
            <a href="#market">Market</a>
            <a href="#platform">Platform</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#investor" className="inline-flex h-10 items-center gap-2 rounded-md bg-[#2E7D32] px-4 text-sm font-semibold text-white">
            Investor Deck <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#111111] text-white">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-4 py-14 md:px-8 lg:grid-cols-[1.03fr_0.97fr]">
          <div>
            <HeroAnimation />
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Building Africa&apos;s Digital Infrastructure for Livestock Farming
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Helping livestock farmers reduce mortality, access verified markets, increase productivity, and create trusted supply chains through technology.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#investor" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-bold text-[#111111]">
                Request Investor Deck <ArrowRight size={17} />
              </a>
              <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/25 px-5 text-sm font-bold text-white">
                Join Waitlist
              </a>
              <a href="#platform" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/25 px-5 text-sm font-bold text-white">
                Explore Platform
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-white/15 bg-white/7 p-4">
                  <p className="text-2xl font-semibold">{metric.value}</p>
                  <p className="mt-1 text-xs text-white/68">{metric.label}</p>
                  <p className="mt-3 text-xs font-semibold text-[#B08D57]">{metric.trend}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-130 overflow-hidden rounded-lg border border-white/15">
            <Image src={photos.hero} alt="African livestock farmer using smartphone near cattle" fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/62 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/18 bg-black/56 p-5 backdrop-blur">
              <p className="text-sm font-semibold text-[#B08D57]">Vision</p>
              <p className="mt-2 text-xl font-semibold">Africa&apos;s trusted digital infrastructure for livestock farming, trade, traceability, and food security.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="The Problem" title="Livestock trade is massive, but trust is broken." body="Millions of farmers operate without verified health records, transparent markets, or data rails that buyers, banks, insurers, and regulators can trust." />
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionImage src={photos.problem} alt="Livestock farm management challenges" label="Farm operations risk" />
            <div className="grid gap-4 sm:grid-cols-2">
              {problems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <Icon className="text-[#2E7D32]" size={24} />
                      <span className="text-2xl font-semibold text-[#B08D57]">{item.stat}</span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">{item.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="mt-8 rounded-lg border border-black/10 bg-neutral-50 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-700"><CircleDollarSign size={18} /> Investor signal: fragmented supply creates a platform-scale trust opportunity.</div>
            <ProblemChart />
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="The Solution" title="A verified livestock operating system from farm to buyer." body="AGRO-AFRIK turns every animal into a data-backed asset, then connects verified supply to procurement, logistics, finance, insurance, and analytics." />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="grid gap-3">
              {solutionFlow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-4 rounded-lg border border-black/10 bg-white p-4">
                    <span className="grid h-11 w-11 place-items-center rounded-md bg-[#111111] text-white"><Icon size={20} /></span>
                    <span className="flex-1 font-semibold">{step.label}</span>
                    <span className="text-sm text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
                    {index < solutionFlow.length - 1 && <ChevronRight className="text-[#2E7D32]" size={20} />}
                  </div>
                );
              })}
            </div>
            <SectionImage src={photos.solution} alt="Modern agriculture and verified farm operations" label="Trust layer" />
          </div>
        </div>
      </section>

      <section id="platform" className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Core Products" title="Built as infrastructure, packaged as useful daily tools." body="The product suite compounds around the digital passport, creating stronger records, better marketplace liquidity, and defensible network effects." />
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionImage src={photos.products} alt="Professional farmer using modern agriculture tools" label="Product suite" />
            <div className="grid gap-4 sm:grid-cols-2">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <article key={product.name} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                    <Icon className="text-[#2E7D32]" size={24} />
                    <h3 className="mt-5 text-lg font-semibold">{product.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">{product.outcome}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-4 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionImage src={photos.whyNow} alt="Modern agriculture technology adoption" label="Why now" />
          <div>
            <Eyebrow>Why Now</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">The market is ready for livestock infrastructure.</h2>
            <div className="mt-8 grid gap-4">
              {whyNow.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-white/14 bg-white/7 p-4">
                  <Check className="mt-1 text-[#B08D57]" size={18} />
                  <p className="leading-7 text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="market" className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Market Opportunity" title="A large, recurring, multi-sided market." body="AGRO-AFRIK starts with verified livestock trade, then expands into identity, finance, insurance, logistics, data, and compliance infrastructure. Africa-focused, 2026-2036." />
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-3">
                {["$90B-$152B TAM", "$27B-$46B SAM", "$230M SOM"].map((item) => (
                  <div key={item} className="rounded-lg bg-neutral-50 p-4">
                    <p className="text-2xl font-semibold">{item.split(" ")[0]}</p>
                    <p className="text-sm text-neutral-500">{item.split(" ")[1]}</p>
                  </div>
                ))}
              </div>
              <MarketChart />
            </div>
            <SectionImage src={photos.market} alt="Large agricultural market and livestock supply opportunity" label="Market expansion" />
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionImage src={photos.model} alt="Financial planning and revenue analytics" label="Business model" />
          <div className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
            <Eyebrow>Business Model</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Multiple revenue streams around one trusted data asset.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {revenueStreams.map((stream) => (
                <div key={stream.name} className="flex items-center justify-between rounded-md bg-neutral-50 p-3 text-sm">
                  <span>{stream.name}</span>
                  <strong>{stream.value}</strong>
                </div>
              ))}
            </div>
            <RevenueChart />
          </div>
        </div>
      </section>

      <section id="passport" className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Digital Livestock Passport" title="The moat: verified animal identity at African scale." body="Every animal receives a unique ID, QR code, health records, ownership history, farm data, and a continuously improving health score." />
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-lg border border-black/10 bg-white p-6 shadow-xl shadow-black/5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-neutral-500">Livestock Passport</p>
                  <h3 className="mt-2 text-2xl font-semibold">{animalPassport.id}</h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-md bg-[#2E7D32]/10 px-3 py-2 text-sm font-semibold text-[#2E7D32]">
                  <BadgeCheck size={16} /> Verified
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_150px]">
                <div className="grid gap-3 text-sm">
                  {[
                    ["Breed", animalPassport.breed],
                    ["Owner", animalPassport.owner],
                    ["Farm", animalPassport.farm],
                    ["Location", animalPassport.location],
                    ["Weight", animalPassport.weight],
                    ["Health status", animalPassport.status],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-4 border-b border-black/8 pb-2">
                      <span className="text-neutral-500">{label}</span>
                      <strong className="text-right">{value}</strong>
                    </div>
                  ))}
                </div>
                <div className="grid place-items-center rounded-lg bg-neutral-50 p-4">
                  <QrCode size={112} strokeWidth={1.4} />
                  <p className="mt-2 text-center text-xs font-semibold text-neutral-500">Scan to verify</p>
                </div>
              </div>
              <div className="mt-6 rounded-lg bg-[#111111] p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/65">Health Score</span>
                  <span className="text-3xl font-semibold">{animalPassport.healthScore}</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/15">
                  <div className="h-2 rounded-full bg-[#2E7D32]" style={{ width: `${animalPassport.healthScore}%` }} />
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                {animalPassport.timeline.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <ShieldCheck className="text-[#2E7D32]" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5">
              <SectionImage src={photos.passport} alt="Buyer scanning livestock QR code with smartphone" label="QR verification" />
              <div className="grid grid-cols-2 gap-4">
                {["Unique ID", "QR Code", "Vaccination History", "Medical Records", "Ownership History", "Farm Information"].map((item) => (
                  <div key={item} className="rounded-lg border border-black/10 bg-white p-4 text-sm font-semibold shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Impact" title="Better records produce better outcomes." body="The platform is designed to increase farmer income, reduce preventable loss, strengthen buyer confidence, and support public food security programs." />
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionImage src={photos.impact} alt="Farmer success story and improved agriculture outcomes" label="Farmer outcomes" />
            <div className="grid gap-4 sm:grid-cols-2">
              {impact.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
                    <Icon className="text-[#2E7D32]" size={24} />
                    <p className="mt-8 text-4xl font-semibold">{item.metric}</p>
                    <p className="mt-2 text-sm text-neutral-600">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionImage src={photos.roadmap} alt="Agriculture expansion roadmap across Africa" label="Expansion roadmap" />
          <div>
            <Eyebrow>Roadmap</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Nigeria first, Africa next.</h2>
            <div className="mt-8 grid gap-4">
              {roadmap.map((item) => (
                <div key={item.year} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-[#B08D57]">{item.year}</p>
                  <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="investor" className="bg-[#111111] px-4 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Investor Relations</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Raising to build the trusted rails for livestock commerce.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Funding Requirement", "$2.5M seed"],
                ["Use of Funds", "Product, field ops, data, growth"],
                ["Growth Strategy", "Cluster-led farmer and buyer density"],
                ["Expansion Strategy", "Nigeria to West Africa corridors"],
                ["Key Milestones", "1M passports, $100M GMV"],
                ["Defensibility", "Animal identity graph and verified data"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/14 bg-white/7 p-4">
                  <p className="text-sm text-white/60">{label}</p>
                  <p className="mt-2 font-semibold">{value}</p>
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-white px-5 text-sm font-bold text-[#111111]">
              Request Full Pitch Deck <ArrowRight size={17} />
            </a>
          </div>
          <SectionImage src={photos.investor} alt="Professional startup fundraising presentation" label="Fundraising strategy" />
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Platform Modules" title="Three operating dashboards plus an AI farm assistant." body="AGRO-AFRIK supports farmers, buyers, and administrators with role-specific workflows connected to one Firestore-backed platform model." />
          <div className="grid gap-5 lg:grid-cols-3">
            {Object.entries(dashboards).map(([name, items]) => (
              <article key={name} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold capitalize">{name} Dashboard</h3>
                <div className="mt-5 grid gap-3">
                  {items.map((item) => (
                    <p key={item} className="flex items-center gap-3 text-sm text-neutral-700"><Check className="text-[#2E7D32]" size={17} /> {item}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-6 rounded-lg border border-black/10 bg-neutral-50 p-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="flex items-center gap-3"><MessageSquareText className="text-[#2E7D32]" /><h3 className="text-2xl font-semibold">AI Livestock Assistant</h3></div>
              <div className="mt-5 grid gap-3">
                {["Why is my goat sick?", "Why are my chickens dying?", "Which vaccine should I use?", "How much feed is required?"].map((q) => (
                  <div key={q} className="rounded-md bg-white p-3 text-sm shadow-sm">{q}</div>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3 text-sm font-semibold text-[#2E7D32]"><Stethoscope size={18} /> Recommendation preview</div>
              <p className="mt-4 leading-7 text-neutral-700">Check temperature, isolate symptomatic animals, review recent feed changes, and contact a verified veterinary partner if symptoms persist beyond 24 hours. The production route is ready to call the OpenAI API from a server endpoint.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionImage src={photos.team} alt="Professional executive founders advisors and partners" label="Leadership network" />
          <div>
            <Eyebrow>Team</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Founders, advisors, and strategic partners.</h2>
            <div className="mt-8 grid gap-4">
              {["Founders: product, veterinary operations, marketplace growth, and finance.", "Advisors: agribusiness, food security, fintech infrastructure, and public sector delivery.", "Strategic Partners: cooperatives, veterinary networks, logistics operators, buyers, and development agencies."].map((item) => (
                <div key={item} className="rounded-lg border border-black/10 bg-white p-5 font-medium shadow-sm">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Contact" title="Start the right conversation." body="Investor, partner, farmer, buyer, and waitlist submissions are captured through Next.js Server Actions and prepared for Firestore investor_leads and waitlist collections." />
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionImage src={photos.contact} alt="Professional technology and partnership meeting" label="Contact AGRO-AFRIK" />
            <div className="grid gap-4 md:grid-cols-2">
              {["Investor Inquiry", "Partnership Inquiry", "Farmer Registration", "Buyer Registration", "Waitlist Signup"].map((type) => (
                <LeadForm key={type} type={type} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-semibold">AGRO-AFRIK - Africa&apos;s digital livestock infrastructure.</p>
          <div className="flex gap-4 text-sm text-neutral-600">
            <a className="inline-flex items-center gap-2" href="bensonbob405@gmail.com"><Mail size={16} /> investors@agro-afrik.com</a>
            <Link className="inline-flex items-center gap-2" href="/passport/EAF-NG-KD-04291"><ScanLine size={16} /> Sample passport</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
