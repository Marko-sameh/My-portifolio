// "use client";
// import { motion } from "framer-motion";
// import { ArrowLeft, Target, Zap, Users, Code, Gauge, MessageSquare } from "lucide-react";
// import Link from "next/link";
// import CTASection from "@/components/ui/CTASection";

// const principles = [
//     { icon: Target, title: "Understanding First", desc: "I don't start with code. I start by understanding the problem." },
//     { icon: Zap, title: "Intentional Decisions", desc: "Every technical choice has trade-offs. I choose based on project goals, scalability, and maintainability." },
//     { icon: Gauge, title: "Performance & Quality", desc: "A beautiful interface that performs poorly is a failed product. Performance is part of the experience." },
//     { icon: MessageSquare, title: "Communication", desc: "Clear communication is essential. I provide transparency, regular updates, and ownership over outcomes." }
// ];
// const steps = [
//     {
//         step: "01",
//         title: "Discovery Call",
//         desc: "We discuss your goals, timeline, and budget. No sales pressure, just understanding what you need."
//     },
//     {
//         step: "02",
//         title: "Project Planning",
//         desc: "I create a detailed plan with clear milestones, deliverables, and timeline. You approve before we start."
//     },
//     {
//         step: "03",
//         title: "Regular Updates",
//         desc: "Weekly progress reports with screenshots and demos. You're never left wondering what's happening."
//     },
//     {
//         step: "04",
//         title: "Launch & Support",
//         desc: "Thorough testing, smooth launch, and ongoing support to ensure everything works perfectly."
//     }
// ]
// export default function CoreClient() {

//     return (
//         <div className="min-h-screen bg-black text-white py-10 sm:py-16 lg:py-20 px-4 sm:px-6">
//             <div className="max-w-6xl mx-auto">
//                 <Link href="/">
//                     <motion.button
//                         className="mb-8 sm:mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
//                         whileHover={{ x: -5 }}
//                     >
//                         <ArrowLeft size={20} />
//                         Back to Home
//                     </motion.button>
//                 </Link>

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-white to-[var(--accent)] bg-clip-text text-transparent">
//                         Core
//                     </h1>
//                     <p className="text-lg sm:text-xl text-center text-gray-400 mb-12 sm:mb-16">How I Think. How I Build. Why It Works</p>

//                     {/* Marketing Section for Non-Technical Clients */}
//                     <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10 mb-16">
//                         <h2 className="text-3xl font-bold mb-6 text-center">How I Work With You</h2>
//                         <div className="grid md:grid-cols-2 gap-12">
//                             <div>
//                                 <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>My Promise</h3>
//                                 <p className="text-lg text-gray-300 mb-4">I {"don't"} just build websites. I build business solutions that work from day one and keep working as you grow.</p>
//                                 <p className="text-gray-300">Every decision I make is focused on helping your business succeed online.</p>
//                             </div>
//                             <div>
//                                 <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>What You Get</h3>
//                                 <p className="text-lg text-gray-300 mb-4">A partner who takes full responsibility for your {"project's"} success. Clear timelines, regular updates, and a website that delivers results.</p>
//                                 <p className="text-gray-300">No surprises, no excuses, just results you can measure.</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-12 mb-20">
//                         {principles.map((principle, index) => (
//                             <motion.div
//                                 key={index}
//                                 className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[var(--accent)]/30 transition-all"
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: index * 0.1 }}
//                             >
//                                 <principle.icon className="w-12 h-12 mb-6" style={{ color: 'var(--accent)' }} />
//                                 <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--accent)' }}>{principle.title}</h2>
//                                 <p className="text-lg text-gray-300 leading-relaxed mb-4">{principle.desc}</p>
//                                 <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-lg p-4">
//                                     <p className="text-sm text-gray-400 font-medium mb-2">What this means for you:</p>
//                                     <p className="text-sm text-gray-300">
//                                         {index === 0 && "No surprises or scope creep. We define exactly what needs to be built before any work begins."}
//                                         {index === 1 && "Every decision is explained in business terms. You'll understand why we're making each choice."}
//                                         {index === 2 && "Your website will load fast and work reliably, keeping customers engaged and converting."}
//                                         {index === 3 && "Regular updates, clear timelines, and honest communication throughout the entire project."}
//                                     </p>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>

