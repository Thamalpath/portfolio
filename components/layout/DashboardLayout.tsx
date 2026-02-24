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
    <section className="relative h-screen overflow-hidden flex items-center justify-center p-4 md:p-8 font-sans">
      {/* Absolute Background Blur Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-blue/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] h-full flex flex-col md:flex-row gap-4 md:gap-6 pb-20 md:pb-0">
        {sidebar}

        <main className="flex-1 min-h-0 relative rounded-[35px] md:rounded-[50px] overflow-hidden border border-white/10 group shadow-2xl flex flex-col">
          {main}
        </main>

        <aside className="w-full md:w-80 flex flex-col gap-4 min-h-0 overflow-y-auto">
          {aside}
        </aside>
      </div>
    </section>
  );
}
