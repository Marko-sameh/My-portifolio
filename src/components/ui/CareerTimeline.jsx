"use client";
import { useExperience } from "@/hooks/useExperience";

export default function CareerTimeline() {
  const { experience, loading } = useExperience();
  if (!loading && experience.length === 0) return null;

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">Career progression</h2>
        <p className="text-lg sm:text-xl text-slate-600 text-center mb-12 sm:mb-16 max-w-2xl mx-auto">My professional journey and achievements</p>
        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-slate-300" aria-hidden="true"></div>
          <ol className="space-y-8 sm:space-y-12">
            {experience.map((item, i) => {
              const pts = Array.isArray(item.points) ? item.points : [];
              const half = Math.ceil(pts.length / 2);
              const columns = [pts.slice(0, half), pts.slice(half)].filter((c) => c.length);
              return (
                <li key={`${item.title}-${item.period}-${i}`} className="relative flex items-start gap-4 sm:gap-8">
                  <div className={`w-4 h-4 ${item.current ? "bg-blue-800" : "bg-slate-400"} rounded-full border-4 border-white shadow-lg relative z-10 shrink-0`} aria-hidden="true"></div>
                  <article className="flex-1 bg-slate-50 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm">
                    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">{item.title}</h3>
                        <p className="text-blue-800 font-semibold text-sm sm:text-base">{item.company}</p>
                      </div>
                      <time className={`${item.current ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-slate-800"} px-3 py-1 rounded-full text-xs sm:text-sm font-medium self-start`}>{item.period}</time>
                    </header>
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      {columns.map((col, c) => (
                        <ul key={c} className="space-y-2 text-slate-700">
                          {col.map((p) => (
                            <li key={p} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 ${item.current ? "bg-blue-800" : "bg-slate-400"} rounded-full mt-2 shrink-0`}></div>
                              <span className="text-sm sm:text-base">{p}</span>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