//                     {/* How I Work Process */}
//                     <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10 mb-20">
//                         <h2 className="text-3xl font-bold mb-8 text-center">How I Work: A Clear, Predictable Process</h2>
//                         <div className="grid md:grid-cols-4 gap-6">
//                             {steps.map((item, i) => (
//                                 <motion.div
//                                     key={i}
//                                     className="text-center bg-white/5 rounded-lg p-6 border border-white/10"
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: 0.5 + i * 0.1 }}
//                                 >
//                                     <div className="w-12 h-12 rounded-full bg-linear-to-r from-(--background) to-(--accent) flex items-center justify-center text-black font-bold text-lg mb-4 mx-auto">
//                                         {item.step}
//                                     </div>
//                                     <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--accent)' }}>{item.title}</h3>
//                                     <p className="text-sm text-gray-300">{item.desc}</p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Why Clients Feel Comfortable */}
//                     <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-20">
//                         <h2 className="text-3xl font-bold mb-8 text-center">Why Clients Feel Comfortable Working With Me</h2>
//                         <div className="grid md:grid-cols-3 gap-8">
//                             <div className="text-center">
//                                 <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>No Technical Confusion</h3>
//                                 <p className="text-gray-300 mb-4">I explain everything in plain English. {"You'll"} understand {"what's"} being built and why it matters to your business.</p>
//                                 <p className="text-sm text-gray-400">{`"Finally, a developer who speaks my language"`} - Recent client feedback</p>
//                             </div>
//                             <div className="text-center">
//                                 <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Predictable Timelines</h3>
//                                 <p className="text-gray-300 mb-4">Clear milestones, regular check-ins, and realistic deadlines. {"You'll"} know exactly when your website will be ready.</p>
//                                 <p className="text-sm text-gray-400">100% of projects delivered on schedule in the past year</p>
//                             </div>
//                             <div className="text-center">
//                                 <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Full Ownership</h3>
//                                 <p className="text-gray-300 mb-4">I take responsibility for the entire {"project's"} success. If something {"doesn't"} work as promised, I fix it at no extra cost.</p>
//                                 <p className="text-sm text-gray-400">Your success is my success - {"it's"} that simple</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-20">
//                         <h2 className="text-3xl font-bold mb-8 text-center">Technical Foundation</h2>
//                         <p className="text-center text-gray-400 mb-8">The reliable tools and methods that ensure your {"project's"} success</p>
//                         <div className="grid md:grid-cols-3 gap-8">
//                             <div>
//                                 <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Frontend</h3>
//                                 <div className="space-y-2 mb-4">
//                                     {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech, i) => (
//                                         <div key={i} className="p-2 bg-white/5 rounded border border-white/10 text-sm">{tech}</div>
//                                     ))}
//                                 </div>
//                                 <p className="text-xs text-gray-400">Modern, industry-standard tools for fast, reliable websites</p>
//                             </div>
//                             <div>
//                                 <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Backend</h3>
//                                 <div className="space-y-2 mb-4">
//                                     {["Node.js", "Python", "Django", "FastAPI", "PostgreSQL"].map((tech, i) => (
//                                         <div key={i} className="p-2 bg-white/5 rounded border border-white/10 text-sm">{tech}</div>
//                                     ))}
//                                 </div>
//                                 <p className="text-xs text-gray-400">Robust server technology for secure, scalable applications</p>
//                             </div>
//                             <div>
//                                 <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Tools</h3>
//                                 <div className="space-y-2 mb-4">
//                                     {["Git", "Figma", "Firebase", "Redis", "Three.js"].map((tech, i) => (
//                                         <div key={i} className="p-2 bg-white/5 rounded border border-white/10 text-sm">{tech}</div>
//                                     ))}
//                                 </div>
//                                 <p className="text-xs text-gray-400">Professional workflow tools for quality and collaboration</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="text-center">
//                         <h2 className="text-3xl font-bold mb-8">Development Philosophy</h2>
//                         <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
//                             Every decision I make is guided by what will best serve your business goals and your {"users'"} needs
//                         </p>
//                         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//                             <div className="bg-linear-to-br from-(--background)/20 to-(--accent)/20 rounded-2xl p-6 border border-white/10">
//                                 <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--accent)' }}>Code Quality</h3>
//                                 <p className="text-gray-300 mb-3">Clean, maintainable code that scales with business needs and team growth.</p>
//                                 <p className="text-sm text-gray-400">This means lower maintenance costs and easier future updates</p>
//                             </div>
//                             <div className="bg-linear-to-br from-(--background)/20 to-(--accent)/20 rounded-2xl p-6 border border-white/10">
//                                 <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--accent)' }}>User Focus</h3>
//                                 <p className="text-gray-300 mb-3">Every decision prioritizes user experience and business objectives.</p>
//                                 <p className="text-sm text-gray-400">Better user experience leads to higher conversion rates and customer satisfaction</p>
//                             </div>
//                         </div>
//                     </div>

