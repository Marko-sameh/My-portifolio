"use client";
import SectionTitle from "./SectionTitle"
import LearnMoreButton from "./LearnMoreButton";

import { motion } from "framer-motion";
import Image from "next/image";
function IdentitySection() {
    return <section id="identity" className="relative min-h-screen py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

        <motion.div
            className="relative max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <SectionTitle title="Identity" subtitle="The person behind the code" />

            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start mt-12 sm:mt-16 lg:mt-20">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 order-2 lg:order-1"
                >
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight flex flex-col sm:flex-row gap-2">
                        {"I'm Marko —"}
                        <span className="block text-transparent bg-gradient-to-r from-[var(--background)] to-[var(--accent)] bg-clip-text">
                            Frontend Developer
                        </span>
                    </h3>

                    {/* BLOCKS */}
                    <div className="space-y-10">

                        <div>
                            <h4 className="text-lg font-semibold text-[var(--accent)] mb-2">
                                How it started
                            </h4>
                            <p className="text-white/65 leading-relaxed">
                                Curiosity drove me to understand how interfaces work
                                and how users interact with systems.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-[var(--accent)] mb-2">
                                Professional journey
                            </h4>
                            <p className="text-white/65 leading-relaxed">
                                That curiosity evolved into building real-world frontend systems,
                                translating business goals into scalable, user-focused interfaces.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-[var(--accent)] mb-2">
                                What I do today
                            </h4>
                            <p className="text-white/65 leading-relaxed">
                                I specialize in React and Next.js, delivering fast, accessible,
                                production-grade applications — while contributing to AI training
                                and exploring intelligent UX patterns.
                            </p>
                        </div>

                    </div>

                    <p className="text-sm text-white/50 pt-4">
                        Based in Cairo, Egypt — working globally.
                    </p>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 sm:space-y-8 lg:space-y-10 order-1 lg:order-2"
                >
                    {/* IMAGE */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[var(--background)] to-[var(--accent)] rounded-3xl opacity-20 blur-2xl" />
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 w-full h-[300px] sm:h-[400px] lg:h-[460px]">
                            <Image
                                src={"https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=900&q=80"}
                                alt="identity"
                                className="w-full h-full object-cover"
                                fill
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        </div>
                    </div>

                    {/* FOCUS CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {[
                            "React & Next.js",
                            "UI Architecture",
                            "Performance & SEO",
                            "AI-Enhanced UX",
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 text-center text-sm text-white/70 hover:border-[var(--accent)] transition-all"
                                whileHover={{ scale: 1.05 }}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
            <div className="flex justify-center mt-8 sm:mt-12">
                <LearnMoreButton sectionName="Identity" />
            </div>
        </motion.div>

    </section>

}

export default IdentitySection