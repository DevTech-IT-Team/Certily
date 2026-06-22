import { Link } from "@tanstack/react-router";
import { ArrowRight, Lock } from "lucide-react";
import { CampusBuildingHeader } from "./CampusBuildingHeader";
import { IllyAvatar } from "./IllyAvatar";

type EnrollGateProps = {
  route: string;
  buildingName: string;
  description: string;
  illyMessage: string;
};

export function EnrollGate({ route, buildingName, description, illyMessage }: EnrollGateProps) {
  return (
    <div className="min-h-[50vh] bg-[#F5F6FA]/50">
      <CampusBuildingHeader
        route={route}
        title={buildingName}
        description={description}
        illyMessage={illyMessage}
      />
      <div className="mx-auto max-w-lg px-4 py-10 md:py-12">
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-elegant">
          <div className="bg-gradient-to-r from-[#7B6CFF] to-[#B8ABFF] px-6 py-5 text-white">
            <div className="flex items-center gap-4">
              <IllyAvatar size="lg" grounded />
              <div>
                <p className="text-sm font-bold">This building is locked</p>
                <p className="mt-0.5 text-xs text-white/85">
                  Enroll in a pathway to unlock {buildingName}
                </p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 text-primary">
              <Lock className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wide">Enrolled students</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Pick a certification pathway first — then My Classroom, AI Lab, Certification Hall, and
              Mission Control open for you and your parents.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
              >
                Explore pathways
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/"
                hash="campus-map"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                View campus map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
