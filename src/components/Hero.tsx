import { useMemo } from 'react'
import type { FC, ReactNode } from 'react'
import config from '../config/portfolio.config'
import { Duck } from './Duck'
import { WaveLayer } from './Waves'

const SocialIcon: FC<{ icon: string }> = ({ icon }) => {
  const icons: Record<string, ReactNode> = {
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

  const stars = useMemo(
    () =>
      Array.from({ length: 42 }, (_, i) => ({
        left: `${(i * 37 + 13) % 100}%`,
        top: `${(i * 53 + 7) % 52}%`,
        size: (i % 3) + 1,
        delay: `${(i % 7) * 0.6}s`,
      })),
    []
  )

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pond-950 via-[#082638] to-pond-700"
    >
      {/* stars */}
      <div className="absolute inset-0" aria-hidden="true">
        {stars.map((star, i) => (
          <span
            key={i}
            className="animate-twinkle absolute rounded-full bg-duck-300"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* moon */}
      <div
        className="animate-drift absolute right-[12%] top-[12%] h-24 w-24 rounded-full bg-duck-300/90 shadow-[0_0_80px_30px_rgba(255,224,138,0.25)]"
        aria-hidden="true"
      >
        <div className="absolute left-4 top-6 h-4 w-4 rounded-full bg-duck-400/60" />
        <div className="absolute left-12 top-12 h-3 w-3 rounded-full bg-duck-400/50" />
      </div>

      {/* content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-64 pt-28 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pond-900/70 border border-duck-400/30 text-duck-300 text-sm font-semibold mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for work — the pond is open
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-duck-300 via-duck-400 to-beak-500 bg-clip-text text-transparent">
            {config.name}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-duck-300/90 font-bold mb-4">{config.title}</p>
        <p className="text-slate-300/80 text-lg max-w-xl mx-auto mb-10">{config.tagline}</p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-duck-400 hover:bg-duck-300 text-pond-950 font-extrabold transition-all hover:scale-105 shadow-lg shadow-duck-500/25"
          >
            View my work
          </a>
          {resumeLink && (
            <a
              href={resumeLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 border border-duck-400/50 hover:bg-white/15 text-duck-300 hover:text-white font-bold transition-all hover:scale-105 backdrop-blur-sm"
            >
              View Resume
            </a>
          )}
          <a
            href={`mailto:${config.email}`}
            className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-slate-200 hover:text-white font-bold transition-all hover:scale-105"
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
              className="text-slate-400 hover:text-duck-300 transition-colors hover:scale-110 transform"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>

      {/* distant duck swimming across, behind the waves */}
      <div
        className="animate-swim absolute bottom-40 md:bottom-44 opacity-40"
        style={{ animationDuration: '38s' }}
        aria-hidden="true"
      >
        <Duck className="w-10" body="#10405c" beak="#0a2a3d" wing="#0d3549" eye="#051019" />
      </div>

      {/* the star of the show */}
      <div
        className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <span className="ripple bottom-1" />
        <span className="ripple bottom-1" style={{ animationDelay: '1.6s' }} />
        <div className="animate-bob">
          <Duck className="w-36 md:w-48 drop-shadow-[0_10px_25px_rgba(5,16,25,0.6)]" />
        </div>
      </div>

      {/* layered water */}
      <WaveLayer fill="#10405c" opacity={0.5} duration="19s" className="h-36 md:h-44" />
      <WaveLayer fill="#0a2a3d" opacity={0.8} duration="13s" className="h-28 md:h-32" />
      <WaveLayer fill="#07202e" duration="9s" className="h-16 md:h-20" />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-duck-300/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
