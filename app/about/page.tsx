import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AboutShowcase } from "@/components/about/AboutShowcase";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <main>
      <Section>
        <Container>
          <AboutShowcase />
        </Container>
      </Section>
    </main>
  );
}
