import { motion } from 'framer-motion'
import { Code2, Network, Wrench, Terminal, Globe, CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import servicesData from '../../../data/services.json'

// Container icon for Docker (lucide doesn't have it natively)
const Container = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
)

const iconMap = { Code2, Network, Wrench, Terminal, Container, Globe }

export default function Services() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-neon-blue/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-neon-blue tracking-widest">// 04</span>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/40 to-transparent" />
          </div>
          <h2 className="section-title text-gradient-blue">Services</h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            Des solutions complètes adaptées à vos besoins, du développement à l'infrastructure.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {servicesData.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Code2
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="card-glass p-6 group transition-all duration-300 hover:shadow-card-hover relative overflow-hidden"
              >
                {/* Subtle top border glow on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-lg"
                  style={{
                    border: `1px solid ${service.color}30`,
                    backgroundColor: `${service.color}10`,
                    boxShadow: `0 0 0 0 ${service.color}30`,
                  }}
                >
                  <Icon
                    size={20}
                    style={{ color: service.color }}
                    className="w-5 h-5"
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-display text-base font-bold tracking-wider mb-3 transition-colors duration-200"
                  style={{ color: 'white' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2
                        size={13}
                        className="shrink-0 mt-0.5"
                        style={{ color: service.color }}
                      />
                      <span className="text-slate-500 text-xs">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ background: `radial-gradient(circle at 100% 100%, ${service.color}, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 card-glass p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-neon-blue/20"
        >
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-2 tracking-wider">
              Besoin d'un service sur mesure ?
            </h3>
            <p className="text-slate-400 text-sm">
              Discutons de votre projet. Je vous propose une solution adaptée à vos besoins et votre budget.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary shrink-0 inline-flex items-center gap-2"
          >
            Me contacter
          </a>
        </motion.div>
      </div>
    </section>
  )
}
