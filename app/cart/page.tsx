import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { tableClass, tdClass, thClass } from "@/components/ui/blocks";

export const metadata: Metadata = { title: "Quote Basket" };

export default function CartPage() {
  return (
    <main>
      <Section>
        <Container>
          <table className={tableClass}>
            <tbody>
              <tr>
                <th className={thClass}>Service</th>
                <th className={thClass}>Qty</th>
                <th className={thClass}>Estimate</th>
              </tr>
              <tr>
                <td className={tdClass}>Renovation Consultation</td>
                <td className={tdClass}>1</td>
                <td className={tdClass}>£95</td>
              </tr>
              <tr>
                <td className={tdClass}>Maintenance Visit</td>
                <td className={tdClass}>1</td>
                <td className={tdClass}>£75</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-6">
            <Button href="/checkout">Proceed to Checkout</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
