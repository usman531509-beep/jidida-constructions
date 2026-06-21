import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionTitleGrid } from "@/components/ui/Section";
import { TeamCard } from "@/components/ui/cards";
import { team } from "@/lib/data";

export const metadata: Metadata = { title: "Our Team" };

export default function OurTeamPage() {
  return (
    <main>
      <Section>
        <Container>
          <SectionTitleGrid
            kicker="Team"
            title="Our Talented Team members"
            copy="Replace the sample team details with real staff when ready."
          />
          <div className="grid grid-cols-1 gap-[30px] tab:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <TeamCard key={t.name} image={t.image} name={t.name} role={t.role} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
