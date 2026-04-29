import type { FC } from 'react'
import config from '../config/portfolio.config'

export const Contact: FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-violet-400 font-mono text-sm mb-3 uppercase tracking-widest">
          Get in touch
        </p>
        <h2 className="text-4xl font-bold text-white mb-4">Let's work together</h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>

        <a
          href={`mailto:${config.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-violet-900/40"
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

        <div className="flex items-center justify-center gap-6 mt-12">
          {config.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
