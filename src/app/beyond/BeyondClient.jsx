// "use client";
// import { motion } from "framer-motion";
// import { ArrowLeft, Sparkles, Brain, Rocket, Eye, Lightbulb } from "lucide-react";
// import Link from "next/link";
// import CTASection from "@/components/ui/CTASection";

// export default function BeyondClient() {
//     const experiments = [
//         {
//             icon: Sparkles,
//             title: "Emotion-Adaptive Interfaces",
//             desc: "Exploring how interfaces can subtly respond to user emotional states, creating more empathetic digital experiences without being intrusive.",
//             impact: "Deeper user engagement through intelligent adaptation"
//         },
//         {
//             icon: Brain,
//             title: "Intelligent UI Behavior",
//             desc: "Developing interfaces that learn from user patterns and optimize themselves for better usability and efficiency over time.",
//             impact: "Self-improving systems that enhance productivity"
//         },
//         {
//             icon: Eye,
//             title: "Subtle AI-Driven Personalization",
//             desc: "Creating personalized experiences that feel natural and helpful, not algorithmic or overwhelming.",
//             impact: "Personalization that enhances rather than distracts"
//         }
//     ];

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
//                         Beyond
//                     </h1>
//                     <p className="text-lg sm:text-xl text-center text-gray-400 mb-12 sm:mb-16">Exploration & Experimentation</p>

//                     {/* Marketing Section for Non-Technical Clients */}
//                     <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10 mb-16">
//                         <h2 className="text-3xl font-bold mb-6 text-center">Staying Ahead for Your Business</h2>
//                         <div className="text-center max-w-4xl mx-auto">
//                             <p className="text-xl text-gray-300 mb-6">
//                                 While others stick to what they know, {"I'm"} constantly exploring {"what's"} next. This means your website {"won't"} become outdated in two years.
//                             </p>
//                             <div className="grid md:grid-cols-2 gap-8">
//                                 <div>
//                                     <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Future-Proof Solutions</h3>
//                                     <p className="text-gray-300">I build websites that adapt and grow with new technologies, keeping you competitive without constant rebuilds.</p>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Smart Innovation</h3>
//                                     <p className="text-gray-300">I only use new technologies when they solve real business problems, not just because {"they're"} trendy.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mb-20">
//                         <p className="text-2xl text-center text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
//                             Beyond client work, I experiment with ideas that push my thinking and explore the future of user interfaces.
//                         </p>
//                         <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10">
//                             <h3 className="text-2xl font-bold mb-4 text-center">Why This Matters to You</h3>
//                             <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
//                                 While others stick to what they know, I stay ahead of industry trends. This means your website {"won't"} become outdated in two years, and {"you'll"} benefit from proven innovations that actually solve business problems.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="space-y-12 mb-20">
//                         {experiments.map((experiment, index) => (
//                             <motion.div
//                                 key={index}
//                                 className="grid lg:grid-cols-3 gap-8 items-center"
//                                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ delay: index * 0.2 }}
//                             >
//                                 <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[var(--accent)]/30 transition-all">
//                                     <experiment.icon className="w-16 h-16 mb-6" style={{ color: 'var(--accent)' }} />
//                                     <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--accent)' }}>{experiment.title}</h2>
//                                 </div>

//                                 <div className="lg:col-span-2 space-y-4">
//                                     <p className="text-lg text-gray-300 leading-relaxed">{experiment.desc}</p>
//                                     <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-lg p-4 border border-white/10">
//                                         <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Business Impact</h3>
//                                         <p className="text-gray-300 mb-2">{experiment.impact}</p>
//                                         <p className="text-sm text-gray-400">
//                                             {index === 0 && "Websites that adapt to user preferences create stronger customer relationships and higher retention rates"}
//                                             {index === 1 && "Self-improving interfaces reduce support costs and increase user satisfaction over time"}
//                                             {index === 2 && "Smart personalization increases engagement without overwhelming users with irrelevant content"}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>

