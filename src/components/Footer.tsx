import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import certLogo from "@/assets/logo/certicialogo.webp";
import { Linkedin, Twitter, Youtube, Mail, MapPin } from "lucide-react";

interface FooterColumn {
  heading: string;
  links: { text: string; url: string }[];
}

const defaultColumns: FooterColumn[] = [
  {
    heading: "Platform",
    links: [
      { text: "Why Certcia", url: "/certcia-way" },
      { text: "Explore Pathways", url: "/learning" },
      { text: "Enterprise solutions", url: "/for-enterprises" },
    ],
  },
  {
    heading: "Company",
    links: [
      { text: "Latest News", url: "/news" },
      { text: "About", url: "/about" },
    ],
  },
  {
    heading: "Support",
    links: [
      { text: "Help Center", url: "/faqs" },
      { text: "Contact", url: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { text: "Privacy Policy", url: "/privacy-policy" },
      { text: "Terms of Service", url: "/terms-and-conditions" },
      { text: "Cookie Policy", url: "/cookies" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Footer() {
  const brandName = "Certcia";
  const copyright = `© ${new Date().getFullYear()} Certcia AI Campus`;

  return (
    <footer className="relative w-full overflow-hidden bg-[#0A0914] px-8 pt-16 text-white">
      {/* Decorative Top Gradient Border */}
      <div className="absolute top-0 inset-x-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#5B4CF5]/40 to-transparent"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto grid max-w-7xl w-full grid-cols-1 gap-12 md:grid-cols-12 items-start text-sm text-white/50 z-10 relative"
      >
        <motion.div variants={itemVariants} className="md:col-span-5 lg:col-span-4 flex flex-col space-y-6">
          <div className="flex">
            <a href="/" className="inline-block rounded-xl bg-white px-4 py-2 transition-transform hover:scale-105 shadow-[0_8px_32px_rgba(91,76,245,0.15)]">
              <img
                src={certLogo}
                alt="Certcia Logo"
                width={140}
                height={30}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto object-contain"
              />
            </a>
          </div>

          <div className="flex flex-col gap-3 text-sm text-white/50">
            <a href="mailto:letsconnect@certcia.com" className="flex items-center gap-2 hover:text-white/80 transition-colors cursor-pointer">
              <Mail className="h-4 w-4 text-[#5B4CF5]" />
              <span>letsconnect@certcia.com</span>
            </a>
            <div className="flex items-center gap-2 hover:text-white/80 transition-colors cursor-pointer">
              <MapPin className="h-4 w-4 text-[#5B4CF5]" />
              <span>San Francisco, CA</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {[Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 transition-all hover:border-[#5B4CF5] hover:bg-[#5B4CF5] hover:text-white hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(91,76,245,0.4)]"
                aria-label="Social"
              >
                <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>

          <div className="pt-2 text-sm text-white/40">{copyright}. All rights reserved.</div>
        </motion.div>

        <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 w-full pt-2">
          {defaultColumns.map((col, ci) => (
            <motion.div
              key={ci}
              variants={itemVariants}
              className="flex w-full flex-col justify-start space-y-6"
            >
              <p className="font-bold uppercase tracking-[0.2em] text-white/90">
                {col.heading}
              </p>
              <ul className="list-none space-y-4 text-white/60 transition-colors">
                {col.links.map((link, li) => (
                  <li key={li} className="list-none">
                    <a
                      className="transition-colors hover:text-white flex items-center gap-2 group cursor-pointer"
                      href={link.url}
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-1">{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="pointer-events-none inset-x-0 mt-16 mb-8 flex justify-center overflow-hidden">
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0 }}
          style={{
            fontSize: "clamp(5rem, 18vw, 16rem)",
            lineHeight: 0.8,
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.9)",
          }}
          className="text-center font-display font-bold tracking-tight text-transparent relative z-0 pb-4"
        >
          {brandName}
        </motion.p>
      </motion.div>
    </footer>
  );
}
