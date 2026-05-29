import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Download, MessageCircle, ChevronDown, MapPin, Zap } from 'lucide-react'
import { useTyping } from '../../hooks/useTyping'
import profile from '../../../data/profile.json'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  const typedText = useTyping(profile.roles, 80, 2200)

  const socialIcons = [
    { href: profile.social.github, icon: Github, label: 'GitHub', color: 'hover:border-slate-400 hover:text-slate-300' },
    { href: profile.social.linkedin, icon: Linkedin, label: 'LinkedIn', color: 'hover:border-blue-400 hover:text-blue-400' },
    { href: profile.social.twitter, icon: Twitter, label: 'Twitter', color: 'hover:border-sky-400 hover:text-sky-400' },
  ]

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative corner lines */}
      <div className="absolute top-20 left-8 w-16 h-16 border-t border-l border-neon-blue/20" />
      <div className="absolute top-20 right-8 w-16 h-16 border-t border-r border-neon-blue/20" />
      <div className="absolute bottom-20 left-8 w-16 h-16 border-b border-l border-neon-purple/20" />
      <div className="absolute bottom-20 right-8 w-16 h-16 border-b border-r border-neon-purple/20" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left — text content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Status badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue" />
              </span>
              <span className="font-mono text-xs text-neon-blue tracking-widest uppercase">
                Disponible pour missions
              </span>
            </motion.div>

            {/* Name */}
            <motion.div {...fadeUp(0.2)}>
              <p className="font-mono text-sm text-slate-500 tracking-widest mb-2">
                <span className="text-neon-blue">&gt;</span> Bonjour, je suis
              </p>
              <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-black tracking-wider leading-tight mb-2">
                <span className="text-white">BANDA </span>
                <span className="text-gradient-blue">Achirafou</span>
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.div {...fadeUp(0.35)} className="mb-6 h-8">
              <span className="font-mono text-lg md:text-xl text-neon-purple">
                {typedText}
                <span className="cursor-blink text-neon-blue">_</span>
              </span>
            </motion.div>

            {/* Location */}
            <motion.div {...fadeUp(0.45)} className="flex items-center justify-center lg:justify-start gap-2 mb-6 text-slate-400 text-sm font-mono">
              <MapPin size={14} className="text-neon-blue" />
              <span>{profile.location}</span>
            </motion.div>

            {/* Bio excerpt */}
            <motion.p {...fadeUp(0.5)} className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              Développeur fullstack & sysadmin passionné. Je construis des solutions web robustes et administre des infrastructures Linux / Docker au service de vos projets.
            </motion.p>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a href="#projets" className="btn-primary inline-flex items-center gap-2">
                <Zap size={14} />
                Voir mes projets
              </a>
              <a href={profile.cv} download className="btn-secondary inline-flex items-center gap-2">
                <Download size={14} />
                Télécharger CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.7)} className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="font-mono text-xs text-slate-600 tracking-widest uppercase mr-1">Follow</span>
              {socialIcons.map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 border border-white/10 flex items-center justify-center
                              text-slate-500 transition-all duration-200 ${color}`}
                >
                  <Icon size={15} />
                </a>
              ))}

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 border border-white/10 flex items-center justify-center
                           text-slate-500 hover:border-green-400 hover:text-green-400 transition-all duration-200"
              >
                <MessageCircle size={15} />
              </a>
            </motion.div>
          </div>

          {/* Right — avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative order-1 lg:order-2 flex-shrink-0"
          >
            {/* Outer spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-6 border border-neon-blue/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-3 border border-dashed border-neon-purple/10 rounded-full"
            />

            {/* Avatar container */}
            <div className="relative w-52 h-52 md:w-64 md:h-64">
              {/* Glow bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full blur-xl" />

              {/* Avatar image */}
              <div className="relative w-full h-full rounded-full border-2 border-neon-blue/30 overflow-hidden bg-midnight-800">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center">
                      <span class="font-display text-6xl font-black text-gradient-blue">BA</span>
                    </div>`
                  }}
                />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-neon-blue" />
              <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-neon-blue" />
              <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-neon-purple" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-neon-purple" />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 top-8 bg-midnight-800 border border-neon-blue/30 px-3 py-1.5 shadow-neon-blue"
            >
              <span className="font-mono text-xs text-neon-blue">Full Stack</span>
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -left-4 bottom-12 bg-midnight-800 border border-neon-purple/30 px-3 py-1.5 shadow-neon-purple"
            >
              <span className="font-mono text-xs text-neon-purple">SysAdmin</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.getElementById('apropos')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-neon-blue transition-colors"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}
