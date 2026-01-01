"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Tag, Zap } from "lucide-react";
import Link from "next/link";
import { useProjects } from "../../../hooks/useProjects";
import { use } from "react";

export default function SingleProjectClient({ param }) {
    const { projects } = useProjects();
    const resolvedParams = use(param);

    // Find project by slug (title converted to URL format)
    const slug = resolvedParams.id;
    const project = projects.find(p =>
        p.title.toLowerCase().replace(/\s+/g, '-') === decodeURIComponent(slug)
    ) || null;

    if (!project) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl mb-4">Project not found</h1>
                    <Link href="/Builds" className="px-6 py-3 bg-gradient-to-br from-(--accent) to-(--background)) rounded-lg">
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pt-10">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                    <Link href="/Builds">
                        <motion.button
                            className="flex items-center gap-2 mb-8 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ x: -5 }}
                        >
                            <ArrowLeft size={20} />
                            Back to Projects
                        </motion.button>
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Tag size={20} style={{ color: 'var(--accent)' }} />
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-white/10" style={{ color: 'var(--accent)' }}>
                                    {project.tag}
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, white, #d1d5db, var(--accent))` }}>
                                {project.title}
                            </h1>

                            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-3 sm:gap-4">
                                {(project.links || []).map((link, i) => (
                                    <motion.a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity text-sm sm:text-base"
                                        style={{ background: `linear-gradient(to right, var(--accent), var(--background))` }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                    >
                                        <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ background: `linear-gradient(to right, var(--accent), var(--background))`, opacity: 0.2 }} />
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-sm">
                                {project.img ? (
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-[250px] sm:h-[300px] lg:h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                        <Zap size={64} className="text-gray-600" />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
                    {/* Technologies */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10"
                    >
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(to right, var(--accent), var(--background))` }}>
                                <Zap size={14} className="sm:w-[18px] sm:h-[18px]" />
                            </div>
                            Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {project.tech.map((tech, i) => (
                                <motion.span
                                    key={i}
                                    className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/10 text-xs sm:text-sm font-medium"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Features */}
                    {(project.features || []).length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(to right, var(--primary), var(--secondary))` }}>
                                    <Zap size={14} className="sm:w-[18px] sm:h-[18px]" />
                                </div>
                                Key Features
                            </h3>
                            <ul className="space-y-3 sm:space-y-4">
                                {project.features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start gap-3 text-gray-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: `linear-gradient(to right, var(--primary), var(--secondary))` }} />
                                        <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {/* Challenges */}
                    {(project.challenges || []).length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(to right, var(--accent), var(--background))` }}>
                                    <Zap size={14} className="sm:w-[18px] sm:h-[18px]" />
                                </div>
                                Challenges
                            </h3>
                            <ul className="space-y-3 sm:space-y-4">
                                {project.challenges.map((challenge, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start gap-3 text-gray-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: `linear-gradient(to right, var(--accent), var(--background))` }} />
                                        <span className="text-xs sm:text-sm leading-relaxed">{challenge}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>

                {/* Results Section */}
                {project.results && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 sm:mt-16 rounded-2xl p-6 sm:p-8 border bg-white/5 border-white/10"

                    >
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Results & Impact</h3>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                            {project.results}
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}