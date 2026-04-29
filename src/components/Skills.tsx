import type { FC } from 'react'
import config from '../config/portfolio.config'

export const Skills: FC = () => {
  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 font-mono text-sm mb-3 uppercase tracking-widest">
            Tech stack
          </p>
          <h2 className="text-4xl font-bold text-white">Skills &amp; Technologies</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {config.skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2.5 rounded-full bg-gray-800/60 border border-gray-700/60 text-gray-300 font-medium hover:bg-violet-900/30 hover:border-violet-700/60 hover:text-violet-300 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
