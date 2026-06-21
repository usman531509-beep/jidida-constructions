"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-[60] grid h-12 w-12 place-items-center bg-navy text-[20px] text-white transition-all duration-[250ms] hover:-translate-y-1 hover:bg-orange",
        show
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-[18px] opacity-0",
      )}
    >
      ↑
    </button>
  );
}
