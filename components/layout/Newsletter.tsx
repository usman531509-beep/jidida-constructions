import { Container } from "@/components/ui/Container";

export function Newsletter() {
  return (
    <section className="bg-orange py-[55px] text-white">
      <Container className="grid grid-cols-1 items-center gap-[45px] tab:grid-cols-[1fr_1.25fr]">
        <h2 className="m-0 text-[42px] font-bold leading-[.95] tab:text-[60px]">
          Subscribe our
          <br />
          Newsletter
        </h2>
        <form
          data-demo
          className="grid grid-cols-1 overflow-hidden rounded-xl border border-white/40 tab:grid-cols-[1fr_auto]"
        >
          <input
            type="email"
            required
            placeholder="To get update, enter your email"
            className="h-[58px] border-0 bg-transparent px-[26px] text-[20px] text-white outline-0 placeholder:text-white focus:shadow-[0_0_0_3px_rgba(255,94,19,.16)] tab:h-auto"
          />
          <button
            type="submit"
            className="relative overflow-hidden border-0 bg-navy px-9 py-[23px] text-[20px] font-medium text-white before:pointer-events-none before:absolute before:top-0 before:left-[-80%] before:h-full before:w-[55%] before:-skew-x-[18deg] before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.38),transparent)] before:transition-[left] before:duration-[580ms] hover:before:left-[125%]"
          >
            Subscribe now
          </button>
        </form>
      </Container>
    </section>
  );
}
