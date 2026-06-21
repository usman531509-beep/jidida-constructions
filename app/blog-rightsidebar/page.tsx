import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ListLinks, Panel, Sidebar } from "@/components/ui/blocks";
import { BlogCard } from "@/components/ui/cards";
import { posts, postText } from "@/lib/data";

export const metadata: Metadata = { title: "Blog Right Sidebar" };

export default function BlogRightSidebarPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-[42px] tab:grid-cols-[2fr_1fr]">
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
            <Sidebar>
              <Panel title="Recent Posts">
                <ListLinks
                  items={[
                    { label: "Planning a Home Renovation", href: "/blog-detail" },
                    { label: "Choosing a Builder", href: "/blog-detail" },
                    { label: "Budgeting for Refurbishment", href: "/blog-detail" },
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
