// components/ClientShell.tsx  — CLIENT COMPONENT
"use client";

import { useEffect } from "react";

// ✅ PANTRIX — Back/Forward Hard Reload
// Chrome back/forward arrow pe bfcache se frozen page restore hota hai.
// Yeh component detect karta hai aur hard reload karta hai.
// 4 methods combine kiye hain — sab browsers cover ho jaayein.

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const RELOAD_COOLDOWN = 5000; // ms — infinite loop prevent karo
    let lastReloadTime = 0;

    // Back/forward navigation detect karna
    function shouldReload(): boolean {
      const now = Date.now();
      if (now - lastReloadTime < RELOAD_COOLDOWN) return false;

      // Method 1: Modern browsers — Navigation Timing API
      if (typeof performance !== "undefined" && performance.getEntriesByType) {
        const navEntries = performance.getEntriesByType(
          "navigation",
        ) as PerformanceNavigationTiming[];
        if (navEntries.length > 0 && navEntries[0].type === "back_forward") {
          return true;
        }
      }

      // Method 2: Legacy browsers — performance.navigation
      if (
        typeof performance !== "undefined" &&
        performance.navigation &&
        performance.navigation.type === 2
      ) {
        return true;
      }

      return false;
    }

    function doReload() {
      lastReloadTime = Date.now();
      window.location.reload();
    }

    // ── Method 1: pageshow ──
    // Production (HTTPS) pe sabse reliable — bfcache restore pe fire hota hai
    function handlePageShow(e: PageTransitionEvent) {
      if (e.persisted) {
        // persisted = true → bfcache se restore hua → hard reload
        doReload();
      }
    }

    // ── Method 2: visibilitychange ──
    // Tab switch ya back/forward pe fire hota hai
    function handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        if (shouldReload()) doReload();
      }
    }

    // ── Method 3: focus ──
    // Window wapas focus mein aaye tab check karo
    function handleFocus() {
      if (shouldReload()) doReload();
    }

    // ── Method 4: popstate ──
    // Browser back/forward arrow press → popstate fire hota hai
    // Navbar mein window.location.href use hai (hard nav) isliye yeh bhi kaam karta hai
    function handlePopState() {
      const now = Date.now();
      if (now - lastReloadTime < RELOAD_COOLDOWN) return;
      // 50ms wait — page DOM restore hone do
      setTimeout(doReload, 50);
    }

    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return <>{children}</>;
}
