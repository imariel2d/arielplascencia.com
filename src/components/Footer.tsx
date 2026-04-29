import type { FC } from 'react'
import config from '../config/portfolio.config'

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} {config.name}. All rights reserved.
        </p>
        <p className="text-gray-600 text-sm">
          Built with{' '}
          <span className="text-violet-500">React</span>
          {' + '}
          <span className="text-violet-500">TypeScript</span>
          {' + '}
          <span className="text-violet-500">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
