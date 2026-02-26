"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ShowcaseSidebar from "@/components/ui/ShowcaseSidebar";
import RightSidePanel from "@/components/sections/RightSidePanel";
import SkillsShowcase from "@/components/sections/SkillsShowcase";
import { motion } from "framer-motion";

export default function SkillsPage() {
  return (
    <DashboardLayout
      sidebar={<ShowcaseSidebar activeTab="skills" />}
      main={
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="h-full w-full flex flex-col min-h-0"
        >
          <SkillsShowcase />
        </motion.div>
      }
      aside={<RightSidePanel name="Thamalpath" />}
    />
  );
}
