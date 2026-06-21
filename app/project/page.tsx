import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionTitleGrid } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/cards";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Project" };

export default function ProjectPage() {
  return (
    <main>
      <Section>
        <Container>
          <SectionTitleGrid
            kicker="Projects"
            title="Recent Building Work"
            copy="Project examples for residential and commercial clients. Replace sample images with your real portfolio."
          />
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
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
