import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionKicker, SectionTitle } from "@/components/ui/Section";
import { QuoteForm } from "@/components/quote/QuoteForm";

export const metadata: Metadata = { title: "Get a Quote" };

export default function QuotePage() {
  return (
    <main>
      <Section className="bg-[linear-gradient(180deg,#fff_0%,#f7f9fd_100%)]">
        <Container className="max-w-quote">
          <div className="mx-auto mb-[36px] max-w-[720px] text-center">
            <SectionKicker>Free Quote</SectionKicker>
            <SectionTitle className="mb-[10px]">
              Tell us about your project.
            </SectionTitle>
            <p className="m-0 text-[22px] text-[#213e65]">
              Takes 2 minutes. We reply within one working day.
            </p>
          </div>
          <QuoteForm />
        </Container>
      </Section>
    </main>
  );
}
