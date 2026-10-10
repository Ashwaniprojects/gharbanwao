import { AnnouncementStrip } from "@/components/site/AnnouncementStrip";
import { Navbar } from "@/components/site/Navbar";
import { Footer, MobileBar } from "@/components/site/FaqCtaFooter";
import { Container, Reveal, SectionHeader } from "@/components/site/shared";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <AnnouncementStrip />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-gb" data-testid="about-hero">
          <Container className="max-w-4xl">
            <Reveal>
              <SectionHeader
                label="ABOUT US"
                title="Building trust, one home at a time."
                supporting="Ghar Banwao is a Lucknow-headquartered construction company that has handed over 260+ homes across Uttar Pradesh since 2017."
                align="center"
              />
            </Reveal>
          </Container>
        </section>

        {/* Vision */}
        <section className="section-gb bg-wash-yellow" data-testid="about-vision">
          <Container className="max-w-4xl">
            <Reveal>
              <SectionHeader
                label="OUR VISION"
                title="Every family deserves a home they can trust."
                supporting="We want to make quality construction accessible, transparent, and stress-free for every homeowner in Uttar Pradesh. A home built with honesty should not be a luxury."
              />
            </Reveal>
            <Reveal className="mt-8">
              <div className="card-gb p-8 bg-paper">
                <p className="text-[16px] leading-relaxed text-ink/80">
                  Our vision is a Uttar Pradesh where no homeowner signs a contract with fear — fear of hidden costs, substituted materials, or abandoned projects. We believe transparency is not a feature; it is the foundation. Every photo we send, every brand we name, every stage signature we collect is a brick in that foundation.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Mission */}
        <section className="section-gb" data-testid="about-mission">
          <Container className="max-w-4xl">
            <Reveal>
              <SectionHeader
                label="OUR MISSION"
                title="150+ quality checks. Zero surprises."
                supporting="We operate on three commitments that govern every decision on every site."
              />
            </Reveal>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                { n: "01", title: "Materials transparency", text: "Every brand, grade, and quantity is named in your quote before you sign. Samples are tested. Rejected batches are returned the same day." },
                { n: "02", title: "Stage-linked payments", text: "You pay only after you sign off the completed stage. No calendar-linked instalments. No payment ahead of work." },
                { n: "03", title: "Full accountability", text: "One project manager. One engineer. One WhatsApp number. You always know who to call and who will answer." },
              ].map((m, i) => (
                <Reveal key={m.n} delay={i * 0.08}>
                  <div className="card-gb p-6 bg-paper h-full">
                    <span className="font-mono text-green text-sm font-bold">{m.n}</span>
                    <h3 className="mt-3 font-bold text-[17px]">{m.title}</h3>
                    <p className="mt-2 text-[14px] text-ink/70 leading-relaxed">{m.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Founder Note */}
        <section className="section-gb bg-wash-yellow" data-testid="about-founder">
          <Container className="max-w-4xl">
            <Reveal>
              <SectionHeader
                label="FOUNDER'S NOTE"
                title="Why I started Ghar Banwao."
                supporting="Arvind Srivastava, Founder & Head of Projects"
              />
            </Reveal>
            <Reveal className="mt-8">
              <div className="card-gb p-8 bg-paper">
                <p className="text-[16px] leading-relaxed text-ink/80 italic">
                  "I started Ghar Banwao in 2017 because I watched too many families sign contracts they did not understand, pay for materials they never saw, and wait for homes that never finished. I had spent 14 years in construction management and I knew exactly where the system was broken — and I knew exactly how to fix it."
                </p>
                <p className="text-[16px] leading-relaxed text-ink/80 italic mt-4">
                  "Today, 260+ homes later, the fix is simple: name the brand before you buy it, photograph the work before you pay for it, and give the family a single name that actually answers the phone. That is not revolutionary. That is basic. But in our industry, basic is disruptive."
                </p>
                <p className="mt-6 font-bold text-[15px]">Arvind Srivastava</p>
                <p className="text-[13px] text-ink/60">Founder & Head of Projects, Ghar Banwao</p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* CMD Note */}
        <section className="section-gb" data-testid="about-cmd">
          <Container className="max-w-4xl">
            <Reveal>
              <SectionHeader
                label="CMD'S NOTE"
                title="Building for the long term."
                supporting="Chief Managing Director, Ghar Banwao"
              />
            </Reveal>
            <Reveal className="mt-8">
              <div className="card-gb p-8 bg-paper">
                <p className="text-[16px] leading-relaxed text-ink/80 italic">
                  "When a family hands us their life savings to build a home, that is not a transaction — it is a relationship. Every home we deliver is a promise kept. Every warranty certificate we sign is a commitment to stand behind what we built, long after the keys are handed over."
                </p>
                <p className="text-[16px] leading-relaxed text-ink/80 italic mt-4">
                  "We are not building for quarterly targets. We are building for the next generation that will live in these homes, sell them, and tell their friends who built them. Reputation is the only asset that compounds. Everything else depreciates."
                </p>
                <p className="mt-6 font-bold text-[15px]">CMD, Ghar Banwao</p>
                <p className="text-[13px] text-ink/60">Chief Managing Director</p>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
