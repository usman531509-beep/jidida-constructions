import type { CSSProperties } from "react";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { Button } from "@/components/ui/Button";

const headline =
  "text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-[0.92] uppercase tracking-tight";
const lead =
  "max-w-[46ch] text-[clamp(1.1rem,1.5vw,1.5rem)] font-normal leading-relaxed";
const colLabel = "mb-2 text-[14px] font-bold uppercase tracking-wider";
const colText = "text-[clamp(0.95rem,1.05vw,1.15rem)] leading-relaxed opacity-80";
const kicker = "text-[11px] font-bold uppercase tracking-[0.2em]";

function Col({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="min-w-[180px] flex-1">
      <p className={colLabel}>{label}</p>
      <p className={colText}>{children}</p>
    </div>
  );
}

/**
 * Panel background: a construction photo with a strong colour wash baked into a
 * CSS background (not an absolute element), so it rotates and clips cleanly with
 * the panel and never leaves gaps behind the GSAP rotation.
 */
function panelStyle(tone: "orange" | "navy", imgId: string): CSSProperties {
  const solid = tone === "orange" ? "#ff5e13" : "#00225a";
  const wash = tone === "orange" ? "rgba(255,94,19,.84)" : "rgba(0,34,90,.84)";
  return {
    backgroundColor: solid,
    backgroundImage: `linear-gradient(${wash}, ${wash}), url('https://images.unsplash.com/photo-${imgId}?auto=format&fit=crop&w=1400&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  };
}

export function ServicesStory() {
  return (
    <FlowArt aria-label="Jadida Construction services">
      {/* 01 — What we do */}
      <FlowSection
        aria-label="What we do"
        style={panelStyle("orange", "1504307651254-35680f356dfd")}
      >
        <p className={kicker}>01 — What we do</p>
        <hr className="my-[1.25vw] border-none border-t border-black/25" />
        <div>
          <h2 className={headline}>
            Build
            <br />
            Renew
            <br />
            Restore
          </h2>
        </div>
        <hr className="my-[1.25vw] border-none border-t border-black/25" />
        <p className={`mt-auto ${lead}`}>
          Jadida Construction delivers practical building, renovation and
          property-improvement work for homes, shops and commercial spaces — with
          clear pricing, skilled trades and clean finishes on every job.
        </p>
      </FlowSection>

      {/* 02 — Our services */}
      <FlowSection
        aria-label="Our services"
        style={panelStyle("navy", "1600585154340-be6161a56a0c")}
      >
        <p className={kicker}>02 — Our services</p>
        <hr className="my-[1.25vw] border-none border-t border-white/25" />
        <div>
          <h2 className={headline}>
            Built
            <br />
            To
            <br />
            Last
          </h2>
        </div>
        <hr className="my-[1.25vw] border-none border-t border-white/25" />
        <p className={lead}>
          Whatever the property problem, there is a Jadida service to solve it
          delivered end to end by one accountable team.
        </p>
        <hr className="my-[1.25vw] border-none border-t border-white/25" />
        <div className="flex flex-wrap gap-[3vw]">
          <Col label="Renovations">
            Full house, flat and commercial refurbishments with complete planning and
            finishing support.
          </Col>
          <Col label="Extensions">
            Rear extensions, side returns, garage conversions and extra living-space
            improvements.
          </Col>
          <Col label="Kitchen & Bathroom">
            Modern kitchens, bathrooms, tiling, plumbing coordination and final
            decoration.
          </Col>
        </div>
        <hr className="my-[1.25vw] border-none border-t border-white/25" />
        <div className="flex flex-wrap gap-[3vw]">
          <Col label="Shop Fitting">
            Retail, office and small commercial fit-outs designed around daily business
            use.
          </Col>
          <Col label="Roofing & Exterior">
            Roof repairs, exterior finishes, gutters, fascias and weatherproofing
            improvements.
          </Col>
          <Col label="Maintenance">
            General repairs, landlord maintenance, painting, decorating and small
            building works.
          </Col>
        </div>
        <hr className="my-[1.25vw] border-none border-t border-white/25" />
        <p className="mt-auto ml-auto text-right text-[clamp(1.05rem,1.4vw,1.35rem)] font-normal leading-relaxed">
          One team, one point of contact, from first visit to final handover.
        </p>
      </FlowSection>

      {/* 03 — Why Jadida */}
      <FlowSection
        aria-label="Why Jadida"
        style={panelStyle("orange", "1541888946425-d81bb19240f5")}
      >
        <p className={kicker}>03 — Why Jadida</p>
        <hr className="my-[1.25vw] border-none border-t border-black/25" />
        <div>
          <h2 className={headline}>
            Quality
            <br />
            You Can
            <br />
            Trust
          </h2>
        </div>
        <hr className="my-[1.25vw] border-none border-t border-black/25" />
        <p className={lead}>
          Skilled trades, transparent quotes and respectful site practice — the
          reasons clients come back and recommend us.
        </p>
        <hr className="my-[1.25vw] border-none border-t border-black/25" />
        <div className="flex flex-wrap gap-[3vw]">
          <Col label="15+ Years">
            Experience across residential and commercial building work of all sizes.
          </Col>
          <Col label="120+ Projects">
            Renovations, extensions, fit-outs and maintenance delivered and signed off.
          </Col>
          <Col label="18 Trades">
            Building, plastering, decorating, roofing, joinery and more under one roof.
          </Col>
        </div>
        <hr className="my-[1.25vw] border-none border-t border-black/25" />
        <div className="flex flex-wrap gap-[3vw]">
          <Col label="Clear Pricing">
            Detailed written estimates and an agreed scope before any work begins.
          </Col>
          <Col label="Skilled Trades">
            Vetted, experienced teams who take pride in a high-quality finish.
          </Col>
          <Col label="Clean Handover">
            Tidy site practice, clear communication and a clean finish at completion.
          </Col>
        </div>
      </FlowSection>

      {/* 04 — Get started */}
      <FlowSection
        aria-label="Get started"
        style={panelStyle("navy", "1486406146926-c627a92ad1ab")}
      >
        <p className={kicker}>04 — Get started</p>
        <hr className="my-[1.25vw] border-none border-t border-white/25" />
        <div>
          <h2 className={headline}>
            Ready
            <br />
            To
            <br />
            Build?
          </h2>
        </div>
        <hr className="my-[1.25vw] border-none border-t border-white/25" />
        <div className="mt-auto flex flex-col gap-8 tab:flex-row tab:items-end tab:justify-between">
          <p className={lead}>
            Tell us about your project and we will reply within one working day to
            arrange a call or site visit.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/quote">Get a Quote</Button>
            <Button href="/contact" variant="outline">
              Contact us
            </Button>
          </div>
        </div>
      </FlowSection>
    </FlowArt>
  );
}
