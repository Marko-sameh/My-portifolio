"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import CVModal from './CVModal';
import { useState, useMemo, useCallback } from "react";
import Image from "next/image";

function HeroBanner() {
    // Reduce particles for better performance
    const particles = useMemo(() =>
        Array.from({ length: 8 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 3
        }))
    , []);
    
    const [showCVModal, setShowCVModal] = useState(false);
    
    const scrollToProjects = useCallback(() => {
        const el = document.getElementById("builds");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);
    
    const openCVModal = useCallback(() => setShowCVModal(true), []);
    const closeCVModal = useCallback(() => setShowCVModal(false), []);

    return (
        <section 
            id="home" 
            className="hero-section relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
            aria-labelledby="hero-heading"
        >
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--accent-40)] to-black z-10" />
                <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: "transform" }}
                >
                    <Image
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/EG-en-20251124-TRIFECTA-perspective_8e567342-c60f-4ebb-a1e4-c591bb3f8fac_large.jpg"
                        alt="Cinematic background showcasing modern web development"
                        fill
                        className="object-cover"
                        priority
                        fetchPriority="high"
                        sizes="100vw"
                        quality={75}
                    />
                </motion.div>

                <div className="hero-particles">
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                                willChange: "transform, opacity"
                            }}
                            animate={{
                                y: [0, -50, 0],
                                opacity: [0, 0.8, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                delay: particle.delay,
                                ease: "easeInOut"
                            }}
                            aria-hidden="true"
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl py-8 sm:py-12 mt-[-60px] sm:mt-[-100px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <motion.h1
                        id="hero-heading"
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                        style={{ textShadow: "0 0 40px rgba(0,0,0,0.5)" }}
                    >
                        <span className="inline-block bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--background)] bg-clip-text text-transparent">
                            Marko Sameh
                        </span>
                    </motion.h1>
                    
                    <motion.h2
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight"
                        style={{ textShadow: "0 0 40px rgba(0,0,0,0.5)" }}
                    >
                        <span className="inline-block text-[var(--accent)]">
                            Frontend Developer
                        </span>
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
                            onClick={scrollToProjects}
                            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[var(--accent)] to-[var(--background)] rounded-full font-semibold text-base sm:text-lg shadow-lg shadow-[var(--background)] flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                            whileHover={{ scale: 1.05, boxShadow: "0 5px 10px var(--background)" }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Scroll to projects section to view my work"
                            type="button"
                        >
                            <Play size={18} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                            <span>Watch Projects</span>
                        </motion.button>

                        <motion.button
                            onClick={openCVModal}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 rounded-full font-medium text-base sm:text-lg backdrop-blur-sm hover:bg-white/5 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Open CV modal to view my resume"
                            type="button"
                        >
                            <span>My CV</span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 lg:w-32 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none hidden md:block" aria-hidden="true" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 lg:w-32 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none hidden md:block" aria-hidden="true" />

            <div className="cinematic-curve-wrapper" aria-hidden="true">
                <div className="cinematic-curve-in"></div>
                <div className="cinematic-curve-out"></div>
            </div>

            <CVModal isOpen={showCVModal} onClose={closeCVModal} />
        </section>
    );
}

export default HeroBanner;