import { useState, useRef, useEffect } from 'react'
import { LANG_ORDER, translations } from '../i18n/translations.js'

export default function LanguageSelector({ lang, setLang }) {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  // Ferme au clic extérieur
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const current = translations[lang]

  return (
    <div ref={ref} style={{ position: 'relative', zIndex: 1000 }}>
      {/* Bouton principal */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Select language"
        aria-expanded={open}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(255,255,255,0.12)',
          border: '1.5px solid rgba(255,179,0,0.5)',
          borderRadius: 50,
          padding: '8px 16px',
          color: '#fff',
          cursor: 'pointer',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 700,
          fontSize: 14,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(255,179,0,0.2)'
          e.currentTarget.style.borderColor = 'rgba(255,179,0,0.9)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
          e.currentTarget.style.borderColor = 'rgba(255,179,0,0.5)'
        }}
      >
        <span style={{ fontSize: 20 }}>{current.langFlag}</span>
        <span>{current.langName}</span>
        <span style={{
          display: 'inline-block',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.25s',
          fontSize: 12,
          opacity: 0.7,
        }}>▼</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          right: 0,
          background: 'linear-gradient(145deg, #2D1600, #1A0A00)',
          border: '1.5px solid rgba(255,179,0,0.4)',
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
          animation: 'fadeInDown 0.2s ease',
          minWidth: 180,
        }}>
          {LANG_ORDER.map(code => {
            const t = translations[code]
            const isActive = code === lang
            return (
              <button
                key={code}
                onClick={() => { setLang(code); setOpen(false) }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  padding: '11px 18px',
                  background: isActive ? 'rgba(255,179,0,0.18)' : 'transparent',
                  border: 'none',
                  borderLeft: isActive ? '3px solid #FFB300' : '3px solid transparent',
                  color: isActive ? '#FFB300' : '#fff',
                  cursor: 'pointer',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: isActive ? 800 : 600,
                  fontSize: 14,
                  textAlign: 'left',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
              >
                <span style={{ fontSize: 20 }}>{t.langFlag}</span>
                <span>{t.langName}</span>
                {isActive && <span style={{ marginLeft: 'auto', fontSize: 12 }}>✓</span>}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
