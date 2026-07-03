import type { FC } from 'react'

interface DuckProps {
  className?: string
  body?: string
  beak?: string
  wing?: string
  eye?: string
  flip?: boolean
}

/** A rubber duck, facing right by default. Pass `flip` to face left. */
export const Duck: FC<DuckProps> = ({
  className = '',
  body = '#ffd34d',
  beak = '#ff9f1c',
  wing = '#f0b429',
  eye = '#12303f',
  flip = false,
}) => (
  <svg viewBox="0 0 125 100" className={className} aria-hidden="true">
    <g transform={flip ? 'scale(-1,1) translate(-125,0)' : undefined}>
      <path d="M18 64 Q2 52 9 36 Q24 44 30 56 Z" fill={body} />
      <ellipse cx="60" cy="70" rx="42" ry="26" fill={body} />
      <circle cx="84" cy="32" r="22" fill={body} />
      <path d="M104 26 Q122 28 120 35 Q116 43 102 40 Z" fill={beak} />
      <circle cx="90" cy="26" r="3.6" fill={eye} />
      <circle cx="91.4" cy="24.6" r="1.3" fill="#fff" />
      <path d="M42 62 Q62 52 72 66 Q64 84 44 80 Q34 72 42 62 Z" fill={wing} />
    </g>
  </svg>
)
