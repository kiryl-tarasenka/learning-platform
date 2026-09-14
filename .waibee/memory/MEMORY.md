# Project Memory

- [auto 2026-09-14] Workspace uses Turborepo with pnpm; apps/web holds Next.js app with shadcn/ui and Tailwind 4; packages/ui reserved for independent shared components
- [auto 2026-09-14] TypeScript pinned to version 6 for compatibility with Next.js and ESLint; TypeScript 7 causes lint errors with current tooling
- [auto 2026-09-14] Babel locked to version 7; Babel 8 incompatible with ESLint parser in use
- [auto 2026-09-14] shadcn/ui requires Tailwind with @/* alias configured; CSS Modules template prevented automatic shadcn setup
- [auto 2026-09-14] React must be explicitly imported in .tsx files; global React type inference disabled
- [auto 2026-09-14] Learning platform uses sidebar navigation with sections: Overview, Projects, How to Use; serves as entry point for junior developer onboarding
- [auto 2026-09-14] Dashboard displays current learning focus, overall progress, project cards with stack/difficulty/themes, and quick guide links
- [auto 2026-09-14] Project cards show tech stack, difficulty level, progress indicator, topics, and action buttons; linked from /projects route
- [auto 2026-09-14] /guide route contains step-by-step setup instructions: dependency installation, dev server startup, terminal command examples, and expandable FAQ
- [auto 2026-09-14] Build checks include pnpm lint, check-types, and build; GITLAB_AUTH_TOKEN warning is non-blocking for verification
