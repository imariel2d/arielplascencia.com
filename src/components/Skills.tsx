import type { FC } from 'react'
import config from '../config/portfolio.config'
import { Duck } from './Duck'
import { Reveal } from './Reveal'
import { WaveDivider } from './Waves'

export const Skills: FC = () => {
  return (
    <section id="skills" className="relative py-28 bg-pond-950">
      <WaveDivider fill="#07202e" />
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-duck-400 font-mono text-sm mb-3 uppercase tracking-widest">
              Tech stack
            </p>
            <h2 className="text-4xl font-extrabold text-white">Skills &amp; Technologies</h2>
            <p className="text-slate-400 mt-3 font-semibold">My flock of favorite tools</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-wrap justify-center gap-3">
            {config.skills.map((skill) => (
              <span
                key={skill}
                className="hover-wiggle inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pond-800/60 border border-white/10 text-slate-200 font-bold hover:bg-duck-400/10 hover:border-duck-400/50 hover:text-duck-300 transition-all cursor-default"
              >
                <Duck className="w-5" />
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
