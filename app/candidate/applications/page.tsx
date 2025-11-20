"use client";

import { Search, Filter, Calendar } from "lucide-react";

export default function Applications() {
    const applications = [
        {
            position: "UI/UX Designer",
            company: "Tech Solutions Inc.",
            date: "15 мая 2024 г.",
            status: "reviewing",
            statusText: "Рассматривается",
            statusColor: "blue",
        },
        {
            position: "Product Manager",
            company: "Innovate Corp",
            date: "12 мая 2024 г.",
            status: "invited",
            statusText: "Приглашен",
            statusColor: "green",
        },
        {
            position: "Frontend Developer",
            company: "Creative Minds LLC",
            date: "10 мая 2024 г.",
            status: "rejected",
            statusText: "Отклонено",
            statusColor: "red",
        },
        {
            position: "Data Scientist",
            company: "Future AI",
            date: "5 мая 2024 г.",
            status: "sent",
            statusText: "Отправлено",
            statusColor: "purple",
        },
        {
            position: "Senior Backend Engineer",
            company: "DataStream",
            date: "2 мая 2024 г.",
            status: "archived",
            statusText: "Архивировано",
            statusColor: "gray",
        },
    ];

    const getStatusStyles = (color: string) => {
        const styles = {
            blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
            green: "bg-green-500/20 text-green-300 border-green-500/30",
            red: "bg-red-500/20 text-red-300 border-red-500/30",
            purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
            gray: "bg-gray-500/20 text-gray-300 border-gray-500/30",
        };
        return styles[color as keyof typeof styles] || styles.gray;
    };

    const getStatusDotColor = (color: string) => {
        const colors = {
            blue: "bg-blue-400",
            green: "bg-green-400",
            red: "bg-red-400",
            purple: "bg-purple-400",
            gray: "bg-gray-400",
        };
        return colors[color as keyof typeof colors] || colors.gray;
    };

    return (
        <>
            <div className="flex flex-wrap justify-between gap-4 p-4">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                    Мои отклики
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                <div className="md:col-span-2">
                    <label className="flex flex-col min-w-40 h-12 w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                            <div className="text-neutral-500 flex border-none bg-neutral-900/50 items-center justify-center pl-4 rounded-l-lg border-r-0">
                                <Search className="h-5 w-5" />
                            </div>
                            <input
                                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white focus:outline-0 focus:ring-2 focus:ring-purple-500/50 border-none bg-neutral-900/50 h-full placeholder:text-neutral-500 px-4 pl-2 text-base font-normal leading-normal"
                                placeholder="Поиск по вакансии или компании..."
                            />
                        </div>
                    </label>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2">
                    <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-neutral-900/50 hover:bg-neutral-900/80 text-neutral-400 hover:text-white transition-colors pl-4 pr-3 border border-neutral-800 cursor-pointer">
                        <Filter className="h-4 w-4" />
                        <p className="text-sm font-medium leading-normal">Статус</p>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-neutral-900/50 hover:bg-neutral-900/80 text-neutral-400 hover:text-white transition-colors pl-4 pr-3 border border-neutral-800">
                        <Calendar className="h-4 w-4" />
                        <p className="text-sm font-medium leading-normal">Дата</p>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="px-4 py-3">
                <div className="flex overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
                    <table className="w-full text-left">
                        <thead className="border-b border-b-neutral-800">
                            <tr className="bg-transparent">
                                <th className="px-6 py-4 text-left text-neutral-500 w-[35%] text-xs font-medium tracking-wider uppercase">
                                    Название вакансии
                                </th>
                                <th className="px-6 py-4 text-left text-neutral-500 w-[25%] text-xs font-medium tracking-wider uppercase">
                                    Компания
                                </th>
                                <th className="px-6 py-4 text-left text-neutral-500 w-[20%] text-xs font-medium tracking-wider uppercase">
                                    Дата отклика
                                </th>
                                <th className="px-6 py-4 text-left text-neutral-500 w-[20%] text-xs font-medium tracking-wider uppercase">
                                    Статус
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800">
                            {applications.map((app, idx) => (
                                <tr key={idx} className="hover:bg-neutral-900/50 transition-colors">
                                    <td className="h-[72px] px-6 py-4 w-[35%] text-white text-sm font-medium leading-normal">
                                        {app.position}
                                    </td>
                                    <td className="h-[72px] px-6 py-4 w-[25%] text-neutral-400 text-sm font-normal leading-normal">
                                        {app.company}
                                    </td>
                                    <td className="h-[72px] px-6 py-4 w-[20%] text-neutral-400 text-sm font-normal leading-normal">
                                        {app.date}
                                    </td>
                                    <td className="h-[72px] px-6 py-4 w-[20%] text-sm font-normal leading-normal">
                                        <div
                                            className={`inline-flex items-center gap-2 rounded-full py-1 px-3 border ${getStatusStyles(
                                                app.statusColor
                                            )}`}
                                        >
                                            <div className={`size-2 rounded-full ${getStatusDotColor(app.statusColor)}`}></div>
                                            <span className="text-xs font-medium">{app.statusText}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
