"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/ui/CTASection";
import { useProjectsContext } from "@/contexts/ProjectsContext";
import ProjectCard from "@/components/ui/ProjectCard";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { useAnimationPreferences } from '@/hooks/useAnimationPreferences';
import { fadeIn, slideUp, staggerContainer, staggerItem, TRANSITIONS } from '@/utils/animationConfig';

export default function BuildsClient() {
    const { projects, loading } = useProjectsContext();
    const { reducedMotion } = useAnimationPreferences();
    const shouldAnimate = !reducedMotion;
    
    const sortedProjects = useMemo(() => 
        projects.sort((a, b) => (b.showOnHome ? 1 : 0) - (a.showOnHome ? 1 : 0)),
        [projects]
    );

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white py-10 sm:py-16 lg:py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div {...fadeIn} transition={TRANSITIONS.fast}>
                    <Link href="/" prefetch={false}>
                        <button className="mb-8 sm:mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                            <ArrowLeft size={20} aria-hidden="true" />
                            Back to Home
                        </button>
                    </Link>
                </motion.div>

                <motion.h1 
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-white to-[var(--accent)] bg-clip-text text-transparent"
                    {...(shouldAnimate ? slideUp : fadeIn)}
                    transition={{ ...TRANSITIONS.normal, delay: 0.1 }}
                >
                    Builds
                </motion.h1>
                <motion.p 
                    className="text-lg sm:text-xl text-center text-gray-400 mb-12 sm:mb-16"
                    {...fadeIn}
                    transition={{ ...TRANSITIONS.normal, delay: 0.2 }}
                >
                    A collection of projects that reflect how I think, design, and build
                </motion.p>

                <motion.div 
                    className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10 mb-16"
                    {...(shouldAnimate ? slideUp : fadeIn)}
                    transition={{ ...TRANSITIONS.normal, delay: 0.3 }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-center">Real Projects, Real Results</h2>
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-xl text-gray-300 mb-6">
                            These aren't just portfolio pieces. These are real businesses I've helped grow online.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: 'Luxury Fashion', desc: 'Increased online sales by creating a premium shopping experience' },
                                { title: 'Café Business', desc: 'Reduced operational costs and improved customer experience' },
                                { title: 'Tech Showcase', desc: 'Built a standout online presence that attracts premium clients' }
                            ].map((item, i) => (
                                <motion.div 
                                    key={item.title}
                                    className="bg-white/5 rounded-lg p-6 border border-white/10"
                                    {...(shouldAnimate ? staggerItem : fadeIn)}
                                    transition={{ ...TRANSITIONS.normal, delay: 0.4 + i * 0.1 }}
                                >
                                    <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16"
                    {...(shouldAnimate ? staggerContainer : {})}
                >
                    {sortedProjects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </motion.div>

                <motion.div
                    {...(shouldAnimate ? slideUp : fadeIn)}
                    transition={{ ...TRANSITIONS.normal, delay: 0.5 }}
                >
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