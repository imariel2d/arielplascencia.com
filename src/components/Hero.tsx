import React, { FC } from 'react'
import config from '../config/portfolio.config'

const SocialIcon: FC<{ icon: string }> = ({ icon }) => {
  const icons: Record<string, React.ReactNode> = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    resume: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 18h10M7 14h10M7 10h4m4-8H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V8l-4-4z"
        />
      </svg>
    ),
  }
  return <>{icons[icon] ?? null}</>
}

export const Hero: FC = () => {
  const resumeLink = config.socials.find((social) => social.label.toLowerCase() === 'resume')

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/30 via-gray-950 to-gray-950" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 blur opacity-75" />
            <img
              src={config.avatarUrl}
              alt={config.name}
              className="relative w-28 h-28 rounded-full object-cover border-2 border-gray-800"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/60 border border-violet-700/40 text-violet-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for work
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            {config.name}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 font-medium mb-4">{config.title}</p>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">{config.tagline}</p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all hover:scale-105"
          >
            View my work
          </a>
          {resumeLink && (
            <a
              href={resumeLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 border border-violet-500/60 hover:bg-white/15 text-violet-200 hover:text-white font-medium transition-all hover:scale-105"
            >
              View Resume
            </a>
          )}
          <a
            href={`mailto:${config.email}`}
            className="px-6 py-3 rounded-full border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium transition-all hover:scale-105"
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          {config.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
