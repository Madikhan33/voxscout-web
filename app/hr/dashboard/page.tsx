"use client";

export default function HRDashboard() {
    const recentCandidates = [
        { initials: "OR", name: "Olivia Rhye", email: "olivia@email.com", score: "9.2/10", status: "Completed", statusColor: "green" },
        { initials: "PB", name: "Phoenix Baker", email: "phoenix@email.com", score: "8.8/10", status: "Completed", statusColor: "green" },
        { initials: "LS", name: "Lana Steiner", email: "lana@email.com", score: "8.5/10", status: "Completed", statusColor: "green" },
        { initials: "DW", name: "Demi Wilkinson", email: "demi@email.com", score: "7.9/10", status: "Completed", statusColor: "green" },
        { initials: "CW", name: "Candice Wu", email: "candice@email.com", score: "No score", status: "In Progress", statusColor: "yellow" },
    ];

    return (
        <>
            <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
                <div>
                    <p className="text-white text-3xl font-bold leading-tight tracking-tight">Dashboard</p>
                    <p className="text-neutral-500 mt-1">Key metrics of your hiring process.</p>
                </div>
            </header>

            {/* Stats Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="flex flex-col gap-2 rounded-lg p-6 bg-neutral-900/50 border border-neutral-800 hover:border-purple-900/50 transition-all backdrop-blur-sm">
                    <p className="text-neutral-500 text-sm font-medium leading-normal">Active Interviews</p>
                    <p className="text-white tracking-tight text-3xl font-bold leading-tight">12</p>
                </div>

                <div className="flex flex-col gap-2 rounded-lg p-6 bg-neutral-900/50 border border-neutral-800 hover:border-purple-900/50 transition-all backdrop-blur-sm">
                    <p className="text-neutral-500 text-sm font-medium leading-normal">Candidates Invited</p>
                    <p className="text-white tracking-tight text-3xl font-bold leading-tight">315</p>
                </div>

                <div className="flex flex-col gap-2 rounded-lg p-6 bg-neutral-900/50 border border-neutral-800 hover:border-purple-900/50 transition-all backdrop-blur-sm">
                    <p className="text-neutral-500 text-sm font-medium leading-normal">Completed Interviews</p>
                    <p className="text-white tracking-tight text-3xl font-bold leading-tight">250</p>
                </div>

                <div className="flex flex-col gap-2 rounded-lg p-6 bg-neutral-900/50 border border-neutral-800 hover:border-purple-900/50 transition-all backdrop-blur-sm">
                    <p className="text-neutral-500 text-sm font-medium leading-normal">Average Score</p>
                    <p className="text-white tracking-tight text-3xl font-bold leading-tight">
                        8.2<span className="text-xl text-neutral-500">/10</span>
                    </p>
                </div>
            </section>

            {/* Charts */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col gap-4 rounded-lg border border-neutral-800 p-6 bg-neutral-900/50 backdrop-blur-sm">
                    <h3 className="text-white text-base font-medium leading-normal">Conversion Funnel</h3>
                    <p className="text-neutral-500 text-sm -mt-2">Last 30 days</p>
                    <div className="grid grid-cols-3 gap-4 text-center mt-2">
                        <div>
                            <p className="text-3xl font-bold text-purple-400">315</p>
                            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-2">Invited</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-neutral-300">292</p>
                            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-2">Started</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-neutral-300">250</p>
                            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-2">Completed</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 rounded-lg border border-neutral-800 p-6 bg-neutral-900/50 backdrop-blur-sm">
                    <h3 className="text-white text-base font-medium leading-normal">Score Distribution</h3>
                    <p className="text-neutral-500 text-sm -mt-2">Last 30 days</p>
                    <div className="grid grid-cols-5 gap-2 text-center mt-2">
                        <div>
                            <p className="text-2xl font-bold text-neutral-300">12</p>
                            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-2">0-2</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-neutral-300">35</p>
                            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-2">2-4</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-neutral-300">78</p>
                            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-2">4-6</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-purple-400">95</p>
                            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-2">6-8</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-neutral-300">30</p>
                            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-2">8-10</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Candidates */}
            <section>
                <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-6">
                    <h3 className="text-white text-base font-medium leading-normal mb-4">Recent Candidates</h3>
                    <div className="flow-root">
                        <div className="-my-4 divide-y divide-neutral-800">
                            {recentCandidates.map((candidate, idx) => (
                                <div key={idx} className="flex items-center justify-between gap-4 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="size-10 rounded-full flex items-center justify-center bg-purple-950/30 text-purple-400 font-bold border border-purple-900/50">
                                            {candidate.initials}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">{candidate.name}</p>
                                            <p className="text-sm text-neutral-500">{candidate.email}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-white">Score: {candidate.score}</p>
                                        <span
                                            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${candidate.statusColor === "green"
                                                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                                    : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                                                }`}
                                        >
                                            {candidate.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
