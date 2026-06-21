import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/ui/cards";
import { posts, postText } from "@/lib/data";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-[32px] tab:grid-cols-3">
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
        </Container>
      </Section>
    </main>
  );
}
