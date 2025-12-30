"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Layers, Zap, Globe } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/ui/CTASection";

export default function MasteryPage() {
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
            Mastery
          </h1>
          <p className="text-lg sm:text-xl text-center text-gray-400 mb-12 sm:mb-16">What I've Learned to Do Well</p>

          {/* Marketing Section for Non-Technical Clients */}
          <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">What This Means for Your Business</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Your Problem</h3>
                <p className="text-lg text-gray-300 mb-4">You need a website that actually works for your business. Most developers build pretty sites that don't bring customers or generate sales.</p>
                <p className="text-gray-300">You're tired of websites that look good but don't deliver results.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>My Solution</h3>
                <p className="text-lg text-gray-300 mb-4">I build websites that get found on Google, convert visitors into paying customers, and grow with your business.</p>
                <p className="text-gray-300">Fast loading, mobile-friendly, and designed to make you money.</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-8" style={{ color: 'var(--accent)' }}>Frontend Engineering</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I build frontend systems designed for long-term growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                  <span className="text-gray-300">Scalable component architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                  <span className="text-gray-300">Server-Side Rendering (SSR)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                  <span className="text-gray-300">Efficient state management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                  <span className="text-gray-300">SEO-ready implementation</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <Code className="w-12 h-12 mb-6" style={{ color: 'var(--accent)' }} />
              <h3 className="text-2xl font-bold mb-4">Technical Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Three.js", "Flutter"].map((tech, i) => (
                  <div key={i} className="p-3 bg-white/5 rounded-lg text-center border border-white/10">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <Layers className="w-12 h-12 mb-6" style={{ color: 'var(--accent)' }} />
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--accent)' }}>UI & Experience Engineering</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I translate design into reliable, interactive systems:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                  <span className="text-gray-300">Design systems & reusable patterns</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                  <span className="text-gray-300">Motion that supports usability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                  <span className="text-gray-300">Fully responsive layouts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                  <span className="text-gray-300">Accessibility-aware interfaces</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <Zap className="w-12 h-12 mb-6" style={{ color: 'var(--accent)' }} />
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--accent)' }}>3D & Interactive Web</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                When interaction becomes part of the experience, I build immersive interfaces using:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                  <span className="text-gray-300">Three.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                  <span className="text-gray-300">React Three Fiber</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                  <span className="text-gray-300">Advanced motion and storytelling</span>
                </div>
                <p className="text-sm text-gray-400 mt-4">Used intentionally — not as decoration.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-20">
            <Globe className="w-12 h-12 mb-6" style={{ color: 'var(--accent)' }} />
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--accent)' }}>Full-Stack Awareness</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With a solid backend foundation (Node.js, Python, databases), I build frontend solutions that integrate smoothly with APIs and real systems.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Backend</h3>
                <p className="text-sm text-gray-400">Node.js, Python, Django</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Database</h3>
                <p className="text-sm text-gray-400">SQL, Firebase, Redis</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Integration</h3>
                <p className="text-sm text-gray-400">REST APIs, Real-time systems</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-center">Performance Metrics</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>90+</div>
                <p className="text-sm text-gray-400">Lighthouse Scores</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>30%</div>
                <p className="text-sm text-gray-400">Load Time Reduction</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>100%</div>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>11+</div>
                <p className="text-sm text-gray-400">Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 text-center">
            <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 sm:p-12 border border-white/10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to see what's possible?</h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how these skills can solve your specific challenges.
              </p>
              <Link href="/Builds">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-[var(--background)] to-[var(--accent)] rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  See the work
                </motion.button>
              </Link>
            </div>
          </div>

          <CTASection 
            headline="See what these skills can build"
            description="Technical expertise means nothing without real results that grow your business."
            buttonText="View my work"
            href="/Builds"
          />
        </motion.div>
      </div>
    </div>
  );
}