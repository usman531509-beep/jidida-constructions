import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/cards";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Project Slider" };

export default function ProjectSliderPage() {
  return (
    <main>
      <Section>
        <Container>
          <p className="mb-8 text-[20px] leading-[1.48]">
            This page keeps the same template design and uses a responsive
            horizontal-style project row. You can replace it with a real slider later.
          </p>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {projects.slice(0, 4).map((p) => (
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