//                     <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-20">
//                         <Lightbulb className="w-12 h-12 mb-6 mx-auto" style={{ color: 'var(--accent)' }} />
//                         <h2 className="text-3xl font-bold mb-6 text-center">Why It Matters</h2>
//                         <div className="grid md:grid-cols-3 gap-8 text-center">
//                             <div>
//                                 <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Refine Approach</h3>
//                                 <p className="text-gray-300 mb-3">These experiments help me continuously improve my development methodology and problem-solving skills.</p>
//                                 <p className="text-sm text-gray-400">Better methods mean faster delivery and fewer revisions for your projects</p>
//                             </div>
//                             <div>
//                                 <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Stay Ahead</h3>
//                                 <p className="text-gray-300 mb-3">By exploring emerging technologies, I can anticipate trends and prepare for future client needs.</p>
//                                 <p className="text-sm text-gray-400">Your website will be built with {"tomorrow's"} standards, not {"yesterday's"} limitations</p>
//                             </div>
//                             <div>
//                                 <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Deeper Thinking</h3>
//                                 <p className="text-gray-300 mb-3">Experimental work brings innovative perspectives and solutions into production projects.</p>
//                                 <p className="text-sm text-gray-400">You benefit from creative solutions that competitors {"haven't"} thought of yet</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Thinking Ahead for Your Business */}
//                     <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10 mb-20">
//                         <h2 className="text-3xl font-bold mb-8 text-center">Thinking Ahead for Your Business</h2>
//                         <div className="grid md:grid-cols-2 gap-12">
//                             <div>
//                                 <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--accent)' }}>Future-Proofing Your Investment</h3>
//                                 <div className="space-y-4">
//                                     <div className="bg-white/5 rounded-lg p-4 border border-white/10">
//                                         <h4 className="font-semibold mb-2">Scalable Architecture</h4>
//                                         <p className="text-sm text-gray-300">Your website can grow with your business without needing a complete rebuild</p>
//                                     </div>
//                                     <div className="bg-white/5 rounded-lg p-4 border border-white/10">
//                                         <h4 className="font-semibold mb-2">Modern Standards</h4>
//                                         <p className="text-sm text-gray-300">Built using current best practices that will remain relevant for years to come</p>
//                                     </div>
//                                     <div className="bg-white/5 rounded-lg p-4 border border-white/10">
//                                         <h4 className="font-semibold mb-2">Adaptable Design</h4>
//                                         <p className="text-sm text-gray-300">Easy to update and modify as your brand and needs evolve</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div>
//                                 <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--accent)' }}>Long-Term Value</h3>
//                                 <div className="space-y-4">
//                                     <div className="bg-white/5 rounded-lg p-4 border border-white/10">
//                                         <h4 className="font-semibold mb-2">Lower Maintenance Costs</h4>
//                                         <p className="text-sm text-gray-300">Clean, well-structured code means fewer bugs and easier updates</p>
//                                     </div>
//                                     <div className="bg-white/5 rounded-lg p-4 border border-white/10">
//                                         <h4 className="font-semibold mb-2">Performance That Lasts</h4>
//                                         <p className="text-sm text-gray-300">Optimized from the ground up to stay fast as your content and traffic grow</p>
//                                     </div>
//                                     <div className="bg-white/5 rounded-lg p-4 border border-white/10">
//                                         <h4 className="font-semibold mb-2">Competitive Advantage</h4>
//                                         <p className="text-sm text-gray-300">Stay ahead of competitors with features and capabilities they {"don't"} have</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="mt-8 text-center bg-white/5 rounded-lg p-6">
//                             <p className="text-lg text-gray-300">
//                                 <strong>The Bottom Line:</strong> Innovation balanced with stability means your website investment pays dividends for years, not months.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="text-center bg-linear-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10">
//                         <Rocket className="w-16 h-16 mb-6 mx-auto" style={{ color: 'var(--accent)' }} />
//                         <h2 className="text-2xl font-bold mb-4">This is where curiosity turns into capability.</h2>
//                         <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
//                             Every experiment, every exploration, every {`"what if"`} question contributes to building better, more thoughtful digital experiences.
//                         </p>
//                         <div className="bg-white/5 rounded-lg p-4 max-w-3xl mx-auto">
//                             <p className="text-gray-300">
//                                 <strong>For your business, this means:</strong> Working with someone who {"doesn't"} just deliver what you ask for, but anticipates what {"you'll"} need next and builds accordingly.
//                             </p>
//                         </div>
//                     </div>

//                     <CTASection
//                         headline="Curious about what's possible?"
//                         description="Innovation isn't about using the latest technology—it's about solving tomorrow's problems today."
//                         buttonText="Discover more"
//                         href="/Signal"
//                     />
//                 </motion.div>
//             </div>
//         </div>
//     );
// }


"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Brain, Eye, Rocket, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/ui/CTASection";

