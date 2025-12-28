"use client";
import { motion } from "framer-motion";
import { links } from "./SignalSection";
import logo from "@/../public/logo-removebg-preview.png"
import Image from "next/image";
const SECTIONS = ["Home", "Identity", "Mastery", "Builds", "Core", "Beyond", "Signal"];

function Footer({ }) {
    return <footer className="relative pb-4 sm:pb-6 pt-6 sm:pt-6 px-4 sm:px-6 border-t border-white/10 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <motion.div
                    className="flex justify-center mb-4 relative"
                    whileHover={{ scale: 1.05 }}
                >
                    <span
                        className="absolute inset-0 rounded-full blur-xl opacity-70"
                        style={{
                            background: `radial-gradient(circle, var(--emotion-primary), transparent 10%)`,
                        }}
                    />
                    <Image
                        alt="Marko Logo"
                        src={logo}
                        width={120}
                        height={100}
                        className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] "
                        priority
                    />
                </motion.div>
                <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--background)] bg-clip-text text-transparent mb-4">Frontend Developer</p>
                <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base px-4">Programming calm, scalable interfaces — where performance meets intention</p>
                <div className="flex justify-center gap-6 sm:gap-10 mb-8 sm:mb-10 flex-wrap">
                    {SECTIONS.slice(1).map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item)}
                            className="text-gray-500 hover:text-white transition-colors text-xs sm:text-sm"
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 py-4 sm:py-5">
                    <div className="text-gray-600 text-xs sm:text-sm order-2 sm:order-1">
                        © Crafted by Marko — 2025
                    </div>
                    <div className="flex justify-center gap-4 sm:gap-6 order-1 sm:order-2">
                        {links.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.link}
                                className={`p-2 sm:p-3 bg-white/5 rounded-full border border-white/10 hover:border-white/30 transition-all ${social.color}`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <social.icon size={18} className="sm:w-5 sm:h-5" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    </footer>
}

export default Footer