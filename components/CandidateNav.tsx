"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";
import { useState } from "react";

export function CandidateNav() {
    const pathname = usePathname();
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const navItems = [
        { name: "Dashboard", href: "/candidate/dashboard" },
        { name: "My Applications", href: "/candidate/applications" },
        { name: "Practice", href: "/candidate/practice" },
        { name: "Company List", href: "/candidate/companies" },
    ];

    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-4 sm:px-6 py-3">
            <Link href="/candidate/dashboard" className="flex items-center gap-4 text-white">
                <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">VoxScout</h2>
            </Link>

            <div className="flex flex-1 justify-end items-center gap-4 sm:gap-8">
                <nav className="hidden sm:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-medium leading-normal transition-colors ${pathname === item.href
                                    ? "text-purple-400 font-bold"
                                    : "text-white/80 hover:text-white"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors">
                    <Bell className="h-5 w-5" />
                </button>

                <div className="relative">
                    <button
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 hover:ring-2 hover:ring-purple-400 transition-all"
                        style={{
                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmx9M3X3QDpJTIiBUqNa3HH4zc68YMka7JVPCPSpI7q1b__0DonJWrBKr3MGSRnHy4PbiZA_bhGy0AKpYfmj3fxXCsE2VGlENN4-8WBAef7hCDbO9plOwrc7_ix_XKoNTl4rCkswJpXCL6laqSAWWDEDEBXNOPpGbf73Z-pMifBWtmsELmEbWXOPWiFldo4R6rUKYOx4dLj1fhy-0zX-9-TyFHiT9ZpIaUpptc-RgNM-StvGE2WIjCa3T1eEQc-1tsd1s0pWWegth6")',
                        }}
                    />

                    {showProfileMenu && (
                        <>
                            <div
                                className="fixed inset-0 z-10"
                                onClick={() => setShowProfileMenu(false)}
                            />
                            <div className="absolute right-0 mt-2 w-64 rounded-xl bg-neutral-900 border border-neutral-800 shadow-xl z-20 overflow-hidden">
                                <div className="p-4 border-b border-neutral-800">
                                    <p className="text-white font-semibold">Ekaterina Ivanova</p>
                                    <p className="text-neutral-400 text-sm">e.ivanova@email.com</p>
                                </div>
                                <div className="py-2">
                                    <Link
                                        href="/candidate/profile"
                                        className="flex items-center gap-3 px-4 py-2.5 text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                                        onClick={() => setShowProfileMenu(false)}
                                    >
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        Profile
                                    </Link>
                                    <Link
                                        href="/"
                                        className="flex items-center gap-3 px-4 py-2.5 text-red-400 hover:bg-red-500/10 transition-colors"
                                        onClick={() => setShowProfileMenu(false)}
                                    >
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        Log Out
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
