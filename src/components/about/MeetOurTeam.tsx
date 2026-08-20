import { motion } from "framer-motion";
import { Reveal } from "@/components/campus/Reveal";

const TEAM = [
  {
    name: "Dr. Elena Rostova",
    role: "Head of AI Curriculum",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    name: "Marcus Chen",
    role: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    name: "V (AI Mentor)",
    role: "24/7 Guided Support",
    image: "https://imgs.search.brave.com/5k1WEwXq73bu0MzZeHHREJZg6LvIgvhV56WrzFRsExY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/MDczMDM3Ni9waG90/by9pdHMtYS1nb29k/LWRheS10by1tYWtl/LXNvbWUtc21hcnQt/Y29ubmVjdGlvbnMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVF3Q1FtOU9BWHRT/NW1iQjduWko0OERu/YUVtSUptYzBoUm13/aUtyRS00R3c9",
    link: "#",
  },
];

export function MeetOurTeam() {
  return (
    <div className="bg-white pt-20 pb-10 sm:pt-24 sm:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

          {/* Left: Text Content */}
          <div className="lg:col-span-4 lg:pr-8">
            <Reveal>
              {/* Badge */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-8 bg-[#5B4CF5]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#5B4CF5]">Team</span>
              </div>

              {/* Title */}
              <h2 className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-[#0F1533] leading-[1.05] mb-10">
                Meet the<br />Team
              </h2>

              {/* Divider line */}
              <div className="h-[1px] w-20 bg-[#E8EAF4] mb-10" />

              {/* Paragraph */}
              <p className="text-base text-[#5A607A] leading-relaxed font-medium">
                Our team brings a wealth of experience from frontier AI research and decades of educational expertise to bring you an elite, outcomes-driven learning experience.
              </p>
            </Reveal>
          </div>

          {/* Right: Images Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {TEAM.map((member, idx) => (
                <Reveal key={member.name} delay={idx * 0.1}>
                  <motion.div
                    className="group relative aspect-[2/3] w-full overflow-hidden bg-[#F3F4F6]"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#5B4CF5]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-md">
                      <h3 className="font-display text-2xl font-extrabold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
