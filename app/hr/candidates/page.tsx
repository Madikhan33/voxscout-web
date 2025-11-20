"use client";

import { Search, Filter, Tag, Briefcase, Star } from "lucide-react";

export default function HRCandidates() {
    const candidates = [
        {
            initials: "OR",
            name: "Olivia Rhye",
            email: "olivia@example.com",
            position: "Frontend Developer",
            status: "review",
            statusText: "Under Review",
            score: 85,
            date: "Jan 15, 2024",
        },
        {
            initials: "PB",
            name: "Phoenix Baker",
            email: "phoenix@example.com",
            position: "UI/UX Designer",
            status: "accepted",
            statusText: "Accepted",
            score: 92,
            date: "Jan 14, 2024",
        },
        {
            initials: "LS",
            name: "Lana Steiner",
            email: "lana@example.com",
            position: "Product Manager",
            status: "new",
            statusText: "New",
            score: 78,
            date: "Jan 12, 2024",
        },
        {
            initials: "DW",
            name: "Demi Wilkinson",
            email: "demi@example.com",
            position: "Frontend Developer",
            status: "rejected",
            statusText: "Rejected",
            score: 65,
            date: "Jan 11, 2024",
        },
        {
            initials: "CW",
            name: "Candice Wu",
            email: "candice@example.com",
            position: "UI/UX Designer",
            status: "review",
            statusText: "Under Review",
            score: 88,
            date: "Jan 10, 2024",
        },
    ];

    const getStatusStyles = (status: string) => {
        const styles = {
            review: "bg-blue-500/10 text-blue-400 border-blue-500/20",
            accepted: "bg-green-500/10 text-green-400 border-green-500/20",
            new: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
            rejected: "bg-red-500/10 text-red-400 border-red-500/20",
        };
        return styles[status as keyof typeof styles] || styles.review;
    };

    const getScoreColor = (score: number) => {
        if (score >= 85) return "bg-green-500";
        if (score >= 70) return "bg-yellow-500";
        return "bg-red-500";
    };

    return (
        <>
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                <div className="flex flex-col gap-1">
                    <h2 className="text-white text-3xl font-bold leading-tight tracking-tight">Candidates</h2>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                    <Search className="text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5" />
                    <input
                        className="w-full rounded-lg text-neutral-200 focus:outline-0 focus:ring-2 focus:ring-purple-500 border border-neutral-800 bg-neutral-900/50 h-11 placeholder:text-neutral-500 pl-10 pr-4 text-base font-normal leading-normal transition-all"
                        placeholder="Search by candidate name..."
                    />
                </div>

                <div className="flex gap-2.5 items-center flex-wrap">
                    <button className="flex h-11 items-center justify-center gap-x-2 rounded-lg bg-neutral-900/50 border border-neutral-800 px-4 hover:border-purple-900/50 hover:bg-neutral-900/80 transition-all text-neutral-300 cursor-pointer">
                        <Tag className="text-neutral-500 h-4 w-4" />
                        <p className="text-sm font-medium leading-normal">Status: All</p>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <button className="flex h-11 items-center justify-center gap-x-2 rounded-lg bg-neutral-900/50 border border-neutral-800 px-4 hover:border-purple-900/50 transition-all text-neutral-300">
                        <Briefcase className="text-neutral-500 h-4 w-4" />
                        <p className="text-sm font-medium leading-normal">Position: All</p>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <button className="flex h-11 items-center justify-center gap-x-2 rounded-lg bg-neutral-900/50 border border-neutral-800 px-4 hover:border-purple-900/50 transition-all text-neutral-300">
                        <Star className="text-neutral-500 h-4 w-4" />
                        <p className="text-sm font-medium leading-normal">Score</p>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-neutral-800">
                        <thead className="bg-neutral-900/40">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                    Candidate
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                    Position
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                    Overall Score
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                    Interview Date
                                </th>
                                <th className="relative px-6 py-3">
                                    <span className="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-neutral-800">
                            {candidates.map((candidate, idx) => (
                                <tr key={idx} className="hover:bg-neutral-800/40 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 size-10 flex items-center justify-center rounded-full bg-purple-950/30 text-sm font-semibold text-purple-400 border border-purple-900/50">
                                                {candidate.initials}
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-white">{candidate.name}</div>
                                                <div className="text-sm text-neutral-500">{candidate.email}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-300">{candidate.position}</td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles(
                                                candidate.status
                                            )}`}
                                        >
                                            {candidate.statusText}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2.5 h-2.5 rounded-full ${getScoreColor(candidate.score)}`}></div>
                                            <div className="text-sm font-medium text-white">{candidate.score}/100</div>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">{candidate.date}</td>

                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="flex items-center gap-1.5 h-9 px-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-colors cursor-pointer">
                                            Details
                                        </button>
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
