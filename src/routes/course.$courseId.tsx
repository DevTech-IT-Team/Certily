import { useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, ChevronDown, Layers, Star } from "lucide-react";
import { findCourseByIdOrCode, type CourseDetails } from "@/lib/courses";
import { cn } from "@/lib/utils";
import { breadcrumbJsonLd, courseJsonLd, pageHead } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { CourseContextSections, CoursePurchaseCard } from "@/components/discovery/CourseJourneyPanels";
type CurriculumSection = CourseDetails["curriculum"][number];

function LearnSkills({
  outcomes,
  modules,
}: {
  outcomes: string[];
  modules: CurriculumSection[];
}) {
  const [open, setOpen] = useState(0);
  const current = modules[open];
  return (
    <div className="mt-4 overflow-hidden rounded-2xl bg-[#F4F2FF] sm:grid sm:grid-cols-[minmax(0,240px)_1fr]">
      <ul className="flex gap-2 overflow-x-auto p-2 sm:flex-col sm:overflow-visible">
        {outcomes.map((outcome, index) => {
          const on = open === index;
          return (
            <li key={outcome} className="shrink-0 sm:shrink">
              <button
                type="button"
                onClick={() => setOpen(index)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition",
                  on ? "bg-white text-[#0F1533] shadow-sm" : "text-[#3C415C] hover:bg-white/70",
                )}
              >
                <span className={cn("font-display text-xs font-bold", on ? "text-[#5B4CF5]" : "text-[#8B90A8]")}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {outcome}
              </button>
            </li>
          );
        })}
      </ul>
      {current ? (
        <div className="m-2 rounded-xl bg-[#0F1533] p-5 text-white sm:m-3">
          <p className="text-xs font-semibold tracking-wide text-[#C9C4FF]">{current.moduleCode} · {current.duration}</p>
          <p className="mt-2 font-display text-2xl font-bold leading-snug">{current.sectionTitle}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/75">{current.description}</p>
        </div>
      ) : null}
    </div>
  );
}

function isGenericCopy(text?: string) {
  if (!text) return true;
  return /is a guided module inside this certification/i.test(text);
}

function uniqueCoverage(lessons?: string[]) {
  return (lessons ?? []).filter(
    (item) =>
      !/^learn:/i.test(item) &&
      !/^plan:/i.test(item) &&
      !/^build:/i.test(item) &&
      item !== "Guided practice" &&
      item !== "Check your understanding" &&
      item !== "Present and pack the evidence",
  );
}

function hasUniqueBody(
  section: Partial<CurriculumSection> & {
    description?: string;
    moduleCode?: string;
    sectionTitle?: string;
  },
) {
  const isCapstone =
    /capstone/i.test(section.moduleCode ?? "") ||
    /capstone/i.test(section.sectionTitle ?? "");
  return (
    !isGenericCopy(section.description) ||
    uniqueCoverage(section.lessons).length > 0 ||
    (isCapstone && Boolean(section.deliverable || section.evidence))
  );
}

function displayTitle(title: string) {
  return title.replace(/^CAPSTONE:\s*/i, "");
}

function shortDuration(section: {
  hours?: number;
  videoMin?: number;
  aiLabMin?: number;
  duration?: string;
}) {
  if (section.hours != null) return `${section.hours}h`;
  return "";
}

const FRAMEWORKS: { name: string; codes: string; note: string }[] = [
  { name: "CSTA and AI4K12", codes: "P1-P5,E1-E5,M1-M5,H1-H5", note: "Algorithms, programming, data, and how AI sees, learns, and affects people." },
  { name: "England Computing", codes: "P1-P5,E1-E5,M1-M5,H1,H5", note: "Algorithms, programming, logical reasoning, and staying safe online." },
  { name: "CBSE AI", codes: "E2-E5,M2-M5,H1-H5,U4,P6-P10", note: "AI awareness, projects, data, and using technology ethically." },
  { name: "DigComp", codes: "P3,E2,E5,M2,M5,H3,H4,U4,P6-P10", note: "Finding information, creating content, staying safe, and solving problems." },
  { name: "IB", codes: "P1,E1,E3,E4,M4,H1,H5,U1,U4,U5", note: "Inquiry, design thinking, and projects you reflect on." },
  { name: "Cambridge", codes: "M1-M4,H1-H5,U1-U3", note: "Problem solving, programming, data, and testing your work." },
  { name: "Pearson Edexcel", codes: "M1,H1-H4,U1,U2", note: "Programming, algorithms, and applying them to real situations." },
  { name: "AP Computer Science", codes: "E1,E2,M1,M2,H1-H5", note: "Computing ideas, data, the internet, and the impact of what you build." },
  { name: "Australian Digital Technologies", codes: "E1-E4,M1-M4,H4,H5,U2", note: "Computational thinking, data, and designing digital solutions." },
  { name: "UNESCO AI competencies", codes: "P5,E4,E5,M3,M5,H2,H3,H5,U4,P6-P10", note: "A human-centred view of AI, its ethics, and how you create with it." },
];

