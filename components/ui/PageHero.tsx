import Link from "next/link";
import { Fragment } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Clean, lightweight page header (replaces the old navy image banner).
 * `image`/`overlay` are kept optional for backward-compatibility but unused.
 */
export function PageHero({
  title,
  breadcrumb,
}: {
  title: string;
  breadcrumb: string;
  image?: string;
  overlay?: string;
}) {
  const parts = breadcrumb
    .split("/")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <section className="border-b border-line bg-[linear-gradient(180deg,#f4f7fb_0%,#ffffff_100%)]">
      <Container className="py-12 tab:py-16">
        <nav
          aria-label="Breadcrumb"
          className="flex animate-slide-in-left flex-wrap items-center text-[13px] font-semibold uppercase tracking-[1.5px] text-muted"
        >
          {parts.map((p, i) => (
            <Fragment key={i}>
              {i > 0 && <span className="mx-2 text-orange/60">/</span>}
              {p === "Home" ? (
                <Link href="/" className="transition-colors hover:text-orange">
                  {p}
                </Link>
              ) : (
                <span className={i === parts.length - 1 ? "text-orange" : ""}>{p}</span>
              )}
            </Fragment>
          ))}
        </nav>
        <h1 className="mt-3 animate-slide-in-left text-[34px] font-bold tracking-[-0.5px] text-navy [animation-delay:.1s] tab:text-[48px]">
          {title}
        </h1>
        <span className="mt-4 block h-1 w-16 animate-fade-in rounded-full bg-orange [animation-delay:.25s]" />
      </Container>
    </section>
  );
}
