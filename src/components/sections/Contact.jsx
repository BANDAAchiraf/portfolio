import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Send, CheckCircle, AlertCircle, MapPin, Clock } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import profile from '../../../data/profile.json'

export default function Contact() {
  const { ref, isVisible } = useScrollReveal()
  const formRef = useRef(null)

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // EmailJS integration — replace service/template/public key in profile.json
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(
        profile.emailjs.serviceId,
        profile.emailjs.templateId,
        formRef.current,
        profile.emailjs.publicKey
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      // Fallback: open mailto
      const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`De: ${form.name} <${form.email}>\n\n${form.message}`)}`
      window.location.href = mailto
      setStatus('success')
    }

    setTimeout(() => setStatus(null), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      color: '#00d4ff',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
      color: '#b94dff',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Discutons sur WhatsApp',
      href: `https://wa.me/${profile.whatsapp}`,
      color: '#10b981',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: profile.location,
      href: null,
      color: '#f59e0b',
    },
  ]

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-neon-blue tracking-widest">// 05</span>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/40 to-transparent" />
          </div>
          <h2 className="section-title text-gradient-blue">Contact</h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            Un projet en tête ? Une collaboration ? N'hésitez pas à me contacter.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <div
                key={label}
                className="card-glass p-4 flex items-start gap-4 group transition-all duration-300"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0 transition-all duration-200"
                  style={{ border: `1px solid ${color}30`, backgroundColor: `${color}10` }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-600 uppercase tracking-wider mb-1">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-slate-300 text-sm hover:text-white transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-300 text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability */}
            <div className="card-glass p-4 flex items-center gap-3 border-neon-blue/20 mt-6">
              <Clock size={16} className="text-neon-blue shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Disponible pour missions</p>
                <p className="text-slate-500 text-xs mt-0.5 font-mono">Réponse sous 24h</p>
              </div>
              <span className="ml-auto relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-blue" />
              </span>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="card-glass p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-xs text-slate-500 tracking-wider uppercase mb-2">
                    Nom <span className="text-neon-blue">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full bg-midnight-900/50 border border-white/8 px-4 py-3 text-white text-sm
                               placeholder-slate-600 focus:outline-none focus:border-neon-blue/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-slate-500 tracking-wider uppercase mb-2">
                    Email <span className="text-neon-blue">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full bg-midnight-900/50 border border-white/8 px-4 py-3 text-white text-sm
                               placeholder-slate-600 focus:outline-none focus:border-neon-blue/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-500 tracking-wider uppercase mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Objet de votre message"
                  className="w-full bg-midnight-900/50 border border-white/8 px-4 py-3 text-white text-sm
                             placeholder-slate-600 focus:outline-none focus:border-neon-blue/50 transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-500 tracking-wider uppercase mb-2">
                  Message <span className="text-neon-blue">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="w-full bg-midnight-900/50 border border-white/8 px-4 py-3 text-white text-sm
                             placeholder-slate-600 focus:outline-none focus:border-neon-blue/50 transition-colors resize-none"
                />
              </div>

              {/* Status feedback */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 px-4 py-3 text-sm"
                >
                  <CheckCircle size={16} />
                  Message envoyé avec succès !
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 px-4 py-3 text-sm"
                >
                  <AlertCircle size={16} />
                  Erreur d'envoi. Veuillez réessayer.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary justify-center inline-flex items-center gap-2 py-3.5"
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border border-neon-blue border-t-transparent rounded-full"
                    />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