function codeListed(courseCode: string, spec: string) {
  const match = courseCode.match(/^([A-Z]+)(\d+)$/i);
  if (!match) return false;
  const prefix = match[1].toUpperCase();
  const number = Number(match[2]);
  return spec.split(",").some((part) => {
    const range = part.match(/^([A-Z]+)(\d+)-([A-Z]+)(\d+)$/i);
    if (range) {
      return prefix === range[1].toUpperCase() && prefix === range[3].toUpperCase() && number >= Number(range[2]) && number <= Number(range[4]);
    }
    return part.toUpperCase() === courseCode.toUpperCase();
  });
}

function frameworksFor(courseCode: string) {
  return FRAMEWORKS.filter((item) => codeListed(courseCode, item.codes));
}

function FrameworkPicks({ courseCode }: { courseCode: string }) {
  const items = frameworksFor(courseCode);
  const [open, setOpen] = useState(0);
  const current = items[open];
  if (!current) return null;
  return (
    <div className="mt-4">
      <p className="text-sm font-medium text-[#C9C4FF]">This certification is mapped to</p>
      <div className="mt-2 flex max-w-xl flex-wrap gap-2">
        {items.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setOpen(index)}
            className={cn(
              "rounded-full px-3 py-1.5 text-sm font-semibold transition",
              open === index ? "bg-white text-[#0F1533]" : "bg-white/10 text-white hover:bg-white/20",
            )}
          >
            {item.name}
          </button>
        ))}
      </div>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80">{current.note}</p>
      <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white">
        <span className="text-white/60">Issued by</span>
        <span className="font-semibold">Certifier</span>
      </p>
    </div>
  );
}

function outlineCode(code?: string) {
  if (!code) return "";
  if (/capstone/i.test(code)) return "CAP";
  if (/^exam$/i.test(code)) return "EXAM";
  if (/^cert/i.test(code)) return "CERT";
  return code;
}

function ModuleExperience({
  section,
}: {
  section: Partial<CurriculumSection> & { description?: string };
}) {
  const coverage = uniqueCoverage(section.lessons);
  const description =
    coverage.length > 0 || isGenericCopy(section.description)
      ? undefined
      : section.description;
  const isCapstone =
    /capstone/i.test(section.moduleCode ?? "") ||
    /capstone/i.test(section.sectionTitle ?? "");
  const takeaway = isCapstone ? section.deliverable ?? section.evidence : undefined;

  if (!description && coverage.length === 0 && !takeaway) return null;

  const steps = coverage
    .map((item) => item.replace(/^[^:]+:\s*/, ""))
    .filter((item) => item.toLowerCase() !== (section.sectionTitle ?? "").toLowerCase());

  return (
    <div className="border-t border-[#EEEAF8] px-5 py-4 sm:pl-[4.75rem]">
      {description ? <p className="max-w-xl text-sm leading-relaxed text-[#5A607A]">{description}</p> : null}
      {steps.length > 0 ? (
        <ol className={cn("max-w-xl", description && "mt-3")}>
          {steps.map((item, index) => (
            <li key={item} className="flex gap-3">
              <span className="flex flex-col items-center">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#5B4CF5]" />
                {index < steps.length - 1 ? <span className="w-px flex-1 bg-[#E4E0F5]" /> : null}
              </span>
              <span className="pb-3 text-sm leading-snug text-[#0F1533]">{item}</span>
            </li>
          ))}
        </ol>
      ) : null}
      {takeaway ? (
        <p className="max-w-xl text-sm text-[#5A607A]">
          <span className="font-semibold text-[#0F1533]">Finish with </span>
          {takeaway}
        </p>
      ) : null}
    </div>
  );
}

