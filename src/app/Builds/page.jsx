"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../../components/ui/ProjectCard";
import SectionTitle from "../../components/ui/SectionTitle";
import { useProjects } from "@/hooks/useProjects";

export default function Builds() {
  const {
    projects,
  } = useProjects();
  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-40">
        <Link href="/">
          <motion.button
            className="mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} />
            Back to Home
          </motion.button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <SectionTitle
            title="Builds"
            subtitle="Selected works"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}