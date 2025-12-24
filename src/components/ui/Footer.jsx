"use client";
import { motion } from "framer-motion";
const SECTIONS = ["Home", "Identity", "Mastery", "Builds", "Core", "Beyond", "Signal"];

function Footer({ }) {
    return <footer className="relative pb-1 pt-9 px-6 border-t border-white/10 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <motion.div
                    className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4"
                    whileHover={{ scale: 1.05 }}
                >
                    Marko Sameh
                </motion.div>
                <p className="text-gray-400 mb-8">Crafting digital experiences, one pixel at a time.</p>
                <div className="flex justify-center gap-10 mb-10 flex-wrap">
                    {SECTIONS.slice(1).map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item)}
                            className="text-gray-500 hover:text-white transition-colors text-sm"
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <div className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} Marko Sameh. Crafted like a film.
                </div>
            </motion.div>
        </div>
    </footer>
}

export default Footer