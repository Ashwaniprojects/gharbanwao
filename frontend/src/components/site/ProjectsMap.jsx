import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Container, MonoLabel, Placeholder, Reveal, SectionHeader } from "./shared";
import { fetchProjects } from "@/lib/api";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SIZES = [
  ["all", "All sizes"],
  ["lt1000", "< 1000 sqft"],
  ["1000-2000", "1000–2000"],
  ["2000-3500", "2000–3500"],
  ["gt3500", "3500+"],
];
const inSize = (s, k) => k === "all" || (k === "lt1000" && s < 1000) || (k === "1000-2000" && s >= 1000 && s < 2000) || (k === "2000-3500" && s >= 2000 && s < 3500) || (k === "gt3500" && s >= 3500);
const STAGES = ["Design", "Foundation", "Structure", "Brickwork", "Finishing", "Handover"];

const Chip = ({ active, children, ...rest }) => (
  <button type="button" className={`h-9 px-3.5 rounded-full text-[13px] font-semibold border transition-colors ${active ? "bg-green border-green" : "border-divider hover:border-ink/40"}`} {...rest}>
    {children}
  </button>
);

const ProjectCard = ({ p }) => (
  <motion.article key={p.gb_id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="card-gb p-6 h-full flex flex-col" data-testid="map-project-card">
    <Placeholder code={`IMG-${p.gb_id.slice(3)}`} ratio="aspect-[16/10]" label={p.locality} />
    <div className="mt-5 flex items-center justify-between">
      <span className="font-mono text-[13px] font-medium" data-testid="map-project-gbid">{p.gb_id}</span>
      <span className={`font-mono text-[10px] uppercase tracking-[0.08em] px-2 py-1 rounded ${p.status === "ongoing" ? "bg-yellow" : "bg-green"}`}>{p.status === "ongoing" ? "Ongoing" : "Handed over"}</span>
    </div>
    <h3 className="mt-2 text-xl font-bold">{p.locality}, {p.city}</h3>
    <p className="font-mono text-[12px] text-ink/60 uppercase tracking-[0.08em] mt-1">{p.plot} · {p.size_sqft.toLocaleString("en-IN")} sqft · {p.package}</p>
    <div className="mt-5">
      {p.status === "ongoing" ? (
        <div>
          <p className="mono-label text-[11px] text-ink/50 mb-2">Stage {String(p.stage).padStart(2, "0")} · {p.stage_name}</p>
          <div className="flex gap-1">
            {STAGES.map((s, i) => (
              <div key={s} className={`h-1.5 flex-1 rounded-full ${i < p.stage ? "bg-green" : "bg-divider"}`} title={s} />
            ))}
          </div>
        </div>
      ) : (
        <p className="mono-label text-[11px] text-ink/50">Handed over · {p.handover}</p>
      )}
    </div>
    <blockquote className="mt-5 text-[15px] text-ink/75 leading-relaxed border-l-2 border-green pl-4">"{p.quote}"<footer className="mt-1 font-semibold not-italic text-ink">— {p.owner}</footer></blockquote>
    <a href={`/projects/${p.gb_id.toLowerCase()}`} onClick={(e) => e.preventDefault()} className="mt-auto pt-6 inline-flex items-center gap-1 font-bold text-[15px] underline decoration-green decoration-2 underline-offset-4" data-testid="map-project-view-link">
      View full project <ArrowRight className="h-4 w-4" />
    </a>
  </motion.article>
);

export const ProjectsMap = () => {
  const { data: projects = [], isLoading } = useQuery({ queryKey: ["projects-all"], queryFn: () => fetchProjects({ limit: 500 }) });
  const [status, setStatus] = useState("all");
  const [locality, setLocality] = useState("all");
  const [size, setSize] = useState("all");
  const [pkg, setPkg] = useState("all");
  const [selected, setSelected] = useState(null);

  const localities = useMemo(() => [...new Set(projects.map((p) => p.locality))].sort(), [projects]);
  const filtered = useMemo(
    () => projects.filter((p) => (status === "all" || p.status === status) && (locality === "all" || p.locality === locality) && inSize(p.size_sqft, size) && (pkg === "all" || p.package === pkg)),
    [projects, status, locality, size, pkg]
  );
  const active = filtered.find((p) => p.gb_id === selected) || filtered[0];

  return (
    <section id="projects" className="section-gb" data-testid="projects-map-section">
      <Container>
        <SectionHeader label="LIVE / UPDATED WEEKLY" title="We don't tell you we build. We show you where." supporting={`Every green pin is a handed-over home. Every yellow pin is a site you can visit this week. ${projects.length || 297} pins and counting.`} />

        <Reveal className="mt-10 flex flex-wrap items-center gap-2" data-testid="map-filter-bar">
          <div className="flex gap-1.5 mr-2">
            {[["all", "All"], ["handed_over", "Handed over"], ["ongoing", "Ongoing"]].map(([v, l]) => (
              <Chip key={v} active={status === v} onClick={() => setStatus(v)} data-testid={`map-filter-status-${v}`}>{l}</Chip>
            ))}
          </div>
          <Select value={locality} onValueChange={setLocality}>
            <SelectTrigger className="h-9 w-[180px] rounded-full border-divider text-[13px] font-semibold" data-testid="map-filter-locality"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All localities</SelectItem>
              {localities.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={size} onValueChange={setSize}>
            <SelectTrigger className="h-9 w-[160px] rounded-full border-divider text-[13px] font-semibold" data-testid="map-filter-size"><SelectValue /></SelectTrigger>
            <SelectContent>{SIZES.map(([v, l]) => <SelectItem key={v} value={v}>{l}</SelectItem>)}</SelectContent>
          </Select>
          <div className="flex gap-1.5">
            {["all", "Essential", "Signature", "Premium"].map((v) => (
              <Chip key={v} active={pkg === v} onClick={() => setPkg(v)} data-testid={`map-filter-package-${v.toLowerCase()}`}>{v === "all" ? "All packages" : v}</Chip>
            ))}
          </div>
          <span className="ml-auto font-mono text-[12px] text-ink/60" data-testid="map-result-count">{filtered.length} projects</span>
        </Reveal>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <Reveal className="lg:col-span-2 relative rounded-2xl border border-divider bg-paper overflow-hidden min-h-[460px] lg:min-h-[720px]" data-testid="projects-map">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                  <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#E9E9E6" strokeWidth="0.15" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
              <path d="M 0 30 C 20 36, 35 20, 50 30 S 80 50, 100 42 L 100 48 C 80 56, 60 38, 50 36 S 20 42, 0 36 Z" fill="#E9E9E6" opacity="0.8" />
              {["M 0 50 L 100 60", "M 45 0 L 55 100", "M 0 75 L 100 25", "M 20 0 L 80 100", "M 0 20 C 40 30, 60 70, 100 80"].map((d) => (
                <path key={d} d={d} fill="none" stroke="#93C526" strokeOpacity="0.35" strokeWidth="0.35" />
              ))}
            </svg>
            <div className="absolute left-4 top-4 flex flex-col gap-1 font-mono text-[11px] uppercase tracking-[0.1em] bg-paper/90 backdrop-blur px-3 py-2 rounded-lg border border-divider">
              <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-green" /> Handed over</span>
              <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-yellow border border-ink/20" /> Ongoing</span>
            </div>
            <div className="absolute right-4 top-4 font-mono text-[11px] uppercase tracking-[0.1em] bg-paper/90 px-3 py-2 rounded-lg border border-divider">Lucknow · Kanpur · Varanasi</div>
            <div className="absolute inset-0">
              {isLoading && <div className="absolute inset-0 grid place-items-center font-mono text-[12px] text-ink/50">Loading 297 pins…</div>}
              {filtered.map((p) => {
                const isActive = active?.gb_id === p.gb_id;
                return (
                  <button
                    key={p.gb_id}
                    onClick={() => setSelected(p.gb_id)}
                    onMouseEnter={() => setSelected(p.gb_id)}
                    title={`${p.gb_id} · ${p.locality} · ${p.status === "ongoing" ? "Ongoing" : "Handed over"}`}
                    aria-label={`${p.gb_id} ${p.locality}`}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border transition-transform duration-200 hover:scale-[1.4] hover:z-20 ${isActive ? "z-20 scale-[1.6] ring-2 ring-ink ring-offset-1" : ""} ${p.status === "ongoing" ? "bg-yellow border-ink/30" : "bg-green border-green-700/40"}`}
                    style={{ left: `${p.x}%`, top: `${p.y}%`, width: 10, height: 10 }}
                    data-testid={`map-pin-${p.gb_id}`}
                  />
                );
              })}
            </div>
            {active && (
              <div className="absolute pointer-events-none z-30 -translate-x-1/2 -translate-y-[calc(100%+12px)] bg-ink text-paper font-mono text-[11px] px-2.5 py-1.5 rounded-md whitespace-nowrap" style={{ left: `${active.x}%`, top: `${active.y}%` }} data-testid="map-tooltip">
                {active.gb_id} · {active.locality} · {active.status === "ongoing" ? "Ongoing" : "Handed over"}
              </div>
            )}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <MonoLabel className="bg-paper/90 px-3 py-2 rounded-lg border border-divider text-[11px]">Schematic map · Mapbox tiles stream in phase 2</MonoLabel>
              <span className="inline-flex items-center gap-1 font-mono text-[11px] bg-paper/90 px-3 py-2 rounded-lg border border-divider"><MapPin className="h-3 w-3 text-green" /> {filtered.length}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:min-h-[720px]" data-testid="map-project-panel">
            {active ? <ProjectCard p={active} /> : <div className="card-gb p-6 h-full grid place-items-center text-ink/50">No projects match these filters.</div>}
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
