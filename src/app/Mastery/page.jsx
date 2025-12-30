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
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                    <span className="text-gray-300 font-medium">Scalable component architecture</span>
                  </div>
                  <p className="text-sm text-gray-400 ml-5">Your website can grow and add new features without breaking or slowing down</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                    <span className="text-gray-300 font-medium">Server-Side Rendering (SSR)</span>
                  </div>
                  <p className="text-sm text-gray-400 ml-5">Google can find and rank your website better, bringing you more organic traffic</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                    <span className="text-gray-300 font-medium">Efficient state management</span>
                  </div>
                  <p className="text-sm text-gray-400 ml-5">Your website responds instantly to user actions, creating a smooth experience</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                    <span className="text-gray-300 font-medium">SEO-ready implementation</span>
                  </div>
                  <p className="text-sm text-gray-400 ml-5">Built from the ground up to rank well in search results and attract customers</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <Code className="w-12 h-12 mb-6" style={{ color: 'var(--accent)' }} />
              <h3 className="text-2xl font-bold mb-4">Technical Stack</h3>
              <p className="text-gray-400 mb-4">Industry-standard tools that ensure your website is reliable, maintainable, and future-proof</p>
              <div className="grid grid-cols-2 gap-4">
                {["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Three.js", "Flutter"].map((tech, i) => (
                  <div key={i} className="p-3 bg-white/5 rounded-lg text-center border border-white/10">
                    {tech}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4">These aren't just trendy tools—they're proven technologies used by companies like Netflix, Airbnb, and Facebook</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <Layers className="w-12 h-12 mb-6" style={{ color: 'var(--accent)' }} />
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--accent)' }}>UI & Experience Engineering</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I translate design into reliable, interactive systems that users actually enjoy using:
              </p>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                    <span className="text-gray-300 font-medium">Design systems & reusable patterns</span>
                  </div>
                  <p className="text-xs text-gray-400 ml-5">Consistent look and feel across your entire website</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                    <span className="text-gray-300 font-medium">Motion that supports usability</span>
                  </div>
                  <p className="text-xs text-gray-400 ml-5">Smooth animations that guide users, not distract them</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                    <span className="text-gray-300 font-medium">Fully responsive layouts</span>
                  </div>
                  <p className="text-xs text-gray-400 ml-5">Perfect experience on phones, tablets, and computers</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                    <span className="text-gray-300 font-medium">Accessibility-aware interfaces</span>
                  </div>
                  <p className="text-xs text-gray-400 ml-5">Everyone can use your website, expanding your potential customer base</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <Zap className="w-12 h-12 mb-6" style={{ color: 'var(--accent)' }} />
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--accent)' }}>3D & Interactive Web</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                When your business needs to stand out, I create immersive experiences that wow customers:
              </p>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                    <span className="text-gray-300 font-medium">Three.js</span>
                  </div>
                  <p className="text-xs text-gray-400 ml-5">3D product showcases that let customers explore before buying</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                    <span className="text-gray-300 font-medium">React Three Fiber</span>
                  </div>
                  <p className="text-xs text-gray-400 ml-5">Interactive experiences that keep visitors engaged longer</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
                    <span className="text-gray-300 font-medium">Advanced motion and storytelling</span>
                  </div>
                  <p className="text-xs text-gray-400 ml-5">Visual narratives that communicate your brand story effectively</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4 bg-white/5 rounded-lg p-3">Used strategically to solve business problems, not just for show</p>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-20">
            <Globe className="w-12 h-12 mb-6" style={{ color: 'var(--accent)' }} />
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--accent)' }}>Full-Stack Awareness</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With solid backend knowledge, I build websites that work seamlessly with your existing systems and databases.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center bg-white/5 rounded-lg p-4">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Backend</h3>
                <p className="text-sm text-gray-400 mb-2">Node.js, Python, Django</p>
                <p className="text-xs text-gray-400">Your website can connect to any system</p>
              </div>
              <div className="text-center bg-white/5 rounded-lg p-4">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Database</h3>
                <p className="text-sm text-gray-400 mb-2">SQL, Firebase, Redis</p>
                <p className="text-xs text-gray-400">Secure, fast data storage and retrieval</p>
              </div>
              <div className="text-center bg-white/5 rounded-lg p-4">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Integration</h3>
                <p className="text-sm text-gray-400 mb-2">REST APIs, Real-time systems</p>
                <p className="text-xs text-gray-400">Connect with payment systems, CRMs, and more</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-lg p-4">
              <p className="text-center text-gray-300">This means no surprises, no compatibility issues, and websites that actually work with your business processes</p>
            </div>
          </div>

          {/* What This Means for Your Project Section */}
          <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">What This Means for Your Project</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Faster Results</h3>
                <p className="text-gray-300 mb-4">My technical skills mean fewer revisions, shorter development time, and websites that work correctly from day one.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• No endless back-and-forth fixes</li>
                  <li>• Predictable timelines and budgets</li>
                  <li>• Launch on schedule, every time</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Better Business Outcomes</h3>
                <p className="text-gray-300 mb-4">Every technical decision is made with your business goals in mind, not just what's technically interesting.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Websites that actually convert visitors</li>
                  <li>• Search engines can find and rank your site</li>
                  <li>• Fast loading keeps customers engaged</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-center">Proven Track Record</h2>
            <p className="text-center text-gray-300 mb-6">These numbers represent real projects and satisfied clients, not just technical achievements</p>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>90+</div>
                <p className="text-sm text-gray-400 mb-1">Lighthouse Scores</p>
                <p className="text-xs text-gray-500">Fast, optimized websites</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>30%</div>
                <p className="text-sm text-gray-400 mb-1">Load Time Reduction</p>
                <p className="text-xs text-gray-500">Faster than competitors</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>100%</div>
                <p className="text-sm text-gray-400 mb-1">Client Satisfaction</p>
                <p className="text-xs text-gray-500">Projects delivered successfully</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent)' }}>11+</div>
                <p className="text-sm text-gray-400 mb-1">Projects Delivered</p>
                <p className="text-xs text-gray-500">Real businesses helped</p>
              </div>
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