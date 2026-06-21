import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

const lift =
  "transition-[transform,box-shadow] duration-[320ms] [will-change:transform] hover:-translate-y-[10px] hover:shadow-card";

/* ---------------- Feature card ---------------- */
export function FeatureCard({
  number,
  title,
  children,
  variant = "navy",
}: {
  number: string;
  title: string;
  children: ReactNode;
  variant?: "navy" | "orange";
}) {
  return (
    <div
      data-tilt
      className={cn(
        "reveal relative min-h-[190px] overflow-hidden rounded-tl-[30px] rounded-br-[30px] px-[34px] py-[38px] text-white shadow-brand",
        variant === "orange" ? "bg-orange" : "bg-navy",
        lift,
      )}
    >
      <h3 className="mb-[14px] text-[32px] font-semibold leading-[1.05]">{title}</h3>
      <p className="m-0 text-[21px] leading-[1.45] text-white">{children}</p>
      <span className="pointer-events-none absolute -bottom-[15px] right-5 text-[120px] font-black leading-none opacity-[.08]">
        {number}
      </span>
    </div>
  );
}

/* ---------------- Project card ---------------- */
export function ProjectCard({
  image,
  alt,
  category,
  title,
  description,
}: {
  image: string;
  alt: string;
  category: string;
  title: string;
  description?: string;
}) {
  return (
    <div
      data-tilt
      className="reveal group relative min-h-[440px] overflow-hidden rounded-tl-[30px] rounded-br-[30px] bg-[#ddd] transition-[transform,filter] duration-[320ms] [will-change:transform] hover:[filter:saturate(1.08)_contrast(1.03)]"
    >
      <img
        src={image}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.06]"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/95 to-transparent px-[26px] pb-7 pt-12 text-white">
        <span className="text-[13px] font-black uppercase tracking-wider text-orange">
          {category}
        </span>
        <h3 className="mt-1.5 text-[23px] font-semibold leading-tight">{title}</h3>
        {description && (
          <p className="mt-2 text-[14.5px] leading-relaxed text-white/75">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

/* ---------------- Service card ---------------- */
export function ServiceCard({
  image,
  alt,
  title,
  children,
  href = "/single-service",
}: {
  image: string;
  alt: string;
  title: ReactNode;
  children: ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      data-tilt
      className={cn(
        "reveal group block overflow-hidden rounded-tl-[30px] rounded-br-[30px] bg-white shadow-brand",
        lift,
      )}
    >
      <div className="h-[245px] overflow-hidden bg-[#d6dee8]">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-[350ms] group-hover:scale-[1.05]"
        />
      </div>
      <h3 className="m-0 flex items-center justify-between bg-navy px-6 py-5 text-[26px] font-semibold leading-[1.1] text-white transition-colors group-hover:bg-navy-dark">
        {title}
        <span className="grid h-[38px] w-[38px] place-items-center rounded-lg bg-orange transition-transform duration-300 group-hover:rotate-90">
          +
        </span>
      </h3>
      <p className="m-0 p-6 text-[18px] text-muted">{children}</p>
    </Link>
  );
}

/* ---------------- Team card ---------------- */
export function TeamCard({
  image,
  name,
  role,
}: {
  image: string;
  name: string;
  role: string;
}) {
  return (
    <div data-tilt className={cn("reveal group relative overflow-hidden rounded-tl-[30px] rounded-br-[30px] bg-white shadow-brand", lift)}>
      <img
        src={image}
        alt={name}
        className="h-[320px] w-full object-cover transition-transform duration-[450ms] group-hover:scale-[1.06]"
      />
      <div className="bg-navy p-[18px] text-white">
        <h3 className="m-0 text-[22px] font-semibold">{name}</h3>
        <span className="font-extrabold text-orange">{role}</span>
      </div>
    </div>
  );
}

/* ---------------- Blog card ---------------- */
export function BlogCard({
  image,
  alt,
  meta,
  title,
  children,
  href = "/blog-detail",
}: {
  image: string;
  alt: string;
  meta: string;
  title: string;
  children: ReactNode;
  href?: string;
}) {
  return (
    <article
      data-tilt
      className={cn(
        "reveal group overflow-hidden rounded-tl-[30px] rounded-br-[30px] bg-light shadow-[0_0_0_1px_#e3eaf3]",
        lift,
      )}
    >
      <img
        src={image}
        alt={alt}
        className="h-[250px] w-full object-cover transition-transform duration-[450ms] group-hover:scale-[1.06]"
      />
      <div className="p-[28px]">
        <div className="text-[13px] font-black uppercase text-orange">{meta}</div>
        <h3 className="my-2 text-[25px] font-semibold leading-[1.22] text-navy">
          {title}
        </h3>
        <p className="text-[20px] text-muted">{children}</p>
        <Link href={href} className="font-semibold text-navy hover:text-orange">
          Read more
        </Link>
      </div>
    </article>
  );
}

/* ---------------- Product card ---------------- */
export function ProductCard({
  image,
  alt,
  title,
  price,
  children,
  href = "/product-detail",
}: {
  image: string;
  alt: string;
  title: string;
  price: string;
  children: ReactNode;
  href?: string;
}) {
  return (
    <div
      data-tilt
      className={cn(
        "reveal group overflow-hidden rounded-tl-[30px] rounded-br-[30px] bg-white shadow-brand",
        lift,
      )}
    >
      <img
        src={image}
        alt={alt}
        className="h-[220px] w-full object-cover transition-transform duration-[450ms] group-hover:scale-[1.06]"
      />
      <div className="p-[22px]">
        <h3 className="text-[25px] font-semibold text-navy">{title}</h3>
        <div className="text-[22px] font-black text-orange">{price}</div>
        <p className="text-[20px] text-muted">{children}</p>
        <Button href={href} variant="outline">
          View details
        </Button>
      </div>
    </div>
  );
}

/* ---------------- Process card ---------------- */
export function ProcessCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("reveal relative rounded-tl-[30px] rounded-br-[30px] bg-white p-[34px] shadow-brand", lift)}>
      <span className="mb-[15px] block text-[44px] font-black text-orange">
        {number}
      </span>
      <h3 className="mt-0 text-[26px] font-semibold text-navy">{title}</h3>
      <p className="text-[20px] text-muted">{children}</p>
    </div>
  );
}

