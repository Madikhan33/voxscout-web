import React from "react";
import Link from "next/link";

export function HeroSection() {
    return (
        <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
            {/* Черно-фиолетовый градиент фон - очень приглушенный */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/20 via-black to-black"></div>

            {/* Декоративные элементы - приглушенный фиолетовый */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-950/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-950/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-6">
                    Раскройте свой потенциал <br /> с AI-интервью
                </h1>
                <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                    VoxScout — ваш личный тренер для подготовки к собеседованиям. Пройдите AI-интервью, получите детальный анализ и уверенно шагните к работе мечты.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/signup"
                        className="inline-flex h-12 items-center justify-center rounded-lg bg-white text-black px-8 font-semibold transition-all hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    >
                        Начать бесплатно
                    </Link>
                    <Link
                        href="#features"
                        className="inline-flex h-12 items-center justify-center rounded-lg border border-neutral-800 bg-black px-8 font-semibold text-neutral-300 transition-all hover:bg-neutral-900 hover:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    >
                        Как это работает
                    </Link>
                </div>
            </div>
        </div>
    );
}
