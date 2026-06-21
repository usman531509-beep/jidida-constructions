import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ListLinks, Panel, Sidebar } from "@/components/ui/blocks";
import { BlogCard } from "@/components/ui/cards";
import { posts, postText } from "@/lib/data";

export const metadata: Metadata = { title: "Blog Left Sidebar" };

export default function BlogLeftSidebarPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-[42px] tab:grid-cols-[1fr_2fr]">
            <Sidebar>
              <Panel title="Categories">
                <ListLinks
                  items={[
                    { label: "Renovation" },
                    { label: "Extensions" },
                    { label: "Commercial" },
                    { label: "Maintenance" },
                  ]}
                />
              </Panel>
            </Sidebar>
            <div className="grid grid-cols-1 gap-[32px] tab:grid-cols-2">
              {posts.map((post) => (
                <BlogCard
                  key={post.title}
                  image={post.image}
                  alt={post.title}
                  meta={post.meta}
                  title={post.title}
                >
                  {postText}
                </BlogCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
