import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionTitleGrid } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AboutBlock, TestimonialIntro } from "@/components/ui/blocks";
import { TeamCard, BlogCard, Testimonial } from "@/components/ui/cards";
import { Skyline } from "@/components/hero/Skyline";
import { ServicesStory } from "@/components/home/ServicesStory";
import { ProjectsBento } from "@/components/home/ProjectsBento";
import { team, posts, postText } from "@/lib/data";

const features = [
  {
    number: "01",
    title: "Trusted Local Builders",
    text: "Reliable building teams for homeowners, landlords, property investors and small businesses.",
  },
  {
    number: "02",
    title: "Quality Workmanship",
    text: "Professional finishes, practical project management and clear communication from start to finish.",
  },
  {
    number: "03",
    title: "Fair Transparent Pricing",
    text: "Detailed written estimates, agreed scope of works and sensible timelines before work begins.",
  },
];

const panelStats = [
  { value: "50+", label: "Expert Team" },
  { value: "500+", label: "Projects" },
  { value: "30+", label: "Partner" },
];

export default function HomePage() {
  return (
    <main id="top">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pb-14 pt-10 tab:pb-24 tab:pt-20">
        {/* line-art skyline watermark (kept legible on small screens via min-width) */}
        <div className="pointer-events-none absolute inset-x-0 top-9 flex justify-center text-navy/[0.12] tab:top-8">
          <Skyline className="h-auto w-full min-w-[680px] max-w-[1500px]" />
        </div>

        <Container className="relative z-[1]">
          {/* Headline + CTA */}
          <div className="mx-auto max-w-[1120px] text-center">
            <h1 className="animate-slide-in-left text-[34px] font-bold leading-[1.05] tracking-[-1px] text-navy sm:text-[52px] tab:text-[72px] lg:text-[70px]">
              Building the Future
              with Precision &amp;
              Unmatched Quality
            </h1>
            <div className="mt-7 flex animate-slide-in-right flex-wrap items-center justify-center gap-4 [animation-delay:.15s] tab:mt-9 tab:gap-5">
              <Button href="/quote" variant="navy">
                Get Started
              </Button>
              <button
                type="button"
                aria-label="Play intro video"
                className="grid h-12 w-12 place-items-center rounded-full border-2 border-navy/25 text-navy transition-all duration-300 hover:scale-105 hover:border-orange hover:text-orange tab:h-14 tab:w-14"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="ml-0.5 h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Stats panel + worker */}
          <div className="relative mt-10 tab:mt-20">
            {/* Worker — overflows the top of the panel on the right (desktop only) */}
            <div className="absolute bottom-0 right-2 z-[2] hidden animate-slide-in-right [animation-delay:.45s] lg:block">
              <img
                src="/hero/worker.png"
                alt="Jadida construction professional"
                className="h-[520px] w-auto animate-float-y [filter:drop-shadow(0_14px_30px_rgba(0,0,0,.35))]"
              />
            </div>

            <div className="hero-stats-panel relative animate-fade-in [animation-delay:.2s] overflow-hidden bg-navy px-6 pb-0 pt-9 text-white sm:px-8 sm:pt-11 lg:px-12 lg:pb-[120px] lg:pt-12">
              <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr_0.85fr] lg:gap-10">
                {/* Left */}
                <div className="animate-slide-in-left [animation-delay:.3s] text-center lg:text-left">
                  <div className="flex items-end justify-center gap-3 lg:justify-start">
                    <span
                      data-counter
                      className="text-[46px] font-black leading-[.85] text-white sm:text-[56px]"
                    >
                      20+
                    </span>
                    <span className="text-left text-[16px] font-bold uppercase leading-tight sm:text-[18px]">
                      Year
                      <br />
                      Experience
                    </span>
                  </div>
                  <p className="mx-auto mt-5 max-w-[440px] text-[16px] italic leading-[1.5] text-white/75 sm:text-[18px] lg:mx-0">
                    Our mission is not only to build, but to bring ideas to life with
                    precision and purpose.
                  </p>
                  <Button
                    href="/about"
                    className="mt-6 w-full justify-center sm:w-auto"
                  >
                    Learn More
                  </Button>
                  <div className="mt-7 flex items-center justify-center gap-4 lg:justify-start">
                    <div className="flex -space-x-3">
                      {team.map((t) => (
                        <img
                          key={t.name}
                          src={t.image}
                          alt={t.name}
                          className="h-10 w-10 rounded-full border-2 border-navy object-cover sm:h-11 sm:w-11"
                        />
                      ))}
                    </div>
                    <div className="text-left">
                      <div className="text-[22px] font-black leading-none sm:text-[24px]">
                        1,000+
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                        Clients
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle stats — desktop only (mobile shows the worker instead) */}
                <div className="hidden animate-slide-in-right [animation-delay:.45s] lg:flex lg:flex-col lg:justify-center lg:divide-y lg:divide-white/15 lg:border-x lg:border-white/15 lg:px-10">
                  {panelStats.map((s) => (
                    <div key={s.label} className="py-4 first:pt-0 last:pb-0">
                      <span
                        data-counter
                        className="block text-[38px] font-black leading-none text-white"
                      >
                        {s.value}
                      </span>
                      <div className="mt-1 text-[13px] font-semibold uppercase tracking-[2px] text-white/60">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right spacer reserved for the desktop worker */}
                <div aria-hidden className="hidden lg:block" />
              </div>

              {/* Worker inside the panel — mobile / tablet only */}
              <img
                src="/hero/worker.png"
                alt="Jadida construction professional"
                className="mx-auto mt-8 block w-[80%] max-w-[300px] animate-slide-in-right [animation-delay:.35s] [filter:drop-shadow(0_-2px_24px_rgba(0,0,0,.25))] lg:hidden"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Features — hairline-divided, minimal */}
      <Section compact>
        <Container>
          <div className="reveal grid grid-cols-1 gap-px overflow-hidden rounded-tl-[30px] rounded-br-[30px] border border-line bg-line tab:grid-cols-3">
            {features.map((f) => (
              <div key={f.number} className="group bg-white p-9 transition-colors">
                <span className="text-[15px] font-bold tracking-widest text-orange">
                  {f.number}
                </span>
                <h3 className="mt-4 text-[26px] font-semibold leading-tight text-navy transition-colors group-hover:text-orange">
                  {f.title}
                </h3>
                <p className="mt-3 text-[18px] leading-[1.5] text-muted">{f.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* About */}
      <Section>
        <Container>
          <SectionTitleGrid
            kicker="About Us"
            title="We Construct your needs"
            copy="Jadida Construction Ltd provides practical building, renovation and property improvement services for homes, flats, shops, offices and landlords."
          />
          <AboutBlock />
        </Container>
      </Section>

      {/* Selected work — bento grid */}
      <Section>
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="reveal-left">
              <span className="text-[15px] font-medium uppercase tracking-[2px] text-orange">
                Projects
              </span>
              <h2 className="mt-2 text-[40px] font-bold leading-tight tracking-[-0.5px] text-navy tab:text-[52px]">
                Selected Recent Work
              </h2>
            </div>
            <Link
              href="/project"
              className="reveal-right text-[16px] font-semibold text-navy transition-colors hover:text-orange"
            >
              View all projects →
            </Link>
          </div>
          <ProjectsBento />
        </Container>
      </Section>

      {/* Services — scroll-driven story (GSAP) */}
      <ServicesStory />

      {/* Team */}
      <Section>
        <Container>
          <SectionTitleGrid
            kicker="Team"
            title="Our Talented Team members"
            copy="Experienced builders, supervisors and finishing specialists ready to manage your property project professionally."
          />
          <div className="grid grid-cols-1 gap-7 tab:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <TeamCard key={t.name} image={t.image} name={t.name} role={t.role} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-light">
        <Container>
          <div className="grid grid-cols-1 gap-8 tab:grid-cols-3">
            <TestimonialIntro />
            <Testimonial author="Homeowner, Hounslow">
              Jadida Construction completed our renovation with excellent
              communication and a clean finish. The team was practical and easy to
              deal with.
            </Testimonial>
            <Testimonial author="Retail Client, London">
              The shop fitting work was finished on time and the space was ready for
              opening. Clear pricing and professional approach.
            </Testimonial>
          </div>
        </Container>
      </Section>

      {/* Blog */}
      <Section>
        <Container>
          <SectionTitleGrid
            kicker="Our Blog"
            title="Latest Post From Blog"
            copy="Short advice articles can help website visitors trust your knowledge before they request a quote."
          />
          <div className="grid grid-cols-1 gap-7 tab:grid-cols-3">
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
