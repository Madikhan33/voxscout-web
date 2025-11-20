"use client";

import { Search, Building2, MapPin, Users, Briefcase } from "lucide-react";

export default function Companies() {
    const companies = [
        {
            name: "TechCorp",
            industry: "Technology",
            location: "Moscow, Russia",
            employees: "500-1000",
            openPositions: 12,
            description: "Leading technology company specializing in innovative business solutions.",
        },
        {
            name: "Innovate LLC",
            industry: "Startup",
            location: "Saint Petersburg, Russia",
            employees: "50-200",
            openPositions: 8,
            description: "Fast-growing fintech startup with ambitious plans for the future.",
        },
        {
            name: "DataFlow",
            industry: "Data Analytics",
            location: "Moscow, Russia",
            employees: "200-500",
            openPositions: 15,
            description: "Company providing solutions for big data analysis and business intelligence.",
        },
        {
            name: "Creative Minds",
            industry: "Design",
            location: "Kazan, Russia",
            employees: "20-50",
            openPositions: 5,
            description: "Creative agency specializing in design and branding.",
        },
        {
            name: "Future AI",
            industry: "Artificial Intelligence",
            location: "Moscow, Russia",
            employees: "100-200",
            openPositions: 20,
            description: "Research company working on cutting-edge AI technologies.",
        },
        {
            name: "DataStream",
            industry: "Cloud Technologies",
            location: "Novosibirsk, Russia",
            employees: "300-500",
            openPositions: 10,
            description: "Provider of cloud solutions for enterprise clients.",
        },
    ];

    return (
        <>
            <div className="mb-8">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-6">
                    Company List
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
                        <input
                            className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg pl-11 pr-4 py-3 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                            placeholder="Search companies..."
                            type="text"
                        />
                    </div>

                    <select className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors">
                        <option>All Industries</option>
                        <option>Technology</option>
                        <option>Finance</option>
                        <option>Design</option>
                        <option>Marketing</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {companies.map((company, idx) => (
                    <div
                        key={idx}
                        className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-purple-900/50 transition-all flex flex-col h-full"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="size-12 rounded-lg bg-purple-950/30 flex items-center justify-center">
                                    <Building2 className="text-purple-400 h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">{company.name}</h3>
                                    <p className="text-neutral-500 text-sm">{company.industry}</p>
                                </div>
                            </div>
                            <button className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <p className="text-neutral-400 text-sm mb-4 line-clamp-3 min-h-[3.6rem]">{company.description}</p>

                        <div className="space-y-2 mb-4 flex-grow">
                            <div className="flex items-center gap-2 text-neutral-500 text-sm">
                                <MapPin className="h-4 w-4" />
                                <span>{company.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-500 text-sm">
                                <Users className="h-4 w-4" />
                                <span>{company.employees} employees</span>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-500 text-sm">
                                <Briefcase className="h-4 w-4" />
                                <span>{company.openPositions} open positions</span>
                            </div>
                        </div>

                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-lg transition-colors cursor-pointer mt-auto">
                            View Positions
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}
