import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionKicker, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  CallBox,
  CheckList,
  ListLinks,
  Panel,
  Sidebar,
} from "@/components/ui/blocks";
import { ProcessCard } from "@/components/ui/cards";

export const metadata: Metadata = { title: "Service Details" };

const included = [
  "Free site visit, survey and written quotation",
  "Full project management with one point of contact",
  "Skilled, vetted trades for every stage of the build",
  "Quality materials sourced and scheduled for you",
  "Clean site practice and a tidy, on-time handover",
];

const steps = [
  {
    number: "01",
    title: "Consultation",
    text: "We discuss your goals, budget and timeline, then arrange a site visit.",
  },
  {
    number: "02",
    title: "Survey & Quote",
    text: "We inspect the property and send a clear, itemised written quotation.",
  },
  {
    number: "03",
    title: "Build",
    text: "Our trades carry out the work to schedule and keep you updated throughout.",
  },
  {
    number: "04",
    title: "Handover",
    text: "We finish, clean the site and hand over with guidance and aftercare.",
  },
];

const otherServices = [
  { label: "Home Renovations", href: "/single-service" },
  { label: "House Extensions", href: "/single-service" },
  { label: "Kitchen & Bathroom", href: "/single-service" },
  { label: "Shop Fitting", href: "/single-service" },
  { label: "Roofing & Exterior", href: "/single-service" },
  { label: "Property Maintenance", href: "/single-service" },
];

export default function SingleServicePage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-[2fr_1fr]">
            {/* Main content */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
                alt="Home renovation in progress"
                className="reveal-left h-[300px] w-full rounded-tl-[30px] rounded-br-[30px] object-cover shadow-brand tab:h-[440px]"
              />

              <div className="reveal mt-9">
                <SectionKicker>Our Services</SectionKicker>
                <SectionTitle className="mt-2">
                  Home Renovations &amp; Refurbishments
                </SectionTitle>
                <p className="mt-5 text-[19px] leading-[1.6] text-navy/80">
                  Transform your property with a complete renovation handled end to end
                  by one accountable team. From the first survey to the final handover,
                  we plan, manage and finish your project with clear pricing and
                  high-quality workmanship.
                </p>
                <p className="mt-4 text-[18px] leading-[1.6] text-muted">
                  Whether it&apos;s a single room or a full-house refurbishment, we
                  coordinate every trade — building, plastering, electrics, plumbing,
                  decorating and finishing — so you only ever deal with us.
                </p>
              </div>

              {/* What's included */}
              <div className="reveal mt-10 rounded-tl-[30px] rounded-br-[30px] bg-light p-8">
                <h3 className="text-[24px] font-semibold text-navy">
                  What&apos;s included
                </h3>
                <CheckList items={included} />
              </div>

              {/* Process */}
              <div className="mt-12">
                <SectionKicker>How we work</SectionKicker>
                <h3 className="mt-2 text-[30px] font-bold text-navy">
                  From plan to handover
                </h3>
                <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {steps.map((s) => (
                    <ProcessCard key={s.number} number={s.number} title={s.title}>
                      {s.text}
                    </ProcessCard>
                  ))}
                </div>
              </div>

              {/* CTA banner */}
              <div className="reveal mt-12 flex flex-col items-start gap-5 rounded-tl-[30px] rounded-br-[30px] bg-navy p-9 text-white sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-[26px] font-bold leading-tight">
                    Ready to start your project?
                  </h3>
                  <p className="mt-1 text-white/75">
                    Get a free, no-obligation quote within one working day.
                  </p>
                </div>
                <Button href="/quote" className="shrink-0">
                  Get a Quote
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <Sidebar>
              <Panel title="All Services">
                <ListLinks items={otherServices} />
              </Panel>
              <CallBox label="Need a builder?" phone="020 0000 0000" />
              <div className="reveal-right rounded-tl-[30px] rounded-br-[30px] bg-orange p-8 text-white">
                <h3 className="text-[24px] font-bold leading-tight">Get a Free Quote</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/90">
                  Tell us about your project and we&apos;ll reply within one working day.
                </p>
                <Button
                  href="/quote"
                  variant="navy"
                  className="mt-5 w-full justify-center"
                >
                  Request a Quote
                </Button>
              </div>
            </Sidebar>
          </div>
        </Container>
      </Section>
    </main>
  );
}