function OutlineRow({
  code,
  title,
  duration,
  emphasis,
  open,
  canOpen,
  onToggle,
  children,
}: {
  code: string;
  title: string;
  duration: string;
  emphasis?: boolean;
  open: boolean;
  canOpen: boolean;
  onToggle: () => void;
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-black/5 last:border-0">
      <button
        type="button"
        onClick={() => canOpen && onToggle()}
        className={cn(
          "grid w-full grid-cols-[3.5rem_minmax(0,1fr)] items-center gap-3 px-5 py-3.5 text-left transition-colors sm:grid-cols-[3.5rem_minmax(0,1fr)_3.25rem_1.25rem] sm:gap-4",
          canOpen && "hover:bg-[#F8FAFC]",
          open && "bg-[#F8FAFC]",
        )}
      >
        <span
          className={cn(
            "flex h-7 w-14 shrink-0 items-center justify-center rounded-md text-[11px] font-bold tracking-wide",
            emphasis ? "bg-[#0F1533] text-white" : "bg-indigo-50 text-[#5B4CF5]",
          )}
        >
          {outlineCode(code)}
        </span>
        <span className="line-clamp-1 text-[15px] font-semibold text-[#1C1D1F] sm:text-[16px]">
          {title}
        </span>
        <span className="hidden text-right text-[12px] font-medium tabular-nums text-[#6A6F73] sm:block">
          {duration || "—"}
        </span>
        <span className="hidden justify-end sm:flex">
          {canOpen ? (
            <ChevronDown
              className={cn(
                "h-4 w-4 text-[#5B4CF5] transition-transform duration-300",
                open && "rotate-180",
              )}
            />
          ) : (
            <span className="h-4 w-4" />
          )}
        </span>
      </button>
      {canOpen && (
        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">{children}</div>
        </div>
      )}
    </div>
  );
}

export const Route = createFileRoute("/course/$courseId")({
  head: ({ params }) => {
    const course = findCourseByIdOrCode(params.courseId);
    if (!course) {
      return pageHead({
        title: "Course not found",
        path: `/course/${params.courseId}`,
        noIndex: true,
      });
    }
    return pageHead({
      title: course.title,
      description: course.description,
      path: `/course/${course.id}`,
      image: course.image,
    });
  },
  component: CourseLandingPage,
});

