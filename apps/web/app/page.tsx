import { ArrowRight, BookOpen, CheckCircle2, Code2, FolderKanban, Sparkles, Trophy } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const projects = [
  { title: "Адаптивная визитка", stack: "HTML · CSS", progress: 100, color: "bg-emerald-500", status: "Завершено" },
  {
    title: "Интерактивный список задач",
    stack: "JavaScript",
    progress: 64,
    color: "bg-blue-500",
    status: "В процессе",
  },
  { title: "Каталог с фильтрами", stack: "React · TypeScript", progress: 0, color: "bg-violet-500", status: "Далее" },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10 lg:px-16">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 pl-14 md:pl-0">
        <div>
          <p className="text-sm font-medium text-blue-600">Понедельник, 14 сентября</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Привет! Готов кодить?
          </h1>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 sm:flex">
          <span className="grid size-7 place-items-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
            К
          </span>{" "}
          Кирилл
        </div>
      </header>
      <section className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 p-7 text-white shadow-lg shadow-blue-100 sm:p-9">
          <div className="relative z-10 max-w-xl">
            <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-white/15">
              <Sparkles className="size-5" />
            </div>
            <p className="text-sm font-medium text-blue-100">Текущий фокус</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">JavaScript: работа с DOM</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-blue-100">
              Разберись, как оживлять интерфейсы и создавать приложения без перезагрузки страницы.
            </p>
            <Button className="mt-7 bg-white text-blue-700 hover:bg-blue-50" size="lg">
              Продолжить <ArrowRight />
            </Button>
          </div>
          <Code2 className="absolute -right-6 -bottom-10 size-52 rotate-12 text-white/10" />
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500">Общий прогресс</span>
            <Trophy className="size-5 text-amber-500" />
          </div>
          <div className="mt-5 flex items-end gap-2">
            <span className="text-4xl font-semibold tracking-tight text-slate-900">18%</span>
            <span className="pb-1 text-sm text-slate-400">из курса</span>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[18%] rounded-full bg-blue-500" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
            <div>
              <p className="text-xl font-semibold text-slate-800">8</p>
              <p className="text-xs text-slate-400">уроков пройдено</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-slate-800">3</p>
              <p className="text-xs text-slate-400">проекта впереди</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-14 max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Твои проекты</h2>
            <p className="mt-1 text-sm text-slate-500">Практика закрепляет знания лучше теории</p>
          </div>
          <Link className="text-sm font-medium text-blue-600 hover:text-blue-700" href="/projects">
            Все проекты <ArrowRight className="ml-1 inline size-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              className="min-w-0 rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
              key={project.title}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`grid size-10 place-items-center rounded-xl ${index === 0 ? "bg-emerald-50 text-emerald-600" : index === 1 ? "bg-blue-50 text-blue-600" : "bg-violet-50 text-violet-600"}`}
                >
                  <FolderKanban className="size-5" />
                </span>
                <span className="text-xs font-medium text-slate-400">{project.status}</span>
              </div>
              <h3 className="mt-5 font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{project.stack}</p>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className={`h-full rounded-full ${project.color}`} style={{ width: `${project.progress}%` }} />
              </div>
              <div className="mt-2 flex justify-between text-xs text-slate-400">
                <span>{project.progress ? `${project.progress}% готово` : "Не начат"}</span>
                {project.progress === 100 && <CheckCircle2 className="size-4 text-emerald-500" />}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto mt-14 grid max-w-6xl gap-6 pb-10 sm:grid-cols-2">
        <Link
          className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-200 hover:bg-blue-50/30"
          href="/guide"
        >
          <span className="grid size-11 place-items-center rounded-xl bg-blue-50 text-blue-600">
            <BookOpen className="size-5" />
          </span>
          <span className="flex-1">
            <span className="block font-medium text-slate-800">Не знаешь, с чего начать?</span>
            <span className="mt-1 block text-sm text-slate-500">Открой подробный гайд по работе с платформой</span>
          </span>
          <ArrowRight className="size-5 text-slate-400" />
        </Link>
      </section>
    </main>
  );
}
