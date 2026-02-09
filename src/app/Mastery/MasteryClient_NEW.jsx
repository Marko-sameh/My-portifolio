"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Layers, Zap, Globe, Target, Sparkles } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/ui/CTASection";

export default function MasteryClient() {
  const skills = [
    { icon: Code, title: "Frontend Engineering", desc: "Scalable React & Next.js systems" },
    { icon: Layers, title: "UI Engineering", desc: "Design systems & interactive experiences" },
    { icon: Zap, title: "3D & Interactive", desc: "Three.js & immersive web experiences" },
    { icon: Globe, title: "Full-Stack Aware", desc: "Backend integration & API design" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/10 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 relative">
          <Link href="/">
            <motion.button className="mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors" whileHover={{ x: -5 }}>
              <ArrowLeft size={20} />
              Back to Home
            </motion.button>
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[var(--accent)] bg-clip-text text-transparent">
              Mastery
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto">
              Technical skills that deliver business results
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        {/* Value Proposition */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-24 sm:mb-32">
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-transparent" />
            <div className="relative p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">What This Means for Your Business</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold" style={{ color: 'var(--accent)' }}>Your Problem</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    You need a website that actually works for your business. Most developers build pretty sites that don't bring customers or generate sales.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold" style={{ color: 'var(--accent)' }}>My Solution</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I build websites that get found on Google, convert visitors into paying customers, and grow with your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="mb-24 sm:mb-32">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Core Expertise</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-xl p-8 bg-white/5 border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/10 group-hover:to-transparent transition-all duration-300" />
                  <div className="relative">
                    <Icon className="w-10 h-10 mb-4" style={{ color: 'var(--accent)' }} />
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-gray-400">{skill.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24 sm:mb-32">
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
            <div className="relative p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Technical Stack</h2>
              <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
                Industry-standard tools that ensure your website is reliable, maintainable, and future-proof
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Three.js", "Node.js"].map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 bg-white/5 rounded-xl text-center border border-white/10 hover:border-[var(--accent)]/30 transition-colors"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-transparent" />
            <div className="relative p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Proven Track Record</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "90+", label: "Lighthouse Scores", sub: "Fast, optimized websites" },
                  { value: "30%", label: "Load Time Reduction", sub: "Faster than competitors" },
                  { value: "100%", label: "Client Satisfaction", sub: "Projects delivered successfully" },
                  { value: "11+", label: "Projects Delivered", sub: "Real businesses helped" }
                ].map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent)' }}>{metric.value}</div>
                    <p className="text-sm text-gray-300 mb-1">{metric.label}</p>
                    <p className="text-xs text-gray-500">{metric.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <CTASection
          headline="See what these skills can build"
          description="Technical expertise means nothing without real results that grow your business."
          buttonText="View my work"
          href="/Builds"
        />
      </div>
    </div>
  );
}
