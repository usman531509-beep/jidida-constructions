import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

const lift =
  "transition-[transform,box-shadow] duration-[320ms] [will-change:transform] hover:-translate-y-[10px] hover:shadow-card";

/* ---------------- Sidebar panel ---------------- */
export function Panel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("reveal rounded-tl-[30px] rounded-br-[30px] border border-line bg-light p-[30px]", lift)}>
      <h3 className="mt-0 text-[26px] font-semibold text-navy">{title}</h3>
      {children}
    </div>
  );
}

/* ---------------- Call box ---------------- */
export function CallBox({
  label,
  phone,
}: {
  label: string;
  phone: string;
}) {
  return (
    <div className={cn("rounded-tl-[30px] rounded-br-[30px] bg-navy p-[30px] text-white", lift)}>
      <p className="text-[20px]">{label}</p>
      <strong className="text-[28px] text-orange">{phone}</strong>
    </div>
  );
}

/* ---------------- Text card ---------------- */
export function TextCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("reveal rounded-tl-[30px] rounded-br-[30px] bg-white p-[38px] shadow-brand", lift)}>
      <h3 className="mt-0 text-[30px] font-semibold text-navy">{title}</h3>
      {children}
    </div>
  );
}

/* ---------------- Check list ---------------- */
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 list-none p-0">
      {items.map((item, i) => (
        <li
          key={i}
          className="my-[14px] grid grid-cols-[28px_1fr] gap-3 text-[20px] leading-[1.48]"
        >
          <span className="font-black text-orange">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------------- Pills ---------------- */
export function PillList({ items }: { items: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="inline-block rounded-full bg-[#edf3fa] px-[15px] py-[9px] font-extrabold text-navy"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

/* ---------------- Map placeholder ---------------- */
export function MapPlaceholder({ children }: { children: ReactNode }) {
  return (
    <div className="reveal grid min-h-[340px] place-items-center rounded-tl-[30px] rounded-br-[30px] border border-line bg-[linear-gradient(135deg,#e7edf6,#fff)] p-[30px] text-center text-muted">
      {children}
    </div>
  );
}

/* ---------------- Price ---------------- */
export function Price({ children }: { children: ReactNode }) {
  return <div className="text-[22px] font-black text-orange">{children}</div>;
}

/* ---------------- Testimonial intro block ---------------- */
export function TestimonialIntro() {
  return (
    <div className="reveal-left flex h-full flex-col justify-center">
      <span className="text-[14px] font-semibold uppercase tracking-[2px] text-orange">
        Testimonials
      </span>
      <h2 className="mb-5 mt-3 text-[40px] font-bold leading-[1.12] tracking-[-.5px] text-navy">
        Reviews from happy clients
      </h2>
      <p className="max-w-[40ch] text-[18px] leading-[1.55] text-muted">
        Replace these sample reviews with verified client feedback once the website
        goes live.
      </p>
      <Button href="/our-clients" variant="outline" className="mt-7 self-start">
        View more
      </Button>
    </div>
  );
}

/* ---------------- Split CTA (home + services) ---------------- */
export function SplitCta() {
  return (
    <section className="grid grid-cols-1 tab:grid-cols-2">
      <div
        className="reveal min-h-[420px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80')",
        }}
      />
      <div className="reveal bg-navy px-[70px] py-[80px] text-white">
        <span className="text-[21px] font-medium uppercase tracking-[.2px] text-orange">
          Explore
        </span>
        <h2 className="mb-[18px] mt-2 text-[46px] font-bold leading-[1.16] text-white">
          Full Project management
        </h2>
        <p className="mb-7 text-[20px] leading-[1.48]">
          From first visit and quotation to materials, trades, scheduling and
          finishing, we keep your building project organised and clear.
        </p>
        <Button href="/contact">Learn more</Button>
      </div>
    </section>
  );
}

/* ---------------- About block (home + about) ---------------- */
export function AboutBlock() {
  return (
    <div className="grid grid-cols-1 items-center gap-[70px] tab:grid-cols-2">
      <div className="reveal-left relative">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
          alt="Builder working on construction site"
          className="h-[520px] w-full rounded-tl-[30px] rounded-br-[30px] object-cover shadow-brand"
        />
        <span className="absolute -bottom-5 left-6 hidden rounded-xl bg-orange px-6 py-4 text-white shadow-brand tab:block">
          <span className="block text-[30px] font-black leading-none">15+</span>
          <span className="text-[13px] font-semibold uppercase tracking-wider">
            Years of experience
          </span>
        </span>
      </div>
      <div className="reveal-right">
        <div className="mb-[25px] flex items-center gap-[22px] text-orange">
          <span className="text-[58px] font-black leading-none">15+</span>
          <strong className="block text-[28px] leading-[1.2]">
            Years of
            <br />
            Experience
          </strong>
        </div>
        <h3 className="mb-[18px] text-[34px] font-semibold leading-[1.2] text-navy">
          Professional building services with reliable project delivery.
        </h3>
        <p className="text-[20px] leading-[1.48]">
          We focus on realistic small-to-medium construction work: refurbishments,
          extensions, kitchens, bathrooms, shop fitting, maintenance and commercial
          improvements.
        </p>
        <CheckList
          items={[
            "Clear quotation and planned schedule before work starts.",
            "Skilled trades for building, plastering, decorating, roofing and joinery.",
            "Clean site practice, respectful communication and high-quality finish.",
          ]}
        />
      </div>
    </div>
  );
}

/* ---------------- Sidebar ---------------- */
export function Sidebar({ children }: { children: ReactNode }) {
  return <aside className="grid gap-[24px]">{children}</aside>;
}

/* ---------------- List links (panel link lists) ---------------- */
export function ListLinks({
  items,
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  return (
    <div>
      {items.map((item, i) =>
        item.href ? (
          <Link
            key={i}
            href={item.href}
            className="block border-b border-line py-3 font-extrabold hover:text-orange"
          >
            {item.label}
          </Link>
        ) : (
          <a
            key={i}
            className="block cursor-pointer border-b border-line py-3 font-extrabold hover:text-orange"
          >
            {item.label}
          </a>
        ),
      )}
    </div>
  );
}

/* ---------------- Gallery image ---------------- */
export function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="reveal overflow-hidden rounded-tl-[30px] rounded-br-[30px]">
      <img
        src={src}
        alt={alt}
        className="h-[300px] w-full object-cover transition-transform duration-[450ms] hover:scale-[1.06] hover:[filter:saturate(1.08)_contrast(1.03)]"
      />
    </div>
  );
}

/* ---------------- Form + table style constants ---------------- */
export const inputClass =
  "w-full rounded-lg border border-line bg-white p-4 text-[20px] text-navy focus:border-orange focus:shadow-[0_0_0_3px_rgba(255,94,19,.16)] focus:outline-0";
export const textareaClass = `${inputClass} min-h-[150px]`;
export const selectClass = inputClass;

export const tableClass = "w-full border-collapse bg-white";
export const thClass = "border border-line bg-navy p-[14px] text-left text-white";
export const tdClass = "border border-line p-[14px] text-left";
