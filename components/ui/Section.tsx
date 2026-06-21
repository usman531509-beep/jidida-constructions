import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Section({
  children,
  compact = false,
  className,
  id,
}: {
  children: ReactNode;
  compact?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(compact ? "py-[70px]" : "py-[72px] tab:py-[110px]", className)}
    >
      {children}
    </section>
  );
}

export function SectionKicker({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-[21px] font-medium uppercase tracking-[.2px] text-orange",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "mt-[10px] text-[46px] font-bold leading-[1.02] tracking-[.2px] text-navy tab:text-[44px] lg:text-[62px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

/** The recurring two-column "kicker + title" left / "copy" right header block. */
export function SectionTitleGrid({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: ReactNode;
  copy: ReactNode;
}) {
  return (
    <div className="mb-[60px] grid grid-cols-1 items-center gap-[45px] tab:grid-cols-2">
      <div className="reveal-left">
        <SectionKicker>{kicker}</SectionKicker>
        <SectionTitle>{title}</SectionTitle>
      </div>
      <div className="reveal-right text-[22px] leading-[1.5] text-navy tab:border-l tab:border-[#ccd6e2] tab:pl-[38px]">
        {copy}
      </div>
    </div>
  );
}