//                     <CTASection
//                         headline="Want to work with someone who thinks this way?"
//                         description="Structured thinking and clear processes lead to better outcomes for your business."
//                         buttonText="Explore my approach"
//                         href="/beyond"
//                     />
//                 </motion.div>
//             </div>
//         </div>
//     );
// }


"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Zap, Gauge, MessageSquare, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/ui/CTASection";

const principles = [
    {
        icon: Target,
        title: "Understanding First",
        desc: "I don't start with code. I start by understanding the problem and defining exactly what needs to be built."
    },
    {
        icon: Zap,
        title: "Intentional Decisions",
        desc: "Every technical choice has trade-offs. I choose based on project goals, scalability, and maintainability — explained in business terms."
    },
    {
        icon: Gauge,
        title: "Performance & Quality",
        desc: "A beautiful interface that performs poorly is a failed product. Fast loading and reliability keep customers engaged and converting."
    },
    {
        icon: MessageSquare,
        title: "Communication",
        desc: "Clear communication is essential. Regular updates, clear timelines, and honest communication throughout the entire project."
    }
];

const steps = [
    {
        step: "01",
        title: "Discovery Call",
        desc: "We discuss your goals, timeline, and budget. No sales pressure, just understanding what you need."
    },
    {
        step: "02",
        title: "Project Planning",
        desc: "I create a detailed plan with clear milestones, deliverables, and timeline. You approve before we start."
    },
    {
        step: "03",
        title: "Regular Updates",
        desc: "Weekly progress reports with screenshots and demos. You're never left wondering what's happening."
    },
    {
        step: "04",
        title: "Launch & Support",
        desc: "Thorough testing, smooth launch, and ongoing support to ensure everything works perfectly."
    }
];

const techStack = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Python", "Django", "FastAPI", "PostgreSQL"],
    tools: ["Git", "Figma", "Firebase", "Redis", "Three.js"]
};

