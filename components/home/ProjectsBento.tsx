import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Hammer,
  HardHat,
  Home,
  Store,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";

type Tone = "orange" | "navy" | "light";

type Item = {
  title: string;
  desc: string;
  href: string;
  icon: LucideIcon;
  image: string;
  tone: Tone;
  large?: boolean;
};

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

// Order produces the bento: [large] [s] [s] / [s] [s] [large] on desktop.
const items: Item[] = [
  {
    title: "Full House Renovation",
    desc: "Reliable residential and commercial construction, start to finish.",
    href: "/project-detail",
    icon: Home,
    image: img("1600585154340-be6161a56a0c"),
    tone: "orange",
    large: true,
  },
  {
    title: "Kitchen Upgrades",
    desc: "Upgrade and improve existing spaces.",
    href: "/project",
    icon: Hammer,
    image: img("1556909114-f6e7ad7d3136"),
    tone: "light",
  },
  {
    title: "Architecture Designing",
    desc: "Modern and functional building designs.",
    href: "/project",
    icon: Building2,
    image: img("1503387762-592deb58ef4e"),
    tone: "light",
  },
  {
    title: "Retail Shop Fit-Out",
    desc: "Stylish and practical commercial interiors.",
    href: "/project",
    icon: Store,
    image: "/projects/retail-fit-out.jpeg",
    tone: "light",
  },
  {
    title: "Loft Conversions",
    desc: "Efficient planning and extra living space.",
    href: "/project",
    icon: Warehouse,
    image: "/projects/loft.jpeg",
    tone: "light",
  },
  {
    title: "Exterior & Roofing",
    desc: "Roofing, exterior finishes, repairs and weatherproofing.",
    href: "/project-detail",
    icon: HardHat,
    image: img("1541888946425-d81bb19240f5"),
    tone: "navy",
    large: true,
  },
];

const tones: Record<Tone, string> = {
  orange: "bg-orange text-white",
  navy: "bg-navy text-white",
  light: "bg-[#eef1f5] text-navy",
};

// Color wash over the photo (opacity effect) — lifts on hover to reveal more image.
const overlay: Record<Tone, string> = {
  orange: "bg-orange/[0.86] group-hover:bg-orange/[0.74]",
  navy: "bg-navy/[0.86] group-hover:bg-navy/[0.74]",
  light: "bg-[#eef1f5]/[0.90] group-hover:bg-[#eef1f5]/[0.80]",
};

function BentoCard({ item }: { item: Item }) {
  const Icon = item.icon;
  const muted = item.tone === "light" ? "text-muted" : "text-white/85";
  // Large cards slide in from the sides; small cards fade up.
  const reveal = item.large
    ? item.tone === "orange"
      ? "reveal-left"
      : "reveal-right"
    : "reveal";

  return (
    <Link
      href={item.href}
      className={cn(
        "group relative flex min-h-[260px] flex-col overflow-hidden rounded-tl-[30px] rounded-br-[30px] p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card",
        tones[item.tone],
        reveal,
        item.large && "sm:col-span-2 lg:col-span-2",
      )}
    >
      {/* Background photo */}
      <img
        src={item.image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]"
      />
      {/* Color wash (opacity effect) */}
      <div
        className={cn(
          "absolute inset-0 transition-colors duration-300",
          overlay[item.tone],
        )}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        <Icon className="h-10 w-10" strokeWidth={1.5} aria-hidden />
        <div className="mt-auto pt-12">
          <h3 className="text-[26px] font-bold leading-[1.05]">{item.title}</h3>
          <p className={cn("mt-3 max-w-[42ch] text-[15px] leading-relaxed", muted)}>
            {item.desc}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold">
            See More
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ProjectsBento() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <BentoCard key={item.title} item={item} />
      ))}
    </div>
  );
}
