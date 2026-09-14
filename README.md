# FrontPath

Платформа для последовательного обучения frontend-разработке.

## Структура

- `apps/web` — пользовательская Next.js-платформа.
- `apps/api` — NestJS API.
- `packages/ui` — общие React-компоненты.
- `packages/eslint-config` и `packages/typescript-config` — единые настройки качества кода.

## Стек

Turborepo, pnpm workspaces, Next.js, React, TypeScript, Tailwind CSS 4, shadcn/ui, NestJS и Axios.

## Запуск локально

```sh
pnpm install
pnpm dev
```

Frontend будет доступен на `http://localhost:3000`, API — на `http://localhost:4000`.

Можно запускать приложения отдельно:

```sh
pnpm dev:web
pnpm dev:api
```

Health endpoint API:

```text
http://localhost:4000/api/health
```

## Docker

Для запуска frontend и backend в контейнерах нужен Docker Desktop:

```sh
docker compose up --build
```

После запуска:

- frontend: `http://localhost:3000`
- API: `http://localhost:4000/api/health`

Остановить контейнеры:

```sh
docker compose down
```

## Проверки

```sh
pnpm format:check
pnpm lint
pnpm check-types
pnpm build
```

Проверка Docker-образов:

```sh
docker compose build
```

## GitHub Actions

В репозитории настроены два workflow:

- `quality.yml` запускается на push в `main` и на pull request. Проверяет Prettier, ESLint, TypeScript, production build и сборку Docker-образов.
- `deploy-pages.yml` собирает статический frontend и публикует его на GitHub Pages после push в `main`.

Для публикации включи в настройках репозитория:

`Settings → Pages → Source → GitHub Actions`

GitHub Pages публикует только статический frontend. NestJS API и Docker-контейнеры требуют отдельного сервера или container hosting. URL API для Pages можно передать через repository variable:

```text
NEXT_PUBLIC_API_URL=https://your-api-host.example.com/api
```
