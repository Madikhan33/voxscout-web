import React from "react";
import Link from "next/link";

export function HeroSection() {
    return (
        <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
            {/* Black-purple gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/30 via-purple-950/10 via-black to-black"></div>

            {/* Decorative purple elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '8.5s' }}></div>
            
            {/* Gradient orbs */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '5s' }}></div>
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '7.3s' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-6">
                    Unlock Your Potential<br /> 
                    <span className="text-purple-400">with AI Interviews</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                    VoxScout is your personal coach for interview preparation. Take an AI interview, get detailed analysis, and confidently step towards your dream job.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/signup"
                        className="inline-flex h-12 items-center justify-center rounded-lg bg-white text-black px-8 font-semibold transition-all hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    >
                        Start for Free
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="inline-flex h-12 items-center justify-center rounded-lg border border-neutral-800 bg-black px-8 font-semibold text-neutral-300 transition-all hover:bg-neutral-900 hover:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    >
                        How It Works
                    </Link>
                </div>
            </div>
        </div>
    );
}
