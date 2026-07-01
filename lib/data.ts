import {
  Activity,
  BadgeCheck,
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  Handshake,
  HeartPulse,
  Landmark,
  LineChart,
  MapPin,
  PackageCheck,
  QrCode,
  Search,
  ShieldCheck,
  Smartphone,
  Sprout,
  Truck,
  Users,
  WalletCards,
} from "lucide-react";

export const brand = {
  black: "#111111",
  green: "#2E7D32",
  khaki: "#B08D57",
  white: "#FFFFFF",
};

export const photos = {
  hero:
    "/her.jpg",
  problem:
    "/problem.jpg",
  solution:
    "/impact.jpg",
  products:
    "/products.jpg",
  whyNow:
    "/hero.jpg",
  market:
    "/market.jpg",
  model:
    "/model.jpg",
  passport:
    "/scan.jpg",
  impact:
    "/produ.jpg",
  roadmap:
    "/road.jpg",
  investor:
    "/invest.jpg",
  team:
    "/team.jpg",
  contact:
    "/contact.jpg",
};

export const metrics = [
  { label: "Farmers Onboarded", value: "42K+", trend: "+31% QoQ" },
  { label: "Livestock Registered", value: "318K+", trend: "8 species" },
  { label: "Transactions Processed", value: "$24M", trend: "GMV pipeline" },
  { label: "Verified Buyers", value: "6,400+", trend: "B2B demand" },
];

export const problems = [
  {
    title: "High livestock mortality",
    detail:
      "Fragmented health records delay treatment, vaccination, and farm-level alerts.",
    stat: "22%",
    icon: HeartPulse,
  },
  {
    title: "Poor market access",
    detail:
      "Farmers sell through opaque channels with weak price discovery and limited buyers.",
    stat: "3x",
    icon: Search,
  },
  {
    title: "Middlemen exploitation",
    detail:
      "Unverified supply and informal negotiation suppress farm income.",
    stat: "35%",
    icon: WalletCards,
  },
  {
    title: "Lack of traceability",
    detail:
      "Buyers cannot verify ownership, vaccination, health, or farm origin.",
    stat: "0",
    icon: QrCode,
  },
  {
    title: "Funding challenges",
    detail:
      "Banks and insurers lack reliable animal-level data for underwriting.",
    stat: "$B",
    icon: Landmark,
  },
  {
    title: "Buyer trust issues",
    detail:
      "Bulk procurement teams need verified supply, logistics visibility, and quality assurance.",
    stat: "64%",
    icon: ShieldCheck,
  },
];

export const solutionFlow = [
  { label: "Farmer", icon: Users },
  { label: "Digital Livestock Passport", icon: QrCode },
  { label: "Verification", icon: BadgeCheck },
  { label: "Marketplace", icon: PackageCheck },
  { label: "Buyer", icon: Building2 },
  { label: "Logistics", icon: Truck },
];

export const products = [
  {
    name: "Digital Livestock Passport",
    outcome: "Creates a trusted animal identity layer for trade, finance, insurance, and compliance.",
    icon: QrCode,
  },
  {
    name: "Livestock Marketplace",
    outcome: "Connects verified farmers to buyers with transparent listings, pricing, and order workflows.",
    icon: PackageCheck,
  },
  {
    name: "AI Livestock Assistant",
    outcome: "Gives farmers fast guidance on symptoms, feed, vaccines, and risk alerts.",
    icon: Bot,
  },
  {
    name: "Farmer Dashboard",
    outcome: "Tracks inventory, vaccination, mortality risk, revenue, and marketplace performance.",
    icon: BarChart3,
  },
  {
    name: "Buyer Procurement Portal",
    outcome: "Enables bulk sourcing by location, species, health score, weight, and verification status.",
    icon: Search,
  },
  {
    name: "Admin Verification Center",
    outcome: "Controls farmer KYC, animal approvals, listings, disputes, analytics, and investor leads.",
    icon: ClipboardCheck,
  },
];

export const whyNow = [
  "African agriculture is formalizing around data, finance, and supply chain visibility.",
  "Smartphone adoption makes farm-level records practical at population scale.",
  "Digital payments are normalizing trusted remote transactions.",
  "Food security pressure is increasing demand for verified livestock supply.",
  "Rising protein demand creates a durable multi-country expansion path.",
];

export const revenueStreams = [
  { name: "Marketplace commissions", value: "34%" },
  { name: "Premium subscriptions", value: "18%" },
  { name: "Verification fees", value: "16%" },
  { name: "Enterprise partnerships", value: "14%" },
  { name: "Data insights", value: "10%" },
  { name: "Advertising", value: "8%" },
];

export const impact = [
  { metric: "30%", label: "lower preventable mortality", icon: HeartPulse },
  { metric: "2.4x", label: "higher qualified buyer reach", icon: Globe2 },
  { metric: "18%", label: "farmer income uplift", icon: LineChart },
  { metric: "100%", label: "passport-backed traceability", icon: CheckCircle2 },
];

export const roadmap = [
  {
    year: "2026",
    title: "Nigeria Launch",
    detail: "Pilot clusters, veterinary partners, buyer network, and passport-led marketplace launch.",
  },
  {
    year: "2027",
    title: "West Africa Expansion",
    detail: "Regional procurement rails, logistics partnerships, and cross-border verification workflows.",
  },
  {
    year: "2028",
    title: "Pan-African Expansion",
    detail: "Multi-country livestock identity graph, enterprise APIs, financing, and insurance rails.",
  },
];

export const dashboards = {
  farmer: [
    "Livestock registration",
    "Vaccination records",
    "Revenue tracking",
    "AI livestock assistant",
    "Marketplace management",
  ],
  buyer: [
    "Search livestock",
    "Filter by location",
    "Bulk purchase requests",
    "View livestock passports",
    "Track orders",
  ],
  admin: [
    "User management",
    "Farmer verification",
    "Livestock approvals",
    "Marketplace monitoring",
    "Revenue analytics",
    "Investor lead management",
  ],
};

export const animalPassport = {
  id: "EAF-NG-KD-04291",
  breed: "Red Sokoto Goat",
  dateOfBirth: "2025-03-18",
  farm: "Kaduna North Cooperative Farm",
  owner: "Amina Yusuf",
  location: "Kaduna, Nigeria",
  weight: "38.4 kg",
  healthScore: 94,
  status: "Verified healthy",
  timeline: [
    "PPR vaccine completed",
    "Deworming record approved",
    "Weight checked by field agent",
    "Ownership verified",
  ],
};

export const iconSet = {
  Activity,
  Handshake,
  MapPin,
  Smartphone,
  Sprout,
};
