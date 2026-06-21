import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionTitleGrid } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/cards";
import { services } from "@/lib/data";

export const metadata: Metadata = { title: "Services" };

export default function ServicePage() {
  return (
    <main>
      <Section>
        <Container>
          <SectionTitleGrid
            kicker="Services"
            title="Provide Unique & Quality Service"
            copy="Choose the service that matches the property problem you want solved. Every service can be converted into a quotation page or enquiry form."
          />
          <div className="grid grid-cols-1 gap-[32px] tab:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.title} image={s.image} alt={s.title} title={s.title}>
                {s.text}
              </ServiceCard>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
