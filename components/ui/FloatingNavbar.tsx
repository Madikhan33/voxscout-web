"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: React.ReactNode;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();
    const pathname = usePathname();
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <>
            {/* Single row navigation */}
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex fixed top-0 left-0 right-0 z-[5000] items-center justify-between px-8 py-4 backdrop-blur-xl bg-black/95 relative",
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent",
                    className
                )}
            >
                {/* VoxScout Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <svg className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" x2="12" y1="19" y2="22"></line>
                    </svg>
                    <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">VoxScout</span>
                </Link>

                {/* Navigation buttons */}
                <nav className="flex items-center gap-8">
                    {navItems.map((navItem: any, idx: number) => (
                        <Link
                            key={`link=${idx}`}
                            href={navItem.link}
                            className={cn(
                                "relative text-white/90 items-center flex space-x-2 hover:text-white transition-all px-4 py-2 rounded-lg hover:bg-white/10 group"
                            )}
                        >
                            <span className="block sm:hidden text-white">{navItem.icon}</span>
                            <span className="hidden sm:block text-[15px] font-semibold tracking-wide relative">
                                {navItem.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </Link>
                    ))}
                </nav>

                {/* Sign In button */}
                <Link href="/signin" className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-base hover:bg-neutral-200 transition-all shadow-[0_4px_12px_rgba(255,255,255,0.2)] hover:shadow-[0_6px_16px_rgba(255,255,255,0.3)]">
                    Sign In
                </Link>
            </motion.div>
        </>
    );
};
