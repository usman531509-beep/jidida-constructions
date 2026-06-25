import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionTitleGrid } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TestimonialIntro } from "@/components/ui/blocks";
import { TeamCard, BlogCard, Testimonial } from "@/components/ui/cards";
import { Skyline } from "@/components/hero/Skyline";
import { ServicesStory } from "@/components/home/ServicesStory";
import { ProjectsBento } from "@/components/home/ProjectsBento";
import { AboutShowcase } from "@/components/about/AboutShowcase";
import { team, posts, postText } from "@/lib/data";

const heroPoints = [
  { title: "Quality Workmanship", text: "Built with care and attention to detail." },
  { title: "Honest Pricing", text: "Clear quotes with no hidden surprises." },
  { title: "Reliable Service", text: "Professional support from start to finish." },
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

            <div className="hero-stats-panel relative animate-fade-in [animation-delay:.2s] overflow-hidden bg-navy px-6 pb-0 pt-9 text-white sm:px-8 sm:pt-11 lg:px-12 lg:pb-14 lg:pt-10">
              <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr_0.85fr] lg:gap-10">
                {/* Left */}
                <div className="animate-slide-in-left [animation-delay:.3s] text-center lg:text-left">
                  <h2 className="text-[34px] font-bold uppercase leading-[0.95] tracking-tight sm:text-[42px]">
                    Building Your Vision
                  </h2>
                  <p className="mt-2 text-[20px] font-semibold uppercase tracking-wide text-white/85 sm:text-[22px]">
                    Quality You Can Trust
                  </p>
                  <p className="mx-auto mt-5 max-w-[460px] text-[17px] leading-[1.6] text-white/80 sm:text-[19px] lg:mx-0">
                    Jadida Construction is focused on quality workmanship, honest pricing
                    and reliable service. We deliver every project with care,
                    professionalism and close attention to detail.
                  </p>
                  <Button
                    href="/quote"
                    className="mt-6 w-full justify-center sm:w-auto"
                  >
                    Get a Quote
                  </Button>
                  <div className="mt-7">
                    <p className="text-[13px] font-bold uppercase tracking-wider text-orange">
                      Ready to Deliver
                    </p>
                    <p className="mt-1 text-[16px] font-semibold text-white/85">
                      Residential • Commercial • Renovation
                    </p>
                  </div>
                </div>

                {/* Middle — key selling points */}
                <div className="flex animate-slide-in-right flex-col justify-center gap-6 border-t border-white/15 pt-6 [animation-delay:.45s] lg:gap-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  {heroPoints.map((p) => (
                    <div key={p.title}>
                      <h3 className="text-[19px] font-bold uppercase tracking-wide">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-[16px] leading-relaxed text-white/70">
                        {p.text}
                      </p>
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

      {/* About showcase */}
      <Section>
        <Container>
          <AboutShowcase />
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
