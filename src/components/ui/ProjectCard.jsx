"use client";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";
import { useAnimationPreferences } from '@/hooks/useAnimationPreferences';
import { staggerItem, TRANSITIONS, getHoverAnimation } from '@/utils/animationConfig';

const ProjectCard = memo(function ProjectCard({ project, index }) {
    const { reducedMotion } = useAnimationPreferences();
    const shouldAnimate = !reducedMotion;

    return (
        <motion.article 
            className="relative group cursor-pointer"
            {...(shouldAnimate ? staggerItem : { initial: { opacity: 0 }, animate: { opacity: 1 } })}
            transition={{ ...TRANSITIONS.normal, delay: index * 0.1 }}
        >
            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--background)] to-[var(--accent)] rounded-3xl opacity-20 group-hover:opacity-40 blur-2xl transition-opacity" />
            <motion.div 
                className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all bg-black/40 backdrop-blur-sm"
                whileHover={getHoverAnimation(1.02)}
            >
                {project.img && (
                    <div className="relative h-64 overflow-hidden">
                        <Image
                            src={project.img}
                            alt={project.title}
                            width={400}
                            height={256}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
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
                )}
                <div className="p-6">
                    <p className="text-gray-400 mb-4 line-clamp-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 4).map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10">
                                {t}
                            </span>
                        ))}
                        {project.tech.length > 4 && (
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10">
                                +{project.tech.length - 4}
                            </span>
                        )}
                    </div>
                    <div className="flex gap-3">
                        <a
                            href={`/Builds/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, '-'))}`}
                            className="flex-1 px-4 py-2 bg-gradient-to-r from-[var(--background)] to-[var(--accent)] rounded-lg text-sm font-medium text-center hover:opacity-90 transition-opacity"
                        >
                            View Project
                        </a>
                        {project.links?.[0] && (
                            <a
                                href={project.links[0].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 border border-white/20 rounded-lg text-sm flex items-center gap-2 hover:border-white/40 transition-colors"
                                aria-label="View live project"
                            >
                                <ExternalLink size={16} aria-hidden="true" />
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.article>
    );
});

export default ProjectCard;