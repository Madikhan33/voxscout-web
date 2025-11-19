"use client";

import { CandidateNav } from "@/components/CandidateNav";
import { Search, Code, Palette, Package, Brain, Brush, Key } from "lucide-react";
import { useState } from "react";

export default function Practice() {
    const [showCodeModal, setShowCodeModal] = useState(false);

    const interviews = [
        {
            title: "UI/UX Designer",
            company: "TechCorp",
            description: "Разработка интуитивно понятных и эстетически привлекательных интерфейсов для наших веб и мобильных продуктов.",
            icon: Palette,
            limited: false,
        },
        {
            title: "Frontend Developer",
            company: "Innovate LLC",
            description: "Создание современных пользовательских интерфейсов с использованием React и TypeScript.",
            icon: Code,
            limited: true,
        },
        {
            title: "Product Manager",
            company: "DataFlow",
            description: "Управление жизненным циклом продукта, от идеи до запуска и дальнейшего развития.",
            icon: Package,
            limited: false,
        },
        {
            title: "Senior Product Designer",
            company: "Stripe",
            description: "Проектирование сложных и удобных финансовых инструментов для глобальной аудитории.",
            icon: Palette,
            limited: false,
        },
        {
            title: "UX Researcher",
            company: "Google",
            description: "Проведение пользовательских исследований для улучшения продуктов и выявления новых потребностей.",
            icon: Brain,
            limited: false,
        },
        {
            title: "Lead UI Designer",
            company: "Figma",
            description: "Лидирование команды UI дизайнеров в создании инновационных решений для нашего продукта.",
            icon: Brush,
            limited: true,
        },
    ];

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/20 via-black to-black"></div>

            <div className="relative z-10 layout-container flex h-full grow flex-col">
                <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-full max-w-[1100px] flex-1">
                        <CandidateNav />

                        <main className="flex-1 mt-8 p-4">
                            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 sm:p-8">
                                <div className="mb-10">
                                    <h1 className="text-white text-2xl font-bold mb-2">Закрытые интервью</h1>
                                    <p className="text-neutral-400 mb-4 text-sm">
                                        Введите код, предоставленный рекрутером, чтобы начать приватное интервью.
                                    </p>
                                    <button
                                        onClick={() => setShowCodeModal(true)}
                                        className="inline-flex w-full sm:w-auto justify-center text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
                                    >
                                        Начать интервью
                                    </button>
                                </div>

                                <div className="border-t border-neutral-800 pt-10">
                                    <h2 className="text-white text-2xl font-bold mb-6">Открытые интервью</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        <div className="relative">
                                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
                                            <input
                                                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg pl-11 pr-4 py-2.5 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                                placeholder="Поиск по названию или компании..."
                                                type="text"
                                            />
                                        </div>

                                        <div>
                                            <select className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors">
                                                <option>Все категории</option>
                                                <option>Frontend разработчик</option>
                                                <option>UI/UX дизайнер</option>
                                                <option>Product Manager</option>
                                                <option>Data Scientist</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {interviews.map((interview, idx) => {
                                            const Icon = interview.icon;
                                            return (
                                                <div
                                                    key={idx}
                                                    className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-5 flex flex-col hover:border-purple-900/50 transition-all"
                                                >
                                                    <div className="flex items-start gap-4 mb-4">
                                                        <div className="size-12 rounded-lg bg-purple-950/30 flex items-center justify-center">
                                                            <Icon className="text-purple-400 h-6 w-6" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-white font-semibold">{interview.title}</h3>
                                                            <p className="text-neutral-500 text-sm">{interview.company}</p>
                                                        </div>
                                                    </div>

                                                    <p className="text-neutral-400 text-sm mb-5 flex-grow">{interview.description}</p>

                                                    {interview.limited && (
                                                        <div className="text-xs text-amber-400/80 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1 mb-5 self-start">
                                                            Количество мест ограничено
                                                        </div>
                                                    )}

                                                    <button
                                                        onClick={() => interview.limited && setShowCodeModal(true)}
                                                        className="w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-lg transition-colors mt-auto"
                                                    >
                                                        Пройти интервью
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showCodeModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowCodeModal(false)} />
                    <div className="relative w-full max-w-md rounded-xl bg-neutral-900 border border-neutral-800 p-8 shadow-2xl">
                        <button
                            onClick={() => setShowCodeModal(false)}
                            className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h3 className="text-xl font-bold text-white mb-2">Ввод кода доступа</h3>
                        <p className="text-neutral-400 text-sm mb-6">Пожалуйста, введите уникальный код для начала интервью.</p>

                        <div className="space-y-4">
                            <div className="relative">
                                <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
                                <input
                                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg pl-12 pr-4 py-3 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                    placeholder="Введите уникальный код"
                                    type="text"
                                />
                            </div>
                            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                                Подтвердить и начать
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
