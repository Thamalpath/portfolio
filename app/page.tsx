"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ShowcaseSidebar from "@/components/ui/ShowcaseSidebar";
import MainFeaturedProject from "@/components/sections/MainFeaturedProject";
import ProfileHeader from "@/components/sections/ProfileHeader";
import ProjectStats from "@/components/sections/ProjectStats";
import ProjectShowcase from "@/components/sections/ProjectShowcase";

export default function Home() {
  return (
    <DashboardLayout
      sidebar={<ShowcaseSidebar activeTab="home" />}
      main={
        <div className="flex-1 flex flex-col relative">
          <MainFeaturedProject
            projectNumber="Lead Engineer 01"
            titlePrefix="THE RONIN"
            titleSuffix="SYSTEMS"
          />
          <div className="absolute bottom-12 left-12 z-20">
            <ProjectStats />
          </div>
        </div>
      }
      aside={
        <div className="flex flex-col gap-4 h-full">
          <ProfileHeader name="Thamalpath" />
          <ProjectShowcase />
        </div>
      }
    />
  );
}
