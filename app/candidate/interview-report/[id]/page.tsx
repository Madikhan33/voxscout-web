"use client";

import { useParams } from "next/navigation";
import { CheckCircle, Lightbulb } from "lucide-react";

export default function InterviewReport() {
    const params = useParams();
    const id = params.id;

    // Mock data - in a real application this would be loaded from API
    const reports: Record<string, any> = {
        "1": {
            title: "UI/UX Designer at TechCorp",
            date: "May 28, 2024",
            overallScore: 9.2,
            scoreLabel: "Excellent result!",
            strengths: [
                "Deep knowledge of UX/UI design principles",
                "Clear and structured communication",
                "Relevant work experience examples",
            ],
            improvements: [
                "Could expand more on working with design systems",
                "When answering behavioral questions, try using the STAR method",
            ],
            breakdown: [
                { category: "Design Skills", score: 9.5, percentage: 95 },
                { category: "Communication", score: 9.0, percentage: 90 },
                { category: "Problem Solving", score: 9.0, percentage: 90 },
                { category: "Cultural Fit", score: 9.2, percentage: 92 },
            ],
            keyMoments: [
                {
                    question: "Tell us about your experience with design systems.",
                    answer:
                        "The candidate demonstrated confident mastery of the topic. The answer was structured, with specific examples of creating components and working with Figma. Particularly valuable was the example of creating a unified design system for multiple products.",
                },
                {
                    question: "How would you approach redesigning an existing product?",
                    answer:
                        "The answer included key stages: user research, competitor analysis, prototyping, and testing. However, metric analysis and A/B testing were not mentioned. It is recommended to study data-driven design approaches more deeply.",
                },
            ],
        },
        "2": {
            title: "Frontend Developer at Innovate LLC",
            date: "May 25, 2024",
            overallScore: 8.5,
            scoreLabel: "Good result!",
            strengths: [
                "Excellent knowledge of React and modern JavaScript",
                "Experience with TypeScript and Next.js",
                "Understanding of performance optimization principles",
            ],
            improvements: [
                "Should deepen knowledge in testing (Jest, React Testing Library)",
                "More practice with CSS-in-JS solutions",
            ],
            breakdown: [
                { category: "Technical Skills", score: 9.0, percentage: 90 },
                { category: "Communication", score: 8.0, percentage: 80 },
                { category: "Problem Solving", score: 8.5, percentage: 85 },
                { category: "Cultural Fit", score: 8.5, percentage: 85 },
            ],
            keyMoments: [
                {
                    question: "Tell us about your experience with React Hooks.",
                    answer:
                        "The candidate demonstrated confident mastery of the topic. The answer was structured, with specific examples of using useState, useEffect, and useContext from past projects. Particularly valuable was the example of creating a custom hook for API work.",
                },
                {
                    question: "How would you approach optimizing web application performance?",
                    answer:
                        "The answer included key techniques such as code-splitting, lazy loading, and component memoization. However, bundle analysis and tools like Lighthouse were not mentioned. It is recommended to study performance profiling tools more deeply.",
                },
            ],
        },
    };

    const report = reports[id as string] || reports["1"];

    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white">Interview Report: {report.title}</h1>
                <p className="text-neutral-500 mt-2">Analyzed by AI VoxScout ・ {report.date}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                    {/* Overall Score */}
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 text-center flex flex-col items-center justify-center">
                        <h2 className="text-lg font-semibold text-white mb-4">Overall Score</h2>
                        <div className="relative size-40">
                            <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <circle
                                    className="stroke-current text-neutral-800"
                                    cx="18"
                                    cy="18"
                                    fill="none"
                                    r="16"
                                    strokeWidth="3"
                                ></circle>
                                <circle
                                    className="stroke-current text-purple-500 transition-all duration-500"
                                    cx="18"
                                    cy="18"
                                    fill="none"
                                    r="16"
                                    strokeDasharray={`${(report.overallScore / 10) * 100}, 100`}
                                    strokeWidth="3"
                                ></circle>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-5xl font-bold text-white">{report.overallScore}</span>
                            </div>
                        </div>
                        <p className="text-neutral-400 mt-4">{report.scoreLabel}</p>
                    </div>

                    {/* Strengths */}
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                        <h2 className="text-lg font-semibold text-white mb-4">Strengths</h2>
                        <ul className="space-y-3">
                            {report.strengths.map((strength: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="text-green-400 mt-0.5 h-5 w-5 flex-shrink-0" />
                                    <span className="text-neutral-300">{strength}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Improvements */}
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                        <h2 className="text-lg font-semibold text-white mb-4">Areas for Improvement</h2>
                        <ul className="space-y-3">
                            {report.improvements.map((improvement: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <Lightbulb className="text-yellow-400 mt-0.5 h-5 w-5 flex-shrink-0" />
                                    <span className="text-neutral-300">{improvement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Breakdown */}
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                        <h2 className="text-lg font-semibold text-white mb-6">Detailed Breakdown</h2>
                        <div className="space-y-5">
                            {report.breakdown.map((item: any, idx: number) => (
                                <div key={idx}>
                                    <div className="flex justify-between items-center mb-1.5">
                                        <p className="font-medium text-neutral-300">{item.category}</p>
                                        <p className="font-semibold text-purple-400 text-sm">{item.score} / 10</p>
                                    </div>
                                    <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-purple-500 rounded-full transition-all duration-500"
                                            style={{ width: `${item.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Moments */}
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                        <h2 className="text-lg font-semibold text-white mb-4">Key Moments Transcript</h2>
                        <div className="space-y-4">
                            {report.keyMoments.map((moment: any, idx: number) => (
                                <div key={idx} className={idx > 0 ? "border-t border-neutral-800 pt-4" : ""}>
                                    <h3 className="font-semibold text-purple-400">{moment.question}</h3>
                                    <p className="text-neutral-300 mt-1 leading-relaxed">{moment.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
