import { useState } from "react";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Container, Reveal, SectionHeader, Stars } from "@/components/site/shared";
import { VIDEOS } from "@/data/content";

const REVIEWS = VIDEOS;

export default function ReviewsPage() {
  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen bg-paper text-ink" data-testid="reviews-page">
      <main>
        <section className="section-gb" data-testid="reviews-hero">
          <Container className="max-w-5xl">
            <Reveal>
              <Link to="/" className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink/60 hover:text-ink transition-colors mb-8" data-testid="reviews-back">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
            </Reveal>
            <SectionHeader
              label="6 CUSTOMER REVIEWS · WATCH THE HOMES"
              title="Hear It from Our Happy Homeowners."
              supporting="Shot in front of their completed homes. Their words, their language."
              align="center"
            />
            <Reveal className="mt-6 flex justify-center">
              <p className="text-[15px] text-ink/60 text-center max-w-[60ch]">
                Each video is an unedited walk-through with the family that lived the build. No scripts, no voiceovers — just homeowners showing you what we delivered.
              </p>
            </Reveal>
          </Container>
        </section>

        <section className="section-gb bg-wash-yellow" data-testid="reviews-grid-section">
          <Container className="max-w-6xl">
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {REVIEWS.map((v, i) => (
                <Reveal key={v.id} delay={i * 0.06}>
                  <button
                    onClick={() => setOpen(v)}
                    className="group w-full text-left card-gb p-3 bg-paper"
                    data-testid={`review-card-${i + 1}`}
                  >
                    <div className="relative aspect-video overflow-hidden rounded-2xl border border-divider bg-[#E9E9E6]">
                      <img
                        src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                        alt={v.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 grid place-items-center bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300">
                        <span className="h-16 w-16 rounded-full bg-green grid place-items-center shadow-lg transition-transform group-hover:scale-110">
                          <Play className="h-6 w-6 fill-paper text-paper ml-1" />
                        </span>
                      </span>
                    </div>
                    <div className="p-3 pt-4">
                      <p className="font-bold text-[15px] leading-snug line-clamp-2 group-hover:text-green-700 transition-colors">
                        {v.title}
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-[13px] text-ink/60">
                        <span className="font-mono">▶ YouTube</span>
                        <span className="text-divider">|</span>
                        <span>Customer review</span>
                      </div>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="section-gb" data-testid="reviews-cta-section">
          <Container className="max-w-3xl text-center">
            <Reveal>
              <SectionHeader
                label="STILL HAVE QUESTIONS?"
                title="Talk to someone who built with us."
                supporting="Free consultation. No commitment. We call you within 2 hours on business days."
                align="center"
              />
            </Reveal>
            <Reveal className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.aisensy.com/+919198059992"
                target="_blank"
                rel="noreferrer"
                className="pill-green px-8"
                data-testid="reviews-whatsapp-cta"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:09648249999"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-divider bg-paper text-[15px] font-bold hover:border-ink/40 transition-colors"
                data-testid="reviews-call-cta"
              >
                Call 09648249999
              </a>
            </Reveal>
          </Container>
        </section>
      </main>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)} data-testid="review-lightbox">
        <DialogContent className="max-w-3xl rounded-2xl border-divider p-3" data-testid="review-dialog-content">
          <DialogTitle className="sr-only">{open?.title}</DialogTitle>
          {open && (
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${open.id}?autoplay=1&rel=0`}
                title={open.title}
                allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