/* ---------------- Testimonial ---------------- */
export function Testimonial({
  children,
  author,
}: {
  children: ReactNode;
  author: string;
}) {
  const [name, ...rest] = author.split(",");
  const location = rest.join(",").trim();
  return (
    <figure
      className={cn(
        "reveal relative flex h-full flex-col overflow-hidden rounded-tl-[30px] rounded-br-[30px] border border-line bg-white p-8",
        lift,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-8 select-none font-serif text-[130px] leading-none text-orange/10"
      >
        ”
      </span>
      <div className="mb-5 flex gap-1 text-[17px] text-orange" aria-label="5 out of 5 stars">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <blockquote className="relative text-[18px] leading-[1.6] text-navy/80">
        {children}
      </blockquote>
      <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-orange text-[16px] font-bold text-white">
          {name.trim().charAt(0)}
        </span>
        <span className="leading-tight">
          <span className="block font-bold text-navy">{name.trim()}</span>
          {location && (
            <span className="block text-[14px] text-muted">{location}</span>
          )}
        </span>
      </figcaption>
    </figure>
  );
}

/* ---------------- Stat (animated counter) ---------------- */
export function Stat({
  big,
  value,
  label,
}: {
  big: string;
  value: string;
  label: string;
}) {
  return (
    <div className="reveal relative px-[10px] py-[38px]">
      <span className="pointer-events-none absolute left-1/2 top-[15px] -translate-x-1/2 text-[78px] font-black text-navy opacity-[.05]">
        {big}
      </span>
      <strong
        data-counter
        className="relative block min-w-[64px] text-[48px] font-bold leading-none text-navy"
      >
        {value}
      </strong>
      <span className="block text-[20px] text-orange">{label}</span>
    </div>
  );
}
