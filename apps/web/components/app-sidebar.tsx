"use client";

import {
  BookOpen,
  ChevronRight,
  Code2,
  FolderKanban,
  HelpCircle,
  LayoutDashboard,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Обзор", description: "Твой прогресс", icon: LayoutDashboard },
  { href: "/projects", label: "Проекты", description: "Практика по стеку", icon: FolderKanban },
  { href: "/guide", label: "Как пользоваться", description: "Пошаговый гайд", icon: BookOpen },
];

export function AppSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Button className="fixed top-4 left-4 z-30 md:hidden" size="icon" variant="outline" onClick={() => setMobileOpen(true)} aria-label="Открыть меню">
        <Menu />
      </Button>
      {mobileOpen && <button className="fixed inset-0 z-30 bg-slate-950/30 md:hidden" aria-label="Закрыть меню" onClick={() => setMobileOpen(false)} />}
      <aside className={cn("fixed inset-y-0 left-0 z-40 flex w-[264px] flex-col border-r border-slate-200 bg-[#f7f8fa] transition-transform md:static md:z-auto md:translate-x-0", collapsed && "md:w-[84px]", mobileOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
          <Link className="flex items-center gap-3 overflow-hidden" href="/" onClick={() => setMobileOpen(false)}>
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-200"><Code2 className="size-5" /></span>
            {!collapsed && <span className="text-lg font-semibold tracking-tight text-slate-900">Front<span className="text-blue-600">Path</span></span>}
          </Link>
          <Button className="md:hidden" size="icon-sm" variant="ghost" onClick={() => setMobileOpen(false)} aria-label="Закрыть меню"><X /></Button>
          <Button className="hidden md:inline-flex" size="icon-sm" variant="ghost" onClick={() => setCollapsed(!collapsed)} aria-label={collapsed ? "Развернуть меню" : "Свернуть меню"}>{collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}</Button>
        </div>
        <div className="flex-1 px-4 py-8">
          {!collapsed && <p className="mb-3 px-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">Навигация</p>}
          <nav className="space-y-2">
            {navigation.map(({ href, label, description, icon: Icon }) => {
              const active = href === "/" ? pathname === href : pathname.startsWith(href);
              return <Link className={cn("group flex items-center gap-3 rounded-md border-l-2 px-3 py-2.5 text-sm transition-colors", active ? "border-blue-600 bg-blue-100/70 text-blue-800" : "border-transparent text-slate-600 hover:bg-slate-200/60 hover:text-slate-900")} href={href} key={href} onClick={() => setMobileOpen(false)} title={collapsed ? label : undefined}>
                <Icon className={cn("size-5 shrink-0", active ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600")} />
                {!collapsed && <span className="min-w-0 flex-1"><span className="block font-medium">{label}</span><span className="mt-0.5 block text-xs text-slate-400">{description}</span></span>}
                {!collapsed && active && <ChevronRight className="size-4" />}
              </Link>;
            })}
          </nav>
        </div>
        <div className={cn("m-4 rounded-md border border-slate-200 bg-white p-5", collapsed && "p-3")}>
          {!collapsed ? <><div className="mb-3 flex items-center justify-between"><span className="text-xs font-medium text-slate-500">Твой прогресс</span><span className="text-xs font-semibold text-blue-600">18%</span></div><div className="h-1.5 overflow-hidden rounded-full bg-slate-200"><div className="h-full w-[18%] rounded-full bg-blue-500" /></div><p className="mt-3 text-xs leading-5 text-slate-500">Продолжай в том же духе. Маленькие шаги складываются в навык.</p></> : <div className="mx-auto h-8 w-1.5 rounded-full bg-blue-500" />}
        </div>
        <div className="border-t border-slate-200 p-5"><Link className="flex items-center gap-3 rounded-xl p-2 hover:bg-slate-50" href="/guide"><span className="grid size-9 place-items-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">К</span>{!collapsed && <span className="min-w-0"><span className="block truncate text-sm font-medium text-slate-800">Курс frontend</span><span className="flex items-center gap-1 text-xs text-slate-400"><HelpCircle className="size-3" /> Нужна помощь?</span></span>}</Link></div>
      </aside>
    </>
  );
}
