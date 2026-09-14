import { ArrowRight, CheckCircle2, Circle, LockKeyhole, Target } from "lucide-react";
import Link from "next/link";

import { curriculum, totalProgress } from "@/lib/curriculum";

const colorClasses: Record<string, string> = {
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

export default function ProgressPage() {
  const completed = curriculum.filter((section) => section.progress === 100).length;
  const active = curriculum.find((section) => section.progress > 0 && section.progress < 100);

  return (
    <main className="min-h-screen px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-10 pl-14 md:pl-0">
        <header className="border-b border-slate-200 pb-8">
          <p className="text-sm font-medium text-blue-600">Учебный маршрут</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Твой прогресс</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
            Последовательный путь от основ веба до production-ready приложений. Изучай темы, выполняй проект и отмечай
            результат.
          </p>
        </header>
        <section className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/40 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">Общий прогресс</p>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">{totalProgress}%</p>
              </div>
              <span className="grid size-11 place-items-center rounded-xl bg-blue-50 text-blue-600">
                <Target className="size-5" />
              </span>
            </div>
            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${totalProgress}%` }} />
            </div>
            <div className="mt-4 flex justify-between text-sm text-slate-500">
              <span>
                {completed} из {curriculum.length} разделов завершено
              </span>
              <span>{curriculum.length - completed} впереди</span>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-7">
            <p className="text-sm font-medium text-blue-800">Сейчас изучаешь</p>
            <h2 className="mt-3 font-semibold text-blue-950">{active?.title ?? "Начни первый раздел"}</h2>
            <p className="mt-2 text-sm leading-6 text-blue-800/70">
              {active?.project.title ?? "Твой первый проект ждёт тебя"}
            </p>
            <Link
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900"
              href="#curriculum"
            >
              Открыть раздел <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
        <section className="space-y-6" id="curriculum">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Программа обучения</h2>
            <p className="mt-1 text-sm text-slate-500">12 разделов · в конце каждого — практический проект</p>
          </div>
          <div className="space-y-4">
            {curriculum.map((section) => {
              const Icon = section.icon;
              const isLocked = section.progress === 0 && section.id > 3;
              return (
                <article
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/30 sm:p-7"
                  key={section.id}
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
                    <div className="flex min-w-0 flex-1 gap-4">
                      <span
                        className={`grid size-12 shrink-0 place-items-center rounded-xl ${colorClasses[section.color]}`}
                      >
                        <Icon className="size-6" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold text-slate-400">
                            {String(section.id).padStart(2, "0")}
                          </span>
                          {section.progress === 100 && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                              <CheckCircle2 className="size-3.5" /> Завершено
                            </span>
                          )}
                          {section.progress > 0 && section.progress < 100 && (
                            <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                              В процессе
                            </span>
                          )}
                          {isLocked && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500">
                              <LockKeyhole className="size-3" /> Далее
                            </span>
                          )}
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-slate-900">{section.title}</h3>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{section.description}</p>
                      </div>
                    </div>
                    <div className="w-full shrink-0 lg:w-44">
                      <div className="mb-2 flex justify-between text-xs text-slate-500">
                        <span>Прогресс</span>
                        <span className="font-medium">{section.progress}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${section.progress === 100 ? "bg-emerald-500" : "bg-blue-500"}`}
                          style={{ width: `${section.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-6 border-t border-slate-100 pt-6 lg:grid-cols-[1fr_1fr]">
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">Темы</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {section.topics.map((topic) => (
                          <span className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs text-slate-600" key={topic}>
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-4">
                      <div className="flex items-start gap-3">
                        <Circle className="mt-0.5 size-4 shrink-0 text-blue-500" />
                        <div>
                          <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">DoD раздела</p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{section.dod}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-4 rounded-xl border border-blue-100 bg-blue-50/50 p-4 sm:flex-row sm:items-center">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold tracking-wide text-blue-600 uppercase">Проект раздела</p>
                      <p className="mt-1 font-medium text-slate-900">{section.project.title}</p>
                      <p className="mt-1 text-sm text-slate-500">
                        {section.project.description} · <span className="font-medium">{section.project.stack}</span>
                      </p>
                    </div>
                    <Link
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
                      href={`/projects#section-${section.id}`}
                    >
                      К проекту <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
