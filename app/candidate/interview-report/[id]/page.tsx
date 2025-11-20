"use client";

import { useParams } from "next/navigation";
import { CheckCircle, Lightbulb } from "lucide-react";

export default function InterviewReport() {
    const params = useParams();
    const id = params.id;

    // Mock data - в реальном приложении это будет загружаться из API
    const reports: Record<string, any> = {
        "1": {
            title: "UI/UX Designer at TechCorp",
            date: "28 мая 2024",
            overallScore: 9.2,
            scoreLabel: "Отличный результат!",
            strengths: [
                "Глубокое знание принципов UX/UI дизайна",
                "Четкая и структурированная коммуникация",
                "Примеры из релевантного опыта работы",
            ],
            improvements: [
                "Можно подробнее раскрыть тему работы с дизайн-системами",
                "При ответе на поведенческие вопросы, старайтесь использовать STAR метод",
            ],
            breakdown: [
                { category: "Design Skills", score: 9.5, percentage: 95 },
                { category: "Communication", score: 9.0, percentage: 90 },
                { category: "Problem Solving", score: 9.0, percentage: 90 },
                { category: "Cultural Fit", score: 9.2, percentage: 92 },
            ],
            keyMoments: [
                {
                    question: "Расскажите о вашем опыте с дизайн-системами.",
                    answer:
                        "Кандидат продемонстрировал уверенное владение темой. Ответ был структурированным, с приведением конкретных примеров создания компонентов и работы с Figma. Особенно ценным был пример создания единой дизайн-системы для нескольких продуктов.",
                },
                {
                    question: "Как бы вы подошли к редизайну существующего продукта?",
                    answer:
                        "Ответ включал ключевые этапы: исследование пользователей, анализ конкурентов, создание прототипов и тестирование. Однако, не был упомянут анализ метрик и A/B тестирование. Рекомендуется глубже изучить data-driven подход к дизайну.",
                },
            ],
        },
        "2": {
            title: "Frontend Developer at Innovate LLC",
            date: "25 мая 2024",
            overallScore: 8.5,
            scoreLabel: "Хороший результат!",
            strengths: [
                "Отличное знание React и современного JavaScript",
                "Опыт работы с TypeScript и Next.js",
                "Понимание принципов оптимизации производительности",
            ],
            improvements: [
                "Стоит углубить знания в области тестирования (Jest, React Testing Library)",
                "Больше практики с CSS-in-JS решениями",
            ],
            breakdown: [
                { category: "Technical Skills", score: 9.0, percentage: 90 },
                { category: "Communication", score: 8.0, percentage: 80 },
                { category: "Problem Solving", score: 8.5, percentage: 85 },
                { category: "Cultural Fit", score: 8.5, percentage: 85 },
            ],
            keyMoments: [
                {
                    question: "Расскажите о вашем опыте с React Hooks.",
                    answer:
                        "Кандидат продемонстрировал уверенное владение темой. Ответ был структурированным, с приведением конкретных примеров использования useState, useEffect и useContext из прошлых проектов. Особенно ценным был пример создания кастомного хука для работы с API.",
                },
                {
                    question: "Как бы вы подошли к оптимизации производительности веб-приложения?",
                    answer:
                        "Ответ включал ключевые техники, такие как code-splitting, lazy loading и мемоизация компонентов. Однако, не был упомянут анализ бандла и использование инструментов вроде Lighthouse. Рекомендуется глубже изучить инструменты для профилирования производительности.",
                },
            ],
        },
    };

    const report = reports[id as string] || reports["1"];

    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white">Отчет по интервью: {report.title}</h1>
                <p className="text-neutral-500 mt-2">Проанализировано AI VoxScout ・ {report.date}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                    {/* Overall Score */}
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 text-center flex flex-col items-center justify-center">
                        <h2 className="text-lg font-semibold text-white mb-4">Общая оценка</h2>
                        <div className="relative size-40">
                            <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <circle
                                    className="stroke-current text-neutral-800"
                                    cx="18"
                                    cy="18"
                                    fill="none"
                                    r="16"
                                    strokeWidth="3"
                                ></circle>
                                <circle
                                    className="stroke-current text-purple-500 transition-all duration-500"
                                    cx="18"
                                    cy="18"
                                    fill="none"
                                    r="16"
                                    strokeDasharray={`${(report.overallScore / 10) * 100}, 100`}
                                    strokeWidth="3"
                                ></circle>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-5xl font-bold text-white">{report.overallScore}</span>
                            </div>
                        </div>
                        <p className="text-neutral-400 mt-4">{report.scoreLabel}</p>
                    </div>

                    {/* Strengths */}
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                        <h2 className="text-lg font-semibold text-white mb-4">Сильные стороны</h2>
                        <ul className="space-y-3">
                            {report.strengths.map((strength: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="text-green-400 mt-0.5 h-5 w-5 flex-shrink-0" />
                                    <span className="text-neutral-300">{strength}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Improvements */}
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                        <h2 className="text-lg font-semibold text-white mb-4">Зоны роста</h2>
                        <ul className="space-y-3">
                            {report.improvements.map((improvement: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <Lightbulb className="text-yellow-400 mt-0.5 h-5 w-5 flex-shrink-0" />
                                    <span className="text-neutral-300">{improvement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Breakdown */}
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                        <h2 className="text-lg font-semibold text-white mb-6">Детальная разбивка</h2>
                        <div className="space-y-5">
                            {report.breakdown.map((item: any, idx: number) => (
                                <div key={idx}>
                                    <div className="flex justify-between items-center mb-1.5">
                                        <p className="font-medium text-neutral-300">{item.category}</p>
                                        <p className="font-semibold text-purple-400 text-sm">{item.score} / 10</p>
                                    </div>
                                    <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-purple-500 rounded-full transition-all duration-500"
                                            style={{ width: `${item.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Moments */}
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                        <h2 className="text-lg font-semibold text-white mb-4">Расшифровка ключевых моментов</h2>
                        <div className="space-y-4">
                            {report.keyMoments.map((moment: any, idx: number) => (
                                <div key={idx} className={idx > 0 ? "border-t border-neutral-800 pt-4" : ""}>
                                    <h3 className="font-semibold text-purple-400">{moment.question}</h3>
                                    <p className="text-neutral-300 mt-1 leading-relaxed">{moment.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
