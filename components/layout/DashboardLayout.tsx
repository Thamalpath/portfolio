"use client";

import { ReactNode } from "react";

interface DashboardLayoutProps {
  sidebar: ReactNode;
  main: ReactNode;
  aside: ReactNode;
}

export default function DashboardLayout({
  sidebar,
  main,
  aside,
}: DashboardLayoutProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-4 md:p-8 overflow-x-hidden font-sans">
      {/* Absolute Background Blur Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-blue/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/5 rounded-full blur-[150px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1600px] h-full flex flex-col md:flex-row gap-6 mb-20 md:mb-0">
        {sidebar}
        <main className="flex-1 relative rounded-[35px] md:rounded-[50px] overflow-hidden md:overflow-hidden border border-white/10 group shadow-2xl flex flex-col">
          {main}
        </main>
        <aside className="w-full md:w-80 flex flex-col gap-4 pb-4 md:pb-0">
          {aside}
        </aside>
      </div>
    </section>
  );
}
