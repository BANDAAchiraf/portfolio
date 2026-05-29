import { useState } from 'react'
import { motion } from 'framer-motion'
import { Monitor, Server, Database, GitBranch, Network } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import skillsData from '../../../data/skills.json'

const iconMap = { Monitor, Server, Database, GitBranch, Network }

export default function Skills() {
  const { ref, isVisible } = useScrollReveal()
  const [active, setActive] = useState(skillsData.categories[0].id)

  const activeCategory = skillsData.categories.find((c) => c.id === active)

  return (
    <section id="competences" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-neon-blue/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-neon-blue tracking-widest">// 02</span>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/40 to-transparent" />
          </div>
          <h2 className="section-title text-gradient-blue">Compétences</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Category tabs (vertical on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:w-52 shrink-0"
          >
            {skillsData.categories.map((cat) => {
              const Icon = iconMap[cat.icon] || Monitor
              const isActive = active === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 shrink-0
                    border font-mono text-sm tracking-wider whitespace-nowrap
                    ${isActive
                      ? 'border-l-2 bg-midnight-800/60 text-white'
                      : 'border-white/5 text-slate-500 hover:text-slate-300 hover:border-white/10'
                    }`}
                  style={isActive ? { borderLeftColor: cat.color, borderColor: `${cat.color}30` } : {}}
                >
                  <Icon size={15} style={{ color: isActive ? cat.color : undefined }} />
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </motion.div>

          {/* Skills list */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1"
          >
            <div className="card-glass p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-6" style={{ background: activeCategory.color }} />
                <h3 className="font-display text-xl font-bold tracking-wider text-white">
                  {activeCategory.label}
                </h3>
                <span className="ml-auto font-mono text-xs text-slate-600">
                  {activeCategory.skills.length} technologies
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {activeCategory.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                      <span className="font-mono text-xs" style={{ color: activeCategory.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
                        style={{ background: `linear-gradient(90deg, ${activeCategory.color}99, ${activeCategory.color})` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <p className="font-mono text-xs text-slate-600 tracking-widest uppercase text-center mb-6">
            Outils &amp; Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Symfony', 'Yii2', 'React', 'PHP', 'Python', 'Docker',
              'Linux', 'Nginx', 'MySQL', 'MongoDB', 'PostgreSQL', 'Redis',
              'Git', 'GitHub Actions', 'WordPress', 'Odoo', 'Bash', 'VPN',
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.03 }}
                whileHover={{ y: -2, borderColor: '#00d4ff', color: '#00d4ff' }}
                className="tag border-white/10 text-slate-500 cursor-default transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
