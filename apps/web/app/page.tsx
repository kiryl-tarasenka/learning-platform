import { ArrowRight, BookOpen, Code2, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";

const learningPath = [
  { title: "Основы веба", lessons: "12 уроков", state: "Пройдено" },
  { title: "JavaScript", lessons: "18 уроков", state: "В процессе" },
  { title: "React", lessons: "16 уроков", state: "Далее" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-950 sm:px-10 lg:px-16">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <a className="flex items-center gap-2 text-lg font-semibold" href="#top">
          <span className="grid size-9 place-items-center rounded-xl bg-zinc-950 text-white">
            <Code2 className="size-5" />
          </span>
          FrontPath
        </a>
        <Button variant="outline">Войти</Button>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center" id="top">
        <div>
          <p className="mb-5 text-sm font-medium tracking-wide text-zinc-500 uppercase">Платформа обучения frontend-разработке</p>
          <h1 className="max-w-xl text-4xl leading-tight font-semibold tracking-tight sm:text-6xl">Учись создавать интерфейсы на реальных задачах.</h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-600">Структурированный путь от основ HTML и CSS до React, TypeScript и production-практик.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">Начать обучение <ArrowRight className="size-4" /></Button>
            <Button size="lg" variant="outline">Посмотреть программу</Button>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div><p className="text-sm text-zinc-500">Ваш прогресс</p><p className="mt-1 text-2xl font-semibold">Неделя 1 из 16</p></div>
            <div className="grid size-12 place-items-center rounded-full bg-emerald-100 font-semibold text-emerald-700">18%</div>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-zinc-100"><div className="h-full w-[18%] rounded-full bg-emerald-500" /></div>
          <div className="mt-7 space-y-3">
            {learningPath.map((module, index) => (
              <article className="flex items-center gap-4 rounded-2xl border border-zinc-100 p-4" key={module.title}>
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-zinc-100 text-sm font-semibold text-zinc-600">{index + 1}</span>
                <div className="min-w-0 flex-1"><h2 className="font-medium">{module.title}</h2><p className="text-sm text-zinc-500">{module.lessons}</p></div>
                <span className="text-sm text-zinc-500">{module.state}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 pb-12 md:grid-cols-3">
        {[
          [BookOpen, "Короткие уроки", "Теория, практика и проверка знаний в одном ритме."],
          [Code2, "Практика в браузере", "Закрепляйте темы в задачах, близких к работе."],
          [Trophy, "Понятный прогресс", "Видно, что уже освоено и что изучать дальше."],
        ].map(([Icon, title, description]) => {
          const FeatureIcon = Icon as typeof BookOpen;
          return <article className="rounded-2xl border border-zinc-200 bg-white p-6" key={title as string}><FeatureIcon className="size-5" /><h2 className="mt-4 font-semibold">{title as string}</h2><p className="mt-2 text-sm leading-6 text-zinc-600">{description as string}</p></article>;
        })}
      </section>
    </main>
  );
}
