"use client";
import SectionTitle from "./SectionTitle"
import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
export const links = [
    { icon: Github, link: "https://github.com/Marko-sameh", color: "hover:text-[var(--accent)]" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/marko-sameh-9971b6244", color: "hover:text-[var(--accent)]" },
    { icon: Mail, link: "mailto:markosameh75@gmail.com", color: "hover:text-[var(--accent)]" },
]
function SignalSection({ }) {
    return <section id="signal" className="relative min-h-screen py-20 sm:py-32 md:py-40 px-4 sm:px-6">
        <div className="absolute inset-0" />
        <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <SectionTitle
                title="Signal"
                subtitle="Want to collaborate, hire or just say hello? Send a message and let's start our scene together"
            />

            <motion.div
                className="mt-12 sm:mt-16 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-[var(--background)] to-[var(--accent)] rounded-3xl opacity-10 blur-3xl" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Your name"
                                className="px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-[var(--accent)] transition-all"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-[var(--accent)] transition-all"
                            />
                        </div>
                        <textarea
                            placeholder="Your message..."
                            rows={6}
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-[var(--accent)] transition-all resize-none"
                        />
                        <motion.button
                            type="submit"
                            className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[var(--background)] to-[var(--accent)] rounded-xl font-semibold text-base sm:text-lg shadow-lg shadow-[var(--accent)] flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02, boxShadow: "0 10px 20px var(--primary)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Send Signal
                            <ArrowRight size={20} />
                        </motion.button>
                    </form>

                    <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10">
                        <p className="text-center text-gray-400 mb-6 sm:mb-8">Or connect with me on</p>
                        <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
                            {links.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.link}
                                    className={`p-3 sm:p-4 bg-white/5 rounded-full border border-white/10 hover:border-white/30 transition-all ${social.color}`}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    target="_blank"
                                >
                                    <social.icon size={20} className="sm:w-6 sm:h-6" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>

}

export default SignalSection