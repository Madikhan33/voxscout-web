"use client";

import {
  Video,
  ChartSpline,
  ShieldCheck,
  Clock,
  Brain,
  Sparkles,
  TrendingUp,
  Home as HomeIcon,
  User,
  MessageSquare,
  BarChart3,
  CheckCircle2
} from "lucide-react";
import { Marquee } from "@/components/Marquee";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { HeroSection } from "@/components/ui/HeroSection";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import Link from "next/link";

export default function Home() {
  const logos = [
    { src: "/logos/logo-1.png", alt: "Company 1" },
    { src: "/logos/logo-2.png", alt: "Company 2" },
    { src: "/logos/logo-3.png", alt: "Company 3" },
    { src: "/logos/logo-1.png", alt: "Company 1" },
    { src: "/logos/logo-2.png", alt: "Company 2" },
    { src: "/logos/logo-3.png", alt: "Company 3" },
  ];

  const navItems = [
    { name: "Главная", link: "/", icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Преимущества", link: "#features", icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Отзывы", link: "#testimonials", icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  ];

  const testimonials = [
    {
      quote: "VoxScout помог мне подготовиться к собеседованию в компанию мечты. Обратная связь от AI была невероятно полезной и точной!",
      name: "Алексей Петров",
      title: "Product Manager",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6JJccZ-s_yXagaNIvyFWuWmUq9Gqd1mOn0ePIuuDTQ_QMdmQYtRgLmnxwDaNXA5CAeRWTprT4F4MEwsIGX0yJ6hn5mACFVnthVlm0JzdeC5_G8V9QpTjvrVFKk_64M2SLqq1sWrCun10R--mlf4gdOyXpR86O1DPeA5LE6W92hrT-awGaPBHE90aCVg1wp-MeoKkctR1NvlT-H2I_Yep25D2M-B6gwXD1Ehr0Aeir4heBW_iROCqVSWkW_DWdgEZCeasE2J9uYba"
    },
    {
      quote: "Процесс очень удобный, можно записывать ответы когда угодно. Это снимает большой стресс и помогает сосредоточиться.",
      name: "Мария Иванова",
      title: "UX/UI Designer",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm-0p-GXnyRPiRw4QAiOcsnRyO1ht2NtPh_xolgHEYdIbW_2e4MoG0LFOMNBVXpYeq_zlJAv8WG6e6DbK6-cRlnNJ78NeJV8lwjx8plX97KXRtIw0-JvxEmYVqCVaI8Lrs-jQOGOA2KO4VEt19DWIIy6A4iwXEQzjjv5jiOpnisdLEE_JwF0cN27RwksLCtqBkCGAp28nXxuAEMkC2TMijrL0-4xel3ex0yXz96_fYbIWqfnTmr3kA6ZBWXQtl65HKNx9horXjpAXT"
    },
    {
      quote: "Анализ речи и ключевых слов — это просто пушка! Сразу видишь, где нужно подтянуть ответы и быть убедительнее.",
      name: "Виктор Соколов",
      title: "Data Scientist",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR8pT6HnwyBupDZpg_J3vQJABhyGxfLboKW4sM_a4yfUhdpEQnu7ExLiozvM_SNodhVyrQsSqunUiWWaxwpRXvFBo599hqG8KwXGtxRHl64fMP-xVIaQZmIVR5faWTbDp7wmCfIavh0rvFcfh0Kt8DkGU_yOb6ykPW12XDOs2UX4RHavDoy-7mHYZ6WhtQM0d_mHJqAmrygejH6B0tZgg2je1gsy9-f1VMna-tztWlq4bsOVsXhY7csvuHWZgmAWyZ5_1toUFLXAj8"
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-black selection:bg-primary/30">
      <FloatingNav navItems={navItems} />

      <HeroSection />

      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        {/* Статистика */}
        <section className="py-16 border-y border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">10K+</div>
              <div className="mt-2 text-sm text-neutral-500">Успешных интервью</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">95%</div>
              <div className="mt-2 text-sm text-neutral-500">Точность анализа</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">24/7</div>
              <div className="mt-2 text-sm text-neutral-500">Доступность</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">500+</div>
              <div className="mt-2 text-sm text-neutral-500">Компаний-партнеров</div>
            </div>
          </div>
        </section>

        {/* Логотипы компаний */}
        <section className="py-10">
          <p className="text-center text-sm text-neutral-500 mb-8 uppercase tracking-widest">Нас используют для отбора в ведущие компании</p>
          <Marquee className="[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center px-8">
                <img alt={logo.alt} className="h-8 w-auto object-contain opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0" src={logo.src} />
              </div>
            ))}
          </Marquee>
        </section>

        {/* Как это работает */}
        <section className="py-20" id="how-it-works">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Как это работает</h2>
            <p className="mt-4 text-lg text-neutral-500">Простой процесс в три шага для вашего успеха</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-950/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-purple-900/50 transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-950/30 text-purple-300 mb-6">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="text-5xl font-bold text-purple-300/50 mb-4">01</div>
                <h3 className="text-xl font-semibold text-white mb-3">Получите приглашение</h3>
                <p className="text-neutral-400">Работодатель отправляет вам ссылку на AI-интервью. Проходите его в удобное время, без стресса и спешки.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-purple-950/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-purple-900/50 transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-950/30 text-purple-300 mb-6">
                  <Video className="w-6 h-6" />
                </div>
                <div className="text-5xl font-bold text-purple-300/50 mb-4">02</div>
                <h3 className="text-xl font-semibold text-white mb-3">Запишите ответы</h3>
                <p className="text-neutral-400">Отвечайте на вопросы в видеоформате. AI анализирует вашу речь, уверенность и профессионализм в реальном времени.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-purple-950/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-purple-900/50 transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-950/30 text-purple-300 mb-6">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div className="text-5xl font-bold text-purple-300/50 mb-4">03</div>
                <h3 className="text-xl font-semibold text-white mb-3">Получите результаты</h3>
                <p className="text-neutral-400">Работодатель получает детальный анализ, а вы — обратную связь для улучшения навыков собеседования.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-20" id="features">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">Почему выбирают VoxScout</h2>
            <p className="mt-4 text-lg text-neutral-400">Мы помогаем вам показать себя с лучшей стороны и повысить шансы на получение оффера</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Карточка 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/30 border border-neutral-800 p-8 hover:border-purple-900/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-950/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-950/30 text-purple-300 mb-6">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Практикуйтесь в любое время</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  Проходите интервью 24/7 без необходимости подстраиваться под расписание рекрутера. Выбирайте удобное время и место для записи ответов.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Без временных ограничений</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Возможность переписать ответ</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Карточка 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/30 border border-neutral-800 p-8 hover:border-purple-900/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-950/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-950/30 text-purple-300 mb-6">
                  <Brain className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Объективная обратная связь</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  Получите беспристрастный анализ ваших ответов и навыков, основанный на данных и алгоритмах машинного обучения.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Анализ речи и интонации</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Оценка профессиональных навыков</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Карточка 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/30 border border-neutral-800 p-8 hover:border-purple-900/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-950/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-950/30 text-purple-300 mb-6">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Глубокий анализ навыков</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  AI оценивает не только содержание ответов, но и вашу уверенность, четкость речи, структуру мышления и коммуникативные навыки.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Детальный отчет по каждому ответу</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Рекомендации по улучшению</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Карточка 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/30 border border-neutral-800 p-8 hover:border-purple-900/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-950/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-950/30 text-purple-300 mb-6">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Выделитесь среди кандидатов</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  Продемонстрируйте свои коммуникативные навыки и мотивацию еще до встречи с рекрутером. Покажите себя с лучшей стороны.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Профессиональная презентация</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Повышение шансов на оффер</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section className="py-20" id="testimonials">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">Что говорят наши кандидаты</h2>
          </div>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </section>

        {/* CTA */}
        <section className="my-20">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/30 p-8 text-center md:p-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,_rgba(88,28,135,0.1),_transparent_60%)]"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-950/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-950/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Готовы сделать следующий шаг?</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">Присоединяйтесь к тысячам кандидатов, которые уже получили работу своей мечты с помощью нашей платформы.</p>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/signup"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-white text-black px-8 font-semibold transition-all hover:bg-neutral-200"
                >
                  Попробовать бесплатно
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
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
            <a className="text-neutral-500 transition-colors hover:text-primary" href="#">О нас</a>
            <Link className="text-neutral-500 transition-colors hover:text-primary" href="/hr">Для HR</Link>
            <a className="text-neutral-500 transition-colors hover:text-primary" href="#">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

