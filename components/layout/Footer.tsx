import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerInfoLinks, footerQuickLinks } from "@/lib/nav";

const linkClass = "my-[9px] block text-[#dce9ff] transition-colors hover:text-orange";

export function Footer() {
  return (
    <footer
      className="bg-cover bg-center pb-[22px] pt-[78px] text-[#dce9ff]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,34,90,.94),rgba(0,34,90,.94)),url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-[52px] tab:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <svg viewBox="0 0 56 48" className="h-11 w-auto" aria-hidden="true">
                <rect x="31" y="6" width="18" height="36" rx="1" fill="#ffffff" />
                <rect x="35" y="11" width="4" height="4" fill="#ff5e13" />
                <rect x="42" y="11" width="4" height="4" fill="#ff5e13" />
                <rect x="35" y="19" width="4" height="4" fill="#ff5e13" />
                <rect x="42" y="19" width="4" height="4" fill="#ff5e13" />
                <rect x="35" y="27" width="4" height="4" fill="#ff5e13" />
                <rect x="42" y="27" width="4" height="4" fill="#ff5e13" />
                <path d="M2 25 L18 9 L34 25 Z" fill="#ff5e13" />
                <rect x="7" y="23" width="22" height="19" fill="#ffffff" />
                <rect x="15" y="31" width="6" height="11" fill="#00225a" />
                <rect x="0" y="42" width="52" height="3" rx="1.5" fill="#ff5e13" />
              </svg>
              <span className="leading-none">
                <span className="block text-[26px] font-extrabold tracking-tight text-white">
                  Jadida
                </span>
                <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[3px] text-white/70">
                  Construction
                </span>
              </span>
            </div>
            <p className="text-[20px] leading-[1.48]">
              Building, renovation and property improvement specialists for homes,
              shops, landlords and commercial properties.
            </p>
            <p className="text-[20px] leading-[1.48]">
              <strong>For inquiry</strong>
              <br />
              020 0000 0000
            </p>
          </div>
          <div>
            <h3 className="mb-5 text-[25px] font-semibold text-white">Information</h3>
            {footerInfoLinks.map((link) => (
              <Link key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <h3 className="mb-5 text-[25px] font-semibold text-white">Quick Links</h3>
            {footerQuickLinks.map((link) => (
              <Link key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <h3 className="mb-5 text-[25px] font-semibold text-white">Contact Info</h3>
            <p className="text-[20px] leading-[1.48]">London, United Kingdom</p>
            <p className="text-[20px] leading-[1.48]">
              info@jadidconstruction.co.uk
              <br />
              020 0000 0000
            </p>

            {/* Newsletter */}
            <div className="mt-7">
              <p className="mb-3 text-[16px] font-semibold text-white">
                Subscribe to our Newsletter
              </p>
              <form
                data-demo
                className="flex overflow-hidden rounded-xl border border-white/30"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="h-12 w-full min-w-0 border-0 bg-transparent px-4 text-[15px] text-white outline-0 placeholder:text-white/60 focus:shadow-[0_0_0_3px_rgba(255,94,19,.16)]"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-orange px-5 text-[14px] font-semibold text-white transition-colors hover:bg-white hover:text-navy"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-[55px] border-t border-white/[.14] pt-5 text-center text-[14px]">
          © 2026 Jadida Construction Ltd. Static template created from the supplied
          construction layout reference.
        </div>
      </Container>
    </footer>
  );
}
