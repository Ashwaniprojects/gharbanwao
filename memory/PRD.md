# GharBanwao.com — Home Page PRD

## Original problem statement
"build my home page for hero section use option 2 the calculator." + uploaded `GharBanwao_Redesign_Outline_v1.md` (19-section homepage spec, locked palette/typography).
Follow-up: use real logo (full size, no cropping), Hindi hero tagline "भूमिपूजन से गृहप्रवेश तक, सफ़र आपका. साथ हमारा.", footer "Designed by Clicknify" (link https://clicknify.com).

## User choices
- Hero Option 2: compact live cost calculator in hero right column + full 3-step calculator in Section 07
- Full home page, all 19 sections
- Leads saved to MongoDB (WhatsApp/email delivery later)
- Grey IMG-NN / VID-NN placeholder blocks instead of photos

## Architecture
- Frontend: React (CRA + craco), Tailwind, shadcn/ui, framer-motion, lenis, react-fast-marquee, recharts
- Backend: FastAPI (`/app/backend/server.py`), MongoDB via motor; rates in `/app/backend/calculator_config.json`
- API: `GET /api/config/calculator`, `GET /api/projects` (filters status/locality/package/q), `GET /api/projects/stats`, `GET /api/projects/{gb_id}`, `POST/GET /api/leads`
- 297 projects auto-seeded at startup (260 handed over, 37 ongoing) with schematic x/y positions

## Implemented (2026-10-08)
- Sections 00–19: announcement strip, sticky nav + universal search overlay (`/` shortcut, 4 tabs), hero with calculator card (3D tilt, count-up, masked line reveal), trust bar, 12-pillar why-choose, schematic projects map with filters + project card, services, full calculator (inputs → donut + timeline + resource table with Basic/Medium/Premium → Print/Share/Book), 6-stage process, brand wall, 30-card two-row marquee, 6 video cards + lightbox, Google reviews wall (static sample), pricing, comparison table, team, awards, FAQ accordion, consultation form (saves lead), footer, mobile sticky Call/WhatsApp bar
- `/calculator` standalone route
- Real logo in header/footer/favicon, Hindi tagline (Mukta font), Clicknify credit
- Testing: iteration_1 — backend 14/14, frontend 100%

## Backlog
- P0: none
- P1: Mapbox GL real map (replace schematic), WhatsApp/email delivery of leads + PDF estimate, real photography replacing IMG placeholders, live Google reviews embed
- P2: `/projects`, `/projects/[gb-id]`, `/packages`, `/services/[slug]`, `/about`, `/contact`, `/blog` pages; admin leads dashboard; phone validation at API
