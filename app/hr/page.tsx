"use client";

import Link from "next/link";
import {
  Edit,
  Send,
  BarChart3,
  User,
  Clock,
  Scale,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Home as HomeIcon
} from "lucide-react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { HeroSection } from "@/components/ui/HeroSection";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

export default function ForHR() {
  const navItems = [
    { name: "Home", link: "/", icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Process", link: "#process", icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Analytics", link: "#analytics", icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  ];

  const testimonials = [
    {
      quote: "VoxScout has changed the game. We've reduced screening time from weeks to days, and the quality of candidates we advance has never been higher.",
      name: "Emily Carter",
      title: "Head of Talent, Innovate Inc.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6JJccZ-s_yXagaNIvyFWuWmUq9Gqd1mOn0ePIuuDTQ_QMdmQYtRgLmnxwDaNXA5CAeRWTprT4F4MEwsIGX0yJ6hn5mACFVnthVlm0JzdeC5_G8V9QpTjvrVFKk_64M2SLqq1sWrCun10R--mlf4gdOyXpR86O1DPeA5LE6W92hrT-awGaPBHE90aCVg1wp-MeoKkctR1NvlT-H2I_Yep25D2M-B6gwXD1Ehr0Aeir4heBW_iROCqVSWkW_DWdgEZCeasE2J9uYba"
    },
    {
      quote: "The AI analysis is incredibly insightful. It helps us identify skills we might miss in traditional resume screening. Highly recommend!",
      name: "Michael Lee",
      title: "HR Manager, Tech Solutions",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm-0p-GXnyRPiRw4QAiOcsnRyO1ht2NtPh_xolgHEYdIbW_2e4MoG0LFOMNBVXpYeq_zlJAv8WG6e6DbK6-cRlnNJ78NeJV8lwjx8plX97KXRtIw0-JvxEmYVqCVaI8Lrs-jQOGOA2KO4VEt19DWIIy6A4iwXEQzjjv5jiOpnisdLEE_JwF0cN27RwksLCtqBkCGAp28nXxuAEMkC2TMijrL0-4xel3ex0yXz96_fYjIWqfnTmr3kA6ZBWXQtl65HKNx9horXjpAXT"
    },
  ];

  const features = [
    {
      title: "Significant Time Savings",
      description: "Automate initial screening and reduce interview time by up to 80%.",
      icon: Clock,
    },
    {
      title: "Objective Assessments",
      description: "AI focuses on skills, ensuring fair and consistent screening.",
      icon: Scale,
    },
    {
      title: "Data-Driven Decisions",
      description: "Make hiring decisions based on objective data and metrics.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-black selection:bg-primary/30">
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
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
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-10 leading-[1.1] pb-2 overflow-visible">
            Automate Candidate <br /> 
            <span className="text-purple-400">Screening with AI</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            VoxScout conducts initial interviews 24/7, objectively evaluates candidates, and provides detailed analytics, freeing your team for strategic tasks.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/signup" className="inline-flex h-12 items-center justify-center rounded-lg bg-white text-black px-8 font-semibold transition-all hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
              Create Interview
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Border line */}
        <section className="py-4 border-t border-white/10"></section>
        
        <section className="py-20" id="process">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How to Create an Interview</h2>
            <p className="mt-4 text-lg text-neutral-500">Optimize your hiring process in three simple steps.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-6xl mx-auto relative">
            {/* Connecting line for desktop */}
            <div className="hidden sm:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            
            {[
              { icon: Edit, title: "Create Interview", description: "Set up questions and evaluation criteria in minutes.", number: "01" },
              { icon: Send, title: "Invite Candidates", description: "Send a link for candidates to complete the AI interview at their convenience.", number: "02" },
              { icon: BarChart3, title: "Get AI Analysis", description: "Receive detailed reports with scores and recommendations.", number: "03" },
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

        <section className="py-20" id="analytics">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Instantly Identify Top Talent</h2>
            <p className="mt-4 text-lg text-neutral-500">Our AI provides a clear, data-driven view of each candidate's potential.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <div className="flex flex-col gap-4 p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-purple-900/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-purple-950/30 text-purple-300 group-hover:scale-110 transition-transform">
                  <User className="size-6" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-white">Maria Rodriguez</h4>
                  <p className="text-sm text-neutral-400">Product Manager</p>
                </div>
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-purple-500/50 text-purple-300 font-bold">
                  92%
                </div>
              </div>
              <div className="rounded-lg bg-purple-950/30 px-3 py-2 text-center text-sm font-medium text-purple-300 flex items-center justify-center gap-2">
                <CheckCircle2 className="size-4" />
                AI: Recommended
              </div>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-purple-900/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-purple-950/30 text-purple-300 group-hover:scale-110 transition-transform">
                  <User className="size-6" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-white">David Chen</h4>
                  <p className="text-sm text-neutral-400">Software Engineer</p>
                </div>
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-purple-500/30 text-purple-400 font-bold">
                  78%
                </div>
              </div>
              <div className="rounded-lg bg-purple-950/20 px-3 py-2 text-center text-sm font-medium text-purple-400 flex items-center justify-center gap-2">
                <AlertCircle className="size-4" />
                AI: Good Candidate
              </div>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-purple-900/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-purple-950/30 text-purple-300 group-hover:scale-110 transition-transform">
                  <User className="size-6" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-white">Sarah Jenkins</h4>
                  <p className="text-sm text-neutral-400">UX Designer</p>
                </div>
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-purple-500/20 text-purple-500 font-bold">
                  55%
                </div>
              </div>
              <div className="rounded-lg bg-purple-950/10 px-3 py-2 text-center text-sm font-medium text-purple-500 flex items-center justify-center gap-2">
                <XCircle className="size-4" />
                AI: Needs Attention
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Benefits for Your HR Team</h2>
            <p className="mt-4 text-lg text-neutral-400">Give your recruiters tools that save time and reduce bias.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-8 hover:border-purple-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/30 hover:-translate-y-2"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${i * 0.15}s both`
                  }}
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-purple-400/20 to-purple-500/20 blur-xl animate-pulse"></div>
                  </div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  </div>
                  
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-purple-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating glow effect */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-purple-950/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150 group-hover:-translate-y-4"></div>
                  
                  {/* Animated particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                    {[...Array(5)].map((_, idx) => (
                      <div
                        key={idx}
                        className="absolute w-1.5 h-1.5 bg-purple-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          left: `${20 + idx * 15}%`,
                          top: `${30 + idx * 10}%`,
                          animation: `float ${3 + idx * 0.5}s ease-in-out infinite`,
                          animationDelay: `${idx * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon with pulsing glow */}
                    <div className="relative flex items-center justify-center mb-6">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 animate-ping"></div>
                      </div>
                      <div className="relative flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/20 group-hover:border-purple-500/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="size-8 text-purple-400 group-hover:text-purple-300 transition-all duration-300 group-hover:scale-110" />
                      </div>
                    </div>
                    
                    {/* Title with slide effect */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-all duration-300 group-hover:translate-x-1">{item.title}</h3>
                    
                    {/* Description with fade effect */}
                    <p className="text-neutral-400 leading-relaxed text-sm group-hover:text-neutral-300 transition-all duration-300">{item.description}</p>
                    
                    {/* Animated underline */}
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">What Our Clients Say</h2>
          </div>
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </section>

        <section className="my-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 p-8 text-center md:p-20">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0,_rgba(168,85,247,0.15),_transparent_60%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Ready to Transform Your Hiring?</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">Join leading companies using VoxScout to find the best talent.</p>
              <div className="mt-10 flex justify-center">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-50">
                  <span>Start for Free</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-10 bg-black">
          <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <svg className="size-5 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 6.5C16.5 5.67 15.83 5 15 5H9C8.17 5 7.5 5.67 7.5 6.5v11C7.5 18.33 8.17 19 9 19h6c.83 0 1.5-.67 1.5-1.5v-11zM15 17H9V7h6v10zM5.5 9.5c0-.83.67-1.5 1.5-1.5h1V6H7C5.34 6 4 7.34 4 9v6c0 1.66 1.34 3 3 3h1v-2H7c-.55 0-1-.45-1-1v-4.5zm13-1.5c.83 0 1.5.67 1.5 1.5v4.5c0 .55-.45 1-1 1h-1v2h1c1.66 0 3-1.34 3-3V9c0-1.66-1.34-3-3-3h-1v2h1z"></path>
              </svg>
              <h2 className="text-base font-semibold text-white">VoxScout</h2>
            </div>
            <p className="text-sm text-neutral-500">© 2024 VoxScout. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <Link className="text-neutral-500 transition-colors hover:text-primary" href="#">About Us</Link>
              <Link className="text-neutral-500 transition-colors hover:text-primary" href="#">Policy</Link>
              <Link className="text-neutral-500 transition-colors hover:text-primary" href="#">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
