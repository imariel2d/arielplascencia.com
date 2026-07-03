import type { FC } from 'react'
import config from '../config/portfolio.config'
import { Duck } from './Duck'
import { Reveal } from './Reveal'
import { WaveDivider } from './Waves'

export const Experience: FC = () => {
  return (
    <section id="experience" className="relative py-28 bg-pond-950">
      <WaveDivider fill="#07202e" />
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-duck-400 font-mono text-sm mb-3 uppercase tracking-widest">
              Career
            </p>
            <h2 className="text-4xl font-extrabold text-white">Flight Path</h2>
            <p className="text-slate-400 mt-3 font-semibold">Where this duck has paddled</p>
          </div>
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-duck-400/25" />

          <div className="flex flex-col gap-12">
            {config.experience.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1 z-10">
                  <Duck className="animate-bob-soft w-9" flip={index % 2 !== 0} />
                </div>

                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <Reveal delay={index * 80}>
                    <div className="bg-pond-800/40 border border-white/5 rounded-2xl p-6 hover:border-duck-400/40 hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-extrabold text-white">{exp.role}</h3>
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-duck-400 font-bold text-sm">{exp.company}</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-500 text-sm font-mono">{exp.period}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
