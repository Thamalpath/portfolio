"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ShowcaseSidebar from "@/components/ui/ShowcaseSidebar";
import RightSidePanel from "@/components/sections/RightSidePanel";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";

export default function ProjectsPage() {
  return (
    <DashboardLayout
      sidebar={<ShowcaseSidebar activeTab="projects" />}
      main={<ProjectsShowcase />}
      aside={<RightSidePanel name="Thamalpath" />}
    />
  );
}
