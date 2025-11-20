"use client";

import {
  Video,
  ChartSpline,
  ShieldCheck,
  Clock,
  Brain,
  Sparkles,
  TrendingUp,
  Home as HomeIcon,
  User,
  MessageSquare,
  BarChart3,
  CheckCircle2
} from "lucide-react";
import { Marquee } from "@/components/Marquee";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { HeroSection } from "@/components/ui/HeroSection";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import Link from "next/link";

export default function Home() {
  const logos = [
    { src: "/logos/logo-1.png", alt: "Company 1" },
    { src: "/logos/logo-2.png", alt: "Company 2" },
    { src: "/logos/logo-3.png", alt: "Company 3" },
    { src: "/logos/logo-1.png", alt: "Company 1" },
    { src: "/logos/logo-2.png", alt: "Company 2" },
    { src: "/logos/logo-3.png", alt: "Company 3" },
  ];

  const navItems = [
    { name: "Home", link: "/", icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Features", link: "#features", icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Testimonials", link: "#testimonials", icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  ];

  const testimonials = [
    {
      quote: "VoxScout helped me prepare for my dream company interview. The AI feedback was incredibly helpful and accurate!",
      name: "Alex Petrov",
      title: "Product Manager",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6JJccZ-s_yXagaNIvyFWuWmUq9Gqd1mOn0ePIuuDTQ_QMdmQYtRgLmnxwDaNXA5CAeRWTprT4F4MEwsIGX0yJ6hn5mACFVnthVlm0JzdeC5_G8V9QpTjvrVFKk_64M2SLqq1sWrCun10R--mlf4gdOyXpR86O1DPeA5LE6W92hrT-awGaPBHE90aCVg1wp-MeoKkctR1NvlT-H2I_Yep25D2M-B6gwXD1Ehr0Aeir4heBW_iROCqVSWkW_DWdgEZCeasE2J9uYba"
    },
    {
      quote: "The process is very convenient - you can record answers anytime. This removes a lot of stress and helps you focus.",
      name: "Maria Ivanova",
      title: "UX/UI Designer",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm-0p-GXnyRPiRw4QAiOcsnRyO1ht2NtPh_xolgHEYdIbW_2e4MoG0LFOMNBVXpYeq_zlJAv8WG6e6DbK6-cRlnNJ78NeJV8lwjx8plX97KXRtIw0-JvxEmYVqCVaI8Lrs-jQOGOA2KO4VEt19DWIIy6A4iwXEQzjjv5jiOpnisdLEE_JwF0cN27RwksLCtqBkCGAp28nXxuAEMkC2TMijrL0-4xel3ex0yXz96_fYjIWqfnTmr3kA6ZBWXQtl65HKNx9horXjpAXT"
    },
    {
      quote: "The speech and keyword analysis is amazing! You immediately see where you need to improve your answers and be more convincing.",
      name: "Victor Sokolov",
      title: "Data Scientist",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR8pT6HnwyBupDZpg_J3vQJABhyGxfLboKW4sM_a4yfUhdpEQnu7ExLiozvM_SNodhVyrQsSqunUiWWaxwpRXvFBo599hqG8KwXGtxRHl64fMP-xVIaQZmIVR5faWTbDp7wmCfIavh0rvFcfh0Kt8DkGU_yOb6ykPW12XDOs2UX4RHavDoy-7mHYZ6WhtQM0d_mHJqAmrygejH6B0tZgg2je1gsy9-f1VMna-tztWlq4bsOVsXhY7csvuHWZgmAWyZ5_1toUFLXAj8"
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-black selection:bg-primary/30">
      <FloatingNav navItems={navItems} />

      <HeroSection />

      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">

        {/* Statistics */}
        <section className="py-16 border-y border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">50+</div>
              <div className="mt-2 text-sm text-neutral-500">Successful Interviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">95%</div>
              <div className="mt-2 text-sm text-neutral-500">Analysis Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">24/7</div>
              <div className="mt-2 text-sm text-neutral-500">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">5+</div>
              <div className="mt-2 text-sm text-neutral-500">Partner Companies</div>
            </div>
          </div>
        </section>

        {/* Company Logos */}
        {/* <section className="py-10">
          <p className="text-center text-sm text-neutral-500 mb-8 uppercase tracking-widest">Used by leading companies for recruitment</p>
          <Marquee className="[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center px-8">
                <img alt={logo.alt} className="h-8 w-auto object-contain opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0" src={logo.src} />
              </div>
            ))}
          </Marquee>
        </section> */}

        {/* How It Works */}
        <section className="py-20" id="how-it-works">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-neutral-500">A simple three-step process for your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            
            {[
              { icon: MessageSquare, title: "Receive an Invitation", description: "The employer sends you a link to the AI interview. Complete it at your convenience, without stress or rush.", number: "01" },
              { icon: Video, title: "Record Your Answers", description: "Answer questions in video format. AI analyzes your speech, confidence, and professionalism in real-time.", number: "02" },
              { icon: BarChart3, title: "Get Results", description: "The employer receives a detailed analysis, and you get feedback to improve your interviewing skills.", number: "03" },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-900/80 hover:border-purple-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/20 hover:-translate-y-2"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${i * 0.2}s both`
                  }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-purple-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Floating glow effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-950/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  </div>
                  
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-4 border-black text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {step.number}
                  </div>
                  
                  {/* Icon container with glow */}
                  <div className="relative mb-6 mt-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 animate-ping"></div>
                    </div>
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 group-hover:border-purple-500/60 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="size-10 text-purple-400 group-hover:text-purple-300 transition-all duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-all duration-300 group-hover:translate-x-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-all duration-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-0 group-hover:w-3/4 transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Features */}
        <section className="py-20" id="features">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">Why Choose VoxScout</h2>
            <p className="mt-4 text-lg text-neutral-400">We help you showcase your best self and increase your chances of getting an offer</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/30 border border-neutral-800 p-8 hover:border-purple-900/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-950/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-950/30 text-purple-300 mb-6">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Practice Anytime</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  Complete interviews 24/7 without needing to adjust to a recruiter's schedule. Choose a convenient time and place to record your answers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>No time restrictions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Ability to re-record answers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/30 border border-neutral-800 p-8 hover:border-purple-900/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-950/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-950/30 text-purple-300 mb-6">
                  <Brain className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Objective Feedback</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  Get an unbiased analysis of your answers and skills, based on data and machine learning algorithms.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Speech and intonation analysis</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Professional skills assessment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/30 border border-neutral-800 p-8 hover:border-purple-900/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-950/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-950/30 text-purple-300 mb-6">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Deep Skills Analysis</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  AI evaluates not only the content of your answers, but also your confidence, speech clarity, thought structure, and communication skills.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Detailed report for each answer</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Improvement recommendations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/30 border border-neutral-800 p-8 hover:border-purple-900/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-950/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-950/30 text-purple-300 mb-6">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Stand Out Among Candidates</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  Showcase your communication skills and motivation even before meeting the recruiter. Present yourself in the best light.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Professional presentation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Increased chances of getting an offer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20" id="testimonials">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">What Our Candidates Say</h2>
          </div>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </section>

        {/* CTA */}
        <section className="my-20">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/30 p-8 text-center md:p-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,_rgba(88,28,135,0.1),_transparent_60%)]"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-950/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-950/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Ready to Take the Next Step?</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">Join thousands of candidates who have already landed their dream job with our platform.</p>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/signup"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-white text-black px-8 font-semibold transition-all hover:bg-neutral-200"
                >
                  Try for Free
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 bg-black">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            
            <h2 className="text-base font-semibold text-white">VoxScout</h2>
          </div>
          <p className="text-sm text-neutral-500">© 2025 VoxScout. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a className="text-neutral-500 transition-colors hover:text-primary" href="#">About Us</a>
            <Link className="text-neutral-500 transition-colors hover:text-primary" href="/hr">For HR</Link>
            <a className="text-neutral-500 transition-colors hover:text-primary" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

