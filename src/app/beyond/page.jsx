"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Brain, Rocket, Eye, Lightbulb } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/ui/CTASection";

export default function BeyondPage() {
  const experiments = [
    {
      icon: Sparkles,
      title: "Emotion-Adaptive Interfaces",
      desc: "Exploring how interfaces can subtly respond to user emotional states, creating more empathetic digital experiences without being intrusive.",
      impact: "Deeper user engagement through intelligent adaptation"
    },
    {
      icon: Brain,
      title: "Intelligent UI Behavior",
      desc: "Developing interfaces that learn from user patterns and optimize themselves for better usability and efficiency over time.",
      impact: "Self-improving systems that enhance productivity"
    },
    {
      icon: Eye,
      title: "Subtle AI-Driven Personalization",
      desc: "Creating personalized experiences that feel natural and helpful, not algorithmic or overwhelming.",
      impact: "Personalization that enhances rather than distracts"
    }
  ];

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
            Beyond
          </h1>
          <p className="text-lg sm:text-xl text-center text-gray-400 mb-12 sm:mb-16">Exploration & Experimentation</p>

          {/* Marketing Section for Non-Technical Clients */}
          <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Staying Ahead for Your Business</h2>
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-6">
                While others stick to what they know, I'm constantly exploring what's next. This means your website won't become outdated in two years.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Future-Proof Solutions</h3>
                  <p className="text-gray-300">I build websites that adapt and grow with new technologies, keeping you competitive without constant rebuilds.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Smart Innovation</h3>
                  <p className="text-gray-300">I only use new technologies when they solve real business problems, not just because they're trendy.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <p className="text-2xl text-center text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              Beyond client work, I experiment with ideas that push my thinking and explore the future of user interfaces.
            </p>
          </div>
          
          <div className="space-y-12 mb-20">
            {experiments.map((experiment, index) => (
              <motion.div
                key={index}
                className="grid lg:grid-cols-3 gap-8 items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[var(--accent)]/30 transition-all">
                  <experiment.icon className="w-16 h-16 mb-6" style={{ color: 'var(--accent)' }} />
                  <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--accent)' }}>{experiment.title}</h2>
                </div>
                
                <div className="lg:col-span-2 space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">{experiment.desc}</p>
                  <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-lg p-4 border border-white/10">
                    <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Impact</h3>
                    <p className="text-gray-300">{experiment.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-20">
            <Lightbulb className="w-12 h-12 mb-6 mx-auto" style={{ color: 'var(--accent)' }} />
            <h2 className="text-3xl font-bold mb-6 text-center">Why It Matters</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Refine Approach</h3>
                <p className="text-gray-300">These experiments help me continuously improve my development methodology and problem-solving skills.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Stay Ahead</h3>
                <p className="text-gray-300">By exploring emerging technologies, I can anticipate trends and prepare for future client needs.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Deeper Thinking</h3>
                <p className="text-gray-300">Experimental work brings innovative perspectives and solutions into production projects.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10">
            <Rocket className="w-16 h-16 mb-6 mx-auto" style={{ color: 'var(--accent)' }} />
            <h2 className="text-2xl font-bold mb-4">This is where curiosity turns into capability.</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Every experiment, every exploration, every "what if" question contributes to building better, more thoughtful digital experiences.
            </p>
          </div>

          <CTASection 
            headline="Curious about what's possible?"
            description="Innovation isn't about using the latest technology—it's about solving tomorrow's problems today."
            buttonText="Discover more"
            href="/Signal"
          />
        </motion.div>
      </div>
    </div>
  );
}