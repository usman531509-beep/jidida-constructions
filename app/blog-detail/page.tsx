import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionTitle } from "@/components/ui/Section";
import { Panel, Sidebar } from "@/components/ui/blocks";

export const metadata: Metadata = { title: "Blog Detail" };

export default function BlogDetailPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-[42px] tab:grid-cols-[2fr_1fr]">
            <article>
              <img
                src="https://images.unsplash.com/photo-1556156653-e5a7c69cc263?auto=format&fit=crop&w=1200&q=80"
                alt="Construction blog"
                className="rounded-tl-[30px] rounded-br-[30px]"
              />
              <div className="text-[13px] font-black uppercase text-orange">
                Renovation - Building Advice
              </div>
              <SectionTitle>Planning a Home Renovation Without Stress</SectionTitle>
              <p className="text-[20px] leading-[1.48]">
                A successful renovation starts with a clear scope of work. List the
                rooms, finishes, budget and preferred timeline before asking for a
                quote.
              </p>
              <p className="text-[20px] leading-[1.48]">
                For best results, agree access, waste removal, material choices and
                payment stages before work begins. This page can be edited with your
                own building advice articles.
              </p>
            </article>
            <Sidebar>
              <Panel title="Share this post">
                <p className="text-[20px] leading-[1.48]">
                  Facebook / Instagram / WhatsApp links can be added here.
                </p>
              </Panel>
            </Sidebar>
          </div>
        </Container>
      </Section>
    </main>
  );
}
