import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProcessCard } from "@/components/ui/cards";

export const metadata: Metadata = { title: "Our Working Process" };

export default function OurWorkingProcessPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-[24px] tab:grid-cols-4">
            <ProcessCard number="01" title="Initial Enquiry">
              Customer explains the project and shares photos or property details.
            </ProcessCard>
            <ProcessCard number="02" title="Site Visit">
              We inspect the property, discuss options and check access or structural
              issues.
            </ProcessCard>
            <ProcessCard number="03" title="Written Quote">
              Clear scope of works, estimated timeline and agreed payment stages.
            </ProcessCard>
            <ProcessCard number="04" title="Build & Handover">
              Work is completed, checked and handed over cleanly with final guidance.
            </ProcessCard>
          </div>
        </Container>
      </Section>
    </main>
  );
}
