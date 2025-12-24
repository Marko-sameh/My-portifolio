"use client";
import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
    return (
        <div className="text-center mb-20">
            <motion.h2
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {title}
            </motion.h2>
            <motion.div
                className="h-1 w-32 mx-auto bg-gradient-to-r from-[var(--background)] to-[var(--accent)] rounded-full mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            />
            {subtitle && (
                <motion.p
                    className="text-[var(--accent)] max-w-3xl mx-auto text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}