import { ArrowRight } from "lucide-react";
import { Container, Placeholder, Reveal, SectionHeader } from "./shared";
import { BRANDS, PROCESS, SERVICES } from "@/data/content";
import { scrollToId } from "@/lib/scroll";

export const Services = () => (
  <section id="services" className="section-gb border-t border-divider" data-testid="services-section">
    <Container>
      <SectionHeader label="04 SERVICES" title="Services we deliver" supporting="Four things we do. Nothing we don't." />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06} className="card-gb p-4 flex flex-col group" data-testid={`service-card-${i + 1}`}>
            <Placeholder code={s.img} ratio="aspect-[4/3]" label={s.title} />
            <div className="p-3 pt-6 flex-1 flex flex-col">
              <h3 className="text-[20px] font-bold tracking-tight leading-tight">{s.title}</h3>
              <p className="mt-2 text-[15px] text-ink/65 flex-1">{s.text}</p>
              <button onClick={() => scrollToId(s.id)} className="mt-6 inline-flex items-center gap-1.5 font-bold text-[15px] self-start underline decoration-green decoration-2 underline-offset-4 group-hover:gap-2.5 transition-[gap]" data-testid={`service-cta-${i + 1}`}>
                {s.cta} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);

export const Process = () => (
  <section id="process" className="section-gb bg-wash-green" data-testid="process-section">
    <Container>
      <SectionHeader label="06 STAGES · DOCUMENTED" title="Our construction process" supporting="Every stage has a sign-off. Your next payment is released only after it." />
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
        {PROCESS.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.06} className="relative card-gb p-5 flex flex-col" data-testid={`process-stage-${p.n}`}>
            <Placeholder code={p.img} ratio="aspect-square" />
            <span className="mt-5 font-mono text-4xl font-medium text-green">{p.n}</span>
            <h3 className="mt-1 text-[20px] font-bold tracking-tight leading-tight">{p.name}</h3>
            <ul className="mt-3 space-y-1.5 text-[14px] text-ink/70">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2"><span className="mt-2 h-1 w-1 rounded-full bg-ink shrink-0" />{pt}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 rounded-2xl border border-divider bg-paper px-6 py-5 font-mono text-[12px] md:text-[13px] uppercase tracking-[0.1em] flex flex-col md:flex-row gap-2 md:gap-8" data-testid="process-callout">
        <span>Average project timeline: <strong>8 to 11 months</strong></span>
        <span className="hidden md:inline text-ink/30">·</span>
        <span>Average delay across 260 projects: <strong className="text-green-700">11 days</strong></span>
      </Reveal>
    </Container>
  </section>
);

export const Materials = () => (
  <section id="materials" className="section-gb" data-testid="materials-section">
    <Container>
      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <SectionHeader label="MATERIAL TRANSPARENCY" title="You pay for the materials. You get to see them." supporting={`We publish the brands we use. No "equivalent / as per site" trick in the quote.`} />
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[["IMG-12", "Cement · GB-ID chalked"], ["IMG-13", "TMT bundles"], ["IMG-14", "Tile palette"]].map(([c, l]) => (
              <Placeholder key={c} code={c} ratio="aspect-square" label={l} />
            ))}
          </div>
        </div>
        <Reveal delay={0.1} className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-3" data-testid="brand-wall">
          {BRANDS.map((b) => (
            <div key={b} className="card-gb h-24 grid place-items-center px-4 text-center group cursor-default" data-testid={`brand-${b.replace(/\s+/g, "-").toLowerCase()}`}>
              <span className="text-[17px] font-extrabold tracking-tight text-ink/35 group-hover:text-ink transition-colors">{b}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </Container>
  </section>
);
