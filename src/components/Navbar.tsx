import { useEffect, useState } from 'react'
import type { FC } from 'react'
import config from '../config/portfolio.config'
import { Duck } from './Duck'

export const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['about', 'skills', 'projects', 'experience', 'contact']

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-pond-950/90 backdrop-blur-md shadow-lg shadow-pond-950/50' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="group flex items-center gap-2 text-xl font-extrabold text-white tracking-tight hover:text-duck-300 transition-colors"
        >
          <Duck className="w-8 transition-transform group-hover:-rotate-12" />
          {config.name.split(' ')[0]}
          <span className="-ml-2 text-duck-400">.</span>
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="text-sm font-semibold text-slate-400 capitalize hover:text-duck-300 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${config.email}`}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-duck-400 hover:bg-duck-300 text-pond-950 text-sm font-extrabold transition-colors"
        >
          Hire me
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-pond-950/95 backdrop-blur-md border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-400 font-semibold capitalize hover:text-duck-300 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${config.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-duck-400 hover:bg-duck-300 text-pond-950 text-sm font-extrabold transition-colors"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
