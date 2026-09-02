import {
  Brain,
  Briefcase,
  Car,
  Cloud,
  Code,
  Database,
  Factory,
  Globe,
  Landmark,
  MonitorSmartphone,
  Pill,
  Shield,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/campus/Reveal";

const ITEMS = [
  { name: "Software Development", icon: Code },
  { name: "Data Science", icon: Database },
  { name: "AI & Machine Learning", icon: Brain },
  { name: "Generative AI", icon: Sparkles },
  { name: "Cloud Computing", icon: Cloud },
  { name: "Cyber Security", icon: Shield },
  { name: "Financial Services", icon: Landmark },
  { name: "Management", icon: Briefcase },
  { name: "IT Services", icon: MonitorSmartphone },
  { name: "Manufacturing", icon: Factory },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Retail", icon: ShoppingBag },
  { name: "Healthcare", icon: Pill },
  { name: "Automobile", icon: Car },
  { name: "Global Capability Centers", icon: Globe },
] as const;

export function EnterpriseDomains() {
  return (
    <section className="bg-[#F7F8FC] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#5B4CF5]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#5B4CF5]">
              Knowledge
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] sm:text-4xl">
            Diverse domains & industries
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5A607A]">
            Programs mapped to the skills your teams need — and the sectors they work in.
          </p>
        </Reveal>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-4">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name} className="text-center">
                <span className="mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white text-[#5B4CF5] shadow-[0_12px_28px_-16px_rgba(15,21,51,0.35)] ring-1 ring-[#EDE9FF]">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-3 text-xs font-semibold leading-snug text-[#0F1533]">
                  {item.name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
