import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  title,
  description,
  children,
  className = "",
  align = "left",
  spacing = "default",
  id,
}: {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
  spacing?: "default" | "tight";
  id?: string;
}) {
  const center = align === "center";
  const pad = spacing === "tight" ? "py-8 md:py-12" : "py-14 md:py-20";
  const bodyTop = spacing === "tight" ? "mt-6 md:mt-8" : "mt-8 md:mt-12";
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-4 ${pad} ${className}`}>
      {(title || description) && (
        <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
          {title && (
            <h2 className="mt-0 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-2 md:mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}
      <div className={title || description ? bodyTop : ""}>{children}</div>
    </section>
  );
}

export function PageHero({
  title,
  description,
  children,
  imageSrc,
  imageAlt = "",
  className,
}: {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  /** When set, shows a compact hero image beside copy (courses, etc.). */
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}) {
  const split = Boolean(imageSrc);
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/50 pt-20 pb-6 md:pt-24 md:pb-8",
        className
      )}
    >
      <div className="absolute inset-0 bg-mesh -z-10" />
      <div className="absolute inset-0 grid-bg -z-10 opacity-50" />
      <div
        className={`mx-auto px-4 animate-fade-up ${
          split
            ? "max-w-6xl grid gap-6 lg:grid-cols-[minmax(0,1fr)_min(38%,280px)] lg:items-center lg:gap-10"
            : "max-w-5xl text-center"
        }`}
      >
        <div className={split ? "text-center lg:text-left" : ""}>
          <h1
            className={`mt-0 font-bold leading-tight tracking-tight text-2xl md:text-3xl lg:text-4xl ${
              split ? "" : "mx-auto max-w-3xl"
            }`}
          >
            {title}
          </h1>
          {description && (
            <p
              className={`mt-3 md:mt-4 text-base md:text-lg text-muted-foreground max-w-2xl ${
                split ? "mx-auto lg:mx-0" : "mx-auto"
              }`}
            >
              {description}
            </p>
          )}
          {children && (
            <div className={`mt-5 md:mt-6 ${split ? "flex justify-center lg:justify-start" : ""}`}>
              {children}
            </div>
          )}
        </div>
        {split && imageSrc && (
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="aspect-[5/3] overflow-hidden rounded-2xl border border-border/80 bg-muted/30 shadow-elegant lg:aspect-[4/3]">
              <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" loading="eager" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-transparent" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
