"use client";

import { HRSidebar } from "@/components/HRSidebar";
import { usePathname } from "next/navigation";

export default function HRLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isLandingPage = pathname === "/hr";

    if (isLandingPage) {
        return <>{children}</>;
    }

    return (
        <div className="flex min-h-screen bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/20 via-black to-black pointer-events-none"></div>

            <HRSidebar />

            <main className="relative z-10 flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto h-screen">
                <div className="mx-auto max-w-7xl">
                    {children}
                </div>
            </main>
        </div>
    );
}
