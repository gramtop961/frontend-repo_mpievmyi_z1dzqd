Context notes for ASCA landing page build

- Purpose: Showcase ASCA with simplified SEAT section, original Tracks section, and a redesigned Tracks section with clear outcomes below it.
- Frontend stack: Vite + React + TailwindCSS, Lucide icons, Framer Motion.
- Backend stack: FastAPI with CORS enabled and minimal endpoints (/, /health, /test). If integration is needed, use VITE_BACKEND_URL.

Key sections/components
1) Nav: sticky top navigation with CTA to SEAT
2) Hero: headline, subcopy, primary CTAs, value bullets
3) Mentors: featured mentor cards with gradient overlays
4) Tracks: original list-style track cards with mentor info and outcomes
5) TracksRedesign: compact cards with explicit KPIs, sample projects, and a clear "Join this track" CTA
6) Outcomes: stats and marquee of companies
7) TalentClubCard: animated company rows and overview
8) Experience: internship timeline and mock offer card
9) Seat: unified card with countdown, Who/What/Why, divider, segmented prize row
10) FinalCTA + Footer

Open items / next steps
- Verify backend endpoints accessibility from frontend if needed
- Wire registration/metadata endpoints when defined
- Add env: VITE_BACKEND_URL for API base, and backend DATABASE_URL if persistence is required
- Consider adding integration tests and basic analytics later
