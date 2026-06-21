import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ListLinks, Panel, Sidebar } from "@/components/ui/blocks";
import { ProductCard } from "@/components/ui/cards";
import { products, productText } from "@/lib/data";

export const metadata: Metadata = { title: "Shop Left Sidebar" };

export default function ShopLeftSidebarPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-[42px] tab:grid-cols-[1fr_3fr]">
            <Sidebar>
              <Panel title="Categories">
                <ListLinks
                  items={[
                    { label: "Consultations" },
                    { label: "Maintenance" },
                    { label: "Packages" },
                    { label: "Surveys" },
                  ]}
                />
              </Panel>
            </Sidebar>
            <div className="grid grid-cols-1 gap-[28px] tab:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => (
                <ProductCard
                  key={p.title}
                  image={p.image}
                  alt={p.title}
                  title={p.title}
                  price={p.price}
                >
                  {productText}
                </ProductCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