function CourseLandingPage() {
  const { courseId } = Route.useParams();
  const course = findCourseByIdOrCode(courseId);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center pt-20">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <Link to="/learning" className="mt-4 text-[#5B4CF5] hover:underline">
          Back to Explore
        </Link>
      </div>
    );
  }

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const studyModules = course.curriculum;
  const outlineExtras = [
    {
      key: "exam",
      code: "Exam",
      title: "Knowledge check & Concept review",
      duration: "30 min",
      description:
        "A short concept check confirming core learning outcomes across Modules 1–4 before final assessment.",
      lessons: [
        "Core concept verification",
        "Scenario-based problem solving",
        "Responsible AI & ethics review",
        "Immediate score & concept feedback",
      ],
    },
    {
      key: "capstone",
      code: "Project",
      title: `Assessment Evidence: ${course.artifact}`,
      duration: `${course.capstoneHours ?? 2} hours`,
      description: `Verified submission and oral/practical evaluation of ${course.artifact}. Assessed using the 5-criterion rubric.`,
      moduleCode: "Project",
      sectionTitle: `Assessment Evidence: ${course.artifact}`,
      deliverable: course.artifact,
      evidence: course.evidenceBundle,
      lessons: [
        `Compile evidence portfolio: ${course.artifact}`,
        "Teacher observation & verification checklist",
        "Oral explanation & reflection review",
        "Final evidence bundle submission",
      ],
    },
    {
      key: "certificate",
      code: "Cert",
      title: "Completion record, after the academy confirms the requirements",
      duration: "",
      description: `The certification record describes this evidence: ${course.artifact}. A certificate is not issued from this page.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F8FC] font-sans text-[#1C1D1F]">
      <JsonLd
        data={[
          courseJsonLd({
            title: course.title,
            description: course.description,
            id: course.id,
            image: course.image,
            hours: course.hours,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Learning Pathways", path: "/learning" },
            { name: course.title, path: `/course/${course.id}` },
          ]),
        ]}
      />
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0F1533] to-slate-900 pt-28 pb-12 md:pt-32 md:pb-14">
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 translate-x-1/3 -translate-y-12 rounded-full bg-indigo-500/20 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl lg:pr-8">
            <div className="mb-5 flex flex-wrap items-center gap-1.5 text-[13px] font-medium text-white/70">
              <Link to="/learning" className="transition-colors hover:text-white">
                Explore
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span>{course.category}</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white">{course.title.split(":")[0]}</span>
            </div>

            <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[44px]">
              {course.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-white">
              <span className="inline-flex items-center gap-1 font-semibold text-[#F5C451]">
                <Star className="h-4 w-4 fill-[#F5C451]" />
                {course.rating}
              </span>
              <span className="text-white/55">({course.ratingCount})</span>
              {course.bestseller ? (
                <span className="rounded-md bg-[#F5C451] px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#1C1408]">
                  Bestseller
                </span>
              ) : (
                <span className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
                  {course.certLevel}
                </span>
              )}
            </div>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/80 sm:text-[17px]">
              {course.description}
            </p>
            <FrameworkPicks courseCode={course.code} />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-10 lg:px-8">
        <div className="order-2 pt-10 lg:order-1">
          {/* Learning Outcomes & Assessment Evidence Card */}
          <div className="mb-8 rounded-2xl border border-[#E7E5F1] bg-white p-6 sm:p-7">
            <p className="text-sm font-medium text-[#5A607A]">
              {course.code} · {course.category} · {course.audience}
            </p>
            <p className="mt-3 text-lg font-semibold leading-snug text-[#0F1533]">{course.description}</p>

            <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-[#0F1533]">What you will learn</h3>
            <p className="mt-1 text-sm text-[#5A607A]">Tap a skill to see which module covers it.</p>
            <LearnSkills outcomes={course.whatYouWillLearn} modules={course.curriculum.slice(0, 4)} />

            <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-[#0F1533]">How the {course.hours} hours are used</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {[
                [course.facilitatorHours, "With a teacher"],
                [course.selfPacedHours, "Practice on your own"],
                [course.capstoneHours, "Final project"],
              ].map(([hours, label]) => (
                <li key={String(label)} className="rounded-2xl bg-[#F7F8FC] px-4 py-3">
                  <p className="font-display text-2xl font-bold text-[#0F1533]">{hours}h</p>
                  <p className="mt-0.5 text-sm text-[#5A607A]">{label}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-[#5A607A]">
              This runs for {course.packageLength || "6 weeks"}. At the end you submit {course.artifact}.
              {course.prerequisite && !/^none$/i.test(course.prerequisite) ? ` Before you start: ${course.prerequisite}.` : " Nothing is required before you start."}
              {course.syllabusAlignment ? ` It lines up with ${course.syllabusAlignment.charAt(0).toLowerCase()}${course.syllabusAlignment.slice(1)}.` : ""}
            </p>
          </div>

          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1C1D1F]">
                Certification outline
              </h2>
              <p className="mt-1 text-sm text-[#6A6F73]">
                Modules, then exam, capstone, and certificate.
              </p>
            </div>
            <span className="hidden items-center gap-1.5 text-sm font-medium text-[#6A6F73] sm:flex">
              <Layers className="h-4 w-4" />
              {course.modulesPerOutcome} modules
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_16px_40px_-28px_rgba(15,21,51,0.35)]">
            {studyModules.map((section, idx) => {
              const canOpen = hasUniqueBody(section);
              return (
                <OutlineRow
                  key={section.moduleCode ?? idx}
                  code={section.moduleCode ?? `M${idx + 1}`}
                  title={displayTitle(section.sectionTitle)}
                  duration={shortDuration(section)}
                  open={expandedSections.includes(idx)}
                  canOpen={canOpen}
                  onToggle={() => toggleSection(idx)}
                >
                  <ModuleExperience section={section} />
                </OutlineRow>
              );
            })}
            {outlineExtras.map((item, extraIdx) => {
              const idx = studyModules.length + extraIdx;
              return (
                <OutlineRow
                  key={item.key}
                  code={item.code}
                  title={item.title}
                  duration={item.duration}
                  emphasis
                  open={expandedSections.includes(idx)}
                  canOpen
                  onToggle={() => toggleSection(idx)}
                >
                  <ModuleExperience section={item} />
                </OutlineRow>
              );
            })}
          </div>

          <CourseContextSections course={course} />
        </div>

        <div className="relative z-20 order-1 lg:order-2 lg:-mt-72">
          <div className="sticky top-24 pb-10">
            <CoursePurchaseCard course={course} />
          </div>
        </div>
      </div>
    </div>
  );
}
