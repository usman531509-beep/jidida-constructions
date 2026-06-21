import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionKicker, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CheckList, Price } from "@/components/ui/blocks";

export const metadata: Metadata = { title: "Product Detail" };

export default function ProductDetailPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-center gap-[38px] tab:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=80"
              alt="Renovation consultation"
              className="rounded-tl-[30px] rounded-br-[30px]"
            />
            <div>
              <SectionKicker>Service Package</SectionKicker>
              <SectionTitle>Renovation Consultation</SectionTitle>
              <Price>£95</Price>
              <p className="text-[20px] leading-[1.48]">
                Sample product/service detail page. Use it for paid surveys,
                consultation bookings, inspection visits or package enquiries.
              </p>
              <CheckList
                items={[
                  "One site visit",
                  "Basic scope advice",
                  "Written follow-up quotation",
                ]}
              />
              <div className="mt-6">
                <Button href="/cart">Add to Quote Basket</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
