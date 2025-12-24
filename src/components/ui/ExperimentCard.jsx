"use client";
import { motion } from "framer-motion";

export default function ExperimentCard({ title, desc, img, icon: Icon, index }) {
    return (
        <motion.div
            className="relative group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -8 }}
        >
            <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
            <div className="relative rounded-xl overflow-hidden border border-white/10 group-hover:border-purple-500/30 transition-all bg-black/40 backdrop-blur-sm">
                <div className="h-48 overflow-hidden relative">
                    <motion.img
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                        <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                            <Icon size={20} className="text-purple-400" />
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <h4 className="text-lg font-bold mb-2">{title}</h4>
                    <p className="text-sm text-gray-400">{desc}</p>
                </div>
            </div>
        </motion.div>
    );
}
