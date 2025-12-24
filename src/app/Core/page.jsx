"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Brain, GitBranch, Shield, Zap } from "lucide-react";
import Link from "next/link";
// import Nav from "@/components/ui/Nav";

export default function Architect() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      {/* <Nav /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />
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
            Core
          </h1>
          <div className="h-1 w-32 mx-auto rounded-full mb-8" style={{background: 'linear-gradient(to right, var(--emotion-primary), var(--emotion-secondary))'}} />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The Essence — What Lies Beneath the Surface
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mb-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10"
        >
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--emotion-primary)'}}>🧠 Engineering Philosophy</h2>
          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-4">
              <span className="font-bold" style={{color: 'var(--emotion-primary)'}}>Simple</span>
              <span className="text-gray-500">&gt;</span>
              <span className="text-gray-400">Complex</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold" style={{color: 'var(--emotion-primary)'}}>Fast</span>
              <span className="text-gray-500">&gt;</span>
              <span className="text-gray-400">Perfect</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold" style={{color: 'var(--emotion-primary)'}}>Reusable</span>
              <span className="text-gray-500">&gt;</span>
              <span className="text-gray-400">Rewrite</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold" style={{color: 'var(--emotion-primary)'}}>Automation</span>
              <span className="text-gray-500">&gt;</span>
              <span className="text-gray-400">Manual</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <Brain className="w-12 h-12 mb-6" style={{color: 'var(--emotion-primary)'}} />
            <h3 className="text-2xl font-bold mb-4">💡 Architecture Mind Map</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• API Design</li>
              <li>• UI Component Structure</li>
              <li>• State Management</li>
              <li>• Data Flow Patterns</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <GitBranch className="w-12 h-12 mb-6" style={{color: 'var(--emotion-primary)'}} />
            <h3 className="text-2xl font-bold mb-4">🧩 Design Systems</h3>
            <p className="text-gray-400">
              UI tokens, naming conventions, reusable components — building consistency at scale
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">⚡ Coding Principles</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: GitBranch, title: "Clean Code" },
              { icon: Zap, title: "Optimization" },
              { icon: Shield, title: "Error Handling" },
              { icon: Shield, title: "Security" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all"
              >
                <item.icon className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--emotion-primary)'}} />
                <h3 className="font-bold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
