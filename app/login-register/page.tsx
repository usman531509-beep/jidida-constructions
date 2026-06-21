import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TextCard, inputClass } from "@/components/ui/blocks";

export const metadata: Metadata = { title: "Login / Register" };

export default function LoginRegisterPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-start gap-[38px] tab:grid-cols-2">
            <TextCard title="Login">
              <form data-demo className="grid gap-4">
                <input className={inputClass} placeholder="Email" />
                <input className={inputClass} type="password" placeholder="Password" />
                <div>
                  <Button type="submit">Login</Button>
                </div>
              </form>
            </TextCard>
            <TextCard title="Register">
              <form data-demo className="grid gap-4">
                <input className={inputClass} placeholder="Full Name" />
                <input className={inputClass} placeholder="Email" />
                <input className={inputClass} type="password" placeholder="Password" />
                <div>
                  <Button type="submit">Register</Button>
                </div>
              </form>
            </TextCard>
          </div>
        </Container>
      </Section>
    </main>
  );
}
