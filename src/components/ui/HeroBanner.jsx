
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Download, Eye, X } from "lucide-react";
import { useState } from "react";
function HeroBanner({ }) {
    const [particles, setParticles] = useState(() =>
        Array.from({ length: 30 }, () => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: Math.random() * 5 + 3,
            delay: Math.random() * 5
        }))
    );
    const [showCVModal, setShowCVModal] = useState(false);
    return <section id="home" className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--accent-40)] to-black z-10" />
            <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: "url(https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/EG-en-20251124-TRIFECTA-perspective_8e567342-c60f-4ebb-a1e4-c591bb3f8fac_large.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity }}
            />

            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                    }}
                />
            ))}
        </div>

        <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl py-8 sm:py-12 mt-[-60px] sm:mt-[-100px]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold  leading-tight"
                    style={{ textShadow: "0 0 40px rgba(0,0,0,0.5)" }}
                >
                    <span className="inline-block bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--background)] bg-clip-text text-transparent">
                        Marko Sameh
                    </span>
                    <br />
                </motion.h1>
                <motion.h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight"
                    style={{ textShadow: "0 0 40px rgba(0,0,0,0.5)" }}
                >
                    <span className="inline-block text-[var(--accent)]">
                        Frontend Developer
                    </span>
                    <br />
                </motion.h2>

                <motion.p
                    className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Building modern interfaces with clarity, structure, and intent.
                    <br className="hidden sm:block" />
                    I design and develop frontend systems that feel natural to use
                    and solid under the hood.
                    <br className="hidden sm:block" />
                    My focus is not just how things look —
                    but how they work, scale, and evolve over time.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <motion.button
                        onClick={() => {
                            const el = document.getElementById("builds");
                            if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
                        }}
                        className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[var(--accent)] to-[var(--background)] rounded-full font-semibold text-base sm:text-lg shadow-lg shadow-[var(--background)] flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.05, boxShadow: "0 5px 10px var(--background)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Play size={18} className="group-hover:scale-110 transition-transform" />
                        Watch Projects
                    </motion.button>

                    <motion.button
                        onClick={() => setShowCVModal(true)}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 rounded-full font-medium text-base sm:text-lg backdrop-blur-sm hover:bg-white/5 transition-all flex items-center justify-center"
                        whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        My CV
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 lg:w-32 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 lg:w-32 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none hidden md:block" />

        <div className="cinematic-curve-wrapper">
            <div className="cinematic-curve-in"></div>
            <div className="cinematic-curve-out"></div>
        </div>

        {/* CV Modal */}
        <AnimatePresence>
            {showCVModal && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowCVModal(false)} />
                    <motion.div
                        className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 max-w-sm w-full"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                    >
                        <button
                            onClick={() => setShowCVModal(false)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <X size={20} className="text-white" />
                        </button>

                        <h3 className="text-xl font-bold text-white mb-6 text-center">View My CV</h3>

                        <div className="space-y-4">
                            <motion.a
                                href="/MarkoSameh.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-[var(--accent)] to-[var(--background)] rounded-xl font-medium text-white hover:shadow-lg transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setShowCVModal(false)}
                            >
                                <Eye size={20} />
                                Open CV
                            </motion.a>

                            <motion.a
                                href="/MarkoSameh.pdf"
                                download="Marko_Sameh_CV.pdf"
                                className="flex items-center gap-3 w-full px-6 py-4 border-2 border-white/20 rounded-xl font-medium text-white hover:bg-white/5 transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setShowCVModal(false)}
                            >
                                <Download size={20} />
                                Download CV
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

    </section>

}

export default HeroBanner