import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionTitleGrid } from "@/components/ui/Section";
import { AboutBlock, CheckList, PillList, TextCard } from "@/components/ui/blocks";
import { FeatureCard, Stat } from "@/components/ui/cards";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <main>

      <Section>
        <Container>
          <SectionTitleGrid
            kicker="About Us"
            title="We Construct your needs"
            copy="Jadida Construction Ltd provides practical building, renovation and property improvement services for homes, flats, shops, offices and landlords."
          />
          <AboutBlock />
        </Container>
      </Section>

      <Section compact>
        <Container>
          <div className="grid grid-cols-1 gap-[32px] tab:grid-cols-3">
            <FeatureCard number="01" title="Trusted Local Builders">
              Reliable building teams for homeowners, landlords, property investors
              and small businesses.
            </FeatureCard>
            <FeatureCard number="02" title="Quality Workmanship" variant="orange">
              Professional finishes, practical project management and clear
              communication from start to finish.
            </FeatureCard>
            <FeatureCard number="03" title="Fair Transparent Pricing">
              Detailed written estimates, agreed scope of works and sensible
              timelines before work begins.
            </FeatureCard>
          </div>
        </Container>
      </Section>

      <Section compact>
        <Container>
          <div className="grid grid-cols-1 gap-[26px] text-center tab:grid-cols-4">
            <Stat big="120" value="120+" label="Projects" />
            <Stat big="95" value="95+" label="Clients" />
            <Stat big="18" value="18" label="Trades Covered" />
            <Stat big="24" value="24h" label="Quote Response" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 items-center gap-[38px] tab:grid-cols-2">
            <TextCard title="Who we work for">
              <p className="text-[20px] leading-[1.48]">
                Homeowners, landlords, letting agents, shops, offices and property
                investors who need reliable improvement work.
              </p>
              <PillList items={["Homeowners", "Landlords", "Retail Shops", "Offices"]} />
            </TextCard>
            <TextCard title="How we work">
              <p className="text-[20px] leading-[1.48]">
                We inspect the property, confirm the scope, provide a written estimate
                and manage each stage until the final handover.
              </p>
              <CheckList
                items={[
                  "Site visit and practical advice",
                  "Clear quotation and timeline",
                  "Clean handover after completion",
                ]}
              />
            </TextCard>
          </div>
        </Container>
      </Section>
    </main>
  );
}
