"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Globe, Zap, Brain, Rocket } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/ui/CTASection";
import { useProjects } from "@/hooks/useProjects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function BuildsClient() {
    const { projects } = useProjects();


    return (
        <div className="min-h-screen bg-black text-white py-10 sm:py-16 lg:py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <Link href="/">
                    <motion.button
                        className="mb-8 sm:mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
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
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-white to-[var(--accent)] bg-clip-text text-transparent">
                        Builds
                    </h1>
                    <p className="text-lg sm:text-xl text-center text-gray-400 mb-12 sm:mb-16">A collection of projects that reflect how I think, design, and build</p>

                    {/* Marketing Section for Non-Technical Clients */}
                    <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10 mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-center">Real Projects, Real Results</h2>
                        <div className="text-center max-w-4xl mx-auto">
                            <p className="text-xl text-gray-300 mb-6">
                                These {"aren't"} just portfolio pieces. These are real businesses {"I've"} helped grow online.
                            </p>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                                    <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Luxury Fashion</h3>
                                    <p className="text-sm text-gray-400">Increased online sales by creating a premium shopping experience</p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                                    <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Café Business</h3>
                                    <p className="text-sm text-gray-400">Reduced operational costs and improved customer experience</p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                                    <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Tech Showcase</h3>
                                    <p className="text-sm text-gray-400">Built a standout online presence that attracts premium clients</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                        {projects.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} />
                        ))}
                    </div>
                    {/* 
                    <motion.div
                        className="mt-20 bg-white/5 rounded-2xl p-8 border border-white/10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">More Client Success Stories</h2>
                        <p className="text-center text-gray-400 mb-8">Every project is designed to solve real business problems and deliver measurable results</p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Neizk Landing Page</h3>
                                <p className="text-gray-300 mb-4">Client needed a high-converting landing page that would turn visitors into leads and integrate with their marketing tools.</p>
                                <div className="mb-4">
                                    <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent)' }}>Business Impact:</p>
                                    <p className="text-sm text-gray-400">Optimized for conversions with advanced tracking to measure and improve marketing ROI</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["HTML", "CSS", "Bootstrap", "SEO"].map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Flutter To-Do App</h3>
                                <p className="text-gray-300 mb-4">Productivity app that needed to work seamlessly across all devices with real-time synchronization and user-friendly design.</p>
                                <div className="mb-4">
                                    <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent)' }}>Business Impact:</p>
                                    <p className="text-sm text-gray-400">25% increase in user engagement through intuitive design and reliable cross-platform functionality</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Flutter", "Firebase", "Dart"].map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div> */}

                    <CTASection
                        headline="Ready to build something together?"
                        description="Let's discuss your project and create a solution that delivers real results."
                        buttonText="Let's talk"
                        href="/Signal"
                    />
                </motion.div>
            </div>
        </div>
    );
}