"use client";

import { useState } from "react";
import { CheckCircle, Link as LinkIcon } from "lucide-react";

export default function HRProfile() {
    const [notifications, setNotifications] = useState({
        interviewCompleted: true,
        newInterview: true,
        weeklyReport: false,
    });

    return (
        <>
            <div className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight text-white">Настройки</h1>
            </div>

            <div className="flex gap-12">
                <nav className="flex flex-col gap-1 w-48 shrink-0">
                    <a
                        className="px-4 py-2 text-sm rounded-lg font-medium text-white bg-neutral-900/50 transition-colors"
                        href="#profile"
                    >
                        Профиль
                    </a>
                    <a
                        className="px-4 py-2 text-sm rounded-lg font-medium text-neutral-400 hover:bg-neutral-900/50 hover:text-white transition-colors"
                        href="#notifications"
                    >
                        Уведомления
                    </a>
                    <a
                        className="px-4 py-2 text-sm rounded-lg font-medium text-neutral-400 hover:bg-neutral-900/50 hover:text-white transition-colors"
                        href="#integrations"
                    >
                        Интеграции
                    </a>
                </nav>

                <div className="flex-1">
                    {/* Profile Section */}
                    <section className="mb-12" id="profile">
                        <div className="border-b border-neutral-800 pb-4 mb-8">
                            <h2 className="text-white text-xl font-semibold">Профиль</h2>
                        </div>

                        <div className="flex flex-col gap-6 rounded-lg bg-neutral-900/50 backdrop-blur-sm p-6 border border-neutral-800">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col flex-1">
                                    <p className="text-white text-sm font-medium pb-2">Полное имя</p>
                                    <input
                                        className="flex w-full rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-neutral-800 bg-neutral-900/50 h-12 px-4 text-base font-normal transition-colors"
                                        defaultValue="Екатерина HR"
                                    />
                                </label>

                                <label className="flex flex-col flex-1">
                                    <p className="text-white text-sm font-medium pb-2">Email</p>
                                    <input
                                        className="flex w-full rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-neutral-800 bg-neutral-900/50 h-12 px-4 text-base font-normal transition-colors"
                                        defaultValue="ekaterina.hr@voxscout.com"
                                    />
                                </label>
                            </div>

                            <div className="flex justify-end gap-3 pt-2">
                                <button className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-purple-600 hover:bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500 transition-colors cursor-pointer">
                                    Сохранить изменения
                                </button>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-white mb-4">Изменить пароль</h3>
                            <div className="flex flex-col gap-6 rounded-lg bg-neutral-900/50 backdrop-blur-sm p-6 border border-neutral-800">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col flex-1">
                                        <p className="text-white text-sm font-medium pb-2">Новый пароль</p>
                                        <input
                                            className="flex w-full rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-neutral-800 bg-neutral-900/50 h-12 px-4 text-base font-normal transition-colors"
                                            placeholder="Введите новый пароль"
                                            type="password"
                                        />
                                    </label>

                                    <label className="flex flex-col flex-1">
                                        <p className="text-white text-sm font-medium pb-2">Подтвердите новый пароль</p>
                                        <input
                                            className="flex w-full rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-neutral-800 bg-neutral-900/50 h-12 px-4 text-base font-normal transition-colors"
                                            placeholder="Подтвердите новый пароль"
                                            type="password"
                                        />
                                    </label>
                                </div>

                                <div className="flex justify-end gap-3 pt-2">
                                    <button className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-purple-600 hover:bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500 transition-colors">
                                        Обновить пароль
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Notifications Section */}
                    <section className="mb-12" id="notifications">
                        <div className="border-b border-neutral-800 pb-4 mb-8">
                            <h2 className="text-white text-xl font-semibold">Уведомления</h2>
                        </div>

                        <div className="flex flex-col divide-y divide-neutral-800 rounded-lg bg-neutral-900/50 backdrop-blur-sm border border-neutral-800">
                            <div className="p-6 flex items-center justify-between">
                                <div>
                                    <p className="text-white font-medium">Кандидат завершил интервью</p>
                                    <p className="text-neutral-400 text-sm">
                                        Получать уведомление, когда кандидат отправил свое AI-интервью.
                                    </p>
                                </div>
                                <button
                                    onClick={() =>
                                        setNotifications({ ...notifications, interviewCompleted: !notifications.interviewCompleted })
                                    }
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${notifications.interviewCompleted ? "bg-purple-600" : "bg-neutral-700"
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.interviewCompleted ? "translate-x-6" : "translate-x-1"
                                            }`}
                                    />
                                </button>
                            </div>

                            <div className="p-6 flex items-center justify-between">
                                <div>
                                    <p className="text-white font-medium">Новое интервью запланировано</p>
                                    <p className="text-neutral-400 text-sm">Получать уведомление о создании нового интервью.</p>
                                </div>
                                <button
                                    onClick={() => setNotifications({ ...notifications, newInterview: !notifications.newInterview })}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${notifications.newInterview ? "bg-purple-600" : "bg-neutral-700"
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.newInterview ? "translate-x-6" : "translate-x-1"
                                            }`}
                                    />
                                </button>
                            </div>

                            <div className="p-6 flex items-center justify-between">
                                <div>
                                    <p className="text-white font-medium">Еженедельный отчет</p>
                                    <p className="text-neutral-400 text-sm">
                                        Получать еженедельный отчет о вашей рекрутинговой деятельности.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setNotifications({ ...notifications, weeklyReport: !notifications.weeklyReport })}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${notifications.weeklyReport ? "bg-purple-600" : "bg-neutral-700"
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.weeklyReport ? "translate-x-6" : "translate-x-1"
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Integrations Section */}
                    <section className="mb-12" id="integrations">
                        <div className="border-b border-neutral-800 pb-4 mb-8">
                            <h2 className="text-white text-xl font-semibold">Интеграции</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col justify-between gap-4 rounded-lg bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-6">
                                <div className="flex items-start gap-4">
                                    <div className="size-12 rounded-lg bg-neutral-800 flex items-center justify-center border border-neutral-700">
                                        <CheckCircle className="text-green-400 h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Greenhouse</p>
                                        <p className="text-neutral-400 text-sm mt-1">
                                            Синхронизируйте кандидатов и результаты интервью с вашей ATS.
                                        </p>
                                    </div>
                                </div>
                                <button className="w-full px-5 py-2.5 rounded-lg text-sm font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
                                    Подключено
                                </button>
                            </div>

                            <div className="flex flex-col justify-between gap-4 rounded-lg bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-6">
                                <div className="flex items-start gap-4">
                                    <div className="size-12 rounded-lg bg-neutral-800 flex items-center justify-center border border-neutral-700">
                                        <LinkIcon className="text-blue-400 h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Lever</p>
                                        <p className="text-neutral-400 text-sm mt-1">
                                            Оптимизируйте свой процесс найма, подключившись к Lever.
                                        </p>
                                    </div>
                                </div>
                                <button className="w-full px-5 py-2.5 rounded-lg text-sm font-semibold bg-neutral-800 hover:bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500 transition-colors cursor-pointer">
                                    Подключить
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
