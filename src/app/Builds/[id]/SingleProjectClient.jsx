"use client";
import { ArrowLeft, ExternalLink, Tag, Zap, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useProjects } from "../../../hooks/useProjects";
import { use, useState, useMemo } from "react";

export default function SingleProjectClient({ param }) {
    const { projects } = useProjects();
    const resolvedParams = use(param);
    const [selectedImage, setSelectedImage] = useState(null);

    const slug = resolvedParams.id;
    const project = useMemo(() => 
        projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === decodeURIComponent(slug)) || null,
        [projects, slug]
    );

    if (!project) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl mb-4">Project not found</h1>
                    <Link href="/Builds" className="px-6 py-3 bg-gradient-to-br from-(--accent) to-(--background)) rounded-lg">
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pt-10">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                    <Link href="/Builds">
                        <button className="flex items-center gap-2 mb-8 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all">
                            <ArrowLeft size={20} />
                            Back to Projects
                        </button>
                    </Link>

                    <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 items-center">
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                                <Tag size={20} style={{ color: 'var(--accent)' }} />
                                <span className="px-3 py-1 text-sm font-medium rounded-full bg-white/10" style={{ color: 'var(--accent)' }}>
                                    {project.tag}
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, white, #d1d5db, var(--accent))` }}>
                                {project.title}
                            </h1>

                            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-3 sm:gap-4">
                                {(project.links || []).map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity text-sm sm:text-base"
                                        style={{ background: `linear-gradient(to right, var(--accent), var(--background))` }}
                                    >
                                        <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="relative lg:col-span-3">
                            <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ background: `linear-gradient(to right, var(--accent), var(--background))`, opacity: 0.2 }} />
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-sm">
                                {project.img ? (
                                    <Image
                                        src={project.img}
                                        alt={project.title}
                                        width={800}
                                        height={450}
                                        className="w-full h-[350px] sm:h-[450px] lg:h-[450px] object-cover"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-[250px] sm:h-[300px] lg:h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                        <Zap size={64} className="text-gray-600" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
                    <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(to right, var(--accent), var(--background))` }}>
                                <Zap size={14} className="sm:w-[18px] sm:h-[18px]" />
                            </div>
                            Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/10 text-xs sm:text-sm font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {(project.features || []).length > 0 && (
                        <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(to right, var(--primary), var(--secondary))` }}>
                                    <Zap size={14} className="sm:w-[18px] sm:h-[18px]" />
                                </div>
                                Key Features
                            </h3>
                            <ul className="space-y-3 sm:space-y-4">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: `linear-gradient(to right, var(--primary), var(--secondary))` }} />
                                        <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {(project.challenges || []).length > 0 && (
                        <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(to right, var(--accent), var(--background))` }}>
                                    <Zap size={14} className="sm:w-[18px] sm:h-[18px]" />
                                </div>
                                Challenges
                            </h3>
                            <ul className="space-y-3 sm:space-y-4">
                                {project.challenges.map((challenge, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: `linear-gradient(to right, var(--accent), var(--background))` }} />
                                        <span className="text-xs sm:text-sm leading-relaxed">{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {project.results && (
                    <div className="mt-12 sm:mt-16 rounded-2xl p-6 sm:p-8 border bg-white/5 border-white/10">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Results & Impact</h3>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                            {project.results}
                        </p>
                    </div>
                )}

                {(project.images || []).length > 0 && (
                    <div className="mt-12 sm:mt-16">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Project Gallery</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {project.images.map((img, i) => (
                                <div
                                    key={i}
                                    className="relative rounded-xl overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-sm hover:border-white/20 transition-colors cursor-pointer"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <Image
                                        src={img}
                                        alt={`${project.title} screenshot ${i + 1}`}
                                        width={400}
                                        height={300}
                                        className="w-full h-64 object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setSelectedImage(null)}>
                    <button className="absolute top-4 right-4 text-white hover:text-gray-300" onClick={() => setSelectedImage(null)}>
                        <X size={32} />
                    </button>
                    <Image src={selectedImage} alt="Full size" width={1200} height={800} className="max-w-full max-h-full object-contain" />
                </div>
            )}
        </div>
    );
}
