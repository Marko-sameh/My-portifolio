"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import LearnMoreButton from "./LearnMoreButton";
import { useProjects } from "@/hooks/useProjects";
function BuildsSection({ }) {
    const {
        projects,
    } = useProjects();

    return <section id="builds" className="relative min-h-screen py-40 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />
        <motion.div
            className="relative max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <SectionTitle
                title="Builds"
                subtitle="A collection of projects that reflect how I think, design, and build."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                {projects.filter(project => project.showOnHome).slice(0, 3).map((project, i) => (
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