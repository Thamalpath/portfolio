"use client";

import { Home, Search, Command, User, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab?: string;
}

export default function ShowcaseSidebar({ activeTab = "home" }: SidebarProps) {
  return (
    <aside className="hidden md:flex flex-col gap-4 py-8 px-3 bg-white/5 backdrop-blur-3xl border border-white/5 rounded-[40px] h-fit self-center">
      <NavItem icon={Home} active={activeTab === "home"} />
      <NavItem icon={Search} active={activeTab === "search"} />
      <NavItem icon={Command} active={activeTab === "command"} />
      <NavItem icon={User} active={activeTab === "profile"} />
    </aside>
  );
}

function NavItem({
  icon: Icon,
  active = false,
}: {
  icon: LucideIcon;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300",
        active
          ? "bg-neon-blue text-black shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          : "text-gray-400 hover:bg-white/5 hover:text-white",
      )}
    >
      <Icon size={20} strokeWidth={active ? 3 : 2} />
    </div>
  );
}
