"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import LearnMoreButton from "./LearnMoreButton";
import { useProjectsContext } from "@/contexts/ProjectsContext";
import { useMemo } from "react";
import { fadeIn, TRANSITIONS } from '@/utils/animationConfig';

function BuildsSection() {
    const { projects, loading } = useProjectsContext();
    
    const featuredProjects = useMemo(() => 
        projects.filter(p => p.showOnHome).slice(0, 3),
        [projects]
    );

    if (loading) {
        return (
            <section id="builds" className="relative min-h-screen py-40 px-6">
                <div className="flex items-center justify-center min-h-[400px]">
                    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
            </section>
        );
    }

    return <section id="builds" className="relative min-h-screen py-40 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />
        <motion.div
            className="relative max-w-7xl mx-auto"
            {...fadeIn}
            viewport={{ once: true, margin: "-100px" }}
            transition={TRANSITIONS.normal}
        >
            <SectionTitle
                title="Builds"
                subtitle="A collection of projects that reflect how I think, design, and build."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                {featuredProjects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <LearnMoreButton sectionName="Builds" />
            </div>
        </motion.div>
    </section>
}

export default BuildsSection