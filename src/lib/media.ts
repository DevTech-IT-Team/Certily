export function optimizeImageUrl(url: string, width = 640) {
  if (!url.includes("images.unsplash.com")) return url;
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("auto", "format");
    parsed.searchParams.set("fit", "crop");
    parsed.searchParams.set("w", String(width));
    parsed.searchParams.set("q", "70");
    parsed.searchParams.set("fm", "webp");
    return parsed.toString();
  } catch {
    return url;
  }
}
