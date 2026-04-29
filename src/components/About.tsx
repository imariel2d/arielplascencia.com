import type { FC } from 'react'
import config from '../config/portfolio.config'

export const About: FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-violet-400 font-mono text-sm mb-3 uppercase tracking-widest">
              About me
            </p>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Crafting digital experiences with purpose
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">{config.about}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${config.email}`}
                className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors"
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
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '5+', label: 'Years of experience' },
              { value: '30+', label: 'Projects shipped' },
              { value: '15+', label: 'Happy clients' },
              { value: '100%', label: 'Passion for code' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 text-center hover:border-violet-700/50 transition-colors"
              >
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
