import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import { projects } from "./project-data";

const accentClasses: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-600",
  blue: "bg-blue-50 text-blue-600",
  slate: "bg-slate-100 text-slate-600",
  violet: "bg-violet-50 text-violet-600",
  cyan: "bg-cyan-50 text-cyan-600",
  indigo: "bg-indigo-50 text-indigo-600",
  amber: "bg-amber-50 text-amber-600",
  rose: "bg-rose-50 text-rose-600",
  pink: "bg-pink-50 text-pink-600",
  sky: "bg-sky-50 text-sky-600",
  green: "bg-green-50 text-green-600",
  orange: "bg-orange-50 text-orange-600",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-10 pl-14 md:pl-0">
        <header>
          <p className="text-sm font-medium text-blue-600">Практика</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Проекты</h1>
          <p className="mt-3 max-w-2xl text-slate-500">
            В конце каждого раздела тебя ждёт проект. Собирай портфолио постепенно и закрепляй каждую новую тему
            практикой.
          </p>
        </header>
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                className="min-w-0 rounded-2xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-md"
                id={`section-${project.id}`}
                key={project.id}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className={`grid size-12 place-items-center rounded-2xl ${accentClasses[project.accent]}`}>
                    <Icon className="size-6" />
                  </span>
                  <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
                    {project.level}
                  </span>
                </div>
                <p className="mt-5 text-xs font-semibold tracking-wide text-slate-400 uppercase">
                  Проект {String(project.id).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-slate-900">{project.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.topics.map((topic) => (
                    <span className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs text-slate-600" key={topic}>
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="font-medium text-slate-500">{project.stack}</span>
                    <span className="text-slate-400">{project.progress ? `${project.progress}%` : "Впереди"}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${project.progress === 100 ? "bg-emerald-500" : "bg-blue-500"}`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600">
                    {project.progress === 100
                      ? "Посмотреть проект"
                      : project.progress
                        ? "Продолжить проект"
                        : "Начать проект"}
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
          <ExternalLink className="mt-0.5 size-5 shrink-0 text-blue-600" />
          <div>
            <p className="font-medium text-blue-900">Как устроены проекты?</p>
            <p className="mt-1 text-sm leading-6 text-blue-800/70">
              Каждый проект живёт в отдельном package со своим стеком. Выбирай раздел в прогрессе, изучай темы и
              возвращайся сюда, чтобы собрать практическую работу.
            </p>
            <Link
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-900"
              href="/progress"
            >
              Открыть учебный маршрут <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
