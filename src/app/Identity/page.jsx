"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/ui/CTASection";

export default function IdentityPage() {
  return (
    <div className="min-h-screen bg-black text-white py-10 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/">
          <motion.button
            className="mb-8 sm:mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
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
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-white to-[var(--accent)] bg-clip-text text-transparent">
            Identity
          </h1>
          <p className="text-lg sm:text-xl text-center text-gray-400 mb-12 sm:mb-16">Where It Started</p>

          {/* Marketing Section for Non-Technical Clients */}
          <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-6 sm:p-8 border border-white/10 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Why Business Owners Choose Me</h2>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>I Understand Your Business</h3>
                <p className="text-gray-300">You need a website that brings customers and grows revenue. I focus on what matters to your bottom line, not just pretty designs.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Clear Communication</h3>
                <p className="text-gray-300">No confusing tech talk. I explain everything in plain English and keep you updated every step of the way.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Proven Results</h3>
                <p className="text-gray-300">My websites help businesses get found online, convert visitors into customers, and grow faster than their competition.</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 mb-16 sm:mb-20">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--accent)' }}>Where It Started</h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  My journey into development started with curiosity — a desire to understand how interfaces work and how users experience digital systems.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  What began as experimentation slowly evolved into building complete frontend products.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--accent)' }}>How It Evolved</h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                  Over time, I moved from writing code to designing solutions.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">I learned that:</p>
                <ul className="space-y-2 text-gray-300 ml-6">
                  <li>• Code is a tool, not the goal</li>
                  <li>• Interfaces communicate decisions</li>
                  <li>• Structure and clarity matter more than complexity</li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20 blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 h-64 sm:h-80 lg:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=900&q=80"
                  alt="Developer workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 mb-16 sm:mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--accent)' }}>Today</h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                Today, I work mainly with React and Next.js, building interfaces that balance aesthetics, performance, and maintainability.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm also exploring how intelligent systems and AI can subtly enhance user experience — without adding noise or confusion.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--accent)' }}>Principles I Work By</h2>
              <div className="space-y-4">
                {[
                  "Clarity over cleverness",
                  "Performance is not optional", 
                  "Design must serve purpose",
                  "Good interfaces feel effortless"
                ].map((principle, i) => (
                  <motion.div
                    key={i}
                    className="p-4 bg-white/5 rounded-lg border border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <p className="text-gray-300">{principle}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Professional Background</h2>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--accent)' }}>Education</h3>
                <p className="text-gray-300">Dual Degree Program</p>
                <p className="text-sm text-gray-400">Future University in Egypt & University of Cincinnati</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent)' }}>Experience</h3>
                <p className="text-gray-300">Frontend Developer</p>
                <p className="text-sm text-gray-400">11+ Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent)' }}>Location</h3>
                <p className="text-gray-300">Cairo, Egypt</p>
                <p className="text-sm text-gray-400">Working Globally</p>
              </div>
            </div>
          </div>

          <CTASection 
            headline="Want to know how I work?"
            description="Every project starts with understanding your goals and building the right solution together."
            buttonText="Start a conversation"
            href="/Signal"
          />
        </motion.div>
      </div>
    </div>
  );
}