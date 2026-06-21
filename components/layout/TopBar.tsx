import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function TopBar() {
  return (
    <div className="bg-orange text-[13px] font-medium text-white">
      <Container className="flex min-h-[38px] items-center justify-center gap-6 tab:justify-between">
        <div className="hidden flex-wrap items-center gap-6 tab:flex">
          <span>☎ 020 0000 0000</span>
          <span>◷ Mon – Sat: 8.00am – 6.00pm</span>
        </div>
        <div className="flex flex-wrap items-center gap-5">
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
