import type { FC } from 'react'
import config from '../config/portfolio.config'
import { Duck } from './Duck'
import { Reveal } from './Reveal'

export const About: FC = () => {
  return (
    <section id="about" className="relative py-24 bg-pond-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-duck-400 font-mono text-sm mb-3 uppercase tracking-widest">
              About me
            </p>
            <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
              Crafting digital experiences that make a splash
            </h2>
            <p className="text-slate-300/80 text-lg leading-relaxed mb-8">{config.about}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${config.email}`}
                className="inline-flex items-center gap-2 text-duck-400 hover:text-duck-300 font-bold transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {config.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <Duck
              className="animate-bob-soft absolute -top-14 right-2 w-16 opacity-90"
              flip
            />
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '5+', label: 'Years of experience' },
                { value: '30+', label: 'Projects shipped' },
                { value: '15+', label: 'Happy clients' },
                { value: '1', label: 'Trusty rubber duck' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-pond-800/50 border border-white/5 rounded-2xl p-6 text-center hover:border-duck-400/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <p className="text-3xl font-extrabold text-duck-300 mb-1">{stat.value}</p>
                  <p className="text-slate-400 text-sm font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
