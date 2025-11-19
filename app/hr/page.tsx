"use client";

import Link from "next/link";
import {
  Edit,
  Send,
  BarChart3,
  User,
  Clock,
  Scale,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Home as HomeIcon
} from "lucide-react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { HeroSection } from "@/components/ui/HeroSection";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

export default function ForHR() {
  const navItems = [
    { name: "Главная", link: "/", icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Процесс", link: "#process", icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Аналитика", link: "#analytics", icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  ];

  const testimonials = [
    {
      quote: "VoxScout изменил правила игры. Мы сократили время отбора с недель до дней, и качество кандидатов, которых мы продвигаем, никогда не было таким высоким.",
      name: "Эмили Картер",
      title: "Руководитель по талантам, Innovate Inc.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6JJccZ-s_yXagaNIvyFWuWmUq9Gqd1mOn0ePIuuDTQ_QMdmQYtRgLmnxwDaNXA5CAeRWTprT4F4MEwsIGX0yJ6hn5mACFVnthVlm0JzdeC5_G8V9QpTjvrVFKk_64M2SLqq1sWrCun10R--mlf4gdOyXpR86O1DPeA5LE6W92hrT-awGaPBHE90aCVg1wp-MeoKkctR1NvlT-H2I_Yep25D2M-B6gwXD1Ehr0Aeir4heBW_iROCqVSWkW_DWdgEZCeasE2J9uYba"
    },
    {
      quote: "Анализ AI невероятно проницателен. Он помогает нам выявлять навыки, которые мы могли бы упустить при традиционном просмотре резюме. Настоятельно рекомендую!",
      name: "Михаил Ли",
      title: "HR-менеджер, Tech Solutions",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm-0p-GXnyRPiRw4QAiOcsnRyO1ht2NtPh_xolgHEYdIbW_2e4MoG0LFOMNBVXpYeq_zlJAv8WG6e6DbK6-cRlnNJ78NeJV8lwjx8plX97KXRtIw0-JvxEmYVqCVaI8Lrs-jQOGOA2KO4VEt19DWIIy6A4iwXEQzjjv5jiOpnisdLEE_JwF0cN27RwksLCtqBkCGAp28nXxuAEMkC2TMijrL0-4xel3ex0yXz96_fYjIWqfnTmr3kA6ZBWXQtl65HKNx9horXjpAXT"
    },
  ];

  const features = [
    {
      title: "Значительная экономия времени",
      description: "Автоматизируйте первичный отбор и сократите время на собеседования до 80%.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/10 items-center justify-center"><Clock className="size-10 text-violet-400" /></div>,
      icon: <Clock className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Объективные оценки",
      description: "AI фокусируется на навыках, обеспечивая справедливый и последовательный отбор.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/10 items-center justify-center"><Scale className="size-10 text-blue-400" /></div>,
      icon: <Scale className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Решения на основе данных",
      description: "Принимайте решения о найме на основе объективных данных и показателей.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/10 items-center justify-center"><TrendingUp className="size-10 text-pink-400" /></div>,
      icon: <TrendingUp className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-black selection:bg-primary/30">
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/30 via-black to-black"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-neutral-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neutral-800/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-6">
            Автоматизируйте отбор <br /> кандидатов с AI
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            VoxScout проводит первичные интервью 24/7, объективно оценивает кандидатов и предоставляет детальную аналитику, освобождая вашу команду для стратегических задач.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/signup" className="inline-flex h-12 items-center justify-center rounded-lg bg-white text-black px-8 font-semibold transition-all hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
              Создать интервью
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        <section className="py-20" id="process">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Как создать интервью</h2>
            <p className="mt-4 text-lg text-neutral-500">Оптимизируйте процесс найма за три простых шага.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 hover:border-purple-900/50 transition-all">
              <div className="flex size-12 items-center justify-center rounded-lg bg-purple-950/30 text-purple-300 mb-4">
                <Edit className="size-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">1. Создайте интервью</h3>
              <p className="mt-2 text-sm text-neutral-400">Настройте вопросы и критерии оценки за несколько минут.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 hover:border-purple-900/50 transition-all">
              <div className="flex size-12 items-center justify-center rounded-lg bg-purple-950/30 text-purple-300 mb-4">
                <Send className="size-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">2. Пригласите кандидатов</h3>
              <p className="mt-2 text-sm text-neutral-400">Отправьте ссылку для прохождения AI-интервью в удобное для них время.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 hover:border-purple-900/50 transition-all">
              <div className="flex size-12 items-center justify-center rounded-lg bg-purple-950/30 text-purple-300 mb-4">
                <BarChart3 className="size-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">3. Получите AI-анализ</h3>
              <p className="mt-2 text-sm text-neutral-400">Получайте подробные отчеты с оценками и рекомендациями.</p>
            </div>
          </div>
        </section>

        <section className="py-20" id="analytics">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Мгновенно определяйте лучшие таланты</h2>
            <p className="mt-4 text-lg text-neutral-500">Наш AI предоставляет четкое, основанное на данных представление о потенциале каждого кандидата.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <div className="flex flex-col gap-4 p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-purple-900/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-purple-950/30 text-purple-300 group-hover:scale-110 transition-transform">
                  <User className="size-6" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-white">Мария Родригез</h4>
                  <p className="text-sm text-neutral-400">Product Manager</p>
                </div>
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-purple-500/50 text-purple-300 font-bold">
                  92%
                </div>
              </div>
              <div className="rounded-lg bg-purple-950/30 px-3 py-2 text-center text-sm font-medium text-purple-300 flex items-center justify-center gap-2">
                <CheckCircle2 className="size-4" />
                AI: Рекомендовано
              </div>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-purple-900/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-purple-950/30 text-purple-300 group-hover:scale-110 transition-transform">
                  <User className="size-6" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-white">Дэвид Чен</h4>
                  <p className="text-sm text-neutral-400">Software Engineer</p>
                </div>
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-purple-500/30 text-purple-400 font-bold">
                  78%
                </div>
              </div>
              <div className="rounded-lg bg-purple-950/20 px-3 py-2 text-center text-sm font-medium text-purple-400 flex items-center justify-center gap-2">
                <AlertCircle className="size-4" />
                AI: Хороший кандидат
              </div>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-purple-900/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-purple-950/30 text-purple-300 group-hover:scale-110 transition-transform">
                  <User className="size-6" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-white">Сара Дженкинс</h4>
                  <p className="text-sm text-neutral-400">UX Designer</p>
                </div>
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-purple-500/20 text-purple-500 font-bold">
                  55%
                </div>
              </div>
              <div className="rounded-lg bg-purple-950/10 px-3 py-2 text-center text-sm font-medium text-purple-500 flex items-center justify-center gap-2">
                <XCircle className="size-4" />
                AI: Требует внимания
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Преимущества для вашей HR-команды</h2>
            <p className="mt-4 text-lg text-neutral-400">Предоставьте вашим рекрутерам инструменты, которые экономят время и уменьшают предвзятость.</p>
          </div>
          <BentoGrid className="max-w-4xl mx-auto">
            {features.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Что говорят наши клиенты</h2>
          </div>
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </section>

        <section className="my-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 p-8 text-center md:p-20">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0,_rgba(168,85,247,0.15),_transparent_60%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Готовы трансформировать свой найм?</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">Присоединяйтесь к передовым компаниям, использующим VoxScout для поиска лучших талантов.</p>
              <div className="mt-10 flex justify-center">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-50">
                  <span>Начать бесплатно</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-10 bg-black">
          <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <svg className="size-5 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 6.5C16.5 5.67 15.83 5 15 5H9C8.17 5 7.5 5.67 7.5 6.5v11C7.5 18.33 8.17 19 9 19h6c.83 0 1.5-.67 1.5-1.5v-11zM15 17H9V7h6v10zM5.5 9.5c0-.83.67-1.5 1.5-1.5h1V6H7C5.34 6 4 7.34 4 9v6c0 1.66 1.34 3 3 3h1v-2H7c-.55 0-1-.45-1-1v-4.5zm13-1.5c.83 0 1.5.67 1.5 1.5v4.5c0 .55-.45 1-1 1h-1v2h1c1.66 0 3-1.34 3-3V9c0-1.66-1.34-3-3-3h-1v2h1z"></path>
              </svg>
              <h2 className="text-base font-semibold text-white">VoxScout</h2>
            </div>
            <p className="text-sm text-neutral-500">© 2024 VoxScout. Все права защищены.</p>
            <div className="flex items-center gap-6 text-sm">
              <Link className="text-neutral-500 transition-colors hover:text-primary" href="#">О нас</Link>
              <Link className="text-neutral-500 transition-colors hover:text-primary" href="#">Политика</Link>
              <Link className="text-neutral-500 transition-colors hover:text-primary" href="#">Контакты</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
