import type { FC } from 'react'
import config from '../config/portfolio.config'
import { Duck } from './Duck'

export const Footer: FC = () => {
  return (
    <footer className="bg-pond-950 border-t border-white/5">
      {/* late-night swimmers */}
      <div className="relative h-16 overflow-hidden border-b border-white/5" aria-hidden="true">
        <div className="animate-swim absolute top-3" style={{ animationDuration: '26s' }}>
          <Duck className="w-11 opacity-80" />
        </div>
        <div
          className="animate-swim absolute top-7"
          style={{ animationDuration: '34s', animationDelay: '9s' }}
        >
          <Duck className="w-7 opacity-50" body="#ffe08a" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm font-semibold">
          © {new Date().getFullYear()} {config.name}. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm font-semibold">
          Built with <span className="text-duck-400">React</span>
          {' + '}
          <span className="text-duck-400">TypeScript</span>
          {' + '}
          <span className="text-duck-400">Tailwind</span>
          {' — powered by rubber duck debugging'}
        </p>
      </div>
    </footer>
  )
}