export default function BeyondClient() {
    const experiments = [
        {
            icon: Sparkles,
            title: "Emotion-Adaptive Interfaces",
            desc: "Exploring how interfaces can subtly respond to user emotional states, creating more empathetic digital experiences without being intrusive.",
            impact: "Deeper engagement through intelligent adaptation"
        },
        {
            icon: Brain,
            title: "Intelligent UI Behavior",
            desc: "Developing interfaces that learn from user patterns and optimize themselves for better usability and efficiency over time.",
            impact: "Self-improving systems that enhance productivity"
        },
        {
            icon: Eye,
            title: "Subtle AI-Driven Personalization",
            desc: "Creating personalized experiences that feel natural and helpful, not algorithmic or overwhelming.",
            impact: "Personalization that enhances rather than distracts"
        }
    ];

    const benefits = [
        {
            icon: TrendingUp,
            title: "Future-Proof Solutions",
            desc: "Websites built to adapt and grow with new technologies, keeping you competitive without constant rebuilds.",
        },
        {
            icon: Shield,
            title: "Smart Innovation",
            desc: "I only use new technologies when they solve real business problems, not just because they're trendy.",
        },
        {
            icon: Rocket,
            title: "Competitive Edge",
            desc: "Stay ahead with features and capabilities your competitors haven't thought of yet.",
        }
    ];

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
                            Beyond
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
                            Exploration & Experimentation
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
                {/* Value Proposition */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-24 sm:mb-32"
                >
                    <div className="relative rounded-3xl overflow-hidden border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-transparent" />
                        <div className="relative p-8 sm:p-12">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
                                Staying Ahead for Your Business
                            </h2>
                            <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-12">
                                Beyond client work, I experiment with ideas that push my thinking and explore the future of user interfaces — so your solutions stay relevant for years, not months.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                                {benefits.map((benefit, i) => {
                                    const Icon = benefit.icon;
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className="group relative overflow-hidden rounded-xl p-6 bg-white/5 border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-300"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/10 group-hover:to-transparent transition-all duration-300" />
                                            <div className="relative">
                                                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 flex items-center justify-center mb-4">
                                                    <Icon className="w-6 h-6 text-[var(--accent)]" />
                                                </div>
                                                <h3 className="text-xl font-semibold mb-3 text-white">
                                                    {benefit.title}
                                                </h3>
                                                <p className="text-gray-400 leading-relaxed">
                                                    {benefit.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Experiments Section */}
                <div className="mb-24 sm:mb-32">
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--accent)]" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-center">
                            Current Explorations
                        </h2>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--accent)]" />
                    </div>

                    <div className="space-y-8 sm:space-y-12">
                        {experiments.map((experiment, index) => {
                            const Icon = experiment.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-center"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="lg:col-span-2 group relative overflow-hidden rounded-xl p-6 sm:p-8 bg-white/5 border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/10 group-hover:to-transparent transition-all duration-300" />
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 flex items-center justify-center mb-6">
                                                <Icon className="w-8 h-8 text-[var(--accent)]" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white">
                                                {experiment.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-3 space-y-4">
                                        <p className="text-lg text-gray-300 leading-relaxed">
                                            {experiment.desc}
                                        </p>
                                        <div className="flex items-start gap-3 pt-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                                            <div>
                                                <p className="text-sm font-medium text-[var(--accent)] mb-1">
                                                    Business Impact
                                                </p>
                                                <p className="text-gray-400 leading-relaxed">
                                                    {experiment.impact}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Long-Term Value */}
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
                                Long-Term Value
                            </h2>
                            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                                Innovation balanced with stability means your investment pays dividends for years
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--accent)' }}>
                                        Future-Proofing
                                    </h3>
                                    {[
                                        { title: "Scalable Architecture", desc: "Grows with your business without needing complete rebuilds" },
                                        { title: "Modern Standards", desc: "Built with best practices that remain relevant for years" },
                                        { title: "Adaptable Design", desc: "Easy to update as your brand and needs evolve" }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[var(--accent)]/30 transition-colors"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
                                            <p className="text-sm text-gray-400">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--accent)' }}>
                                        Practical Benefits
                                    </h3>
                                    {[
                                        { title: "Lower Maintenance Costs", desc: "Clean code means fewer bugs and easier updates" },
                                        { title: "Lasting Performance", desc: "Optimized to stay fast as your traffic grows" },
                                        { title: "Competitive Advantage", desc: "Features your competitors haven't thought of yet" }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[var(--accent)]/30 transition-colors"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
                                            <p className="text-sm text-gray-400">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Philosophy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="text-center relative rounded-3xl overflow-hidden border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-bl from-[var(--accent)]/20 via-transparent to-transparent" />
                        <div className="relative p-8 sm:p-12">
                            <div className="w-16 h-16 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 flex items-center justify-center mx-auto mb-6">
                                <Rocket className="w-8 h-8 text-[var(--accent)]" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Where Curiosity Turns Into Capability
                            </h2>
                            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                                Every experiment, every exploration, every {'"what if"'} question contributes to building better, more thoughtful digital experiences.
                            </p>
                            <div className="bg-white/5 rounded-xl p-6 max-w-3xl mx-auto border border-white/10">
                                <p className="text-gray-300 leading-relaxed">
                                    <span className="font-semibold text-white">For your business:</span> Working with someone who {"doesn't"} just deliver what you ask for, but anticipates what {"you'll"} need next and builds accordingly.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <CTASection
                    headline="Curious about what's possible?"
                    description="Innovation isn't about using the latest technology—it's about solving tomorrow's problems today."
                    buttonText="Discover more"
                    href="/Signal"
                />
            </div>
        </div>
    );
}