// "use client";
// import { motion } from "framer-motion";
// import { ArrowLeft, Mail, Github, Linkedin, Phone, MapPin, Send, CheckCircle } from "lucide-react";
// import Link from "next/link";
// import CTASection from "@/components/ui/CTASection";

// export default function SignalClient() {
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
//                         Signal
//                     </h1>
//                     <p className="text-lg sm:text-xl text-center text-gray-400 mb-12 sm:mb-16">Why Work With Me</p>

//                     {/* Marketing Section for Non-Technical Clients */}
//                     <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10 mb-16">
//                         <h2 className="text-3xl font-bold mb-6 text-center">Ready to Grow Your Business Online?</h2>
//                         <div className="text-center max-w-4xl mx-auto">
//                             <p className="text-xl text-gray-300 mb-8">
//                                 Stop losing customers to competitors with better websites. Let's build something that actually works for your business.
//                             </p>
//                             <div className="grid md:grid-cols-3 gap-6">
//                                 <div className="bg-white/5 rounded-lg p-4 border border-white/10">
//                                     <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Free Consultation</h3>
//                                     <p className="text-sm text-gray-400">We'll discuss your goals and how a better website can help</p>
//                                 </div>
//                                 <div className="bg-white/5 rounded-lg p-4 border border-white/10">
//                                     <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Clear Timeline</h3>
//                                     <p className="text-sm text-gray-400">Know exactly when your new website will be ready</p>
//                                 </div>
//                                 <div className="bg-white/5 rounded-lg p-4 border border-white/10">
//                                     <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Guaranteed Results</h3>
//                                     <p className="text-sm text-gray-400">Your website will work properly or I'll fix it for free</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="grid lg:grid-cols-2 gap-16 mb-20">
//                         <div>
//                             <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--accent)' }}>If you're looking for:</h2>
//                             <div className="space-y-6">
//                                 {[
//                                     "A frontend developer who thinks beyond visuals",
//                                     "Someone who understands performance and product goals",
//                                     "A partner who takes responsibility, not just tasks"
//                                 ].map((item, i) => (
//                                     <motion.div
//                                         key={i}
//                                         className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10"
//                                         initial={{ opacity: 0, x: -20 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         transition={{ delay: i * 0.1 }}
//                                     >
//                                         <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: 'var(--accent)' }} />
//                                         <p className="text-gray-300">{item}</p>
//                                     </motion.div>
//                                 ))}
//                             </div>

