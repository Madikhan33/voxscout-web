"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, User, Lock } from "lucide-react";

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

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

            <div className="relative z-10 flex w-full max-w-md flex-col items-center rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-8">
                <div className="mb-6 flex flex-col items-center">
                    <svg className="h-12 w-12 text-purple-400 mb-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" x2="12" y1="19" y2="22"></line>
                    </svg>
                    <h1 className="text-white text-[32px] font-bold leading-tight text-center">Sign in to VoxScout</h1>
                    <p className="text-neutral-400 text-base font-normal leading-normal text-center mt-2">Welcome back! Please enter your details.</p>
                </div>

                <div className="w-full">
                    <div className="flex flex-col gap-4 py-3">
                        <label className="flex flex-col w-full">
                            <p className="text-white text-base font-medium leading-normal pb-2">Username</p>
                            <div className="relative flex w-full items-center">
                                <User className="text-neutral-500 absolute left-3.5 h-5 w-5" />
                                <input
                                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white placeholder:text-neutral-500 focus:outline-0 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 border border-neutral-800 bg-neutral-900/50 h-14 pl-11 pr-4 text-base font-normal leading-normal"
                                    placeholder="Enter your username"
                                />
                            </div>
                        </label>

                        <label className="flex flex-col w-full">
                            <p className="text-white text-base font-medium leading-normal pb-2">Password</p>
                            <div className="relative flex w-full items-center">
                                <Lock className="text-neutral-500 absolute left-3.5 h-5 w-5" />
                                <input
                                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white placeholder:text-neutral-500 focus:outline-0 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 border border-neutral-800 bg-neutral-900/50 h-14 pl-11 pr-11 text-base font-normal leading-normal"
                                    placeholder="Enter your password"
                                    type={showPassword ? "text" : "password"}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-neutral-500 absolute right-3.5 cursor-pointer hover:text-neutral-400"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </label>
                    </div>

                    <div className="flex justify-end w-full px-1 pt-1 pb-3">
                        <a className="text-purple-400 text-sm font-normal leading-normal hover:text-purple-300 transition-colors" href="#">
                            Forgot Password?
                        </a>
                    </div>

                    <button className="flex items-center justify-center text-base font-bold text-white h-12 w-full rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500">
                        Sign In
                    </button>

                    <div className="relative flex items-center py-5">
                        <div className="flex-grow border-t border-neutral-800"></div>
                        <span className="flex-shrink mx-4 text-neutral-500 text-sm">OR</span>
                        <div className="flex-grow border-t border-neutral-800"></div>
                    </div>

                    <button className="flex items-center justify-center text-base font-medium text-white h-12 w-full rounded-lg bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-900/80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-neutral-500">
                        <svg className="mr-3 h-5 w-5" viewBox="0 0 48 48">
                            <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107"></path>
                            <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" fill="#FF3D00"></path>
                            <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.618-3.229-11.303-7.58l-6.522,5.025C9.505,39.556,16.227,44,24,44z" fill="#4CAF50"></path>
                            <path d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C43.021,36.251,44,30.651,44,24C44,22.659,43.862,21.35,43.611,20.083z" fill="#1976D2"></path>
                        </svg>
                        Continue with Google
                    </button>
                </div>

                <p className="text-neutral-400 text-center mt-8 text-sm">
                    Don't have an account?{" "}
                    <Link className="font-bold text-purple-400 hover:text-purple-300 transition-colors" href="/signup">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