export default function CoreClient() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/10 via-transparent to-transparent" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 relative">
                    <Link href="/">
                        <motion.button
                            className="mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                            whileHover={{ x: -5 }}
                        >
                            <ArrowLeft size={20} />
                            Back to Home
                        </motion.button>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[var(--accent)] bg-clip-text text-transparent">
                            Core
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
                            How I Think. How I Build. Why It Works
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
                {/* My Promise Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-24 sm:mb-32"
                >
                    <div className="relative rounded-3xl overflow-hidden border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-transparent" />
                        <div className="relative p-8 sm:p-12">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
                                How I Work With You
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold" style={{ color: 'var(--accent)' }}>
                                        My Promise
                                    </h3>
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        I {"don't"} just build websites. I build business solutions that work from day one and keep working as you grow.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">
                                        Every decision I make is focused on helping your business succeed online.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold" style={{ color: 'var(--accent)' }}>
                                        What You Get
                                    </h3>
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        A partner who takes full responsibility for your {"project's"} success. Clear timelines, regular updates, and a website that delivers results.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">
                                        No surprises, no excuses, just results you can measure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Core Principles */}
                <div className="mb-24 sm:mb-32">
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--accent)]" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-center">
                            Core Principles
                        </h2>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--accent)]" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        {principles.map((principle, index) => {
                            const Icon = principle.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="group relative overflow-hidden rounded-xl p-6 sm:p-8 bg-white/5 border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/10 group-hover:to-transparent transition-all duration-300" />
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 flex items-center justify-center mb-6">
                                            <Icon className="w-6 h-6 text-[var(--accent)]" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-4">
                                            {principle.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {principle.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Process Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 sm:mb-32"
                >
                    <div className="relative rounded-3xl overflow-hidden border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
                        <div className="relative p-8 sm:p-12">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                                A Clear, Predictable Process
                            </h2>
                            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                                Every project follows a structured approach to ensure quality and transparency
                            </p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {steps.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="text-center space-y-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent)]/50 via-[var(--accent)]/10 to-transparent flex items-center justify-center  font-bold text-xl mx-auto">
                                            {item.step}
                                        </div>
                                        <h3 className="text-lg font-semibold" style={{ color: 'var(--accent)' }}>
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Why Clients Trust Me */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 sm:mb-32"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
                        Why Clients Trust Me
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "No Technical Confusion",
                                desc: "I explain everything in plain English. You'll understand what's being built and why it matters to your business.",
                                note: '"Finally, a developer who speaks my language"'
                            },
                            {
                                title: "Predictable Timelines",
                                desc: "Clear milestones, regular check-ins, and realistic deadlines. You'll know exactly when your website will be ready.",
                                note: "100% of projects delivered on schedule"
                            },
                            {
                                title: "Full Ownership",
                                desc: "I take responsibility for the entire project's success. If something doesn't work as promised, I fix it at no extra cost.",
                                note: "Your success is my success"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="text-center space-y-4 p-6 rounded-xl bg-white/5 border border-white/10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-6 h-6 text-[var(--accent)]" />
                                </div>
                                <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {item.desc}
                                </p>
                                <p className="text-sm text-gray-400 italic">
                                    {item.note}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technical Foundation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 sm:mb-32"
                >
                    <div className="relative rounded-3xl overflow-hidden border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-bl from-[var(--accent)]/20 via-transparent to-transparent" />
                        <div className="relative p-8 sm:p-12">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                                Technical Foundation
                            </h2>
                            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                                Industry-standard tools and technologies that ensure reliability and scalability
                            </p>

                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    { title: "Frontend", items: techStack.frontend, desc: "Modern tools for fast, reliable websites" },
                                    { title: "Backend", items: techStack.backend, desc: "Robust technology for secure applications" },
                                    { title: "Tools", items: techStack.tools, desc: "Professional workflow for quality delivery" }
                                ].map((stack, i) => (
                                    <div key={i} className="space-y-4">
                                        <h3 className="text-xl font-semibold text-center" style={{ color: 'var(--accent)' }}>
                                            {stack.title}
                                        </h3>
                                        <div className="space-y-2">
                                            {stack.items.map((tech, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="p-3 bg-white/5 rounded-lg border border-white/10 text-sm text-center hover:border-[var(--accent)]/30 transition-colors"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.1 + idx * 0.05 }}
                                                >
                                                    {tech}
                                                </motion.div>
                                            ))}
                                        </div>
                                        <p className="text-xs text-gray-400 text-center pt-2">
                                            {stack.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Development Philosophy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
                        Development Philosophy
                    </h2>
                    <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto text-center">
                        Every decision is guided by what will best serve your business goals and your {"users'"} needs
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                title: "Code Quality",
                                desc: "Clean, maintainable code that scales with business needs and team growth.",
                                benefit: "Lower maintenance costs and easier future updates"
                            },
                            {
                                title: "User Focus",
                                desc: "Every decision prioritizes user experience and business objectives.",
                                benefit: "Higher conversion rates and customer satisfaction"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="relative overflow-hidden rounded-xl p-8 border border-white/10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent" />
                                <div className="relative space-y-4">
                                    <h3 className="text-xl font-bold" style={{ color: 'var(--accent)' }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {item.desc}
                                    </p>
                                    <p className="text-sm text-gray-400 italic">
                                        → {item.benefit}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <CTASection
                    headline="Want to work with someone who thinks this way?"
                    description="Structured thinking and clear processes lead to better outcomes for your business."
                    buttonText="Explore my approach"
                    href="/beyond"
                />
            </div>
        </div>
    );
}