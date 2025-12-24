"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowRight, Play, ExternalLink, Sparkles, Zap, Rocket } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle"
import MasteryCard from "@/components/ui/MasteryCard";
import ProjectCard from "@/components/ui/ProjectCard";
import ExperimentCard from "@/components/ui/ExperimentCard";

const SAMPLE_PROJECTS = [
  {
    id: 1,
    title: "Café Brain — POS & Inventory",
    desc: "React + Django full-stack, AI barista suggestions, raw material tracking.",
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
    tag: "Fullstack",
    tech: ["React", "Django", "AI", "PostgreSQL"],
    gradient: "from-orange-500 to-red-600"
  },
  {
    id: 2,
    title: "Veneficus Landing",
    desc: "Next.js marketing site with 3D logo, animations and SEO-first layout.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tag: "Frontend",
    tech: ["Next.js", "Three.js", "Tailwind"],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    title: "BaristaGPT",
    desc: "Personalized coffee recommender using fine-tuned models and experiments.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    tag: "AI",
    tech: ["Python", "ML", "API"],
    gradient: "from-cyan-500 to-blue-600"
  },
];

const EXPERIMENTS = [
  { title: "AI Barista", desc: "Personalized coffee recommender prototype.", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80", icon: Sparkles },
  { title: "3D Logo System", desc: "Realtime 3D logo exploration for Veneficus.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80", icon: Zap },
  { title: "SaaS CRM Egypt", desc: "CRM for freelancers tailored to Egypt market.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", icon: Rocket },
];


export default function Page() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    setParticles(
      Array.from({ length: 30 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 5 + 3,
        delay: Math.random() * 5
      }))
    );
  }, []);


  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      {/* <motion.div
        className="fixed w-4 h-4 bg-pink-500/50 rounded-full pointer-events-none z-[100] mix-blend-screen hidden lg:block"
        animate={{ x: mousePos.x - 8, y: mousePos.y - 8 }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      /> */}

      {/* <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 origin-left z-50"
        style={{ scaleX }}
      /> */}


      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--accent-40)] to-black z-10" />
          <motion.div
            className="absolute inset-0 opacity-30 "
            style={{
              backgroundImage: "url(https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/EG-en-20251124-TRIFECTA-perspective_8e567342-c60f-4ebb-a1e4-c591bb3f8fac_large.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" /> */}

          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
              style={{ textShadow: "0 0 40px rgba(0,0,0,0.5)" }}
            >
              <span className="inline-block bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--background)] bg-clip-text text-transparent">
                Marko Sameh
              </span>
              <br />
              {/* <span className="inline-block text-4xl md:text-5xl lg:text-6xl ">
                A Cinematic Portfolio
              </span> */}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Enter the scenes — experience my work like a film. Scroll to explore projects, tools and experiments.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                onClick={() => scrollTo("builds")}
                className="group px-8 py-4 bg-gradient-to-r from-[var(--accent)] to-[var(--background)] rounded-full font-semibold text-lg shadow-lg shadow-pink-500/30 flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(236,72,153,0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                Watch Projects
              </motion.button>

              <motion.button
                onClick={() => scrollTo("identity")}
                className="px-8 py-4 border-2 border-white/20 rounded-full font-medium text-lg backdrop-blur-sm hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Who am I
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none hidden md:block" />

        {/* <motion.div
          className="absolute bottom-0 left-0 right-0 h-32"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 rounded-t-[50%] opacity-80"
              style={{
                background: "linear-gradient(to right, black, rgb(236, 72, 153), rgb(168, 85, 247), rgb(236, 72, 153), black)",
                filter: "drop-shadow(0 0 20px rgba(236, 72, 153, 0.6))",
              }}
            />
            <div
              className="absolute top-full left-0 right-0 h-screen rounded-t-[45%]"
              style={{
                background: "radial-gradient(50% 500% at 50% -420%, rgba(168, 85, 247, 0.3) 80%, rgba(0, 0, 0, 0.1) 100%), black",
              }}
            />
          </div>
        </motion.div> */}
        <div className="cinematic-curve-wrapper">
          <div className="cinematic-curve-in"></div>
          <div className="cinematic-curve-out"></div>
        </div>

      </section>

      <section id="identity" className="relative min-h-screen py-40 px-6 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        <motion.div
          className="relative max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle title="Identity" subtitle="The person behind the code" />

          <div className="grid md:grid-cols-2 gap-20 items-center mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-3xl md:text-4xl font-bold">
                I'm Marko — <span className="text-transparent bg-gradient-to-r from-[var(--background)] to-[var(--accent)] bg-clip-text">Frontend Developer</span>
              </h3>
              <p className="text-white/65 text-lg leading-relaxed">
                My journey into development started with curiosity —
                a need to understand how interfaces work and how users interact with systems.

                What began as experimenting with code slowly evolved into building complete frontend experiences,
                focused on clarity, usability, and long-term structure.

                Today, I work mainly with Next/React and modern frontend tools,
                while exploring how intelligent systems and AI can enhance user experience
                in subtle, meaningful ways.
              </p>
              <p className="text-white/65">
                Based in Cairo, Egypt — working globally with teams that value craft, speed and innovation.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                {[
                  { skill: "React / Next.js", level: "95%" },
                  { skill: "Flutter & Mobile", level: "85%" },
                  { skill: "Python / ML", level: "80%" },
                  { skill: "UI Architecture", level: "90%" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative p-3 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm group hover:border-[var(--accent)] transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}>
                    <div className="text-md font-medium mb-2 text-[var(--accent-50)] text-center">
                      <strong>
                        {item.skill}
                      </strong>
                    </div>
                    {/* <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[var(--background)] to-[var(--accent)] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: item.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                      />
                    </div> */}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--background)] to-[var(--accent)] rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-pink-500/30 transition-all">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=900&q=80"
                  alt="identity"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-sm text-[var(--accent)] mb-1">Role</div>
                  <h4 className="text-2xl font-bold">Frontend Developer</h4>
                  <p className="text-[var(--accent-50)] mt-2">Turning ideas into immersive experiences</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="mastery" className="relative min-h-screen py-40 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
        <motion.div
          className="relative max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle
            title="Mastery"
            subtitle="What I’ve Learned to Do Well"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {[
              {
                title: "Frontend Development",
                desc: "Building component-driven interfaces using React/Next,with clean state management and predictable behavior.",
                img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
                gradient: "from-[var(--background)] to-[var(--accent)]",
              },
              {
                title: "Architecture",
                desc: "Scalable frontend architecture, component-driven design patterns.",
                img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
                gradient: "from-[var(--background)] to-[var(--accent)]",
              },
              {
                title: "AI Integration",
                desc: "Smart assistants, recommendation systems, small ML pipelines.",
                img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
                gradient: "from-[var(--background)] to-[var(--accent)]",
              },
            ].map((card, i) => (
              <MasteryCard key={i} {...card} index={i} />
            ))}
          </div>
        </motion.div>
      </section>

      <section id="builds" className="relative min-h-screen py-40 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />
        <motion.div
          className="relative max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle
            title="Builds"
            subtitle="Selected works — each one treated as a film scene: context, challenge, approach, impact"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {SAMPLE_PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </section>

      <section id="core" className="relative min-h-screen py-40 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black" />
        <motion.div
          className="relative max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle title="Core" subtitle="Tools, platforms and workflows I rely on" />

          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {["React", "Next.js", "Tailwind", "Framer Motion", "TypeScript", "Django", "FastAPI", "Postgres", "Redis", "PyTorch", "Flutter", "Figma"].map((tech, i) => (
              <motion.div
                key={tech}
                className="px-6 py-3 bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/10 hover:border-pink-500/50 backdrop-blur-sm transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(236, 72, 153, 0.1)" }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="beyond" className="relative min-h-screen py-40 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black" />
        <motion.div
          className="relative max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle
            title="Beyond"
            subtitle="Research, prototypes and experiments I'm exploring"
          />

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {EXPERIMENTS.map((exp, i) => (
              <ExperimentCard key={i} {...exp} index={i} />
            ))}
          </div>
        </motion.div>
      </section>

      <section id="signal" className="relative min-h-screen py-40 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black" />
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle
            title="Signal"
            subtitle="Want to collaborate, hire or just say hello? Send a message and let's start our scene together"
          />

          <motion.div
            className="mt-16 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl opacity-10 blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-green-500/50 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-green-500/50 transition-all"
                  />
                </div>
                <textarea
                  placeholder="Your message..."
                  rows={6}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-green-500/50 transition-all resize-none"
                />
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl font-semibold text-lg shadow-lg shadow-green-500/30 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Signal
                  <ArrowRight size={20} />
                </motion.button>
              </form>

              <div className="mt-16 pt-10 border-t border-white/10">
                <p className="text-center text-gray-400 mb-8">Or connect with me on</p>
                <div className="flex justify-center gap-6">
                  {[
                    { icon: Github, link: "#", color: "hover:text-purple-400" },
                    { icon: Linkedin, link: "#", color: "hover:text-blue-400" },
                    { icon: Twitter, link: "#", color: "hover:text-cyan-400" },
                    { icon: Mail, link: "mailto:marko@example.com", color: "hover:text-green-400" },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      className={`p-4 bg-white/5 rounded-full border border-white/10 hover:border-white/30 transition-all ${social.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>


    </div>
  );
}