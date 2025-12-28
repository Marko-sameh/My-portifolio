"use client";
import ExperimentCard from "./ExperimentCard";
import LearnMoreButton from "./LearnMoreButton";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Sparkles, Zap, Rocket } from "lucide-react";

const EXPERIMENTS = [
    { title: "Beyond Development", desc: "I don’t just build interfaces.I shape how people experience systems — how they move, feel, and trust the product.", img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80", icon: Sparkles },
    { title: "Beyond the Screen", desc: "Good products are invisible. When everything feels natural, the design has done its job.", img: "https://images.unsplash.com/photo-1576935429524-1df7fb127097?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", icon: Zap },
    { title: "Beyond Today", desc: "I explore AI and emerging technologiesto create smarter, calmer user experiences — without noise or unnecessary complexity.", img: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", icon: Rocket },
];
function BeyondSection() {
    return <section id="beyond" className="relative min-h-screen py-40 px-6">
        <div className="absolute inset-0 " />
        <motion.div
            className="relative max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <SectionTitle
                title="Beyond"
                subtitle="What I add is more than just code"
            />

            <div className="grid md:grid-cols-3 gap-10 mt-16">
                {EXPERIMENTS.map((exp, i) => (
                    <ExperimentCard key={i} {...exp} index={i} />
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <LearnMoreButton sectionName="Beyond" />
            </div>
        </motion.div>
    </section>

}

export default BeyondSection;