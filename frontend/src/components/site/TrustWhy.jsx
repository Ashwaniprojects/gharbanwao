import * as Icons from "lucide-react";
import { Container, Reveal, SectionHeader } from "./shared";
import { TRUST, WHY } from "@/data/content";

export const TrustBar = () => (
  <section className="bg-wash-yellow border-t border-green" data-testid="trust-bar">
    <Container className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-divider border-x border-divider">
      {TRUST.map((t, i) => (
        <Reveal key={t.label} delay={i * 0.06} className="p-6 md:p-10" data-testid={`trust-tile-${i + 1}`}>
          <p className="display text-4xl md:text-6xl lg:text-7xl text-green" data-testid={`trust-number-${i + 1}`}>{t.number}</p>
          <p className="mt-3 text-[13px] md:text-[15px] font-semibold uppercase tracking-wide">{t.label}</p>
          <p className="mt-1 font-mono text-[12px] text-ink/60">{t.note}</p>
        </Reveal>
      ))}
    </Container>
  </section>
);

export const WhyChoose = () => (
  <section id="why" className="section-gb bg-wash-yellow relative grain" data-testid="why-choose-section">
    <Container className="relative">
      <SectionHeader label="12 REASONS · NO SUPERLATIVES" title="Why homeowners choose Ghar Banwao" supporting="Each reason below comes with the proof. If we cannot show it, we do not list it." />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {WHY.map((w, i) => {
          const Icon = Icons[w.icon] || Icons.Check;
          return (
            <Reveal key={w.title} delay={(i % 4) * 0.05} className="card-gb p-6 md:p-8 group" data-testid={`why-tile-${i + 1}`}>
              <div className="h-11 w-11 rounded-xl bg-wash-green grid place-items-center group-hover:bg-green transition-colors">
                <Icon className="h-6 w-6 text-green-700 group-hover:text-ink transition-colors" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-[18px] font-bold leading-snug">{w.title}</h3>
              <p className="mt-2 text-[15px] text-ink/65">{w.text}</p>
            </Reveal>
          );
        })}
      </div>
      <Reveal className="mt-12 border-t border-ink/10 pt-8">
        <p className="mono-label text-ink">Smart homeowners compare first.</p>
        <p className="mt-2 text-base md:text-lg max-w-[68ch]">
          Check quality, benefits, and pricing before you start building your dream home. <span className="font-bold">— Kyu ki ghar banata hai ek baar.</span>
        </p>
      </Reveal>
    </Container>
  </section>
);
