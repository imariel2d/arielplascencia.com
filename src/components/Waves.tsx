import type { FC } from 'react'

const WAVE_PATH =
  'M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z'

interface WaveLayerProps {
  fill: string
  opacity?: number
  duration?: string
  className?: string
}

/** One horizontally-scrolling wave band. Absolutely positioned at the bottom of its parent. */
export const WaveLayer: FC<WaveLayerProps> = ({
  fill,
  opacity = 1,
  duration = '14s',
  className = 'h-24',
}) => (
  <div className={`absolute inset-x-0 bottom-0 overflow-hidden ${className}`} aria-hidden="true">
    <div className="wave-track h-full" style={{ animationDuration: duration }}>
      {[0, 1].map((i) => (
        <svg
          key={i}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-full w-1/2 flex-shrink-0"
        >
          <path d={WAVE_PATH} fill={fill} fillOpacity={opacity} />
        </svg>
      ))}
    </div>
  </div>
)

interface WaveDividerProps {
  /** Color of the section ABOVE — the wave "spills" into the current section. */
  fill: string
  flip?: boolean
}

/** Static wave separator placed at the top of a section. */
export const WaveDivider: FC<WaveDividerProps> = ({ fill, flip = false }) => (
  <div
    className={`pointer-events-none absolute inset-x-0 top-0 h-16 md:h-20 overflow-hidden ${
      flip ? 'scale-x-[-1]' : ''
    }`}
    aria-hidden="true"
  >
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-full w-full">
      <path d={WAVE_PATH} fill={fill} transform="translate(0,120) scale(1,-1)" />
    </svg>
  </div>
)
