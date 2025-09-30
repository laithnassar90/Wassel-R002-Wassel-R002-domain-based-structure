import { useEffect, useState } from "react";

// ✅ Centralized breakpoint (could also come from a theme config)
const MOBILE_BREAKPOINT = 768;

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Handler for changes
    const onChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Initial check
    setIsMobile(mql.matches);

    // Subscribe to changes
    mql.addEventListener("change", onChange);

    // Cleanup
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}