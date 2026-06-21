"use client";

import Link from "next/link";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "navy";
type Size = "sm" | "md";

const base =
  "relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-xl border-0 font-medium transition-colors duration-200 " +
  "before:pointer-events-none before:absolute before:top-0 before:left-[-80%] before:h-full before:w-[55%] before:-skew-x-[18deg] before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.38),transparent)] before:transition-[left] before:duration-[580ms] hover:before:left-[125%]";

const sizes: Record<Size, string> = {
  md: "min-h-[54px] px-[30px] py-4 text-[20px]",
  sm: "min-h-[44px] px-[22px] py-2 text-[15px] font-semibold",
};

const variants: Record<Variant, string> = {
  primary: "bg-orange text-white hover:bg-navy",
  secondary: "bg-[rgba(0,34,90,.70)] text-white hover:bg-orange",
  outline:
    "border-2 border-orange bg-transparent text-orange hover:bg-orange hover:text-white",
  navy: "bg-navy text-white hover:bg-orange",
};

function useRipple() {
  const ref = useRef<HTMLElement | null>(null);
  const spawn = (event: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className =
      "pointer-events-none absolute h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 animate-ripple";
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    el.appendChild(ripple);
    window.setTimeout(() => ripple.remove(), 650);
  };
  return { ref, spawn };
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...rest
}: CommonProps & {
  href?: string;
  type?: "button" | "submit" | "reset";
} & Record<string, unknown>) {
  const { ref, spawn } = useRipple();

  if (href) {
    const isInternal = href.startsWith("/");
    const classes = cn(base, sizes[size], variants[variant], className);
    if (isInternal) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          onClick={spawn}
          className={classes}
          {...rest}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        onClick={spawn}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={spawn}
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
