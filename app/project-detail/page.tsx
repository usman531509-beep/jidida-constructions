import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionTitle } from "@/components/ui/Section";
import {
  CheckList,
  Panel,
  Sidebar,
  tableClass,
  tdClass,
  thClass,
} from "@/components/ui/blocks";

export const metadata: Metadata = { title: "Project Detail" };

export default function ProjectDetailPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-[42px] tab:grid-cols-[2fr_1fr]">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Full house renovation"
                className="rounded-tl-[30px] rounded-br-[30px]"
              />
              <SectionTitle>Full House Renovation</SectionTitle>
              <p className="text-[20px] leading-[1.48]">
                This detail page is ready for real case studies. Add before/after
                photos, client requirements, project duration, challenges and
                completed work.
              </p>
              <table className={tableClass}>
                <tbody>
                  <tr>
                    <th className={thClass}>Category</th>
                    <td className={tdClass}>Residential Renovation</td>
                  </tr>
                  <tr>
                    <th className={thClass}>Duration</th>
                    <td className={tdClass}>8 weeks</td>
                  </tr>
                  <tr>
                    <th className={thClass}>Location</th>
                    <td className={tdClass}>London</td>
                  </tr>
                  <tr>
                    <th className={thClass}>Services</th>
                    <td className={tdClass}>
                      Renovation, Kitchen, Bathroom, Decorating
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Sidebar>
              <Panel title="Project Highlights">
                <CheckList
                  items={[
                    "Complete internal refurbishment",
                    "Modern finishes and practical layout",
                    "Ready for handover on schedule",
                  ]}
                />
              </Panel>
            </Sidebar>
          </div>
        </Container>
      </Section>
    </main>
  );
}
