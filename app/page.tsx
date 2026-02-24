"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ShowcaseSidebar from "@/components/ui/ShowcaseSidebar";
import MainFeaturedProject from "@/components/sections/MainFeaturedProject";
import RightSidePanel from "@/components/sections/RightSidePanel";

export default function Home() {
  return (
    <DashboardLayout
      sidebar={<ShowcaseSidebar activeTab="home" />}
      main={
        <div className="flex-1 flex flex-col relative min-h-[500px] md:min-h-0">
          <MainFeaturedProject
            titlePrefix="FULL - STACK"
            titleSuffix="DEVELOPER"
            viewProjectsHref="/projects"
            contactHref="/contact"
          />
        </div>
      }
      aside={<RightSidePanel name="Thamalpath" />}
    />
  );
}
