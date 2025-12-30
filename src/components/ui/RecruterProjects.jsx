'use client';

import { useProjects } from '@/hooks/useProjects';
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin, ArrowUpRight, Award, TrendingUp, Users, Target, FileText } from 'lucide-react';
import Link from 'next/link';

function RecruterProjects({ }) {
    const {
        projects,
    } = useProjects();

    return <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Selected projects</h2>
            <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">Key projects that demonstrate my capabilities</p>
            <div className="space-y-8">
                {projects.map((project) => (
                    <article key={project.id} className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                                        {project.tag}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                                <p className="text-slate-600 mb-3">{project.desc}</p>
                                {project.fullDescription && (
                                    <p className="text-slate-500 text-sm">{project.fullDescription}</p>
                                )}
                            </div>
                            <div className="flex gap-2 ml-6">
                                {project.links?.map((link, i) => (
                                    <Link key={i} href={link.url} target='_blank'
                                        className="p-2 bg-slate-100 hover:bg-blue-100 rounded-lg transition-colors"
                                        aria-label={link.type === 'github' ? 'View source code' : 'View live project'}>
                                        {link.type === 'github' ?
                                            <Github className="w-5 h-5 text-slate-600" /> :
                                            <ExternalLink className="w-5 h-5 text-slate-600" />
                                        }
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {project.features && (
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-slate-900 mb-2">Features</h4>
                                <div className="grid md:grid-cols-3 gap-3">
                                    {project.features.slice(0, 3).map((feature, i) => (
                                        <div key={i} className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                            <div className="text-sm text-slate-700">{feature}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            {project.results && (
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                    <h4 className="text-sm font-semibold text-blue-800 mb-1">Impact</h4>
                                    <p className="text-blue-800 text-sm">{project.results}</p>
                                </div>
                            )}
                            {project.challenges && (
                                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                                    <h4 className="text-sm font-semibold text-slate-800 mb-1">Challenges</h4>
                                    <ul className="space-y-1">
                                        {project.challenges.slice(0, 2).map((challenge, i) => (
                                            <li key={i} className="text-slate-700 text-sm flex items-start gap-2">
                                                <span className="text-slate-400">•</span>
                                                {challenge}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-2">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech?.map((tech, i) => (
                                    <span key={i} className={`px-3 py-1 rounded-lg text-sm font-medium ${i === 0 ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-700'
                                        }`}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
}

export default RecruterProjects