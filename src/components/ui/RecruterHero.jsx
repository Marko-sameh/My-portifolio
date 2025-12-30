'use client';
import { Mail, MapPin, Linkedin, ArrowUpRight, Award, TrendingUp, FileText } from 'lucide-react';
import { useState } from 'react';
import CVModal from './CVModal';

function RecruterHero({ }) {
    const [showCVModal, setShowCVModal] = useState(false);

    return <section id="about" className="relative overflow-hidden bg-slate-50">
        <header className="max-w-6xl mx-auto px-8 py-24">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
                <div className="lg:col-span-3">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                        <Award className="w-4 h-4" />
                        <span>Available for Frontend Roles - July 2025 Graduate</span>
                    </div>
                    <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        Marko Sameh
                        <span className="block text-4xl font-normal text-slate-600 mt-3">Frontend Developer & Computer Science Graduate</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-6 leading-relaxed max-w-2xl">
                        I build high-performance web applications that deliver real business value.
                        Dual degree graduate with 2+ years of freelance experience, specializing in React/Next.js ecosystems
                        and consistently achieving 90+ Lighthouse scores.
                    </p>
                    <p className='text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl font-medium'>I {"don't"} just build interfaces — I build systems that teams can rely on</p>
                    <address className="flex items-center gap-8 text-slate-500 mb-10 not-italic">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            <span className="font-medium">Cairo, Egypt</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            <span className="font-medium">Remote/Hybrid/Full Time/Part Time Ready</span>
                        </div>
                    </address>
                </div>
                <aside className="lg:col-span-2 space-y-5">
                    <a href="mailto:markosameh75@gmail.com"
                        className="group flex items-center justify-between p-6 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all hover:scale-105 shadow-xl">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-white/10 rounded-lg">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-semibold text-lg">{"Let's"} Talk</p>
                                <p className="text-sm text-slate-300">markosameh75@gmail.com</p>
                            </div>
                        </div>
                        <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                    <a href="https://www.linkedin.com/in/marko-sameh-9971b6244"
                        className="group flex items-center justify-between p-6 bg-white border-2 border-slate-200 rounded-2xl hover:border-blue-300 hover:bg-blue-50 transition-all hover:scale-105 shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <Linkedin className="w-6 h-6 text-blue-800" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 text-lg">View Profile</p>
                                <p className="text-sm text-slate-500">LinkedIn Profile</p>
                            </div>
                        </div>
                        <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                    <button
                        onClick={() => setShowCVModal(true)}
                        className="group flex items-center justify-between p-6 bg-white border-2 border-slate-200 rounded-2xl hover:border-blue-300 hover:bg-blue-50 transition-all hover:scale-105 shadow-lg w-full"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <FileText className="w-6 h-6 text-blue-800" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 text-lg text-start"> My CV</p>
                                <p className="text-sm text-slate-500">Download or view Resume</p>
                            </div>
                        </div>
                        <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <CVModal isOpen={showCVModal} onClose={() => setShowCVModal(false)} />

                </aside>
            </div>
        </header>
    </section>
}

export default RecruterHero