//                             <div className="mt-12 p-6 bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl border border-white/10">
//                                 <h3 className="text-xl font-bold mb-4">You're in the right place.</h3>
//                                 <p className="text-gray-300 mb-4">
//                                     Great products aren't built by accident. They're built through intention, structure, and care.
//                                 </p>
//                                 <p className="font-semibold" style={{ color: 'var(--accent)' }}>
//                                     If that's how you want to build — this is your signal.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Why This Matters When Choosing a Developer */}
//                         <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
//                             <h2 className="text-2xl font-bold mb-6">Why This Matters When Choosing a Developer</h2>
//                             <div className="space-y-6">
//                                 <div>
//                                     <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--accent)' }}>Transparent Track Record</h3>
//                                     <p className="text-gray-300 text-sm mb-2">You can see my actual work, not just promises. Every project showcases real problems solved for real businesses.</p>
//                                     <p className="text-xs text-gray-400">No hidden failures or cherry-picked examples</p>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--accent)' }}>Consistent Quality</h3>
//                                     <p className="text-gray-300 text-sm mb-2">11+ successful projects demonstrate reliable delivery and satisfied clients, not just technical skill.</p>
//                                     <p className="text-xs text-gray-400">Pattern of success you can count on</p>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--accent)' }}>Professional Presence</h3>
//                                     <p className="text-gray-300 text-sm mb-2">Active online presence and detailed project documentation show commitment to the craft and client communication.</p>
//                                     <p className="text-xs text-gray-400">You're working with a professional, not a hobbyist</p>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--accent)' }}>Long-term Thinking</h3>
//                                     <p className="text-gray-300 text-sm mb-2">Investment in learning and experimentation means your project benefits from current best practices and future-ready solutions.</p>
//                                     <p className="text-xs text-gray-400">Your website won't become outdated quickly</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Contact Form Section */}
//                     <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-20">
//                         <h2 className="text-2xl font-bold mb-6 text-center">Get In Touch</h2>
//                         <form className="space-y-6 max-w-2xl mx-auto">
//                             <div className="grid md:grid-cols-2 gap-4">
//                                 <input
//                                     type="text"
//                                     placeholder="Your name"
//                                     className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 outline-none focus:border-[var(--accent)] transition-all"
//                                 />
//                                 <input
//                                     type="email"
//                                     placeholder="Email"
//                                     className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 outline-none focus:border-[var(--accent)] transition-all"
//                                 />
//                             </div>
//                             <input
//                                 type="text"
//                                 placeholder="Subject"
//                                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 outline-none focus:border-[var(--accent)] transition-all"
//                             />
//                             <textarea
//                                 placeholder="Your message..."
//                                 rows={6}
//                                 className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 outline-none focus:border-[var(--accent)] transition-all resize-none"
//                             />
//                             <motion.button
//                                 type="submit"
//                                 className="w-full px-6 py-3 bg-gradient-to-r from-[var(--background)] to-[var(--accent)] rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                             >
//                                 Send Signal
//                                 <Send size={18} />
//                             </motion.button>
//                         </form>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-12 mb-20">
//                         <div>
//                             <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
//                             <div className="space-y-4">
//                                 <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
//                                     <Mail className="w-6 h-6" style={{ color: 'var(--accent)' }} />
//                                     <div>
//                                         <p className="font-semibold">Email</p>
//                                         <p className="text-gray-400">markosameh75@gmail.com</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
//                                     <MapPin className="w-6 h-6" style={{ color: 'var(--accent)' }} />
//                                     <div>
//                                         <p className="font-semibold">Location</p>
//                                         <p className="text-gray-400"> Cairo, Egypt</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                             <h2 className="text-2xl font-bold mb-6">Connect Online</h2>
//                             <div className="space-y-4">
//                                 <a href="https://www.linkedin.com/in/marko-sameh-9971b6244" className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[var(--accent)]/30 transition-all">
//                                     <Linkedin className="w-6 h-6" style={{ color: 'var(--accent)' }} />
//                                     <div>
//                                         <p className="font-semibold">LinkedIn</p>
//                                         <p className="text-gray-400">Professional Network</p>
//                                     </div>
//                                 </a>
//                                 <a href="https://github.com/Marko-sameh" className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[var(--accent)]/30 transition-all">
//                                     <Github className="w-6 h-6" style={{ color: 'var(--accent)' }} />
//                                     <div>
//                                         <p className="font-semibold">GitHub</p>
//                                         <p className="text-gray-400">Code Repository</p>
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="p-6 bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-lg border border-white/10 text-center max-w-2xl mx-auto mb-20">
//                         <h3 className="font-semibold mb-2">What This Visibility Means</h3>
//                         <p className="text-gray-300 text-sm mb-2">My active presence on professional platforms demonstrates accountability and ongoing commitment to quality work.</p>
//                         <p className="text-xs text-gray-400">You can verify my experience and see feedback from other clients</p>
//                     </div>

//                     <CTASection
//                         headline="Ready to start?"
//                         description="The best projects begin with a simple conversation about your goals and vision."
//                         buttonText="Send a message"
//                         href="#contact-form"
//                     />
//                 </motion.div>
//             </div>
//         </div>
//     );
// }


"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Github, Linkedin, MapPin, Send, CheckCircle, Clock, Shield } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/ui/CTASection";

