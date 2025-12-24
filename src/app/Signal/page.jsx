"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, Linkedin, Github, Phone } from "lucide-react";
import Link from "next/link";
// import Nav from "@/components/ui/Nav";

export default function Invitation() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      {/* <Nav /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 via-black to-black" />
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
            Signal
          </h1>
          <div className="h-1 w-32 mx-auto rounded-full mb-8" style={{background: 'linear-gradient(to right, var(--emotion-primary), var(--emotion-secondary))'}} />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The hero's message to the world
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 blur-3xl animate-pulse" style={{background: 'var(--emotion-primary)', opacity: 0.2}} />
            <button className="relative px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-transform" style={{background: 'linear-gradient(to right, var(--emotion-primary), var(--emotion-secondary))'}}>
              📨 Send a Signal
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">🔵 Contact Channels</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Mail, label: "Email", link: "mailto:your@email.com" },
              { icon: Linkedin, label: "LinkedIn", link: "#" },
              { icon: Github, label: "GitHub", link: "#" },
              { icon: Phone, label: "WhatsApp", link: "#" }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="relative group block"
              >
                <div className="absolute -inset-4 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity" style={{background: 'linear-gradient(135deg, var(--emotion-primary), var(--emotion-secondary))'}} />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-white/30 transition-all" style={{'--hover-border': 'var(--emotion-primary)'}}>
                  <item.icon className="w-10 h-10 mx-auto mb-4" style={{color: 'var(--emotion-primary)'}} />
                  <div className="font-semibold">{item.label}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 blur-3xl animate-pulse" style={{background: 'var(--emotion-secondary)', opacity: 0.3}} />
            <div className="relative max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10">
              <div className="text-2xl font-bold mb-4" style={{color: 'var(--emotion-primary)'}}>💬</div>
              <p className="text-xl text-gray-300 italic">
                "What I build speaks louder than words. Reach out if you want something powerful."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
