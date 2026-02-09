// "use client";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import CTASection from "@/components/ui/CTASection";
// import { useProjectsContext } from "@/contexts/ProjectsContext";
// import ProjectCard from "@/components/ui/ProjectCard";
// import { useMemo } from "react";
// import { motion } from "framer-motion";
// import { useAnimationPreferences } from '@/hooks/useAnimationPreferences';
// import { fadeIn, slideUp, staggerContainer, staggerItem, TRANSITIONS } from '@/utils/animationConfig';

// export default function BuildsClient() {
//     const { projects, loading } = useProjectsContext();
//     const { reducedMotion } = useAnimationPreferences();
//     const shouldAnimate = !reducedMotion;

//     const sortedProjects = useMemo(() =>
//         projects.sort((a, b) => (b.showOnHome ? 1 : 0) - (a.showOnHome ? 1 : 0)),
//         [projects]
//     );

//     if (loading) {
//         return (
//             <div className="min-h-screen bg-black text-white flex items-center justify-center">
//                 <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-black text-white py-10 sm:py-16 lg:py-20 px-4 sm:px-6">
//             <div className="max-w-7xl mx-auto">
//                 <motion.div {...fadeIn} transition={TRANSITIONS.fast}>
//                     <Link href="/" prefetch={false}>
//                         <button className="mb-8 sm:mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
//                             <ArrowLeft size={20} aria-hidden="true" />
//                             Back to Home
//                         </button>
//                     </Link>
//                 </motion.div>

//                 <motion.h1
//                     className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-white to-[var(--accent)] bg-clip-text text-transparent"
//                     {...(shouldAnimate ? slideUp : fadeIn)}
//                     transition={{ ...TRANSITIONS.normal, delay: 0.1 }}
//                 >
//                     Builds
//                 </motion.h1>
//                 <motion.p
//                     className="text-lg sm:text-xl text-center text-gray-400 mb-12 sm:mb-16"
//                     {...fadeIn}
//                     transition={{ ...TRANSITIONS.normal, delay: 0.2 }}
//                 >
//                     A collection of projects that reflect how I think, design, and build
//                 </motion.p>

//                 <motion.div
//                     className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10 mb-16"
//                     {...(shouldAnimate ? slideUp : fadeIn)}
//                     transition={{ ...TRANSITIONS.normal, delay: 0.3 }}
//                 >
//                     <h2 className="text-3xl font-bold mb-6 text-center">Real Projects, Real Results</h2>
//                     <div className="text-center max-w-4xl mx-auto">
//                         <p className="text-xl text-gray-300 mb-6">
//                             These aren't just portfolio pieces. These are real businesses I've helped grow online.
//                         </p>
//                         <div className="grid md:grid-cols-3 gap-8">
//                             {[
//                                 { title: 'Luxury Fashion', desc: 'Increased online sales by creating a premium shopping experience' },
//                                 { title: 'Café Business', desc: 'Reduced operational costs and improved customer experience' },
//                                 { title: 'Tech Showcase', desc: 'Built a standout online presence that attracts premium clients' }
//                             ].map((item, i) => (
//                                 <motion.div
//                                     key={item.title}
//                                     className="bg-white/5 rounded-lg p-6 border border-white/10"
//                                     {...(shouldAnimate ? staggerItem : fadeIn)}
//                                     transition={{ ...TRANSITIONS.normal, delay: 0.4 + i * 0.1 }}
//                                 >
//                                     <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>{item.title}</h3>
//                                     <p className="text-sm text-gray-400">{item.desc}</p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </motion.div>

//                 <motion.div
//                     className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16"
//                     {...(shouldAnimate ? staggerContainer : {})}
//                 >
//                     {sortedProjects.map((project, i) => (
//                         <ProjectCard key={project.id} project={project} index={i} />
//                     ))}
//                 </motion.div>

//                 <motion.div
//                     {...(shouldAnimate ? slideUp : fadeIn)}
//                     transition={{ ...TRANSITIONS.normal, delay: 0.5 }}
//                 >
//                     <CTASection
//                         headline="Ready to build something together?"
//                         description="Let's discuss your project and create a solution that delivers real results."
//                         buttonText="Let's talk"
//                         href="/Signal"
//                     />
//                 </motion.div>
//             </div>
//         </div>
//     );
// }


"use client";
import { ArrowLeft, TrendingUp, Award, Sparkles } from "lucide-react";
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

    const highlights = [
        {
            icon: TrendingUp,
            title: 'Luxury Fashion',
            desc: 'Premium shopping experience that increased online sales'
        },
        {
            icon: Award,
            title: 'Café Business',
            desc: 'Streamlined operations and elevated customer experience'
        },
        {
            icon: Sparkles,
            title: 'Tech Showcase',
            desc: 'Standout presence that attracts premium clients'
        }
    ];

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/10 via-transparent to-transparent" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 relative">
                    <motion.div {...fadeIn} transition={TRANSITIONS.fast}>
                        <Link href="/" prefetch={false}>
                            <button className="mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                <ArrowLeft size={20} aria-hidden="true" />
                                Back to Home
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div
                        {...(shouldAnimate ? slideUp : fadeIn)}
                        transition={{ ...TRANSITIONS.normal, delay: 0.1 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[var(--accent)] bg-clip-text text-transparent">
                            Builds
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
                            A collection of projects that reflect how I think, design, and build
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
                {/* Impact Highlights */}
                <motion.div
                    {...(shouldAnimate ? slideUp : fadeIn)}
                    transition={{ ...TRANSITIONS.normal, delay: 0.2 }}
                    className="mb-24 sm:mb-32"
                >
                    <div className="relative rounded-3xl overflow-hidden border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-transparent" />
                        <div className="relative p-8 sm:p-12">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                                Real Projects, Real Results
                            </h2>
                            <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-12">
                                These aren't just portfolio pieces — they're real businesses I've helped grow online
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                                {highlights.map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={item.title}
                                            {...(shouldAnimate ? staggerItem : fadeIn)}
                                            transition={{ ...TRANSITIONS.normal, delay: 0.3 + i * 0.1 }}
                                            className="group relative overflow-hidden rounded-xl p-6 bg-white/5 border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-300"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/10 group-hover:to-transparent transition-all duration-300" />
                                            <div className="relative">
                                                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 flex items-center justify-center mb-4">
                                                    <Icon className="w-6 h-6 text-[var(--accent)]" />
                                                </div>
                                                <h3 className="text-xl font-semibold mb-3 text-white">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-400 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    {...(shouldAnimate ? fadeIn : {})}
                    transition={{ ...TRANSITIONS.normal, delay: 0.4 }}
                    className="mb-24"
                >
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--accent)]" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-center">
                            Featured Work
                        </h2>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--accent)]" />
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10"
                        {...(shouldAnimate ? staggerContainer : {})}
                    >
                        {sortedProjects.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} />
                        ))}
                    </motion.div>
                </motion.div>

                {/* CTA */}
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