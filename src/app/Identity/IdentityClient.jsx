// "use client";
// import { motion } from "framer-motion";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import CTASection from "@/components/ui/CTASection";

// export default function IdentityClient() {
//   return (
//     <div className="min-h-screen bg-black text-white py-10 sm:py-16 lg:py-20 px-4 sm:px-6">
//       <div className="max-w-6xl mx-auto">
//         <Link href="/">
//           <motion.button
//             className="mb-8 sm:mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
//             whileHover={{ x: -5 }}
//           >
//             <ArrowLeft size={20} />
//             Back to Home
//           </motion.button>
//         </Link>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-white to-[var(--accent)] bg-clip-text text-transparent">
//             Identity
//           </h1>
//           <p className="text-lg sm:text-xl text-center text-gray-400 mb-12 sm:mb-16">Where It Started</p>

//           {/* Marketing Section for Non-Technical Clients */}
//           <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-6 sm:p-8 border border-white/10 mb-12 sm:mb-16">
//             <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Why Business Owners Choose Me</h2>
//             <div className="grid md:grid-cols-3 gap-6 sm:gap-8 text-center">
//               <div>
//                 <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>I Understand Your Business</h3>
//                 <p className="text-gray-300">You need a website that brings customers and grows revenue. I focus on what matters to your bottom line, not just pretty designs.</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Clear Communication</h3>
//                 <p className="text-gray-300">No confusing tech talk. I explain everything in plain English and keep you updated every step of the way.</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Proven Results</h3>
//                 <p className="text-gray-300">My websites help businesses get found online, convert visitors into customers, and grow faster than their competition.</p>
//               </div>
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
//             <div className="space-y-6 sm:space-y-8">
//               <div>
//                 <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--accent)' }}>Where It Started</h2>
//                 <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
//                   My journey into development started with curiosity — a desire to understand how interfaces work and how users experience digital systems.
//                 </p>
//                 <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
//                   What began as experimentation slowly evolved into building complete frontend products.
//                 </p>
//                 <div className="bg-white/5 rounded-lg p-4 mt-4 border border-white/10">
//                   <p className="text-sm text-gray-400 font-medium mb-2">What this means for you:</p>
//                   <p className="text-gray-300">I don't just follow trends. I understand the "why" behind every design decision, which means your website will be built on solid principles, not guesswork.</p>
//                 </div>
//               </div>

//               <div>
//                 <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--accent)' }}>How It Evolved</h2>
//                 <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
//                   Over time, I moved from writing code to designing solutions.
//                 </p>
//                 <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">I learned that:</p>
//                 <ul className="space-y-2 text-gray-300 ml-6">
//                   <li>• Code is a tool, not the goal</li>
//                   <li>• Interfaces communicate decisions</li>
//                   <li>• Structure and clarity matter more than complexity</li>
//                 </ul>
//                 <div className="bg-white/5 rounded-lg p-4 mt-4 border border-white/10">
//                   <p className="text-sm text-gray-400 font-medium mb-2">What this means for you:</p>
//                   <p className="text-gray-300">Your project gets a developer who thinks like a business owner. I focus on what actually moves your business forward, not just what looks impressive.</p>
//                 </div>
//               </div>
//             </div>

//             <div className="relative h-[75%]">
//               <div className="relative rounded-2xl overflow-hidden border border-white/10 h-full">
//                 <Image
//                   src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=900&q=80"
//                   alt="Developer workspace"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
//             <div>
//               <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--accent)' }}>Today</h2>
//               <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
//                 Today, I work mainly with React and Next.js, building interfaces that balance aesthetics, performance, and maintainability.
//               </p>
//               <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
//                 I'm also exploring how intelligent systems and AI can subtly enhance user experience — without adding noise or confusion.
//               </p>
//               <div className="bg-white/5 rounded-lg p-4 mt-4 border border-white/10">
//                 <p className="text-sm text-gray-400 font-medium mb-2">What this means for you:</p>
//                 <p className="text-gray-300">You get websites built with proven, industry-standard tools that won't become outdated next year. Plus, smart features that actually help your users, not distract them.</p>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--accent)' }}>Principles I Work By</h2>
//               <div className="space-y-4">
//                 {[
//                   "Clarity over cleverness",
//                   "Performance is not optional",
//                   "Design must serve purpose",
//                   "Good interfaces feel effortless"
//                 ].map((principle, i) => (
//                   <motion.div
//                     key={i}
//                     className="p-4 bg-white/5 rounded-lg border border-white/10"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                   >
//                     <p className="text-gray-300">{principle}</p>
//                   </motion.div>
//                 ))}
//               </div>
//               <div className="bg-white/5 rounded-lg p-4 mt-4 border border-white/10">
//                 <p className="text-sm text-gray-400 font-medium mb-2">What this means for you:</p>
//                 <p className="text-gray-300">No confusing interfaces or slow websites. Every decision is made with your users and business goals in mind, resulting in websites that actually work for your business.</p>
//               </div>
//             </div>
//           </div>

