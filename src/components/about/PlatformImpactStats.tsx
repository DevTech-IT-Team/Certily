import { motion } from "framer-motion";
import { Users, BookOpen, Award, Sparkles } from "lucide-react";
import { Reveal } from "@/components/campus/Reveal";

const STATS = [
  {
    icon: BookOpen,
    value: "12+",
    label: "Total Pathways",
  },
  {
    icon: Users,
    value: "500+",
    label: "Active Learners",
  },
  {
    icon: Sparkles,
    value: "24/7",
    label: "AI Mentorship",
  },
  {
    icon: Award,
    value: "1.2k+",
    label: "Credentials",
  },
];

export function PlatformImpactStats() {
  return (
    <div className="relative py-12 sm:py-16">
      {/* ── Background Image & Overlay ── */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=80')" }}
      />
      <div className="absolute inset-0 bg-[#0F1533]/80 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#5B4CF5]/40 to-transparent mix-blend-overlay" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {STATS.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon inside a rounded shield/circle */}
                <div className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-sm transition-colors group-hover:bg-[#5B4CF5]/20 group-hover:border-[#5B4CF5]/50">
                  <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <stat.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                </div>
                
                {/* Number */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1 drop-shadow-sm">
                  {stat.value}
                </h3>
                
                {/* Label */}
                <div className="text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
