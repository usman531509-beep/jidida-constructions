import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/cards";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Project 2 Column" };

export default function Project2ColumnPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-7 tab:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard
                key={p.title}
                image={p.image}
                alt={p.title}
                category={p.category}
                title={p.title}
                description={p.description}
              />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
