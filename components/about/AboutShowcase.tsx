import {
  FileClock,
  Tag,
  ShieldCheck,
  Headset,
  Home,
  HardHat,
  ReceiptText,
  type LucideIcon,
} from "lucide-react";
import { SectionKicker, SectionTitle } from "@/components/ui/Section";
import { CheckList } from "@/components/ui/blocks";
import { cn } from "@/lib/cn";

const strip: { icon: LucideIcon; label: string }[] = [
  { icon: FileClock, label: "Free Quotes" },
  { icon: Tag, label: "Clear Pricing" },
  { icon: ShieldCheck, label: "Quality Finish" },
  { icon: Headset, label: "Reliable Support" },
];

const cards: {
  icon: LucideIcon;
  title: string;
  text: string;
  tone: "navy" | "orange";
}[] = [
  {
    icon: Home,
    title: "Trusted Local Builders",
    text: "Reliable building teams for homeowners, landlords, property investors and small businesses.",
    tone: "navy",
  },
  {
    icon: HardHat,
    title: "Quality Workmanship",
    text: "Professional finishes, practical project management and clear communication from start to finish.",
    tone: "orange",
  },
  {
    icon: ReceiptText,
    title: "Fair Transparent Pricing",
    text: "Detailed written estimates, agreed scope of works and sensible timelines before work begins.",
    tone: "navy",
  },
];

/** The full "About" showcase used on both the home page and the /about page. */
export function AboutShowcase() {
  return (
    <>
      {/* Intro: kicker + title / copy with orange accent */}
      <div className="mb-[56px] grid grid-cols-1 items-center gap-[45px] tab:grid-cols-2">
        <div className="reveal-left">
          <SectionKicker>About Us</SectionKicker>
          <SectionTitle>We Build Around Your Needs</SectionTitle>
        </div>
        <div className="reveal-right border-l-[3px] border-orange pl-7 text-[20px] leading-[1.55] text-navy">
          Jadida Construction Ltd provides practical building, renovation and property
          improvement services for homes, flats, shops, offices and landlords.
        </div>
      </div>

      {/* Image + Quality first approach */}
      <div className="grid grid-cols-1 items-center gap-[60px] lg:grid-cols-2">
        <div className="reveal-left relative">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
            alt="Construction team working on site"
            className="h-[420px] w-full rounded-tl-[30px] rounded-br-[30px] object-cover shadow-brand tab:h-[520px]"
          />
          <span className="absolute -bottom-5 left-6 rounded-xl bg-orange px-7 py-5 text-white shadow-brand">
            <span className="block text-[26px] font-black leading-none">FREE</span>
            <span className="text-[12px] font-semibold uppercase tracking-wider">
              Quotes Available
            </span>
          </span>
        </div>

        <div className="reveal-right">
          <h2 className="leading-[0.95]">
            <span className="block text-[48px] font-black uppercase tracking-tight text-orange tab:text-[56px]">
              Quality
            </span>
            <span className="mt-1 block text-[24px] font-bold uppercase tracking-[1px] text-navy tab:text-[28px]">
              First Approach
            </span>
          </h2>
          <h3 className="mt-6 text-[26px] font-bold leading-[1.25] text-navy tab:text-[30px]">
            Professional building services with honest pricing and dependable project
            delivery.
          </h3>
          <p className="mt-4 text-[18px] leading-[1.6] text-muted">
            We focus on realistic small-to-medium construction work: refurbishments,
            extensions, kitchens, bathrooms, shop fitting, maintenance and commercial
            improvements.
          </p>
          <CheckList
            items={[
              "Clear quotations and planned schedule before work starts.",
              "Skilled trades for building, plastering, decorating, roofing and joinery.",
              "Clean site practice, respectful communication and a high-quality finish.",
            ]}
          />
        </div>
      </div>

      {/* Feature strip */}
      <div className="reveal mt-[60px] grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
        {strip.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center gap-4 bg-white px-6 py-7"
            >
              <Icon className="h-9 w-9 shrink-0 text-orange" strokeWidth={1.5} />
              <span className="text-[15px] font-bold uppercase tracking-wide text-navy">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Value cards */}
      <div className="mt-10 grid grid-cols-1 gap-7 tab:grid-cols-3">
        {cards.map((c) => {
          const Icon = c.icon;
          const navy = c.tone === "navy";
          return (
            <div
              key={c.title}
              className={cn(
                "reveal rounded-tl-[30px] rounded-br-[30px] p-9 text-white",
                navy ? "bg-navy" : "bg-orange",
              )}
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white">
                <Icon
                  className={cn("h-8 w-8", navy ? "text-navy" : "text-orange")}
                  strokeWidth={1.6}
                />
              </span>
              <h3 className="mt-6 text-[24px] font-bold leading-tight">{c.title}</h3>
              <p
                className={cn(
                  "mt-3 text-[16px] leading-relaxed",
                  navy ? "text-white/80" : "text-white/90",
                )}
              >
                {c.text}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
