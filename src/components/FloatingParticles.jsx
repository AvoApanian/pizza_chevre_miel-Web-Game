import { useMemo } from 'react'

const EMOJIS = ['🍕', '🍯', '🐐', '🌿', '🌾', '🌰', '🧄', '🍇', '💧', '⭐', '🔥', '🧂']

export default function FloatingParticles({ count = 18 }) {
  const particles = useMemo(() => (
    Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: EMOJIS[i % EMOJIS.length],
      left: `${5 + (i * 5.3) % 90}%`,
      size: 16 + (i % 4) * 6,
      duration: 12 + (i % 7) * 3,
      delay: -(i * 1.8),
      opacity: 0.08 + (i % 5) * 0.03,
    }))
  ), [count])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
    }}>
      {particles.map(p => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            bottom: '-60px',
            fontSize: p.size,
            opacity: p.opacity,
            animation: `particleFloat ${p.duration}s ${p.delay}s linear infinite`,
            userSelect: 'none',
            filter: 'blur(0.5px)',
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  )
}
