"use client";
import { motion } from "framer-motion";

export default function MasteryCard({ title, desc, img, gradient, index }) {
    return (
        <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
        >
            <div className={`absolute -inset-4 bg-gradient-to-br ${gradient} rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity`} />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all bg-black/40 backdrop-blur-sm">
                <div className="h-56 overflow-hidden">
                    <div className="relative">

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        <motion.img
                            src={img}
                            alt={title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                        />
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{title}</h3>
                    <p className="text-[var(--accent-50)]">{desc}</p>
                </div>
            </div>
        </motion.div>
    );
}