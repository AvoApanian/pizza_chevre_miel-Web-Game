export default function Footer({ t }) {
  return (
    <footer
      dir={t.dir}
      style={{
        borderTop: '1px solid rgba(255,179,0,0.15)',
        padding: '40px 24px 28px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pizza */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        fontSize: 200,
        opacity: 0.015,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        🍕
      </div>

      <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>

        {/* Logo */}
        <div style={{
          fontFamily: 'Fredoka One, cursive',
          fontSize: 22,
          background: 'linear-gradient(90deg, #FFD700, #FF8C00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: 6,
        }}>
          🍕 Pizza Chèvre & Miel
        </div>

        {/* Emojis row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 12,
          fontSize: 22,
          margin: '14px 0',
          opacity: 0.7,
        }}>
          {['🐐', '🌾', '🍯', '🌿', '🌰', '🍇', '🧄'].map((e, i) => (
            <span
              key={i}
              style={{
                animation: `floatY ${2 + i * 0.3}s ease-in-out ${i * 0.15}s infinite`,
                display: 'inline-block',
              }}
            >
              {e}
            </span>
          ))}
        </div>

        <p style={{
          fontSize: 14,
          color: 'rgba(255,255,255,0.45)',
          marginBottom: 8,
          letterSpacing: 0.5,
        }}>
          {t.footerMade}
        </p>

        <p style={{
          fontSize: 12,
          color: 'rgba(255,255,255,0.25)',
        }}>
          {t.footerRights}
        </p>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            marginTop: 20,
            background: 'rgba(255,179,0,0.12)',
            border: '1px solid rgba(255,179,0,0.3)',
            borderRadius: 50,
            padding: '8px 20px',
            color: '#FFB300',
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 700,
            fontFamily: 'Nunito, sans-serif',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,179,0,0.22)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,179,0,0.12)'}
        >
          ↑ Retour en haut
        </button>
      </div>
    </footer>
  )
}
