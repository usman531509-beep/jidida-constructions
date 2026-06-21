import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/ui/cards";
import { products, productText } from "@/lib/data";

export const metadata: Metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <main>
      <Section>
        <Container>
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
        </Container>
      </Section>
    </main>
  );
}
