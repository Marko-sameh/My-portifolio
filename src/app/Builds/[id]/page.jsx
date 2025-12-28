"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useProjects } from "../../../hooks/useProjects";
import { useEffect, useState, use } from "react";

export default function ProjectPage({ params }) {
  const { projects } = useProjects();
  const [project, setProject] = useState(null);
  const resolvedParams = use(params);

  useEffect(() => {
    if (projects.length > 0) {
      const foundProject = projects.find(p => p.id === parseInt(resolvedParams.id));
      setProject(foundProject);
    }
  }, [projects, resolvedParams.id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Project not found</h1>
          <Link href="/Builds" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />
      
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <Link href="/Builds">
          <motion.button
            className="flex items-center gap-2 mb-8 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} />
            Back to Projects
          </motion.button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--background)] to-[var(--accent)] rounded-3xl opacity-20 blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-sm border border-white/20">
                    {project.tag}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl text-gray-400 mb-6">
                {project.fullDescription || project.desc}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {(project.features || []).length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[var(--background)] to-[var(--accent)] rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {(project.challenges || []).length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Challenges & Solutions</h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0" />
                      {challenge}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {project.results && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Results & Impact</h3>
                <p className="text-gray-300 leading-relaxed">{project.results}</p>
              </div>
            )}

            <div className="flex gap-4 pt-6">
              {(project.links || []).map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-[var(--background)] to-[var(--accent)] rounded-lg font-medium flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <ExternalLink size={20} />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}