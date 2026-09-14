# FrontPath

Платформа для последовательного обучения frontend-разработке.

## Структура

- `apps/web` — пользовательская Next.js-платформа; здесь находятся страницы и компоненты shadcn/ui.
- `apps/docs` — отдельное Next.js-приложение для публичной документации.
- `packages/ui` — общие независимые React-компоненты для приложений.
- `packages/eslint-config` и `packages/typescript-config` — единые правила качества кода.

## Стек

Turborepo, pnpm workspaces, Next.js, React, TypeScript, Tailwind CSS 4 и shadcn/ui.

## Запуск

```sh
pnpm install
pnpm dev --filter=web
```

Приложение будет доступно на `http://localhost:3000`.

## Проверки

```sh
pnpm check-types
pnpm lint
```
