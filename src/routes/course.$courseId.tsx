import { useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, PlayCircle, Download, ChevronRight, ChevronDown, X, Layers } from "lucide-react";
import { COURSES_DATA, type CourseDetails } from "@/lib/courses";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/CartContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { parseInrAmount } from "@/lib/pricing";
import certciaVideo from "@/assets/certcia.mp4";

type CurriculumSection = CourseDetails["curriculum"][number];

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

  return (
    <div className="border-t border-black/5 bg-[#F8FAFC] px-5 py-4 sm:pl-[5.75rem]">
      {description && (
        <p className="max-w-2xl text-[14px] leading-relaxed text-[#424446]">
          {description}
        </p>
      )}
      {coverage.length > 0 ? (
        <ul className={cn("max-w-2xl space-y-1.5", description && "mt-3")}>
          {coverage.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-[#5A607A]">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#5B4CF5]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {takeaway && (
        <p className={cn("max-w-2xl text-[13px] leading-relaxed text-[#5A607A]", (description || coverage.length) && "mt-3")}>
          <span className="font-bold text-[#1C1D1F]">You take home: </span>
          {takeaway}
        </p>
      )}
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
  component: CourseLandingPage,
});

function CourseLandingPage() {
  const { courseId } = Route.useParams();
  const course = COURSES_DATA.find((c) => c.id === courseId);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isHoveringVideo, setIsHoveringVideo] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"bundle" | "individual">("bundle");
  const { addToCart, isInCart } = useCart();
  const { formatPrice, formatAmount } = useCurrency();

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

  const individualPrice = (parseInrAmount(course.originalPrice) ?? 999) * 3;

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const studyModules = course.curriculum.filter(
    (section) =>
      section.moduleCode !== "Capstone" &&
      !/capstone/i.test(section.sectionTitle),
  );
  const capstoneSection = course.curriculum.find(
    (section) =>
      section.moduleCode === "Capstone" ||
      /capstone/i.test(section.sectionTitle),
  );
  const outlineExtras = [
    {
      key: "exam",
      code: "Exam",
      title: "Knowledge check",
      duration: "",
      description:
        "A short exam that confirms the skills from this certification before you submit the capstone.",
    },
    {
      key: "capstone",
      code: "Capstone",
      title: displayTitle(capstoneSection?.sectionTitle ?? "Capstone artifact"),
      duration: shortDuration({
        hours: capstoneSection?.hours,
        videoMin: capstoneSection?.videoMin,
        aiLabMin: capstoneSection?.aiLabMin,
        duration: capstoneSection?.duration ?? "Capstone",
      }),
      description: capstoneSection?.description ?? course.artifact,
      moduleCode: "Capstone",
      sectionTitle: capstoneSection?.sectionTitle,
      deliverable: capstoneSection?.deliverable,
      evidence: capstoneSection?.evidence ?? course.evidenceBundle,
      lessons: capstoneSection?.lessons,
    },
    {
      key: "certificate",
      code: "Cert",
      title: `Issued by ${course.certifier}`,
      duration: "",
      description: `Complete the exam and capstone to earn this ${course.certLevel.toLowerCase()} certificate, powered by ${course.certifier}.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F8FC] font-sans text-[#1C1D1F]">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0F1533] to-slate-900 pt-28 pb-20 md:pt-32 md:pb-24">
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
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/80 sm:text-[17px]">
              {course.artifact}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white">
                {course.certLevel}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                {course.modulesPerOutcome} modules
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                {course.hoursPerOutcome} hours
              </span>
              {course.prerequisiteCourseId ? (
                <Link
                  to="/course/$courseId"
                  params={{ courseId: course.prerequisiteCourseId }}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 hover:bg-white/20"
                >
                  {course.prerequisiteLabel}
                </Link>
              ) : (
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                  {course.prerequisiteLabel}
                </span>
              )}
            </div>

            <div className="mt-6 grid max-w-xl grid-cols-[7.5rem_1fr] items-center gap-x-4 gap-y-2.5 text-sm">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
                How you learn
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white">
                  {course.tutor}
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white">
                  Self-paced
                </span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
                What you get
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white">
                  Certificate program
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white">
                  {course.certifier}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-3 lg:gap-12 lg:px-8">
        <div className="pt-10 lg:col-span-2">
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

          <div className="mt-5 flex justify-start">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-[#D8D4F5] px-4 py-2 text-sm font-bold text-[#5B4CF5] transition-colors hover:bg-white"
            >
              <Download className="h-4 w-4" /> Download syllabus
            </button>
          </div>

          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
              <img
                src={`https://api.dicebear.com/7.x/notionists/svg?seed=${course.tutor}`}
                alt={course.tutor}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#6A6F73]">
                Tutor
              </p>
              <p className="text-[15px] font-bold text-[#1C1D1F]">{course.tutor}</p>
            </div>
          </div>
        </div>

        <div className="relative z-20 lg:col-span-1 lg:-mt-56">
          <div className="sticky top-24 pb-10">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)]">
              <div
                className="group relative h-36 cursor-pointer overflow-hidden bg-slate-900"
                onClick={() => setIsPreviewOpen(true)}
                onMouseEnter={() => setIsHoveringVideo(true)}
                onMouseLeave={() => setIsHoveringVideo(false)}
              >
                {isHoveringVideo ? (
                  <video
                    src={course.previewVideoUrl || certciaVideo}
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 z-0 h-full w-full object-cover opacity-80"
                  />
                ) : (
                  <>
                    <img
                      src={course.previewThumbnailUrl || course.image}
                      alt={course.title}
                      className="absolute inset-0 z-0 h-full w-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 z-10 bg-slate-900/40 mix-blend-multiply" />
                  </>
                )}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 to-transparent pb-4">
                  <div className="mb-2 rounded-full bg-white/20 p-3 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    <PlayCircle className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-xs font-bold tracking-wide text-white">
                    Preview this course
                  </div>
                </div>
              </div>

              <div className="p-4">
                <button
                  type="button"
                  onClick={() => setSelectedPlan("bundle")}
                  className={cn(
                    "relative mb-2 w-full cursor-pointer rounded-lg p-3 text-left transition-colors",
                    selectedPlan === "bundle"
                      ? "border-2 border-[#5B4CF5] bg-[#F7F8FC]"
                      : "border border-gray-200 opacity-70 hover:border-gray-300",
                  )}
                >
                  <div className="mb-0.5 text-[11px] font-bold text-[#424446]">Subscription - Bundle</div>
                  <div className="flex items-end gap-1">
                    <span className="text-xl font-bold tracking-tight text-[#1C1D1F]">
                      {formatPrice(course.price)}
                    </span>
                    <span className="mb-1 text-xs text-gray-500">/ month</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPlan("individual")}
                  className={cn(
                    "mb-4 w-full cursor-pointer rounded-lg p-3 text-left transition-colors",
                    selectedPlan === "individual"
                      ? "border-2 border-[#5B4CF5] bg-[#F7F8FC]"
                      : "border border-gray-200 opacity-70 hover:border-gray-300",
                  )}
                >
                  <div className="mb-0.5 text-[11px] font-medium text-[#424446]">Individual Course</div>
                  <div className="flex items-end gap-1">
                    <span className="text-lg font-bold tracking-tight text-[#1C1D1F]">
                      {formatAmount(individualPrice)}
                    </span>
                    <span className="mb-1 text-[10px] text-gray-500">/ one-time payment</span>
                  </div>
                </button>

                <div className="mb-4 rounded-xl border border-blue-100 bg-[#F8FAFC] p-4">
                  <div className="mb-1 text-[15px] font-bold text-[#1C1D1F]">
                    {selectedPlan === "bundle" ? "Subscription - Bundle" : "Individual Course"}
                  </div>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-sm text-gray-400 line-through">
                      {formatPrice(course.originalPrice)}
                    </span>
                    <span className="flex items-center gap-1 rounded bg-orange-100 px-1.5 py-0.5 text-[10px] font-bold text-orange-800">
                      🔥 10% off
                    </span>
                  </div>
                  <div className="mb-3 flex items-end gap-1">
                    <span className="text-2xl font-bold tracking-tight text-[#1C1D1F]">
                      {selectedPlan === "bundle" ? formatPrice(course.price) : formatAmount(individualPrice)}
                    </span>
                    <span className="mb-1 text-xs text-gray-500">
                      {selectedPlan === "bundle" ? "/ month" : "/ one-time"}
                    </span>
                  </div>

                  <ul className="space-y-2 text-[12px] text-[#424446]">
                    <li className="flex items-start gap-3">
                      <Check className="h-4 w-4 shrink-0 text-blue-600" /> Cancel Anytime
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-4 w-4 shrink-0 text-blue-600" /> Unlimited access to hundreds of top-rated courses
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-4 w-4 shrink-0 text-blue-600" /> Hands-on projects with expert feedback
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-4 w-4 shrink-0 text-blue-600" /> Program Certificates
                    </li>
                  </ul>
                </div>

                {isInCart(course.id) ? (
                  <Link
                    to="/cart"
                    className="flex w-full items-center justify-center rounded-xl bg-[#5B4CF5] py-3.5 text-[15px] font-bold text-white shadow-[0_8px_20px_-8px_rgba(91,76,245,0.6)] transition-all hover:bg-[#4A3BE8]"
                  >
                    Go to cart
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => addToCart(course.id)}
                    className="w-full rounded-xl bg-[#3B82F6] py-3.5 text-[15px] font-bold text-white shadow-[0_8px_20px_-8px_rgba(59,130,246,0.6)] transition-all hover:bg-[#2563EB]"
                  >
                    Enroll Now
                  </button>
                )}

                <p className="mt-4 text-center text-[10px] leading-relaxed text-gray-400">
                  *Discount applies to the first year of membership, after which plans are converted to month-to-month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsPreviewOpen(false)}
          />
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-4">
              <h3 className="text-lg font-bold text-white">
                Preview: <span className="font-normal opacity-80">{course.title}</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="rounded-full bg-black/40 p-2 text-white/80 hover:bg-[#5B4CF5] hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="aspect-video bg-black">
              <video
                src={course.previewVideoUrl || certciaVideo}
                controls
                autoPlay
                controlsList="nodownload"
                className="h-full w-full object-contain outline-none"
              >
                Your browser does not support HTML video.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
