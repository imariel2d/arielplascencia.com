import type { FC } from 'react'
import config from '../config/portfolio.config'
import { Duck } from './Duck'
import { Reveal } from './Reveal'
import { WaveDivider } from './Waves'

export const Contact: FC = () => {
  const ducklings = [56, 44, 36, 30, 26]

  return (
    <section id="contact" className="relative py-28 bg-pond-900">
      <WaveDivider fill="#051019" flip />
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-duck-400 font-mono text-sm mb-3 uppercase tracking-widest">
            Get in touch
          </p>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Let's get our ducks in a row
          </h2>
          <p className="text-slate-300/80 text-lg max-w-xl mx-auto mb-10">
            Have a project in mind or just want to say hi? My inbox is always open — no bread
            crumbs required.
          </p>

          <a
            href={`mailto:${config.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-duck-400 to-beak-500 hover:from-duck-300 hover:to-beak-400 text-pond-950 font-extrabold text-lg transition-all hover:scale-105 shadow-lg shadow-duck-500/25"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Say hello
          </a>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 flex items-end justify-center gap-4" aria-hidden="true">
            {ducklings.map((size, i) => (
              <div
                key={i}
                className="animate-bob-soft"
                style={{ animationDelay: `${i * 0.35}s`, width: size }}
              >
                <Duck className="w-full opacity-90" flip body={i === 0 ? '#ffd34d' : '#ffe08a'} />
              </div>
            ))}
          </div>
        </Reveal>

        <div className="flex items-center justify-center gap-6 mt-12">
          {config.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-duck-300 text-sm font-bold transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
