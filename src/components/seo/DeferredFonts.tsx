import { useEffect } from "react";
import { GOOGLE_FONTS_HREF } from "@/lib/seo";

export function DeferredFonts() {
  useEffect(() => {
    const existing = document.querySelector(`link[href="${GOOGLE_FONTS_HREF}"]`);
    if (existing) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = GOOGLE_FONTS_HREF;
    document.head.appendChild(link);
  }, []);
  return null;
}
