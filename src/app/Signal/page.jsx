"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Github, Linkedin, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/ui/CTASection";

export default function SignalPage() {
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
            Signal
          </h1>
          <p className="text-lg sm:text-xl text-center text-gray-400 mb-12 sm:mb-16">Why Work With Me</p>

          {/* Marketing Section for Non-Technical Clients */}
          <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Ready to Grow Your Business Online?</h2>
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-8">
                Stop losing customers to competitors with better websites. Let's build something that actually works for your business.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Free Consultation</h3>
                  <p className="text-sm text-gray-400">We'll discuss your goals and how a better website can help</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Clear Timeline</h3>
                  <p className="text-sm text-gray-400">Know exactly when your new website will be ready</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Guaranteed Results</h3>
                  <p className="text-sm text-gray-400">Your website will work properly or I'll fix it for free</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--accent)' }}>If you're looking for:</h2>
              <div className="space-y-6">
                {[
                  "A frontend developer who thinks beyond visuals",
                  "Someone who understands performance and product goals",
                  "A partner who takes responsibility, not just tasks"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-4">You're in the right place.</h3>
                <p className="text-gray-300 mb-4">
                  Great products aren't built by accident. They're built through intention, structure, and care.
                </p>
                <p className="font-semibold" style={{ color: 'var(--accent)' }}>
                  If that's how you want to build — this is your signal.
                </p>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 outline-none focus:border-[var(--accent)] transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 outline-none focus:border-[var(--accent)] transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 outline-none focus:border-[var(--accent)] transition-all"
                />
                <textarea
                  placeholder="Your message..."
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 outline-none focus:border-[var(--accent)] transition-all resize-none"
                />
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[var(--background)] to-[var(--accent)] rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Signal
                  <Send size={18} />
                </motion.button>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <Mail className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">markosameh75@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <Phone className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">+201203113955</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <MapPin className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-400">Mokattam, Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Connect Online</h2>
              <div className="space-y-4">
                <a href="https://www.linkedin.com/in/marko-sameh-9971b6244" className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[var(--accent)]/30 transition-all">
                  <Linkedin className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-gray-400">Professional Network</p>
                  </div>
                </a>
                <a href="https://github.com/Marko-sameh" className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-[var(--accent)]/30 transition-all">
                  <Github className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-gray-400">Code Repository</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-gray-300 text-sm">I typically respond within 24 hours. For urgent projects, please mention it in your message.</p>
              </div>
            </div>
          </div>

          {/* <CTASection 
            headline="Ready to start?"
            description="The best projects begin with a simple conversation about your goals and vision."
            buttonText="Send a message"
            href="#contact-form"
          /> */}
        </motion.div>
      </div>
    </div>
  );
}