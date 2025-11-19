"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState<"candidate" | "hr">("candidate");

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden p-4 bg-black">
            {/* Фоновые элементы */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/20 via-black to-black"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-950/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-950/10 rounded-full blur-3xl"></div>

            {/* Логотип VoxScout */}
            <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 group">
                <svg className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
                <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight">VoxScout</span>
            </Link>

            <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-6 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-6 sm:p-8">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-white pt-2">Create an Account</h2>
                    <p className="pt-2 text-base font-normal leading-normal text-neutral-400">Join to start your journey with AI-powered interviews.</p>
                </div>

                <form className="flex w-full flex-col gap-4">
                    <div className="flex flex-col">
                        <label className="pb-2 text-sm font-medium text-white" htmlFor="username">
                            Username
                        </label>
                        <div className="relative flex items-center">
                            <User className="pointer-events-none absolute left-3 h-5 w-5 text-neutral-500" />
                            <input
                                className="h-12 w-full rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 pl-10 text-base font-normal text-white placeholder:text-neutral-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                id="username"
                                placeholder="Enter your username"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="pb-2 text-sm font-medium text-white" htmlFor="email">
                            Email
                        </label>
                        <div className="relative flex items-center">
                            <Mail className="pointer-events-none absolute left-3 h-5 w-5 text-neutral-500" />
                            <input
                                className="h-12 w-full rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 pl-10 text-base font-normal text-white placeholder:text-neutral-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                id="email"
                                placeholder="Enter your email address"
                                type="email"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="pb-2 text-sm font-medium text-white" htmlFor="password">
                            Password
                        </label>
                        <div className="relative flex items-center">
                            <Lock className="pointer-events-none absolute left-3 h-5 w-5 text-neutral-500" />
                            <input
                                className="h-12 w-full rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 px-10 text-base font-normal text-white placeholder:text-neutral-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                id="password"
                                placeholder="Enter your password"
                                type={showPassword ? "text" : "password"}
                            />
                            <button
                                className="absolute right-3 text-neutral-500 hover:text-neutral-400"
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col pt-2">
                        <label className="pb-2 text-sm font-medium text-white">I am a:</label>
                        <div className="grid grid-cols-2 gap-2 rounded-lg bg-neutral-900/50 p-1 border border-neutral-800">
                            <button
                                className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${userType === "candidate"
                                        ? "bg-purple-600 text-white"
                                        : "text-neutral-400 hover:bg-neutral-800"
                                    }`}
                                type="button"
                                onClick={() => setUserType("candidate")}
                            >
                                Candidate
                            </button>
                            <button
                                className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${userType === "hr"
                                        ? "bg-purple-600 text-white"
                                        : "text-neutral-400 hover:bg-neutral-800"
                                    }`}
                                type="button"
                                onClick={() => setUserType("hr")}
                            >
                                HR
                            </button>
                        </div>
                    </div>

                    <button
                        className="mt-4 flex h-12 w-full items-center justify-center rounded-lg bg-purple-600 text-base font-semibold text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-black"
                        type="submit"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-center text-sm text-neutral-400">
                    Already have an account?{" "}
                    <Link className="font-medium text-purple-400 hover:text-purple-300 transition-colors" href="/signin">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
