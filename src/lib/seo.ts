export const SITE_NAME = "Certcia AI Campus";
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined) ?? "https://certcia.ai";

export const DEFAULT_DESCRIPTION =
  "Certcia AI Campus is a guided AI learning campus for students, parents, and professionals — structured certification pathways, real projects, and shareable credentials issued with Certifier.";

export const OG_IMAGE = `${SITE_URL}/og-image.webp`;

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Sans:wght@700&display=swap";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageHead({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = OG_IMAGE,
  type = "website",
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
}) {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "author", content: "Certcia" },
      { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: image.startsWith("http") ? image : absoluteUrl(image) },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: url },
    ],
  };
}

export const GOOGLE_FONTS_HREF = FONT_HREF;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/favicon.png"),
    description: DEFAULT_DESCRIPTION,
    sameAs: [],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/learning?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function courseJsonLd(course: {
  title: string;
  description: string;
  id: string;
  image: string;
  hours: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    image: course.image,
    provider: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: absoluteUrl(`/course/${course.id}`),
    timeRequired: `PT${course.hours}H`,
    educationalCredentialAwarded: "Certificate",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
