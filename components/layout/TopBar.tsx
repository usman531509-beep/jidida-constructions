import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function TopBar() {
  return (
    <div className="bg-orange text-[12px] font-medium text-white tab:text-[13px]">
      <Container className="flex min-h-[38px] items-center justify-center gap-5 tab:justify-between tab:gap-6">
        {/* Phone + timings — shown on every screen */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-0.5 text-center tab:justify-start">
          <span>☎ 020 0000 0000</span>
          <span>◷ Mon – Sat: 8.00am – 6.00pm</span>
        </div>
        {/* Login + Quote — desktop only (moved into the menu on mobile) */}
        <div className="hidden flex-wrap items-center gap-5 tab:flex">
          <Link href="/login-register" className="transition-opacity hover:opacity-80">
            Login / Register
          </Link>
          <Link href="/cart" className="inline-flex items-center gap-1.5">
            Quote Basket
            <span className="inline-grid h-[18px] min-w-[18px] place-items-center rounded-full bg-navy px-1 text-[11px]">
              3
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
