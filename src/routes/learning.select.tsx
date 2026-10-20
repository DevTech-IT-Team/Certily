import { createFileRoute } from "@tanstack/react-router";
import { GuidedPurchase, type PurchaseSearch } from "@/components/discovery/GuidedPurchase";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/learning/select")({
  validateSearch: (search: Record<string, unknown>): PurchaseSearch => ({
    band: typeof search.band === "string" ? search.band : undefined,
    codes: typeof search.codes === "string" ? search.codes : undefined,
    role: typeof search.role === "string" ? search.role : undefined,
    step: typeof search.step === "string" ? search.step : undefined,
  }),
  head: () =>
    pageHead({
      title: "Choose a certification",
      description:
        "Confirm the learner, select certifications, compare package sizes, and continue to the existing checkout.",
      path: "/learning/select",
    }),
  component: SelectPathwayPage,
});

function SelectPathwayPage() {
  const search = Route.useSearch();
  return <GuidedPurchase search={search} />;
}
