"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ShowcaseSidebar from "@/components/ui/ShowcaseSidebar";
import RightSidePanel from "@/components/sections/RightSidePanel";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <DashboardLayout
      sidebar={<ShowcaseSidebar activeTab="projects" />}
      main={
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="h-full w-full flex flex-col min-h-0"
        >
          <ProjectsShowcase />
        </motion.div>
      }
      aside={<RightSidePanel name="Thamalpath" />}
    />
  );
}
