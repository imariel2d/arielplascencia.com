import React, { FC } from 'react'
import config from '../config/portfolio.config'

export const Experience: FC = () => {
  return (
    <section id="experience" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 font-mono text-sm mb-3 uppercase tracking-widest">
            Career
          </p>
          <h2 className="text-4xl font-bold text-white">Work Experience</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600/60 via-violet-600/20 to-transparent" />

          <div className="flex flex-col gap-12">
            {config.experience.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-violet-500 border-2 border-gray-950 -translate-x-1.5 md:-translate-x-1.5 mt-2" />

                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 hover:border-violet-700/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-violet-400 font-medium text-sm">{exp.company}</span>
                      <span className="text-gray-600">·</span>
                      <span className="text-gray-500 text-sm font-mono">{exp.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
