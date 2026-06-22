"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { mainNav } from "@/lib/nav";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

function isActive(pathname: string, href: string, childHrefs: string[]) {
  if (href === pathname) return true;
  return childHrefs.includes(pathname);
}

function LogoMark() {
  return (
    <svg viewBox="0 0 56 48" className="h-11 w-auto" aria-hidden="true">
      {/* tall building */}
      <rect x="31" y="6" width="18" height="36" rx="1" fill="#00225a" />
      <rect x="35" y="11" width="4" height="4" fill="#ff5e13" />
      <rect x="42" y="11" width="4" height="4" fill="#ff5e13" />
      <rect x="35" y="19" width="4" height="4" fill="#ff5e13" />
      <rect x="42" y="19" width="4" height="4" fill="#ff5e13" />
      <rect x="35" y="27" width="4" height="4" fill="#ff5e13" />
      <rect x="42" y="27" width="4" height="4" fill="#ff5e13" />
      {/* house roof */}
      <path d="M2 25 L18 9 L34 25 Z" fill="#ff5e13" />
      {/* house body */}
      <rect x="7" y="23" width="22" height="19" fill="#00225a" />
      <rect x="15" y="31" width="6" height="11" fill="#fff" />
      {/* ground */}
      <rect x="0" y="42" width="52" height="3" rx="1.5" fill="#ff5e13" />
    </svg>
  );
}

function Logo() {
  return (
    <Link href="/" aria-label="Jadida Construction home" className="flex shrink-0 items-center gap-3">
      <LogoMark />
      <span className="leading-none">
        <span className="block text-[26px] font-extrabold tracking-tight text-navy">
          Jadida
        </span>
        <span className="mt-0.5 block text-[11px] font-semibold uppercase tracking-[3px] text-navy/70">
          Construction
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-300",
        scrolled
          ? "shadow-[0_8px_30px_rgba(0,34,90,.12)]"
          : "shadow-[0_2px_10px_rgba(0,34,90,.06)]",
      )}
    >
      <Container className="flex min-h-[88px] items-center justify-between gap-6">
        <Logo />

        {/* Desktop navigation */}
        <nav className="hidden items-center tab:flex" aria-label="Main navigation">
          <ul className="flex items-center">
            {mainNav.map((item) => {
              const childHrefs = item.children?.map((c) => c.href) ?? [];
              const active = isActive(pathname, item.href, childHrefs);
              return (
                <li key={item.label} className="group/li relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "relative flex min-h-[88px] items-center px-[18px] text-[16px] font-semibold transition-colors",
                      "after:absolute after:bottom-[28px] after:left-[18px] after:right-[18px] after:h-[2px] after:origin-left after:scale-x-0 after:bg-orange after:transition-transform after:duration-300 after:content-['']",
                      "group-hover/li:after:scale-x-100",
                      active
                        ? "text-orange after:scale-x-100"
                        : "text-navy group-hover/li:text-orange",
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="invisible absolute left-0 top-full z-[99] min-w-[230px] translate-y-[14px] overflow-hidden rounded-b-xl border-t-[3px] border-orange bg-white opacity-0 shadow-dropdown transition-all duration-[250ms] group-hover/li:visible group-hover/li:translate-y-0 group-hover/li:opacity-100">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block border-b border-line px-[18px] py-3 text-[15px] font-medium text-navy transition-colors last:border-b-0 hover:bg-light hover:text-orange"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA */}
        <Button href="/quote" variant="navy" className="hidden tab:inline-flex">
          Free Quote
        </Button>

        {/* Hamburger / close */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg border-0 bg-transparent text-navy transition-colors hover:text-orange tab:hidden"
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </Container>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="animate-mobileDrop border-t border-line bg-white px-5 pb-5 pt-1 tab:hidden">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label}>
                <small className="block pt-3 text-[12px] font-extrabold uppercase tracking-wider text-orange">
                  {item.label}
                </small>
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="block border-b border-line py-3 text-[16px] font-semibold text-navy"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="block border-b border-line py-3 text-[16px] font-semibold text-navy"
              >
                {item.label}
              </Link>
            ),
          )}
          {/* Account / basket — moved here from the top bar on mobile */}
          <div className="mt-4 flex items-center justify-between gap-4 rounded-xl bg-light px-4 py-3">
            <Link
              href="/login-register"
              className="text-[15px] font-semibold text-navy transition-colors hover:text-orange"
            >
              Login / Register
            </Link>
            <Link
              href="/cart"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy transition-colors hover:text-orange"
            >
              Quote Basket
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-orange px-1 text-[11px] text-white">
                3
              </span>
            </Link>
          </div>

          <Button href="/quote" variant="navy" className="mt-4 w-full">
            Free Quote
          </Button>
        </div>
      )}
    </header>
  );
}
