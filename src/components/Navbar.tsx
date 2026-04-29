import { useEffect, useState } from 'react'
import type { FC } from 'react'
import config from '../config/portfolio.config'

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
        scrolled ? 'bg-gray-950/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-white tracking-tight hover:text-violet-400 transition-colors">
          {config.name.split(' ')[0]}
          <span className="text-violet-400">.</span>
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="text-sm text-gray-400 capitalize hover:text-white transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${config.email}`}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
        >
          Hire me
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors"
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
        <div className="md:hidden bg-gray-950/95 backdrop-blur-md border-t border-gray-800 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 capitalize hover:text-white transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${config.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
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
