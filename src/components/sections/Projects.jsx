import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Layers } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import projectsData from '../../../data/projects.json'

export default function Projects() {
  const { ref, isVisible } = useScrollReveal()
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? projectsData.projects
    : projectsData.projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projets" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-neon-blue tracking-widest">// 03</span>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/40 to-transparent" />
          </div>
          <h2 className="section-title text-gradient-blue">Projets</h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {projectsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 font-mono text-xs tracking-wider uppercase border transition-all duration-200
                ${activeFilter === cat.id
                  ? 'border-neon-blue bg-neon-blue/10 text-neon-blue'
                  : 'border-white/10 text-slate-500 hover:border-white/20 hover:text-slate-300'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="card-glass group relative overflow-hidden transition-all duration-300 hover:shadow-card-hover flex flex-col"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-midnight-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                    loading="lazy"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-transparent to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-midnight-900/80 border border-neon-blue/20 font-mono text-xs text-neon-blue uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Action links overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-midnight-900/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-midnight-800 border border-neon-blue/30 flex items-center justify-center
                                 text-neon-blue hover:bg-neon-blue hover:text-midnight-950 transition-all duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-midnight-800 border border-neon-purple/30 flex items-center justify-center
                                   text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-base font-bold text-white mb-2 tracking-wider group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono border border-white/8 text-slate-500 bg-white/3"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer links */}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-neon-blue transition-colors"
                    >
                      <Github size={12} />
                      Code source
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-neon-purple transition-colors ml-auto"
                      >
                        <ExternalLink size={12} />
                        Démo live
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 font-mono text-xs text-slate-700 ml-auto cursor-default">
                        Privé
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-600 font-mono">
            <Layers size={40} className="mx-auto mb-4 opacity-30" />
            Aucun projet dans cette catégorie
          </div>
        )}
      </div>
    </section>
  )
}
