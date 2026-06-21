import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { GalleryImage } from "@/components/ui/blocks";
import { galleryImages } from "@/lib/data";

export const metadata: Metadata = { title: "Project Gallery" };

export default function ProjectGalleryPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-[24px] tab:grid-cols-3">
            {galleryImages.map((src, i) => (
              <GalleryImage key={i} src={src} alt="Project" />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
