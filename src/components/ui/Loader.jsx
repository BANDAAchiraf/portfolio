import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-midnight-950 flex flex-col items-center justify-center z-[9999]">
      <div className="grid-bg absolute inset-0 opacity-50" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative flex flex-col items-center gap-8"
      >
        {/* Animated logo */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="w-20 h-20 border border-neon-blue/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 border border-neon-purple/30 rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-xl font-bold text-gradient-blue">B</span>
          </div>
        </div>

        <div className="font-display text-sm tracking-[0.4em] text-slate-400 uppercase">
          Chargement
        </div>

        {/* Progress bar */}
        <div className="w-48 h-px bg-white/5 overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-1/2"
            style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }}
          />
        </div>
      </motion.div>
    </div>
  )
}
