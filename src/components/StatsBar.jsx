import { useState, useEffect, useRef } from 'react'

function useCountUp(target, duration = 1800) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const step = target / (duration / 16)
          const timer = setInterval(() => {
            start += step
            if (start >= target) { setValue(target); clearInterval(timer) }
            else setValue(Math.floor(start))
          }, 16)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return [value, ref]
}

function StatItem({ value, suffix, label, emoji }) {
  const [count, ref] = useCountUp(value)

  return (
    <div ref={ref} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      padding: '24px 32px',
      flex: 1,
      minWidth: 140,
    }}>
      <span style={{ fontSize: 32, marginBottom: 4 }}>{emoji}</span>
      <span style={{
        fontFamily: 'Fredoka One, cursive',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        background: 'linear-gradient(135deg, #FFD700, #FF8C00)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        lineHeight: 1,
      }}>
        {count.toLocaleString()}{suffix}
      </span>
      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', fontWeight: 700, letterSpacing: 1 }}>
        {label}
      </span>
    </div>
  )
}

export default function StatsBar({ t }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(255,179,0,0.08), rgba(255,140,0,0.05))',
      border: '1px solid rgba(255,179,0,0.2)',
      borderLeft: 'none',
      borderRight: 'none',
      margin: '0',
      padding: '8px 24px',
    }}>
      <div style={{
        maxWidth: 700,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 0,
        position: 'relative',
      }}>
        <StatItem value={1200} suffix="+" label={t.statsPlayers} emoji="👥" />

        <div style={{
          width: 1,
          background: 'rgba(255,255,255,0.1)',
          margin: '24px 0',
          alignSelf: 'stretch',
        }}/>

        <StatItem value={48} suffix="/50" label={t.statsRating} emoji="⭐" />

        <div style={{
          width: 1,
          background: 'rgba(255,255,255,0.1)',
          margin: '24px 0',
          alignSelf: 'stretch',
        }}/>

        <StatItem value={100} suffix="%" label={t.statsFree} emoji="🎁" />
      </div>
    </div>
  )
}
