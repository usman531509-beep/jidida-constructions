import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TestimonialIntro } from "@/components/ui/blocks";
import { FeatureCard, Testimonial } from "@/components/ui/cards";

export const metadata: Metadata = { title: "Our Clients" };

export default function OurClientsPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-[34px] tab:grid-cols-3">
            <TestimonialIntro />
            <Testimonial author="Homeowner, Hounslow">
              Jadida Construction completed our renovation with excellent
              communication and a clean finish. The team was practical and easy to
              deal with.
            </Testimonial>
            <Testimonial author="Retail Client, London">
              The shop fitting work was finished on time and the space was ready for
              opening. Clear pricing and professional approach.
            </Testimonial>
          </div>
        </Container>
      </Section>
      <Section compact>
        <Container>
          <div className="grid grid-cols-1 gap-[32px] tab:grid-cols-3">
            <FeatureCard number="01" title="Homeowners">
              Renovations, kitchens, bathrooms and extensions.
            </FeatureCard>
            <FeatureCard number="02" title="Landlords" variant="orange">
              Refurbishments, maintenance and rental property improvements.
            </FeatureCard>
            <FeatureCard number="03" title="Businesses">
              Shop fitting, offices and small commercial work.
            </FeatureCard>
          </div>
        </Container>
      </Section>
    </main>
  );
}
