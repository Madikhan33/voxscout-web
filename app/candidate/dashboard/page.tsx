"use client";

import Link from "next/link";

export default function CandidateDashboard() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 shrink-0"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmx9M3X3QDpJTIiBUqNa3HH4zc68YMka7JVPCPSpI7q1b__0DonJWrBKr3MGSRnHy4PbiZA_bhGy0AKpYfmj3fxXCsE2VGlENN4-8WBAef7hCDbO9plOwrc7_ix_XKoNTl4rCkswJpXCL6laqSAWWDEDEBXNOPpGbf73Z-pMifBWtmsELmEbWXOPWiFldo4R6rUKYOx4dLj1fhy-0zX-9-TyFHiT9ZpIaUpptc-RgNM-StvGE2WIjCa3T1eEQc-1tsd1s0pWWegth6")',
                            }}
                        ></div>
                        <div className="flex flex-col items-center sm:items-start">
                            <h1 className="text-white text-2xl font-bold leading-tight">Екатерина Иванова</h1>
                            <Link
                                href="#"
                                className="text-purple-400 hover:text-purple-300 text-sm font-medium leading-normal mt-2 inline-flex items-center gap-1.5"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                                <span>Просмотреть резюме</span>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 flex flex-col justify-between gap-4">
                        <h2 className="text-white text-lg font-bold">Общая статистика</h2>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-purple-400 text-3xl font-bold">12</p>
                                <p className="text-neutral-500 text-xs">Интервью</p>
                            </div>
                            <div>
                                <p className="text-purple-400 text-3xl font-bold">8.7</p>
                                <p className="text-neutral-500 text-xs">Средний балл</p>
                            </div>
                            <div>
                                <p className="text-green-400 text-3xl font-bold">+15%</p>
                                <p className="text-neutral-500 text-xs">Улучшение</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                    <h2 className="text-white text-lg font-bold mb-4">Последние интервью</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border border-neutral-800 rounded-lg p-4 flex flex-col gap-3 hover:bg-neutral-900/80 hover:border-purple-900/50 transition-all">
                            <p className="text-white font-semibold">UI/UX Designer at TechCorp</p>
                            <p className="text-sm text-neutral-500">Дата: 28 мая 2024</p>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-neutral-400">
                                    Результат: <span className="font-bold text-purple-400">9.2/10</span>
                                </p>
                                <Link href="/candidate/interview-report/1" className="text-purple-400 hover:text-purple-300 text-xs font-medium">
                                    Подробнее
                                </Link>
                            </div>
                        </div>

                        <div className="border border-neutral-800 rounded-lg p-4 flex flex-col gap-3 hover:bg-neutral-900/80 hover:border-purple-900/50 transition-all">
                            <p className="text-white font-semibold">Frontend Developer at Innovate LLC</p>
                            <p className="text-sm text-neutral-500">Дата: 25 мая 2024</p>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-neutral-400">
                                    Результат: <span className="font-bold text-purple-400">8.5/10</span>
                                </p>
                                <Link href="/candidate/interview-report/2" className="text-purple-400 hover:text-purple-300 text-xs font-medium">
                                    Подробнее
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-1 flex flex-col gap-6">
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                    <h2 className="text-white text-lg font-bold mb-4">Рекомендованные вакансии</h2>
                    <div className="flex flex-col gap-4">
                        {["Senior Product Designer", "UX Researcher", "Lead UI Designer"].map((title, idx) => (
                            <div
                                key={idx}
                                className="border border-neutral-800 rounded-lg p-3 hover:bg-neutral-900/80 hover:border-purple-900/50 transition-all cursor-pointer"
                            >
                                <p className="font-semibold text-white">{title}</p>
                                <p className="text-sm text-neutral-500">{["Stripe", "Google", "Figma"][idx]}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                    <h2 className="text-white text-lg font-bold mb-4">Сохраненные компании</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 border border-neutral-800 rounded-lg p-3 hover:bg-neutral-900/80 hover:border-purple-900/50 transition-all cursor-pointer">
                            <div className="rounded-full size-10 bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                                A
                            </div>
                            <div>
                                <p className="font-semibold text-white">Alpha Solutions</p>
                                <p className="text-xs text-neutral-500">12 активных вакансий</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 border border-neutral-800 rounded-lg p-3 hover:bg-neutral-900/80 hover:border-purple-900/50 transition-all cursor-pointer">
                            <div className="rounded-full size-10 bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                                B
                            </div>
                            <div>
                                <p className="font-semibold text-white">Beta Innovations</p>
                                <p className="text-xs text-neutral-500">5 активных вакансий</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
