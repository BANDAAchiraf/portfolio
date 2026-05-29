import { Github, Linkedin, Twitter, Heart, Terminal } from 'lucide-react'
import profile from '../../../data/profile.json'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/5 bg-midnight-900/50 backdrop-blur-sm py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-neon-blue" />
          <span className="font-display text-sm tracking-widest text-white">
            BANDA<span className="text-neon-blue">.</span>DEV
          </span>
        </div>

        <p className="text-slate-500 text-sm font-mono text-center">
          © {year} BANDA Achirafou — Crafted with{' '}
          <Heart size={12} className="inline text-neon-purple mx-1" />
          in Bénin 🇧🇯
        </p>

        <div className="flex items-center gap-4">
          {[
            { href: profile.social.github, icon: Github },
            { href: profile.social.linkedin, icon: Linkedin },
            { href: profile.social.twitter, icon: Twitter },
          ].map(({ href, icon: Icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-white/10 hover:border-neon-blue flex items-center justify-center text-slate-400 hover:text-neon-blue transition-all duration-200"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
