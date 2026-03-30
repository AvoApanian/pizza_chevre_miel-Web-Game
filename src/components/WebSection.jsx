import { useState } from 'react'

const GAME_URL = 'https://avoapanian.github.io/pizza_chevre_miel-App-Game/'

export default function WebSection({ t }) {
  const [launching, setLaunching] = useState(false)

  const handlePlay = () => {
    setLaunching(true)
    setTimeout(() => setLaunching(false), 1500)
  }

  return (
    <section
      id="web"
      dir={t.dir}
      style={{
        padding: '80px 24px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Green ambient glow */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: 700,
        height: 500,
        background: 'radial-gradient(ellipse at center bottom, rgba(46,125,50,0.14) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'rgba(46,125,50,0.2)',
            border: '1.5px solid rgba(102,187,106,0.5)',
            borderRadius: 50,
            padding: '8px 20px',
            marginBottom: 20,
          }}>
            <span style={{ fontSize: 22 }}>🌐</span>
            <span style={{ fontWeight: 800, color: '#81C784', fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase' }}>
              {t.webSubtitle}
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Fredoka One, cursive',
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            background: 'linear-gradient(135deg, #81C784, #4CAF50, #2E7D32)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 14,
          }}>
            {t.webTitle}
          </h2>
        </div>

        {/* Main card */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(20,40,20,0.95), rgba(10,26,10,0.95))',
          border: '2px solid rgba(102,187,106,0.35)',
          borderRadius: 28,
          padding: '52px 40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 48,
          alignItems: 'center',
        }}>

          {/* Left side */}
          <div>
            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.8,
              marginBottom: 28,
            }}>
              {t.webDesc}
            </p>

            {/* Feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
              {t.webFeatures.map((f, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  background: 'rgba(76,175,80,0.1)',
                  border: '1px solid rgba(76,175,80,0.25)',
                  borderRadius: 12,
                  padding: '10px 16px',
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#A5D6A7',
                  animation: `fadeInUp 0.5s ease both`,
                  animationDelay: `${i * 0.1}s`,
                }}>
                  {f}
                </div>
              ))}
            </div>

            {/* Play button */}
            <a
              href={GAME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handlePlay}
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                background: launching
                  ? 'linear-gradient(135deg, #1B5E20, #2E7D32)'
                  : 'linear-gradient(135deg, #2E7D32, #66BB6A)',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 900,
                fontSize: 20,
                padding: '20px 48px',
                borderRadius: 60,
                boxShadow: '0 10px 35px rgba(46,125,50,0.55)',
                transition: 'all 0.3s ease',
                fontFamily: 'Nunito, sans-serif',
                width: '100%',
                maxWidth: 320,
                textAlign: 'center',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)'
                e.currentTarget.style.boxShadow = '0 18px 50px rgba(46,125,50,0.75)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = '0 10px 35px rgba(46,125,50,0.55)'
              }}
            >
              <span style={{ fontSize: 28 }}>
                {launching ? '🚀' : '🎮'}
              </span>
              <span>{launching ? 'Lancement...' : t.webBtn}</span>
              <span style={{ fontSize: 12, fontWeight: 600, opacity: 0.85 }}>
                {t.webBtnSub}
              </span>
            </a>
          </div>

          {/* Right side: browser mockup */}
          <BrowserMockup />
        </div>
      </div>
    </section>
  )
}

// ---- Mini browser mockup ----
function BrowserMockup() {
  return (
    <div style={{
      background: 'rgba(0,0,0,0.5)',
      border: '2px solid rgba(102,187,106,0.3)',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
    }}>
      {/* Browser chrome */}
      <div style={{
        background: 'rgba(30,30,30,0.95)',
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#FF5F57','#FFBD2E','#28C840'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }}/>
          ))}
        </div>
        <div style={{
          flex: 1,
          background: 'rgba(255,255,255,0.08)',
          borderRadius: 6,
          padding: '4px 10px',
          fontSize: 11,
          color: 'rgba(255,255,255,0.4)',
          fontFamily: 'monospace',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          🔒 avoapanian.github.io/pizza_chevre_miel-App-Game/
        </div>
      </div>

      {/* Game preview (illustrated) */}
      <div style={{
        background: 'linear-gradient(145deg, #1A0800, #3D1500)',
        padding: '32px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        minHeight: 200,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Stars bg */}
        {[...Array(20)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            borderRadius: '50%',
            background: '#fff',
            opacity: 0.15 + (i % 5) * 0.06,
            top: `${10 + (i * 4.3) % 80}%`,
            left: `${5 + (i * 5.1) % 90}%`,
          }}/>
        ))}

        <div style={{ fontSize: 56, filter: 'drop-shadow(0 4px 12px rgba(255,140,0,0.6))' }}>🍕</div>
        <div style={{
          fontFamily: 'Fredoka One, cursive',
          fontSize: 18,
          background: 'linear-gradient(90deg, #FFD700, #FF8C00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Pizza Chèvre & Miel
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
          🐐 · 🌾 · 🍯 · 🌿
        </div>
        <div style={{
          marginTop: 8,
          background: 'rgba(255,140,0,0.2)',
          border: '1.5px solid rgba(255,140,0,0.5)',
          borderRadius: 50,
          padding: '6px 20px',
          fontSize: 13,
          fontWeight: 800,
          color: '#FFB300',
        }}>
          ▶ JOUER
        </div>
      </div>
    </div>
  )
}