//           {/* How This Experience Helps You Section */}
//           <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-6 sm:p-8 border border-white/10 mb-12 sm:mb-16">
//             <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">How This Experience Helps You</h2>
//             <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Reliable Delivery</h3>
//                 <p className="text-gray-300">Years of learning from mistakes means I anticipate problems before they happen. Your project stays on schedule and on budget.</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Clear Communication</h3>
//                 <p className="text-gray-300">I've learned to explain technical decisions in business terms. You'll always understand what's happening and why it matters to your goals.</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Future-Proof Solutions</h3>
//                 <p className="text-gray-300">My focus on fundamentals over trends means your website will remain effective and maintainable as your business grows.</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Professional Background</h2>
//             <div className="grid md:grid-cols-3 gap-6 sm:gap-8 text-center">
//               <div>
//                 <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--accent)' }}>Education</h3>
//                 <p className="text-gray-300">Dual Degree Program</p>
//                 <p className="text-sm text-gray-400">Future University in Egypt & University of Cincinnati</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent)' }}>Experience</h3>
//                 <p className="text-gray-300">Frontend Developer</p>
//                 <p className="text-sm text-gray-400">11+ Projects Delivered</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent)' }}>Location</h3>
//                 <p className="text-gray-300">Cairo, Egypt</p>
//                 <p className="text-sm text-gray-400">Working Globally</p>
//               </div>
//             </div>
//           </div>

//           <CTASection
//             headline="Want to know how I work?"
//             description="Every project starts with understanding your goals and building the right solution together."
//             buttonText="Start a conversation"
//             href="/Signal"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// }



"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Sparkles, Target, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/ui/CTASection";

export default function IdentityClient() {
  const principles = [
    { icon: Target, text: "Clarity over cleverness" },
    { icon: Zap, text: "Performance is not optional" },
    { icon: Sparkles, text: "Design must serve purpose" },
    { icon: Code, text: "Good interfaces feel effortless" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/10 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 relative">
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
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[var(--accent)] bg-clip-text text-transparent">
              Identity
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto">
              From curiosity to craft — building interfaces that matter
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        {/* Value Proposition - Single Clear Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-24 sm:mb-32"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-transparent" />
            <div className="relative p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
                Business-Focused Development
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                  </div>
                  <h3 className="text-xl font-semibold">Business Understanding</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Focus on what brings customers and grows revenue, not just aesthetics
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                  </div>
                  <h3 className="text-xl font-semibold">Clear Communication</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Plain English explanations and consistent updates throughout
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                  </div>
                  <h3 className="text-xl font-semibold">Proven Results</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Websites that convert visitors into customers and outpace competition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Journey - Timeline Style */}
        <div className="mb-24 sm:mb-32 space-y-16 sm:space-y-24">
          {/* Where It Started */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--accent)]" />
                <span className="text-sm font-medium tracking-wider text-[var(--accent)] uppercase">
                  Chapter 1
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">Where It Started</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey began with curiosity — a desire to understand how interfaces work
                and how users experience digital systems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                What started as experimentation evolved into building complete frontend products,
                driven by understanding the {'"why"'} behind every design decision.
              </p>
            </div>
            <div className="relative h-80 lg:h-96 order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-transparent rounded-2xl -rotate-3" />
              <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=900&q=80"
                  alt="Developer workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* How It Evolved */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-80 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-bl from-[var(--accent)]/20 to-transparent rounded-2xl rotate-3" />
              <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 -rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80"
                  alt="Code and design"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--accent)]" />
                <span className="text-sm font-medium tracking-wider text-[var(--accent)] uppercase">
                  Chapter 2
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">How It Evolved</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Over time, I moved from writing code to designing solutions, learning that
                the best interfaces come from understanding business goals, not just technical possibilities.
              </p>
              <div className="space-y-3 pt-4">
                {[
                  "Code is a tool, not the goal",
                  "Interfaces communicate decisions",
                  "Structure and clarity matter more than complexity"
                ].map((lesson, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                    <span>{lesson}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Today */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--accent)]" />
              <span className="text-sm font-medium tracking-wider text-[var(--accent)] uppercase">
                Today
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--accent)]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Building Modern Interfaces</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I work primarily with React and Next.js, building interfaces that balance
              aesthetics, performance, and maintainability.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {"I'm"} also exploring how AI can subtly enhance user experience —
              without adding noise or confusion to the interface.
            </p>
          </motion.div>
        </div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 sm:mb-32"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Principles I Work By
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {principles.map((principle, i) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-xl p-6 bg-white/5 border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/10 group-hover:to-transparent transition-all duration-300" />
                  <div className="relative flex items-center gap-4">
                    <Icon className="w-6 h-6 text-[var(--accent)] flex-shrink-0" />
                    <p className="text-lg text-gray-200 group-hover:text-white transition-colors">
                      {principle.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Professional Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
            <div className="relative p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
                Professional Background
              </h2>
              <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>
                    Education
                  </h3>
                  <p className="text-gray-200">Dual Degree Program</p>
                  <p className="text-sm text-gray-400">
                    Future University in Egypt & University of Cincinnati
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>
                    Experience
                  </h3>
                  <p className="text-gray-200">Frontend Developer</p>
                  <p className="text-sm text-gray-400">11+ Projects Delivered</p>
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>
                    Location
                  </h3>
                  <p className="text-gray-200">Cairo, Egypt</p>
                  <p className="text-sm text-gray-400">Working Globally</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <CTASection
          headline="Ready to start your project?"
          description="Every project begins with understanding your goals and building the right solution together."
          buttonText="Start a conversation"
          href="/Signal"
        />
      </div>
    </div>
  );
}