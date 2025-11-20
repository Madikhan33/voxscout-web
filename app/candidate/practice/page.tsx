"use client";

import { Search, Code, Palette, Package, Brain, Brush, Key } from "lucide-react";
import { useState } from "react";

export default function Practice() {
    const [showCodeModal, setShowCodeModal] = useState(false);

    const interviews = [
        {
            title: "UI/UX Designer",
            company: "TechCorp",
            description: "Development of intuitive and aesthetically appealing interfaces for our web and mobile products.",
            icon: Palette,
            limited: false,
        },
        {
            title: "Frontend Developer",
            company: "Innovate LLC",
            description: "Creating modern user interfaces using React and TypeScript.",
            icon: Code,
            limited: true,
        },
        {
            title: "Product Manager",
            company: "DataFlow",
            description: "Managing the product lifecycle from idea to launch and further development.",
            icon: Package,
            limited: false,
        },
        {
            title: "Senior Product Designer",
            company: "Stripe",
            description: "Designing complex and user-friendly financial tools for a global audience.",
            icon: Palette,
            limited: false,
        },
        {
            title: "UX Researcher",
            company: "Google",
            description: "Conducting user research to improve products and identify new needs.",
            icon: Brain,
            limited: false,
        },
        {
            title: "Lead UI Designer",
            company: "Figma",
            description: "Leading a team of UI designers in creating innovative solutions for our product.",
            icon: Brush,
            limited: true,
        },
    ];

    return (
        <>
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 sm:p-8">
                <div className="mb-10">
                    <h1 className="text-white text-2xl font-bold mb-2">Private Interviews</h1>
                    <p className="text-neutral-400 mb-4 text-sm">
                        Enter the code provided by the recruiter to start a private interview.
                    </p>
                    <button
                        onClick={() => setShowCodeModal(true)}
                        className="inline-flex w-full sm:w-auto justify-center text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                    >
                        Start Interview
                    </button>
                </div>

                <div className="border-t border-neutral-800 pt-10">
                    <h2 className="text-white text-2xl font-bold mb-6">Open Interviews</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
                            <input
                                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg pl-11 pr-4 py-2.5 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                placeholder="Search by title or company..."
                                type="text"
                            />
                        </div>

                        <div>
                            <select className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors">
                                <option>All Categories</option>
                                <option>Frontend Developer</option>
                                <option>UI/UX Designer</option>
                                <option>Product Manager</option>
                                <option>Data Scientist</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {interviews.map((interview, idx) => {
                            const Icon = interview.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-5 flex flex-col hover:border-purple-900/50 transition-all"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="size-12 rounded-lg bg-purple-950/30 flex items-center justify-center">
                                            <Icon className="text-purple-400 h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold">{interview.title}</h3>
                                            <p className="text-neutral-500 text-sm">{interview.company}</p>
                                        </div>
                                    </div>

                                    <p className="text-neutral-400 text-sm mb-5 flex-grow">{interview.description}</p>

                                    {interview.limited && (
                                        <div className="text-xs text-amber-400/80 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1 mb-5 self-start">
                                            Limited spots available
                                        </div>
                                    )}

                                    <button
                                        onClick={() => interview.limited && setShowCodeModal(true)}
                                        className="w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-lg transition-colors mt-auto cursor-pointer"
                                    >
                                        Take Interview
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showCodeModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowCodeModal(false)} />
                    <div className="relative w-full max-w-md rounded-xl bg-neutral-900 border border-neutral-800 p-8 shadow-2xl">
                        <button
                            onClick={() => setShowCodeModal(false)}
                            className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors cursor-pointer"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h3 className="text-xl font-bold text-white mb-2">Enter Access Code</h3>
                        <p className="text-neutral-400 text-sm mb-6">Please enter the unique code to start the interview.</p>

                        <div className="space-y-4">
                            <div className="relative">
                                <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
                                <input
                                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg pl-12 pr-4 py-3 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                    placeholder="Enter unique code"
                                    type="text"
                                />
                            </div>
                            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer">
                                Confirm and Start
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
