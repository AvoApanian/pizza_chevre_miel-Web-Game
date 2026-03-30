import { useState, useEffect } from 'react'
import LanguageSelector from './LanguageSelector.jsx'

export default function Navbar({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      dir={t.dir}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 999,
        padding: '14px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled
          ? 'linear-gradient(135deg, rgba(26,8,0,0.96) 0%, rgba(42,12,0,0.96) 100%)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,179,0,0.2)' : '1px solid transparent',
        transition: 'all 0.4s ease',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      {/* Logo */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        animation: 'fadeInDown 0.6s ease',
      }}>
        <span style={{ fontSize: 32, animation: 'floatY 3s ease-in-out infinite' }}>🍕</span>
        <div>
          <div style={{
            fontFamily: 'Fredoka One, cursive',
            fontSize: 18,
            background: 'linear-gradient(90deg, #FFD700, #FF8C00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.1,
          }}>
            Pizza Chèvre & Miel
          </div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: 1 }}>
            🐐 • 🍯 • 🌿
          </div>
        </div>
      </div>

      {/* Nav links — hidden on mobile */}
      <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center',
      }}>
        <a href="#download"
          style={{
            color: 'rgba(255,255,255,0.8)',
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 700,
            padding: '6px 14px',
            borderRadius: 50,
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,179,0,0.15)'; e.currentTarget.style.color = '#FFB300' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
        >
          📥 {t.dlBtn}
        </a>
        <a href="#web"
          style={{
            color: 'rgba(255,255,255,0.8)',
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 700,
            padding: '6px 14px',
            borderRadius: 50,
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(102,187,106,0.15)'; e.currentTarget.style.color = '#66BB6A' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
        >
          🌐 {t.webBtn}
        </a>
      </div>

      <LanguageSelector lang={lang} setLang={setLang} />
    </nav>
  )
}
