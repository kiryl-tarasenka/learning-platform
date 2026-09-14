# Project Memory

- [auto 2026-09-14] Workspace uses Turborepo with pnpm; apps/web holds Next.js app with shadcn/ui and Tailwind 4; packages/ui reserved for independent shared components
- [auto 2026-09-14] TypeScript pinned to version 6 for compatibility with Next.js and ESLint; TypeScript 7 causes lint errors with current tooling
- [auto 2026-09-14] Babel locked to version 7; Babel 8 incompatible with ESLint parser in use
- [auto 2026-09-14] shadcn/ui requires Tailwind with @/* alias configured; CSS Modules template prevented automatic shadcn setup
- [auto 2026-09-14] React must be explicitly imported in .tsx files; global React type inference disabled
