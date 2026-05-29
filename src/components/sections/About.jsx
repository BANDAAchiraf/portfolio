import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, User, Calendar, Building } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import profile from '../../../data/profile.json'

const SectionLabel = ({ number, text }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="font-mono text-xs text-neon-blue tracking-widest">{number}</span>
    <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/40 to-transparent" />
  </div>
)

export default function About() {
  const { ref, isVisible } = useScrollReveal()
  const { about } = profile

  // Parse simple markdown bold **text**
  const parseBold = (text) =>
    text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
      i % 2 === 1 ? <strong key={i} className="text-neon-blue font-semibold">{part}</strong> : part
    )

  return (
    <section id="apropos" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionLabel number="// 01" />
          <h2 className="section-title text-gradient-blue">À Propos</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Presentation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <User size={18} className="text-neon-blue" />
              <h3 className="font-display text-lg font-bold tracking-wider text-white">Présentation</h3>
            </div>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              {about.presentation.split('\n\n').map((para, i) => (
                <p key={i}>{parseBold(para)}</p>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: '3+', label: 'Ans exp.' },
                { value: '20+', label: 'Projets' },
                { value: '15+', label: 'Clients' },
              ].map(({ value, label }) => (
                <div key={label} className="card-glass p-4 text-center transition-all duration-300">
                  <p className="font-display text-2xl font-bold text-gradient-blue mb-1">{value}</p>
                  <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {/* Experiences */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase size={18} className="text-neon-blue" />
                <h3 className="font-display text-lg font-bold tracking-wider text-white">Expériences</h3>
              </div>

              <div className="relative pl-6 border-l border-white/10 space-y-8">
                {about.experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[25px] w-3 h-3 border border-neon-blue bg-midnight-950 rounded-full" />
                    <div className="absolute -left-[22px] top-3 w-px h-full bg-gradient-to-b from-neon-blue/20 to-transparent" />

                    <div className="card-glass p-4 transition-all duration-300">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-white text-sm">{exp.title}</h4>
                        <span className="flex items-center gap-1 text-neon-blue font-mono text-xs shrink-0">
                          <Calendar size={10} />
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 text-xs mb-2 font-mono">
                        <Building size={10} />
                        {exp.company}
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={18} className="text-neon-purple" />
                <h3 className="font-display text-lg font-bold tracking-wider text-white">Formation</h3>
              </div>
              <div className="relative pl-6 border-l border-white/10">
                {about.education.map((edu, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[25px] w-3 h-3 border border-neon-purple bg-midnight-950 rounded-full" />
                    <div className="card-glass p-4 transition-all duration-300">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-white text-sm">{edu.degree}</h4>
                        <span className="font-mono text-xs text-neon-purple shrink-0">{edu.period}</span>
                      </div>
                      <p className="text-slate-500 text-xs font-mono">{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