export default function SignalClient() {
    const lookingFor = [
        "A frontend developer who thinks beyond visuals",
        "Someone who understands performance and product goals",
        "A partner who takes responsibility, not just tasks"
    ];

    const advantages = [
        {
            icon: CheckCircle,
            title: "Transparent Track Record",
            desc: "See real work that solved actual business problems. No hidden failures or cherry-picked examples."
        },
        {
            icon: Clock,
            title: "Proven Reliability",
            desc: "11+ successful projects demonstrate consistent delivery and satisfied clients."
        },
        {
            icon: Shield,
            title: "Professional Standards",
            desc: "Active online presence and detailed documentation show commitment to quality and communication."
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
                            Signal
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
                            {"Let's"} Build Something That Works
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
                                Ready to Grow Your Business Online?
                            </h2>
                            <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-12">
                                Stop losing customers to competitors with better websites. {"Let's"} build something that actually works for your business.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                                {advantages.map((item, i) => {
                                    const Icon = item.icon;
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
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-400 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Looking For & Right Place Section */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-24 sm:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>
                            If {"you're"} looking for:
                        </h2>
                        <div className="space-y-4">
                            {lookingFor.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent)]/30 transition-colors"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0 text-[var(--accent)]" />
                                    <p className="text-gray-300 leading-relaxed">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                    >
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 w-full">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/20 via-transparent to-transparent" />
                            <div className="relative p-8">
                                <h3 className="text-2xl font-bold mb-4">{"You're"} in the right place.</h3>
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    Great products {"aren't"} built by accident. {"They're"} built through intention, structure, and care.
                                </p>
                                <p className="text-lg font-semibold" style={{ color: 'var(--accent)' }}>
                                    If {"that's"} how you want to build — this is your signal.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 sm:mb-32"
                >
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--accent)]" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-center">
                            Get In Touch
                        </h2>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--accent)]" />
                    </div>

                    <div className="relative rounded-3xl overflow-hidden border border-white/10 max-w-3xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-bl from-white/5 via-transparent to-transparent" />
                        <div className="relative p-8 sm:p-12">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 outline-none focus:border-[var(--accent)] focus:bg-white/10 transition-all"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 outline-none focus:border-[var(--accent)] focus:bg-white/10 transition-all"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 outline-none focus:border-[var(--accent)] focus:bg-white/10 transition-all"
                                />
                                <textarea
                                    placeholder="Tell me about your project..."
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 outline-none focus:border-[var(--accent)] focus:bg-white/10 transition-all resize-none"
                                />
                                <motion.button
                                    type="submit"
                                    className="w-full px-6 py-4 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/80 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Signal
                                    <Send size={18} />
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
                        Connect With Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Direct Contact */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--accent)' }}>
                                Direct Contact
                            </h3>
                            <a
                                href="mailto:markosameh75@gmail.com"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent)]/50 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6 text-[var(--accent)]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Email</p>
                                    <p className="text-gray-400 text-sm">markosameh75@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-[var(--accent)]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Location</p>
                                    <p className="text-gray-400 text-sm">Cairo, Egypt</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--accent)' }}>
                                Professional Networks
                            </h3>
                            <a
                                href="https://www.linkedin.com/in/marko-sameh-9971b6244"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent)]/50 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Linkedin className="w-6 h-6 text-[var(--accent)]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">LinkedIn</p>
                                    <p className="text-gray-400 text-sm">Professional Network</p>
                                </div>
                            </a>

                            <a
                                href="https://github.com/Marko-sameh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent)]/50 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Github className="w-6 h-6 text-[var(--accent)]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">GitHub</p>
                                    <p className="text-gray-400 text-sm">Code Repository</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <CTASection
                    headline="Ready to start?"
                    description="The best projects begin with a simple conversation about your goals and vision."
                    buttonText="Send a message"
                    href="#contact-form"
                />
            </div>
        </div>
    );
}