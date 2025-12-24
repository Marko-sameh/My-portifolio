"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Code2, Zap, Layers } from "lucide-react";
import Link from "next/link";
// import Nav from "@/components/ui/Nav";

export default function Awakening() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      {/* <Nav /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 via-black to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-40">
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
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{background: 'linear-gradient(to right, var(--emotion-primary), var(--emotion-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            Mastery
          </h1>
          <div className="h-1 w-32 mx-auto rounded-full mb-8" style={{background: 'linear-gradient(to right, var(--emotion-primary), var(--emotion-secondary))'}} />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Evolving superpowers through continuous learning and practice
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Skill Stats</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { name: "React", level: 92, color: "from-orange-500 to-yellow-500" },
              { name: "Next.js", level: 90, color: "from-yellow-500 to-orange-400" },
              { name: "Node", level: 85, color: "from-orange-400 to-red-500" },
              { name: "Python ML", level: 75, color: "from-red-500 to-pink-500" },
              { name: "AI Integrations", level: 80, color: "from-pink-500 to-purple-500" }
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6"
              >
                <div className="flex justify-between mb-3">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span style={{color: 'var(--emotion-primary)'}}>{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 1 }}
                    className="h-full rounded-full" style={{background: 'linear-gradient(to right, var(--emotion-primary), var(--emotion-secondary))'}}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Development Style</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code2, title: "Modular Architecture", desc: "Reusable components, DX-first mindset" },
              { icon: Zap, title: "Speed vs. Precision", desc: "Pixel-perfect UI, API performance tweaking" },
              { icon: Layers, title: "Engineering Principles", desc: "Clean code, scalable systems" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-4 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity" style={{background: 'linear-gradient(135deg, var(--emotion-primary), var(--emotion-secondary))'}} />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all">
                  <item.icon className="w-12 h-12 mb-6" style={{color: 'var(--emotion-primary)'}} />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
