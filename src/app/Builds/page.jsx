"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Globe, Zap, Brain, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/ui/CTASection";

export default function BuildsPage() {
  const projects = [
    {
      title: "Veneficus — Luxury Fashion Platform",
      description: "A bilingual luxury e-commerce experience built for performance and elegance.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      challenges: [
        "Premium visual identity",
        "High performance expectations", 
        "Multilingual support",
        "Scalable architecture"
      ],
      solution: [
        "Next.js with SSR",
        "3D product visualization",
        "Optimized motion and transitions",
        "Clean, maintainable structure"
      ],
      result: "A visually rich experience that remains fast and conversion-focused.",
      tech: ["Next.js", "React Three Fiber", "Framer Motion", "Tailwind CSS", "i18next"]
    },
    {
      title: "Coffee Brain — AI Café System",
      description: "A full-stack café management system developed as a graduation project.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      challenges: [
        "Reduce operational errors",
        "Improve workflow efficiency",
        "Enhance user clarity",
        "AI integration"
      ],
      solution: [
        "React frontend with Django backend",
        "AI-powered recommendations",
        "Real-time inventory management",
        "Automated reporting system"
      ],
      result: "30% reduction in manual administrative errors through intelligent automation.",
      tech: ["React", "Django", "AI Module", "Tailwind CSS", "Python"]
    },
    {
      title: "SpaceTechs — Interactive 3D Portfolio",
      description: "A high-performance 3D web platform showcasing technical and visual capabilities.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      challenges: [
        "3D performance optimization",
        "Mobile responsiveness",
        "Interactive storytelling",
        "Technical showcase"
      ],
      solution: [
        "React Three Fiber",
        "Optimized 3D models",
        "Progressive loading",
        "Responsive 3D layouts"
      ],
      result: "Proof that immersive experiences and performance can coexist.",
      tech: ["React", "Three.js", "Tailwind CSS", "Node.js", "Express.js"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-10 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
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
            Builds
          </h1>
          <p className="text-lg sm:text-xl text-center text-gray-400 mb-12 sm:mb-16">A collection of projects that reflect how I think, design, and build</p>

          {/* Marketing Section for Non-Technical Clients */}
          <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 border border-white/10 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Real Projects, Real Results</h2>
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-6">
                These aren't just portfolio pieces. These are real businesses I've helped grow online.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Luxury Fashion</h3>
                  <p className="text-sm text-gray-400">Increased online sales by creating a premium shopping experience</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Café Business</h3>
                  <p className="text-sm text-gray-400">Reduced operational costs and improved customer experience</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Tech Showcase</h3>
                  <p className="text-sm text-gray-400">Built a standout online presence that attracts premium clients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative group">
                    <div className={`absolute -inset-4 bg-gradient-to-r ${project.color} rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`} />
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 h-64 sm:h-80">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <project.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{project.title}</h2>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Client Goal → Solution → Result Format */}
                  <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-lg p-6 mb-6 border border-white/10">
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Client Goal</h4>
                        <p className="text-sm text-gray-300">
                          {index === 0 && "Create a premium online store that matches their luxury brand and converts international customers"}
                          {index === 1 && "Reduce operational errors and streamline café management while improving customer experience"}
                          {index === 2 && "Build a standout portfolio that showcases technical capabilities and attracts premium clients"}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Solution</h4>
                        <p className="text-sm text-gray-300">
                          {index === 0 && "Fast-loading bilingual website with 3D product views and seamless checkout process"}
                          {index === 1 && "Smart management system with AI recommendations and automated reporting"}
                          {index === 2 && "Interactive 3D portfolio that loads quickly on all devices while showcasing advanced capabilities"}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>Result</h4>
                        <p className="text-sm text-gray-300">
                          {index === 0 && "Premium shopping experience that maintains fast performance and drives conversions"}
                          {index === 1 && "30% reduction in manual errors and streamlined operations"}
                          {index === 2 && "Unique online presence that demonstrates both creativity and technical excellence"}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Business Challenges</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.challenges.map((challenge, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                            <span className="text-sm text-gray-400">{challenge}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        {index === 0 && "Luxury brands need websites that reflect their premium positioning while performing flawlessly"}
                        {index === 1 && "Small businesses lose money through operational inefficiencies and manual processes"}
                        {index === 2 && "Creative professionals need portfolios that demonstrate both artistic vision and technical skill"}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>How I Solved It</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.solution.map((sol, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                            <span className="text-sm text-gray-400">{sol}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        {index === 0 && "Combined cutting-edge technology with elegant design to create a premium experience"}
                        {index === 1 && "Built intelligent systems that handle routine tasks and provide actionable insights"}
                        {index === 2 && "Created an immersive experience that showcases capabilities without sacrificing performance"}
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--accent)' }}>Business Impact</h3>
                      <p className="text-gray-300 mb-3">{project.result}</p>
                      <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded p-3">
                        <p className="text-sm text-gray-400">
                          {index === 0 && "A website that drives sales while maintaining the luxury brand experience customers expect"}
                          {index === 1 && "Streamlined operations that save time and money while improving customer satisfaction"}
                          {index === 2 && "A portfolio that stands out in a crowded market and attracts high-value opportunities"}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Technology Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        {index === 0 && "Modern, reliable tools that ensure fast performance and easy maintenance"}
                        {index === 1 && "Proven technologies that provide stability and room for future growth"}
                        {index === 2 && "Advanced frameworks that enable complex interactions while maintaining speed"}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-20 bg-white/5 rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">More Client Success Stories</h2>
            <p className="text-center text-gray-400 mb-8">Every project is designed to solve real business problems and deliver measurable results</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Neizk Landing Page</h3>
                <p className="text-gray-300 mb-4">Client needed a high-converting landing page that would turn visitors into leads and integrate with their marketing tools.</p>
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent)' }}>Business Impact:</p>
                  <p className="text-sm text-gray-400">Optimized for conversions with advanced tracking to measure and improve marketing ROI</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "Bootstrap", "SEO"].map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>Flutter To-Do App</h3>
                <p className="text-gray-300 mb-4">Productivity app that needed to work seamlessly across all devices with real-time synchronization and user-friendly design.</p>
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent)' }}>Business Impact:</p>
                  <p className="text-sm text-gray-400">25% increase in user engagement through intuitive design and reliable cross-platform functionality</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Firebase", "Dart"].map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <CTASection 
            headline="Ready to build something together?"
            description="Let's discuss your project and create a solution that delivers real results."
            buttonText="Let's talk"
            href="/Signal"
          />
        </motion.div>
      </div>
    </div>
  );
}