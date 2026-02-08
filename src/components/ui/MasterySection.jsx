"use client";
import LearnMoreButton from "./LearnMoreButton"
import MasteryCard from "./MasteryCard"
import SectionTitle from "./SectionTitle"
import { motion } from "framer-motion";

function MasterySection() {
    return <section id="mastery" className="relative min-h-screen py-15 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
        <motion.div
            className="relative max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <SectionTitle
                title="Mastery"
                subtitle="What I've Learned to Do Well"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                {[
                    {
                        title: "Frontend Development",
                        desc: "Building component-driven interfaces using React/Next,with clean state management and predictable behavior.",
                        img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        gradient: "from-[var(--background)] to-[var(--accent)]",
                    },
                    {
                        title: "Adaptive Experiences",
                        desc: "I build interfaces that adapt across devices —from mobile-first layouts to complex desktop systems —with performance and clarity as a priority.",
                        img: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        gradient: "from-[var(--background)] to-[var(--accent)]",
                    },
                    {
                        title: "AI Integration",
                        desc: "I connect AI APIs and logic-driven services to create interfaces that respond, adapt, and evolve.",
                        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
                        gradient: "from-[var(--background)] to-[var(--accent)]",
                    },
                ].map((card, i) => (
                    <MasteryCard key={i} {...card} index={i} />
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <LearnMoreButton sectionName="Mastery" />
            </div>

        </motion.div>
    </section>

}

export default MasterySection