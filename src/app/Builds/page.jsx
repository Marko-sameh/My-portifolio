"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Coffee, Sparkles, Shield, Chrome, Database } from "lucide-react";
import Link from "next/link";
// import Nav from "@/components/ui/Nav";

export default function Struggle() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />
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
            Builds
          </h1>
          <div className="h-1 w-32 mx-auto rounded-full mb-8" style={{background: 'linear-gradient(to right, var(--emotion-primary), var(--emotion-secondary))'}} />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Scenes from My Creations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {[
            {
              icon: Coffee,
              title: "CoffeeBrain – AI Barista System",
              tags: ["Interactive", "ML", "Recommender", "Python + React"],
              color: "from-red-500 to-orange-500"
            },
            {
              icon: Sparkles,
              title: "VENEFICUS Frontend",
              tags: ["3D Animations", "Next.js + Tailwind", "Cinematic UI"],
              color: "from-orange-500 to-yellow-500"
            },
            {
              icon: Shield,
              title: "Cybersecurity Expert System",
              tags: ["Python + Experta", "Decision Tree AI"],
              color: "from-yellow-500 to-red-500"
            },
            {
              icon: Chrome,
              title: "Chrome Extension – eTax Tool",
              tags: ["Productivity SaaS", "Automation", "UI/UX Polish"],
              color: "from-red-400 to-pink-500"
            },
            {
              icon: Database,
              title: "Full-Stack Node + Express",
              tags: ["RESTful APIs", "Auth", "Database Transactions"],
              color: "from-pink-500 to-red-500"
            }
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative group"
            >
              <div className="absolute -inset-4 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity" style={{background: 'linear-gradient(135deg, var(--emotion-primary), var(--emotion-secondary))'}} />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all">
                <project.icon className="w-12 h-12 mb-6" style={{color: 'var(--emotion-primary)'}} />
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{background: 'rgba(var(--emotion-primary-rgb), 0.2)', border: '1px solid var(--emotion-accent)'}}
                    >
                      🔥 {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
