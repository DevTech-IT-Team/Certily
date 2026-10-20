import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { coursesForBand } from "@/lib/courses";
import { catalogBands } from "@/lib/journey";
import { pathwayToRouteId } from "@/lib/pathways";
import { cn } from "@/lib/utils";

function stageName(id: string, label: string) {
  if (id === "pre-elementary" || id === "elementary") return `${label} School`;
  return label;
}

export function DiscoveryLanding() {
  const bands = catalogBands();
  const catalog = useMemo(
    () => bands.flatMap((item) => coursesForBand(item.id).map((course) => ({ band: item, course }))),
    [bands],
  );
  const [bandId, setBandId] = useState("all");
  const visible = bandId === "all" ? catalog : catalog.filter((item) => item.band.id === bandId);
  const [code, setCode] = useState(catalog[0]?.course.code ?? "");
  const open = visible.find((item) => item.course.code === code) ?? visible[0] ?? catalog[0];

  const chooseBand = (id: string) => {
    setBandId(id);
    const next = id === "all" ? catalog : catalog.filter((item) => item.band.id === id);
    setCode(next[0]?.course.code ?? "");
  };

  if (!open) return null;
  const { band, course } = open;

  return (
    <div className="min-h-screen bg-[#F6F5FB] text-[#12152B]">
      <div className="bg-[#EEEDF6] pt-32 pb-[22vh]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="max-w-xl font-display text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl sm:leading-[1.1]">
              Certifications for
              <span className="text-[#5B4CF5]"> every stage of learning</span>
            </h1>
          </div>
        </div>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute left-[4%] right-[4%] top-24 hidden h-px bg-gradient-to-r from-transparent via-[#D5D0EE] to-transparent lg:block" />
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 lg:grid-cols-7 lg:gap-4">
            <button
              type="button"
              onClick={() => chooseBand("all")}
              className="group flex flex-col items-center"
            >
              <span className={cn(
                "relative block aspect-[4/5] w-full overflow-hidden rounded-[1.85rem] bg-[#EEEAF8] shadow-[0_18px_40px_-28px_rgba(15,21,51,0.8)] ring-1 ring-black/5 transition duration-500 group-hover:-translate-y-1",
                bandId === "all" && "ring-2 ring-[#5B4CF5]",
              )}>
                <span className="grid h-full w-full grid-cols-2">
                  {["elementary", "middle", "high", "professional"].map((id) => (
                    <img key={id} src={catalog.find((item) => item.band.id === id)?.course.image} alt="" className="h-full w-full object-cover" />
                  ))}
                </span>
              </span>
              <span className={cn("mt-4 text-center font-display text-base font-bold leading-tight", bandId === "all" ? "text-[#5B4CF5]" : "text-[#0F1533]")}>All courses</span>
              <span className="mt-0.5 text-center text-[11px] font-semibold text-[#5B4CF5]">30 certifications</span>
            </button>
            {bands.map((item, index) => {
              const on = item.id === bandId;
              const cover = coursesForBand(item.id)[0]?.image;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => chooseBand(item.id)}
                  className={cn("group flex flex-col items-center", index % 2 === 0 && "lg:translate-y-8")}
                >
                  <span
                    className={cn(
                      "relative block aspect-[4/5] w-full overflow-hidden rounded-[1.85rem] bg-[#EEEAF8] shadow-[0_18px_40px_-28px_rgba(15,21,51,0.8)] ring-1 ring-black/5 transition duration-500 group-hover:-translate-y-1",
                      on && "ring-2",
                    )}
                    style={on ? { outline: `2px solid ${item.theme.accent}` } : undefined}
                  >
                    <img src={cover} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </span>
                  <span className={cn("mt-4 max-w-[9rem] text-center font-display text-base font-bold leading-tight", on ? "text-[#5B4CF5]" : "text-[#0F1533]")}>{stageName(item.id, item.shortLabel)}</span>
                  <span className="mt-0.5 text-center text-[11px] font-semibold" style={{ color: item.theme.accent }}>{item.subLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6">
        {bandId === "all" ? (
          <div className="mt-8 space-y-16">
            {bands.map((itemBand) => {
              const stageCourses = catalog.filter((item) => item.band.id === itemBand.id);
              return (
                <section key={itemBand.id}>
                  <div className="mb-5 flex items-baseline justify-between gap-3 border-b border-[#E7E5F1] pb-3">
                    <h2 className="font-display text-2xl font-bold">{stageName(itemBand.id, itemBand.shortLabel)}</h2>
                    <p className="text-sm text-[#7A8096]">{itemBand.subLabel}</p>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {stageCourses.map(({ course: item }) => (
                      <Link
                        key={item.code}
                        to="/course/$courseId"
                        params={{ courseId: item.id }}
                        className="overflow-hidden rounded-xl bg-white ring-1 ring-[#E7E5F1] transition hover:-translate-y-1"
                      >
                        <img src={item.image} alt="" className="h-48 w-full object-cover" />
                        <span className="block p-4">
                          <span className="flex items-center gap-1 text-xs font-semibold text-[#7A8096]">
                            {item.code}
                            <Clock className="ml-auto h-3.5 w-3.5" />
                            {item.hours}h
                          </span>
                          <span className="mt-2 block font-display text-base font-semibold leading-snug">{item.title}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1fr_300px]">
          <AnimatePresence mode="wait">
            <motion.article
              key={course.code}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden rounded-[28px] bg-white ring-1 ring-[#E7E5F1]"
            >
              <div className="relative h-64 sm:h-80">
                <img src={course.image} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12152B] via-[#12152B]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs font-semibold tracking-wide text-white/75">
                    {course.code} · {course.hours} hours · {course.bulletPoints.length} modules
                  </p>
                  <h2 className="mt-1 max-w-xl font-display text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
                    {course.title}
                  </h2>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="max-w-2xl text-[15px] leading-relaxed text-[#5E647C]">{course.description}</p>
                <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                  {course.bulletPoints.map((item, index) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <span className="mt-0.5 font-display text-sm font-bold text-[#5B4CF5]">{String(index + 1).padStart(2, "0")}</span>
                      <span className="font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/course/$courseId"
                    params={{ courseId: course.id }}
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-[#12152B] px-5 text-sm font-semibold text-white hover:bg-[#2A3158]"
                  >
                    Enter classroom
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/learning/$pathwayId"
                    params={{ pathwayId: pathwayToRouteId(band.id) }}
                    className="inline-flex h-11 items-center rounded-full px-5 text-sm font-semibold text-[#12152B] ring-1 ring-[#E7E5F1] hover:ring-[#12152B]"
                  >
                    Build this path
                  </Link>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <aside className="space-y-2">
            <p className="px-1 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A90A6]">{band.label}</p>
            {visible.map((item) => {
              const on = item.course.code === course.code;
              return (
                <button
                  key={item.course.code}
                  type="button"
                  onClick={() => setCode(item.course.code)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-2xl p-2 text-left transition",
                    on ? "bg-white ring-1 ring-[#5B4CF5]" : "hover:bg-white/80",
                  )}
                >
                  <img src={item.course.image} alt="" className="h-14 w-16 shrink-0 rounded-xl object-cover" />
                  <span className="min-w-0">
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#7A8096]">
                      {item.course.code}
                      <Clock className="h-3 w-3" />
                      {item.course.hours}h
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold leading-snug">{item.course.title}</span>
                  </span>
                </button>
              );
            })}
          </aside>
        </div>
        )}
      </div>
    </div>
  );
}
