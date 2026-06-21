import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionKicker, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  CallBox,
  MapPlaceholder,
  Sidebar,
  inputClass,
  selectClass,
  textareaClass,
} from "@/components/ui/blocks";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-[42px] tab:grid-cols-[2fr_1fr]">
            <div>
              <SectionKicker>Contact Us</SectionKicker>
              <SectionTitle>Request a quotation</SectionTitle>
              <p className="text-[20px] leading-[1.48]">
                Send your project details and we will contact you to arrange a call or
                site visit.
              </p>
              <form data-demo className="grid grid-cols-1 gap-[18px] tab:grid-cols-2">
                <input className={inputClass} placeholder="Full Name" required />
                <input className={inputClass} placeholder="Phone Number" required />
                <input className={inputClass} placeholder="Email Address" type="email" />
                <select className={selectClass} defaultValue="">
                  <option value="">Service Required</option>
                  <option>House Renovation</option>
                  <option>Extension</option>
                  <option>Shop Fitting</option>
                  <option>Maintenance</option>
                </select>
                <textarea
                  className={`${textareaClass} col-span-full`}
                  placeholder="Tell us about your project"
                />
                <Button type="submit">Send Message</Button>
              </form>
            </div>
            <Sidebar>
              <CallBox label="Call for inquiry" phone="020 0000 0000" />
              <MapPlaceholder>
                <div>
                  <strong>Map Placeholder</strong>
                  <br />
                  Replace with Google Maps embed when address is confirmed.
                </div>
              </MapPlaceholder>
            </Sidebar>
          </div>
        </Container>
      </Section>
    </main>
  );
}
