import { useState } from "react";
import Marquee from "react-fast-marquee";
import { ArrowRight, Play, BadgeCheck } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Container, Placeholder, Reveal, SectionHeader, Stars } from "./shared";
import { GOOGLE_REVIEWS, TESTIMONIALS, VIDEOS } from "@/data/content";

const TCard = ({ t }) => (
  <article className="w-[300px] md:w-[380px] shrink-0 mx-2.5 card-gb p-6 flex flex-col bg-paper" data-testid="testimonial-card">
    <div className="flex items-center gap-3">
      <div className="h-16 w-16 rounded-full bg-[#E9E9E6] grid place-items-center font-mono text-[9px] shrink-0">{t.portrait}</div>
      <div>
        <p className="font-bold text-[17px] leading-tight">{t.name}</p>
        <p className="text-[14px] text-ink/60">{t.locality}</p>
      </div>
    </div>
    <p className="mt-4 text-[13px] flex items-center gap-2"><Stars n={t.rating} /> <span className="text-ink/60">{t.source} · {t.date}</span></p>
    <p className="mt-4 text-[15px] leading-relaxed flex-1">"{t.quote}"</p>
    <div className="mt-5 pt-4 border-t border-divider flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-[#E9E9E6] grid place-items-center font-mono text-[8px] shrink-0">{t.thumb}</div>
      <div className="text-[13px] leading-tight">
        <p className="font-mono font-medium">{t.project_id}</p>
        <p className="text-ink/60">{t.project_size}</p>
      </div>
      <a href={`/projects/${t.project_id.toLowerCase()}`} onClick={(e) => e.preventDefault()} className="ml-auto inline-flex items-center gap-1 text-[13px] font-bold underline decoration-green decoration-2 underline-offset-4">View project <ArrowRight className="h-3.5 w-3.5" /></a>
    </div>
  </article>
);

export const Testimonials = () => {
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rows = [TESTIMONIALS.slice(0, 15), TESTIMONIALS.slice(15)];
  return (
    <section id="testimonials" className="section-gb border-t border-divider overflow-hidden" data-testid="testimonials-section">
      <Container>
        <SectionHeader label="30 OF 260+ · UNEDITED" title="Real homeowners. Real projects. Real reviews." supporting="30 homeowners agreed to go on record. We did not pick the easy ones." />
      </Container>
      <div className="mt-14 space-y-5">
        {reduce ? (
          <Container className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{TESTIMONIALS.map((t) => <TCard key={t.name} t={t} />)}</Container>
        ) : (
          rows.map((row, i) => (
            <Marquee key={i} speed={i === 0 ? 40 : 32} direction={i === 0 ? "left" : "right"} pauseOnHover gradient gradientColor="#FFFFFF" gradientWidth={80} className={i === 1 ? "hidden md:flex" : ""} data-testid={`testimonial-marquee-${i + 1}`}>
              {row.map((t) => <TCard key={t.name} t={t} />)}
            </Marquee>
          ))
        )}
      </div>
      <Container className="mt-10">
        <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-bold underline decoration-green decoration-2 underline-offset-4" data-testid="testimonials-google-link">See all 180+ Google reviews <ArrowRight className="h-4 w-4" /></a>
      </Container>
    </section>
  );
};

export const VideoTestimonials = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className="section-gb bg-wash-yellow" data-testid="video-testimonials-section">
      <Container>
        <SectionHeader label="6 FEATURED · 60–90 SECONDS" title="Hear it from them" supporting="Shot in front of their completed homes. Their words, their language. Captions baked in." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.code} delay={i * 0.05}>
              <button onClick={() => setOpen(v)} className="group w-full text-left card-gb p-3 bg-paper" data-testid={`video-card-${i + 1}`}>
                <div className="relative">
                  <Placeholder code={v.code} ratio="aspect-video" label={`${v.name} · ${v.project}`} />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="h-16 w-16 rounded-full bg-green grid place-items-center shadow-lg transition-transform group-hover:scale-110">
                      <Play className="h-6 w-6 fill-paper text-paper ml-1" />
                    </span>
                  </span>
                  <span className="absolute right-6 bottom-6 font-mono text-[11px] bg-ink text-paper px-2 py-1 rounded">{v.length}</span>
                </div>
                <div className="p-3 pt-4">
                  <p className="font-bold text-[17px]">{v.name}</p>
                  <p className="text-[14px] text-ink/60">{v.locality} · <span className="font-mono">{v.project}</span></p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>
      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-3xl rounded-2xl border-divider p-3" data-testid="video-lightbox">
          <DialogTitle className="sr-only">{open?.name} testimonial</DialogTitle>
          {open && <Placeholder code={open.code} ratio="aspect-video" label={`${open.name} · ${open.locality} · video pending production`} />}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export const GoogleReviews = () => (
  <section className="section-gb" data-testid="google-reviews-section">
    <Container>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <SectionHeader label="LIVE · NEWEST FIRST" title="Google reviews, unfiltered" supporting="Pulled from Google My Business. We cannot edit these, and we would not want to." />
        <div className="card-gb px-5 py-4 flex items-center gap-4 shrink-0" data-testid="google-rating-badge">
          <span className="display text-4xl">4.8</span>
          <div className="text-[13px] leading-tight"><Stars n={5} /><p className="text-ink/60 mt-1">180+ reviews on Google</p></div>
        </div>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {GOOGLE_REVIEWS.map((r, i) => (
          <Reveal key={r.name} delay={(i % 3) * 0.06} className="card-gb p-6" data-testid={`google-review-${i + 1}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold">{r.name}</p>
                <p className="text-[13px] text-ink/50">{r.date}</p>
              </div>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.08em] bg-wash-green text-green-700 px-2 py-1 rounded"><BadgeCheck className="h-3.5 w-3.5" /> Google Verified</span>
            </div>
            <p className="mt-3 text-[13px]"><Stars n={r.rating} /></p>
            <p className="mt-3 text-[15px] text-ink/80">{r.text}</p>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);
