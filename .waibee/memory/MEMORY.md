# Project Memory

- [auto 2026-09-14] Learning platform uses sidebar navigation with sections: Overview, Projects, How to Use; serves as entry point for junior developer onboarding
- [auto 2026-09-14] Dashboard displays current learning focus, overall progress, project cards with stack/difficulty/themes, and quick guide links
- [auto 2026-09-14] Project cards show tech stack, difficulty level, progress indicator, topics, and action buttons; linked from /projects route
- [auto 2026-09-14] /guide route contains step-by-step setup instructions: dependency installation, dev server startup, terminal command examples, and expandable FAQ
- [auto 2026-09-14] Workspace added apps/api with NestJS; backend runs on port 4000 with CORS configured for http://localhost:3000
- [auto 2026-09-14] Frontend uses axios via lib/api-client.ts; NEXT_PUBLIC_API_URL environment variable targets http://localhost:4000/api
- [auto 2026-09-14] Both apps/web and apps/api run via pnpm dev; Turborepo manages PORT, WEB_ORIGIN, and NEXT_PUBLIC_API_URL environment variables
- [auto 2026-09-14] Learning curriculum structured in 12 sequential sections; each section has topics, project, tech stack, DoD; displayed on /progress route with aggregated stats
- [auto 2026-09-14] Curriculum data centralized in apps/web/lib/curriculum.ts; projects derived from same source; /projects route displays all 12 section projects with section anchors
- [auto 2026-09-14] Docker Compose manages web (Next.js) and api (NestJS) services; runs on ports 3000 and 4000 respectively
- [auto 2026-09-14] GitHub Actions quality workflow runs on push to main and all PRs; checks formatting, linting, types, and Docker build success
- [auto 2026-09-14] GitHub Pages deployment publishes only static frontend from apps/web/out; NestJS API requires external hosting (Railway/Render/Fly.io)
- [auto 2026-09-14] Next.js static export configured with basePath /learning-platform for GitHub Pages repository context
