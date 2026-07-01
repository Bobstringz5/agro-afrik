"use client";

import { motion } from "framer-motion";
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2E7D32]">{children}</p>;
}
export default function HeroAnimation() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Eyebrow>Mission: Connecting Livestock to Opportunity Through Smart Farming Technology</Eyebrow>
                  
    </motion.div>
  );
}