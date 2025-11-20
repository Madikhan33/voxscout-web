"use client";

import { CandidateNav } from "@/components/CandidateNav";

export default function CandidateLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-black text-white">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/20 via-black to-black pointer-events-none"></div>

            <div className="relative z-10 flex flex-col flex-1">
                <CandidateNav />
                <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
