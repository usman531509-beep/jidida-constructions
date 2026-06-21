"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Re-implements the behaviours from the original assets/js/main.js that operate
 * by scanning the DOM: scroll-reveal, animated counters, card tilt and the demo
 * form alert. Header mobile menu, header shadow and back-to-top are handled by
 * their own components. Re-runs whenever the route changes so newly-rendered
 * page elements are wired up.
 */
export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dynamic-ready");

    const cleanups: Array<() => void> = [];

    // --- Demo forms: prevent submit and show a friendly message ---
    const demoForms = Array.from(
      document.querySelectorAll<HTMLFormElement>("form[data-demo]"),
    );
    demoForms.forEach((form) => {
      const handler = (event: Event) => {
        event.preventDefault();
        window.alert(
          "Thank you. This demo form is ready to connect to your backend or email service.",
        );
      };
      form.addEventListener("submit", handler);
      cleanups.push(() => form.removeEventListener("submit", handler));
    });

    // --- Scroll reveal (fade-up + directional left/right) ---
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".reveal, .reveal-left, .reveal-right",
      ),
    );
    revealItems.forEach((el, index) => {
      el.style.setProperty("--reveal-delay", `${(index % 6) * 70}ms`);
    });

    let revealObserver: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -40px 0px" },
      );
      revealItems.forEach((el) => revealObserver?.observe(el));
    } else {
      revealItems.forEach((el) => el.classList.add("is-visible"));
    }
    if (revealObserver) cleanups.push(() => revealObserver?.disconnect());

    // --- Animated counters ---
    const parseCounter = (text: string) => {
      const match = String(text).trim().match(/^(\d+(?:\.\d+)?)(.*)$/);
      if (!match) return null;
      return { value: parseFloat(match[1]), suffix: match[2] || "" };
    };

    const animateCounter = (el: HTMLElement) => {
      if (el.dataset.counted === "true") return;
      const parsed = parseCounter(el.textContent || "");
      if (!parsed) return;
      el.dataset.counted = "true";
      const duration = 1350;
      const start = performance.now();
      const frame = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(parsed.value * eased) + parsed.suffix;
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };

    const counters = Array.from(
      document.querySelectorAll<HTMLElement>("[data-counter]"),
    );
    let counterObserver: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target as HTMLElement);
              counterObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.45 },
      );
      counters.forEach((el) => counterObserver?.observe(el));
    } else {
      counters.forEach(animateCounter);
    }
    if (counterObserver) cleanups.push(() => counterObserver?.disconnect());

    // --- Card tilt ---
    const tiltCards = Array.from(
      document.querySelectorAll<HTMLElement>("[data-tilt]"),
    );
    tiltCards.forEach((card) => {
      const onMove = (event: MouseEvent) => {
        if (window.matchMedia("(max-width: 820px)").matches) return;
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = (x / rect.width - 0.5) * 4;
        const rotateX = (y / rect.height - 0.5) * -4;
        card.style.transform = `translateY(-10px) perspective(900px) rotateX(${rotateX.toFixed(
          2,
        )}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      };
      const onLeave = () => {
        card.style.transform = "";
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
