"use client";

import { use } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ShowcaseSidebar from "@/components/ui/ShowcaseSidebar";
import RightSidePanel from "@/components/sections/RightSidePanel";
import ProjectDetail from "@/components/sections/ProjectDetail";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = use(params);

  return (
    <DashboardLayout
      sidebar={<ShowcaseSidebar activeTab="projects" />}
      main={<ProjectDetail projectId={id} />}
      aside={<RightSidePanel name="Thamalpath" />}
    />
  );
}
