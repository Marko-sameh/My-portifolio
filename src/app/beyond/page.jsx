"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Rocket, Sparkles, Globe } from "lucide-react";
import Link from "next/link";

export default function Beyond() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-black to-black" />
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
            Beyond
          </h1>
          <div className="h-1 w-32 mx-auto rounded-full mb-8" style={{background: 'linear-gradient(to right, var(--emotion-primary), var(--emotion-secondary))'}} />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The Future — Transcending Boundaries
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mb-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10"
        >
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--emotion-primary)'}}>🌌 Where I'm Going</h2>
          <ul className="space-y-3 text-lg text-gray-300">
            <li>• AI-integrated web apps</li>
            <li>• Advanced ML implementations</li>
            <li>• 3D Web experiences</li>
            <li>• Full SaaS platforms</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">📡 Roadmap</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "6 months", goal: "Senior Frontend Skills", desc: "Master advanced React patterns & Next.js" },
              { time: "12 months", goal: "AI Product Builder", desc: "Ship production ML-powered apps" },
              { time: "2 years", goal: "Remote Full-Stack Developer", desc: "Build & scale global products" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-500/30 transition-all">
                  <div className="font-bold mb-2" style={{color: 'var(--emotion-primary)'}}>{item.time}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.goal}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">🌠 Future Projects — Coming Soon</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Sparkles, title: "AI Mood Color Engine", desc: "Emotion-driven design system" },
              { icon: Rocket, title: "Smart Agency SaaS", desc: "AI-powered project management" },
              { icon: Globe, title: "CoffeeBrain v2", desc: "Next-gen recommendation engine" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + i * 0.15 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-500/30 transition-all">
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
