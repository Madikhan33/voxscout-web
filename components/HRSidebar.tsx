"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Mic, Users, HelpCircle, LogOut } from "lucide-react";
import { useState } from "react";

export function HRSidebar() {
    const pathname = usePathname();
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const navItems = [
        { name: "Дашборд", href: "/hr/dashboard", icon: LayoutDashboard },
        { name: "Интервью", href: "/hr/interviews", icon: Mic },
        { name: "Кандидаты", href: "/hr/candidates", icon: Users },
    ];

    return (
        <aside className="relative z-20 flex-shrink-0 w-64 bg-black border-r border-neutral-800">
            <div className="flex h-full flex-col p-4 justify-between">
                <div>
                    <Link href="/hr/dashboard" className="flex items-center gap-3 p-2 h-[60px]">
                        <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                            <line x1="12" x2="12" y1="19" y2="22"></line>
                        </svg>
                        <h1 className="text-white text-xl font-bold leading-normal">VoxScout</h1>
                    </Link>

                    <nav className="flex flex-col gap-2 mt-6">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${isActive ? "bg-purple-600 text-white" : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                                        }`}
                                >
                                    <Icon className="h-5 w-5" />
                                    <p className="text-sm font-medium leading-normal">{item.name}</p>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <nav className="flex flex-col gap-2">
                    {/* Profile Avatar Button */}
                    <div className="relative mb-2">
                        <button
                            onClick={() => setShowProfileMenu(!showProfileMenu)}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all"
                        >
                            <div
                                className="h-8 w-8 rounded-full bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmx9M3X3QDpJTIiBUqNa3HH4zc68YMka7JVPCPSpI7q1b__0DonJWrBKr3MGSRnHy4PbiZA_bhGy0AKpYfmj3fxXCsE2VGlENN4-8WBAef7hCDbO9plOwrc7_ix_XKoNTl4rCkswJpXCL6laqSAWWDEDEBXNOPpGbf73Z-pMifBWtmsELmEbWXOPWiFldo4R6rUKYOx4dLj1fhy-0zX-9-TyFHiT9ZpIaUpptc-RgNM-StvGE2WIjCa3T1eEQc-1tsd1s0pWWegth6")',
                                }}
                            />
                            <p className="text-sm font-medium leading-normal">Профиль</p>
                        </button>

                        {showProfileMenu && (
                            <>
                                <div className="fixed inset-0 z-10" onClick={() => setShowProfileMenu(false)} />
                                <div className="absolute bottom-full left-0 mb-2 w-full rounded-xl bg-neutral-900 border border-neutral-800 shadow-xl z-20 overflow-hidden">
                                    <div className="p-4 border-b border-neutral-800">
                                        <p className="text-white font-semibold">Екатерина HR</p>
                                        <p className="text-neutral-400 text-sm">ekaterina.hr@voxscout.com</p>
                                    </div>
                                    <div className="py-2">
                                        <Link
                                            href="/hr/profile"
                                            className="flex items-center gap-3 px-4 py-2.5 text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                                            onClick={() => setShowProfileMenu(false)}
                                        >
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            Настройки
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all">
                        <HelpCircle className="h-5 w-5" />
                        <p className="text-sm font-medium leading-normal">Поддержка</p>
                    </button>

                    <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all">
                        <LogOut className="h-5 w-5" />
                        <p className="text-sm font-medium leading-normal">Выйти</p>
                    </Link>
                </nav>
            </div>
        </aside>
    );
}
