"use client";

import { Search, Filter, Plus, List, Users as UsersIcon, Calendar } from "lucide-react";

export default function HRInterviews() {
    const interviews = [
        {
            title: "Frontend разработчик",
            position: "Senior Frontend Developer",
            status: "active",
            questions: 8,
            candidates: { current: 25, total: 100 },
            created: "15.08.2023",
        },
        {
            title: "AI/ML Инженер",
            position: "Middle AI Engineer",
            status: "active",
            questions: 12,
            candidates: { current: 18, total: 65 },
            created: "02.08.2023",
        },
        {
            title: "UX/UI Дизайнер",
            position: "Lead UX/UI Designer",
            status: "archived",
            questions: 6,
            candidates: { current: 45, total: 150 },
            created: "21.07.2023",
        },
        {
            title: "Project Manager",
            position: "Project Manager (Fintech)",
            status: "active",
            questions: 10,
            candidates: { current: 3, total: 20 },
            created: "19.08.2023",
        },
    ];

    return (
        <>
            <header className="flex flex-col sm:flex-row flex-wrap justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex flex-col gap-1">
                    <h1 className="text-white text-3xl font-bold tracking-tight">Интервью</h1>
                    <p className="text-neutral-500 text-base font-normal">
                        Создавайте и управляйте шаблонами интервью для кандидатов.
                    </p>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold transition-colors cursor-pointer">
                    <Plus className="h-4 w-4" />
                    <span>Создать интервью</span>
                </button>
            </header>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-grow relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
                    <input
                        className="w-full rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-neutral-800 bg-neutral-900/50 h-11 placeholder:text-neutral-500 px-4 pl-10 text-sm"
                        placeholder="Поиск по названию или вакансии..."
                        type="text"
                    />
                </div>

                <div className="flex gap-3 items-center">
                    <button className="flex h-11 items-center justify-center gap-x-2 rounded-lg bg-neutral-900/50 border border-neutral-800 px-4 hover:border-purple-900/50 hover:bg-neutral-900/80 transition-all text-sm cursor-pointer">
                        <Filter className="h-4 w-4 text-neutral-500" />
                        <p className="text-white font-medium">Фильтры</p>
                    </button>
                    <button className="flex h-11 items-center justify-center gap-x-2 rounded-lg bg-neutral-900/50 border border-neutral-800 px-4 hover:border-purple-900/50 hover:bg-neutral-900/80 transition-all text-sm cursor-pointer">
                        <svg className="h-4 w-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                        <p className="text-white font-medium">Сортировка</p>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {interviews.map((interview, idx) => (
                    <div
                        key={idx}
                        className="group flex flex-col justify-between rounded-xl bg-neutral-900/50 backdrop-blur-sm p-5 border border-neutral-800 hover:border-purple-900/50 transition-all cursor-pointer"
                    >
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-bold text-white mb-1">{interview.title}</h3>
                                <span
                                    className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${interview.status === "active"
                                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                        : "bg-neutral-500/10 text-neutral-400 border border-neutral-500/20"
                                        }`}
                                >
                                    {interview.status === "active" ? "Активно" : "Архив"}
                                </span>
                            </div>
                            <p className="text-sm text-neutral-500 mb-5">{interview.position}</p>
                        </div>

                        <div className="text-sm text-neutral-500 border-t border-neutral-800 pt-4 flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2">
                                    <List className="h-4 w-4" />
                                    Вопросов
                                </span>
                                <span className="font-medium text-white bg-neutral-800 px-2 py-0.5 rounded-md">
                                    {interview.questions}
                                </span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2">
                                    <UsersIcon className="h-4 w-4" />
                                    Кандидаты
                                </span>
                                <span className="font-medium text-white bg-neutral-800 px-2 py-0.5 rounded-md">
                                    {interview.candidates.current} / {interview.candidates.total}
                                </span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    Создано
                                </span>
                                <span className="font-medium text-white">{interview.created}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
