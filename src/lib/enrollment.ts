import { useCallback, useSyncExternalStore } from "react";

/** Placeholder until LMS auth is wired — flip to preview enrolled areas. */
const DEMO_ENROLLED_KEY = "certily-demo-enrolled";
const ENROLLMENT_EVENT = "certily-enrollment-change";

function subscribe(onChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => onChange();
  window.addEventListener("storage", handler);
  window.addEventListener(ENROLLMENT_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(ENROLLMENT_EVENT, handler);
  };
}

export function isEnrolled(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(DEMO_ENROLLED_KEY) === "1";
}

export function setDemoEnrolled(value: boolean): void {
  if (typeof window === "undefined") return;
  if (value) window.localStorage.setItem(DEMO_ENROLLED_KEY, "1");
  else window.localStorage.removeItem(DEMO_ENROLLED_KEY);
  window.dispatchEvent(new Event(ENROLLMENT_EVENT));
}

export function canAccessBuilding(access: "public" | "enrolled"): boolean {
  return access === "public" || isEnrolled();
}

export function useEnrollment() {
  const enrolled = useSyncExternalStore(
    subscribe,
    () => isEnrolled(),
    () => false
  );

  const toggleDemoEnrolled = useCallback(() => {
    setDemoEnrolled(!isEnrolled());
  }, []);

  return { enrolled, setDemoEnrolled, toggleDemoEnrolled };
}
