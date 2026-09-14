import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Network,
  Palette,
  ShieldCheck,
  TestTube2,
} from "lucide-react";

export type CurriculumSection = {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  topics: string[];
  dod: string;
  project: {
    title: string;
    description: string;
    stack: string;
  };
  progress: number;
  icon: LucideIcon;
  color: string;
};

export const curriculum: CurriculumSection[] = [
  {
    id: 1,
    title: "Основа веба: HTML и CSS",
    shortTitle: "HTML и CSS",
    description: "Научись уверенно собирать семантичные и адаптивные интерфейсы.",
    topics: ["HTML-теги и семантика", "Каскад и специфичность", "Flexbox и Grid", "Медиа-запросы и доступность"],
    dod: "Самостоятельно свёрстана адаптивная страница по макету с семантическими тегами, Flexbox/Grid, состояниями и базовой доступностью.",
    project: {
      title: "Адаптивная визитка",
      description: "Сверстай 3–5 экранов по макету для личного портфолио.",
      stack: "HTML · CSS",
    },
    progress: 100,
    icon: Globe2,
    color: "emerald",
  },
  {
    id: 2,
    title: "JavaScript — фундамент React",
    shortTitle: "JavaScript",
    description: "Разберись в языке и браузерных API, на которых строится современный frontend.",
    topics: [
      "Типы, функции и замыкания",
      "Массивы, объекты и async/await",
      "DOM, события и модули",
      "Storage, cookies и Browser APIs",
    ],
    dod: "Сделано приложение с API-запросами, loading/error-состояниями и сохранением настроек в localStorage.",
    project: {
      title: "Todo-лист с API",
      description: "Создай todo-приложение с запросами, фильтрами и сохранением настроек.",
      stack: "JavaScript · REST API",
    },
    progress: 64,
    icon: Braces,
    color: "blue",
  },
  {
    id: 3,
    title: "Инструменты разработки",
    shortTitle: "Инструменты",
    description: "Освой рабочий процесс frontend-разработчика от терминала до pull request.",
    topics: ["Git и GitHub", "Ветки и pull request", "Node.js и package.json", "DevTools: Network и Application"],
    dod: "Создан проект, оформлены понятные коммиты, открыт pull request и разрешён простой конфликт.",
    project: {
      title: "Командный workflow",
      description: "Подготовь репозиторий, настрой ветки и пройди сценарий code review.",
      stack: "Git · GitHub · DevTools",
    },
    progress: 0,
    icon: GitBranch,
    color: "slate",
  },
  {
    id: 4,
    title: "TypeScript",
    shortTitle: "TypeScript",
    description: "Добавь надёжность коду и научись читать ошибки типов.",
    topics: ["Типы объектов и функций", "Union и narrowing", "Generics и utility types", "Типизация API и событий"],
    dod: "В проекте нет необоснованного any, типизированы props, формы, API-ответы и обработчики.",
    project: {
      title: "Типизированный каталог",
      description: "Перепиши каталог данных на TypeScript с типизированным API.",
      stack: "TypeScript · REST API",
    },
    progress: 0,
    icon: Code2,
    color: "violet",
  },
  {
    id: 5,
    title: "React: базовая модель",
    shortTitle: "React основы",
    description: "Пойми модель React и собирай приложения из компонентов.",
    topics: ["Компоненты и JSX", "Props, state и списки", "Контролируемые формы", "Хуки и рендеринг"],
    dod: "Сделано React-приложение без туториала с компонентами, формами, списками и эффектами.",
    project: {
      title: "Каталог с фильтрами",
      description: "Создай приложение из компонентов с поиском и фильтрацией данных.",
      stack: "React · TypeScript",
    },
    progress: 0,
    icon: Blocks,
    color: "cyan",
  },
  {
    id: 6,
    title: "React: архитектура и паттерны",
    shortTitle: "React архитектура",
    description: "Научись разделять UI, бизнес-логику и работу с данными.",
    topics: ["Кастомные хуки", "Context и Zustand", "Error boundaries", "Vite и production build"],
    dod: "Логика вынесена в хуки, компоненты не перегружены, состояние управляется осознанно.",
    project: {
      title: "Рабочее пространство",
      description: "Собери multi-view приложение с общим состоянием и переиспользуемыми блоками.",
      stack: "React · Zustand · Vite",
    },
    progress: 0,
    icon: Layers3,
    color: "indigo",
  },
  {
    id: 7,
    title: "Работа с сервером",
    shortTitle: "Сервер и данные",
    description: "Работай с REST API, кешем и валидируемыми формами.",
    topics: ["HTTP и REST", "TanStack Query", "Мутации и кеш", "React Hook Form и Zod"],
    dod: "Приложение получает и изменяет данные через TanStack Query, а формы валидируются через Zod.",
    project: {
      title: "Панель задач команды",
      description: "Сделай CRUD-доску задач с кешированием и валидацией формы.",
      stack: "React · TanStack Query · Zod",
    },
    progress: 0,
    icon: Database,
    color: "amber",
  },
  {
    id: 8,
    title: "Маршрутизация и полноценные приложения",
    shortTitle: "Маршрутизация",
    description: "Собирай приложения с вложенными маршрутами и учебной авторизацией.",
    topics: ["React Router", "Параметры и 404", "JWT и refresh token", "Роли и защищённые страницы"],
    dod: "Есть вложенные маршруты, 404, параметры URL и корректная обработка истёкшей сессии.",
    project: {
      title: "Личный кабинет",
      description: "Создай кабинет с защищёнными маршрутами, ролями и профилем пользователя.",
      stack: "React Router · JWT",
    },
    progress: 0,
    icon: Network,
    color: "rose",
  },
  {
    id: 9,
    title: "Стили и дизайн-системы",
    shortTitle: "Стили и UI",
    description: "Создавай устойчивые адаптивные интерфейсы и переиспользуемые компоненты.",
    topics: ["CSS Modules и Tailwind", "shadcn/ui и библиотеки", "Storybook", "Loading, empty и error states"],
    dod: "Стили не конфликтуют, интерфейс адаптивен, есть Button, Input, Modal, Select и Loader.",
    project: {
      title: "UI-kit продукта",
      description: "Собери небольшую дизайн-систему и задокументируй компоненты.",
      stack: "Tailwind · shadcn/ui · Storybook",
    },
    progress: 0,
    icon: Palette,
    color: "pink",
  },
  {
    id: 10,
    title: "Next.js",
    shortTitle: "Next.js",
    description: "Разберись с App Router и границей Server/Client Components.",
    topics: ["Layouts и routing", "SSR, SSG и ISR", "Server Actions", "Metadata и Vercel"],
    dod: "Сделано и задеплоено Next.js-приложение с маршрутизацией и loading/error-состояниями.",
    project: {
      title: "Контентная платформа",
      description: "Собери Next.js-приложение с несколькими типами рендеринга.",
      stack: "Next.js · TypeScript",
    },
    progress: 0,
    icon: Cloud,
    color: "sky",
  },
  {
    id: 11,
    title: "Качество, тесты и производительность",
    shortTitle: "Качество и тесты",
    description: "Научись проверять код, пользовательские сценарии и скорость приложения.",
    topics: ["ESLint и Prettier", "Vitest и React Testing Library", "Playwright", "Lighthouse и accessibility"],
    dod: "Есть автоматические проверки, тесты критичной логики и основного пользовательского сценария.",
    project: {
      title: "Надёжный checkout",
      description: "Покрой тестами критичный сценарий оформления заказа и улучши Lighthouse.",
      stack: "Vitest · RTL · Playwright",
    },
    progress: 0,
    icon: TestTube2,
    color: "green",
  },
  {
    id: 12,
    title: "Браузер и инженерная база",
    shortTitle: "Инженерная база",
    description: "Свяжи frontend с устройством браузера, безопасностью и CI/CD.",
    topics: ["Рендеринг и event loop", "HTTP и CORS", "XSS, CSRF и CSP", "OAuth, Docker и GitHub Actions"],
    dod: "Понимаешь ключевые угрозы, проект проходит CI и автоматически деплоится.",
    project: {
      title: "Production-ready приложение",
      description: "Подготовь приложение к CI/CD, добавь security checklist и документацию.",
      stack: "GitHub Actions · Docker · Security",
    },
    progress: 0,
    icon: ShieldCheck,
    color: "orange",
  },
];

export const totalProgress = Math.round(curriculum.reduce((sum, item) => sum + item.progress, 0) / curriculum.length);
