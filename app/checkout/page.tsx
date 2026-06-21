import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Panel, inputClass, textareaClass } from "@/components/ui/blocks";

export const metadata: Metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-[42px] tab:grid-cols-[2fr_1fr]">
            <form data-demo className="grid grid-cols-1 gap-[18px] tab:grid-cols-2">
              <input className={inputClass} placeholder="Full Name" />
              <input className={inputClass} placeholder="Phone" />
              <input className={inputClass} placeholder="Email" />
              <input className={inputClass} placeholder="Postcode" />
              <textarea
                className={`${textareaClass} col-span-full`}
                placeholder="Project Address / Notes"
              />
              <Button type="submit">Submit Quote Request</Button>
            </form>
            <Panel title="Order Summary">
              <p className="text-[20px] leading-[1.48]">Renovation Consultation: £95</p>
              <p className="text-[20px] leading-[1.48]">Maintenance Visit: £75</p>
              <hr className="my-4 border-line" />
              <h3 className="text-[26px] font-semibold text-navy">Total: £170</h3>
            </Panel>
          </div>
        </Container>
      </Section>
    </main>
  );
}
