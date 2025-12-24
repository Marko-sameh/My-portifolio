"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
export default function ProjectCard({ project, index }) {
    return (
        <motion.article
            className="relative group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
        >
            <div className={`absolute -inset-4 bg-gradient-to-br ${project.gradient} rounded-3xl opacity-20 group-hover:opacity-40 blur-2xl transition-opacity`} />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all bg-black/40 backdrop-blur-sm">
                <div className="relative h-64 overflow-hidden">
                    <motion.img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs border border-white/20">
                            {project.tag}
                        </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    </div>
                </div>
                <div className="p-6">
                    <p className="text-gray-400 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        <motion.button
                            className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Project
                        </motion.button>
                        <motion.button
                            className="px-4 py-2 border border-white/20 rounded-lg text-sm flex items-center gap-2"
                            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ExternalLink size={16} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}