"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Film, Play } from "lucide-react";
import Link from "next/link";
// import Nav from "@/components/ui/Nav";

export default function Prologue() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      {/* <Nav /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black" />
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
            Where the Developer Was Born
          </h1>
          <div className="h-1 w-32 mx-auto rounded-full mb-8" style={{background: 'linear-gradient(to right, var(--emotion-primary), var(--emotion-secondary))'}} />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A developer driven by passion for React, Next.js, Node, and AI — building smart systems that matter
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mb-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10"
        >
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--emotion-primary)'}}>Origin Story</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            My journey into development began with curiosity — a fascination with how digital experiences shape our world. What started as tinkering with code evolved into a passion for crafting intelligent, user-centric applications.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Today, I specialize in React, Next.js, Node.js, and AI integration — building systems that are not just functional, but transformative.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">The Timeline</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "First Line of Code", desc: "The spark that ignited everything" },
              { icon: Film, title: "First Big Project", desc: "Turning vision into reality" },
              { icon: Play, title: "Today — Building Smart Systems", desc: "AI-powered, scalable solutions" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-4 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity" style={{background: 'linear-gradient(135deg, var(--emotion-primary), var(--emotion-secondary))'}} />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all" style={{'--hover-border': 'var(--emotion-primary)'}}>
                  <item.icon className="w-12 h-12 mb-6" style={{color: 'var(--emotion-primary)'}} />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
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
          <h2 className="text-3xl font-bold mb-10 text-center">Key Powers</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { label: "Vision", skill: "UI/UX", color: "from-blue-500 to-cyan-500" },
              { label: "Control", skill: "React Mastery", color: "from-cyan-500 to-teal-500" },
              { label: "Speed", skill: "Next.js", color: "from-teal-500 to-green-500" },
              { label: "Power", skill: "Node & Express", color: "from-green-500 to-blue-500" },
              { label: "Future", skill: "AI & ML", color: "from-blue-500 to-purple-500" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + i * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all"
              >
                <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.label}
                </div>
                <div className="text-sm text-gray-400">{item.skill}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
