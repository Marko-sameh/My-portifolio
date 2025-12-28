"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import LearnMoreButton from "./LearnMoreButton";

export default function CoreTimeline() {
    const principles = [
        { number: "01", title: "Problem-First Thinking" },
        { number: "02", title: "Design with intent." },
        { number: "03", title: "Performance as a standard." },
        { number: "04", title: "Scalable systems." },
        { number: "05", title: "User-driven decisions." },
        { number: "06", title: "Calm, readable code." },
    ];

    return (

        <section id="core" className="relative min-h-screen py-5 px-6">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black" />
            <motion.div
                className="relative max-w-5xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <SectionTitle title="Core" subtitle="How I Think. How I Build. Why It Works" />

                <div className="mt-16">
                    {/* Desktop: Single row */}
                    <div className="hidden md:flex justify-between items-center relative py-20">
                        {/* Main horizontal line with animated light */}
                        <div className="absolute left-10 right-10 top-1/2 h-px bg-[var(--accent)] opacity-30" />

                        {principles.map((principle, i) => {
                            const isTop = i % 2 === 0;

                            return (
                                <motion.div
                                    key={i}
                                    className={`relative flex flex-col items-center ${isTop ? "-translate-y-20 -translate-x-[19.2px]" : "translate-y-20 -translate-x-[-20px]"
                                        }`}
                                    initial={{ opacity: 0, y: isTop ? -30 : 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.7, ease: "easeOut" }}
                                >
                                    {/* Vertical connector */}

                                    {
                                        isTop ? <>
                                            {/* Text */}
                                            <h3 className="mt-3 text-sm font-bold text-white text-center max-w-[120px] hover:text-[var(--accent)] transition-colors">
                                                {principle.title}
                                            </h3>
                                            {/* Node */}
                                            <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-sm font-bold text-black hover:scale-110 transition-transform">
                                                {principle.number}
                                            </div>



                                            <div className={`w-px h-12 bg-[var(--accent)] opacity-30`} style={{ marginBottom: "-11px" }} />
                                        </> : <>

                                            <div className={`w-px h-12 bg-[var(--accent)] opacity-30`} style={{ marginTop: "-10px" }} />
                                            {/* Node */}
                                            <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-sm font-bold text-black hover:scale-110 transition-transform">
                                                {principle.number}
                                            </div>

                                            {/* Text */}
                                            <h3 className="mt-3 text-sm font-bold text-white text-center max-w-[120px] hover:text-[var(--accent)] transition-colors">
                                                {principle.title}
                                            </h3>

                                        </>
                                    }

                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Mobile: Vertical flow */}
                    <div className="md:hidden space-y-8">
                        {[
                            { number: "01", title: "Problem-First Thinking" },
                            { number: "02", title: "Design with intent." },
                            { number: "03", title: "Performance as a standard." },
                            { number: "04", title: "Scalable systems." },
                            { number: "05", title: "User-driven decisions." },
                            { number: "06", title: "Calm, readable code." }
                        ].map((principle, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-4 relative"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-sm font-bold text-black flex-shrink-0">
                                    {principle.number}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-bold text-white hover:text-[var(--accent)] transition-colors">
                                        {principle.title}
                                    </h3>
                                </div>
                                {i < 5 && (
                                    <div className="absolute left-5 top-10 w-px h-8 bg-[var(--accent)] opacity-30" />
                                )}
                            </motion.div>
                        ))}
                    </div>

                </div>

                <motion.div
                    className="mt-20 pt-12 border-t border-white/10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-bold text-white mb-6 text-center">Built with</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["React", "Next.js", "Tailwind", "Framer Motion", "TypeScript", "Django", "FastAPI", "Postgres", "Redis", "PyTorch", "Flutter", "Figma"].map((tech, i) => (
                            <motion.div
                                key={tech}
                                className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:border-[var(--accent)] text-sm transition-all"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <div className="flex justify-center mt-8">
                    <LearnMoreButton sectionName="Core" />
                </div>
            </motion.div>
        </section>);
}
