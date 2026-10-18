"use client";
import { motion } from "framer-motion";
import { useExperience } from "@/hooks/useExperience";

// Career timeline for the Identity page. Styled like its chapters/principles
// (accent label lines, large headings, glass cards). Data comes from /api/experience.
export default function CreativeCareerTimeline() {
  const { experience, loading } = useExperience();
  if (!loading && experience.length === 0) return null;

  return (
    <section className="mb-24 sm:mb-32" aria-labelledby="career-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--accent)]" />
          <span className="text-sm font-medium tracking-wider text-[var(--accent)] uppercase">
            Experience
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--accent)]" />
        </div>
        <h2 id="career-heading" className="text-3xl sm:text-4xl font-bold">
          Career Progression
        </h2>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/30 to-transparent" aria-hidden="true" />
        <ol className="space-y-6 sm:space-y-8">
          {experience.map((item, i) => (
            <motion.li
              key={item.id ?? `${item.title}-${i}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex items-start gap-5 sm:gap-8"
            >
              <div
                className={`w-4 h-4 rounded-full mt-7 shrink-0 relative z-10 ring-4 ring-black ${item.current ? "bg-[var(--accent)]" : "bg-gray-500"}`}
                aria-hidden="true"
              />
              <article className="group relative flex-1 overflow-hidden rounded-xl p-5 sm:p-6 bg-white/5 border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/10 group-hover:to-transparent transition-all duration-300" />
                <div className="relative">
                  <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100 group-hover:text-white transition-colors">{item.title}</h3>
                      <p className="text-[var(--accent)]">{item.company}</p>
                    </div>
                    <time className="self-start px-3 py-1 rounded-full text-xs sm:text-sm bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-gray-200">
                      {item.period}
                    </time>
                  </header>
                  <ul className="space-y-3">
                    {(Array.isArray(item.points) ? item.points : []).map((p) => (
                      <li key={p} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
