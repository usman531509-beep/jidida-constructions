import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Panel, Sidebar } from "@/components/ui/blocks";
import { ProductCard } from "@/components/ui/cards";
import { products, productText } from "@/lib/data";

export const metadata: Metadata = { title: "Shop Right Sidebar" };

export default function ShopRightSidebarPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-[42px] tab:grid-cols-[3fr_1fr]">
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
            <Sidebar>
              <Panel title="Quote Basket">
                <p className="text-[20px] leading-[1.48]">
                  Use this page for service package requests or sample shop items.
                </p>
              </Panel>
            </Sidebar>
          </div>
        </Container>
      </Section>
    </main>
  );
}
