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
        <div className="flex-1 flex flex-col relative">
          <MainFeaturedProject
            titlePrefix="FULL - STACK"
            titleSuffix="DEVELOPER"
          />
        </div>
      }
      aside={<RightSidePanel name="Thamalpath" />}
    />
  );
}
