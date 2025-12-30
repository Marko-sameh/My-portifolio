
import RecruterHero from '@/components/ui/RecruterHero';
import RecruterProjects from '@/components/ui/RecruterProjects';
import { TrendingUp, Users, Target } from 'lucide-react';

export default function RecruiterMode() {

  return (
    <div className="min-h-screen bg-white text-slate-900 mt-10">
      <main>
        {/* Hero Section */}
        <RecruterHero></RecruterHero>

        {/* Impact Metrics */}
        <section id="metrics" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Proven results</h2>
            <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">Numbers that demonstrate real impact and consistent delivery</p>

            <dl className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1">
                <dt className="text-4xl font-bold text-slate-900 mb-3">11</dt>
                <dd className="text-slate-600 font-semibold mb-2">Web Applications</dd>
                <dd className="text-sm text-slate-500">Delivered as freelancer</dd>
              </div>
              <div className="text-center p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1">
                <dt className="text-4xl font-bold text-blue-800 mb-3">90+</dt>
                <dd className="text-slate-600 font-semibold mb-2">Lighthouse Scores</dd>
                <dd className="text-sm text-slate-500">Consistent performance optimization</dd>
              </div>
              <div className="text-center p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1">
                <dt className="text-4xl font-bold text-blue-800 mb-3">100%</dt>
                <dd className="text-slate-600 font-semibold mb-2">Client Satisfaction</dd>
                <dd className="text-sm text-slate-500">Retention rate across 10 clients</dd>
              </div>
              <div className="text-center p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1">
                <dt className="text-4xl font-bold text-blue-800 mb-3">30%</dt>
                <dd className="text-slate-600 font-semibold mb-2">Load Time Reduction</dd>
                <dd className="text-sm text-slate-500">Through SSR optimization</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* How I Work */}
        <section id="work" className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">How I work</h2>
            <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">My approach to development and collaboration</p>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Communication & Delivery</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    I communicate clearly and deliver consistently. Through 2+ years of freelance work,
                    {"I've"} learned to translate business requirements into technical solutions that work.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    I provide regular updates, meet deadlines, and take full ownership of project outcomes.
                    My 100% client retention rate speaks to reliable delivery and clear communication.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Quality & Performance</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    I build for performance from day one. Every project targets 90+ Lighthouse scores
                    through optimized rendering, efficient state management, and SEO best practices.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Quality means building applications that scale, perform well on all devices,
                    and provide excellent user experiences across different markets and languages.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Learning & Growth</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    I stay current with modern web technologies and best practices. My work with AI training
                    at Outlier keeps me connected to emerging technologies and quality standards.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    I approach each project as an opportunity to learn and improve,
                    whether {"it's"} mastering 3D web experiences or optimizing for international markets.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Collaboration & Impact</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    I work well in teams and understand how frontend development fits into larger business goals.
                    My experience organizing IEEE events taught me effective cross-team collaboration.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    I focus on building solutions that enable business growth, improve user engagement,
                    and make teams more productive through well-structured, maintainable code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Strengths */}
        <section id="strengths" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Core strengths</h2>
            <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">What makes me effective as a frontend developer</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-10 rounded-3xl hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-800 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Performance Engineering</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  I consistently deliver 90+ Lighthouse scores through SSR optimization,
                  efficient state management, and modern rendering strategies that reduce load times by 30%.
                </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-3xl hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-800 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Full-Stack Thinking</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Strong foundation in backend technologies (Node.js, Python, databases) allows me to build
                  frontend solutions that integrate seamlessly with existing systems and APIs.
                </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-3xl hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-800 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Global Collaboration</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Proven experience working with international clients and teams.
                  I build accessible, multilingual applications that work across different markets and cultures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Technical expertise</h2>
            <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">Technologies and tools I use to deliver results</p>
            <div className="grid md:grid-cols-2 gap-12">
              <article className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Frontend Architecture</h3>
                <dl className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200">
                    <dt className="font-semibold text-slate-900">React & Next.js</dt>
                    <dd className="text-sm text-slate-500">2+ years freelance experience</dd>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200">
                    <dt className="font-semibold text-slate-900">TypeScript & JavaScript</dt>
                    <dd className="text-sm text-slate-500">ES6+, strong foundation</dd>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200">
                    <dt className="font-semibold text-slate-900">Three.js & 3D Web</dt>
                    <dd className="text-sm text-slate-500">React Three Fiber specialist</dd>
                  </div>
                </dl>
              </article>
              <article className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Backend & Mobile</h3>
                <dl className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200">
                    <dt className="font-semibold text-slate-900">Flutter & Mobile</dt>
                    <dd className="text-sm text-slate-500">Cross-platform development</dd>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200">
                    <dt className="font-semibold text-slate-900">Node.js & Python</dt>
                    <dd className="text-sm text-slate-500">Backend integration</dd>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200">
                    <dt className="font-semibold text-slate-900">Firebase & Databases</dt>
                    <dd className="text-sm text-slate-500">Real-time applications</dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Career progression</h2>
            <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">My professional journey and achievements</p>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300" aria-hidden="true"></div>
              <ol className="space-y-12">
                <li className="relative flex items-start gap-8">
                  <div className="w-4 h-4 bg-blue-800 rounded-full border-4 border-white shadow-lg relative z-10" aria-hidden="true"></div>
                  <article className="flex-1 bg-slate-50 p-8 rounded-2xl shadow-sm">
                    <header className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">Frontend Developer (Freelancer)</h3>
                        <p className="text-blue-800 font-semibold">Remote</p>
                      </div>
                      <time className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Oct 2023 - Present</time>
                    </header>
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-800 rounded-full mt-2 shrink-0"></div>
                          <span>Delivered 11 web applications with 90+ Lighthouse scores</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-800 rounded-full mt-2 shrink-0"></div>
                          <span>Maintained 100% client satisfaction across 10 clients</span>
                        </li>
                      </ul>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-800 rounded-full mt-2 shrink-0"></div>
                          <span>Reduced page load times by 30% through SSR optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-800 rounded-full mt-2 shrink-0"></div>
                          <span>Built bilingual, accessible interfaces</span>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>

                <li className="relative flex items-start gap-8">
                  <div className="w-4 h-4 bg-blue-800 rounded-full border-4 border-white shadow-lg relative z-10" aria-hidden="true"></div>
                  <article className="flex-1 bg-slate-50 p-8 rounded-2xl shadow-sm">
                    <header className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">AI Trainer</h3>
                        <p className="text-blue-800 font-semibold">Outlier (Remote)</p>
                      </div>
                      <time className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Feb 2024 - Present</time>
                    </header>
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0"></div>
                          <span>Evaluate AI-generated code for quality and accuracy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0"></div>
                          <span>Collaborate globally to maintain data quality standards</span>
                        </li>
                      </ul>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0"></div>
                          <span>Gained expertise in prompt engineering</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0"></div>
                          <span>Model evaluation and AI quality assessment</span>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>

                <li className="relative flex items-start gap-8">
                  <div className="w-4 h-4 bg-slate-400 rounded-full border-4 border-white shadow-lg relative z-10" aria-hidden="true"></div>
                  <article className="flex-1 bg-slate-50 p-8 rounded-2xl shadow-sm">
                    <header className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">Computer Science Student</h3>
                        <p className="text-blue-800 font-semibold">Future University in Egypt & University of Cincinnati</p>
                      </div>
                      <time className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">2021 - 2025</time>
                    </header>
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0"></div>
                          <span>Dual degree program in Computer Science</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0"></div>
                          <span>Focus on Web Development and UI/UX Design</span>
                        </li>
                      </ul>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0"></div>
                          <span>IEEE Student Branch event organizer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0"></div>
                          <span>Graduating July 2025</span>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Projects */}
        <RecruterProjects></RecruterProjects>

      </main>
    </div>
  );
}