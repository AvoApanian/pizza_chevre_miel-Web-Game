import { useState } from 'react'

export default function DownloadSection({ t }) {
  const [downloading, setDownloading] = useState(false)
  const [done, setDone] = useState(false)

  const handleDownload = () => {
    setDownloading(true)
    setDone(false)
    setTimeout(() => {
      setDownloading(false)
      setDone(true)
      setTimeout(() => setDone(false), 4000)
    }, 1200)
  }

  return (
    <section
      id="download"
      dir={t.dir}
      style={{
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section background blob */}
      <div style={{
        position: 'absolute',
        top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: 900,
        height: '100%',
        background: 'radial-gradient(ellipse at center top, rgba(255,140,0,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }}/>

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'rgba(255,140,0,0.15)',
            border: '1.5px solid rgba(255,140,0,0.4)',
            borderRadius: 50,
            padding: '8px 20px',
            marginBottom: 20,
          }}>
            <span style={{ fontSize: 22 }}>📥</span>
            <span style={{ fontWeight: 800, color: '#FFB300', fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase' }}>
              {t.dlSubtitle}
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Fredoka One, cursive',
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            background: 'linear-gradient(135deg, #FFD700, #FF8C00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 14,
          }}>
            {t.dlTitle}
          </h2>
        </div>

        {/* Main download card */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(42,20,0,0.95), rgba(26,8,0,0.95))',
          border: '2px solid rgba(255,179,0,0.35)',
          borderRadius: 28,
          padding: '44px 40px',
          marginBottom: 40,
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
          animation: 'borderGlow 3s ease-in-out infinite',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}>
          {/* Android badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 14,
            color: 'rgba(255,255,255,0.6)',
          }}>
            <span style={{ fontSize: 32 }}>🤖</span>
            <span style={{ fontWeight: 700 }}>Android 8.0+</span>
            <span>•</span>
            <span>~30 MB</span>
            <span>•</span>
            <span style={{ color: '#66BB6A', fontWeight: 700 }}>✓ Gratuit</span>
          </div>

          {/* Download button */}
          <a
            href="/apk/app-release.apk"
            download="PizzaChevreEtMiel.apk"
            onClick={handleDownload}
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              background: done
                ? 'linear-gradient(135deg, #2E7D32, #66BB6A)'
                : 'linear-gradient(135deg, #FF6F00 0%, #FFB300 100%)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 900,
              fontSize: 20,
              padding: '20px 56px',
              borderRadius: 60,
              boxShadow: done
                ? '0 10px 35px rgba(46,125,50,0.6)'
                : '0 10px 40px rgba(255,140,0,0.6)',
              transition: 'all 0.35s ease',
              cursor: 'pointer',
              animation: downloading ? 'none' : 'pulse 2.5s ease-in-out infinite',
              fontFamily: 'Nunito, sans-serif',
              minWidth: 280,
              textAlign: 'center',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)'
              e.currentTarget.style.boxShadow = done
                ? '0 16px 50px rgba(46,125,50,0.8)'
                : '0 16px 55px rgba(255,140,0,0.8)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = ''
            }}
          >
            <span style={{ fontSize: 28 }}>
              {downloading ? '⏳' : done ? '✅' : '📥'}
            </span>
            <span>
              {downloading ? 'Téléchargement...' : done ? 'Téléchargé !' : t.dlBtn}
            </span>
            <span style={{ fontSize: 12, fontWeight: 600, opacity: 0.85 }}>
              {t.dlBtnSub}
            </span>
          </a>

          {/* Warning note */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255,152,0,0.1)',
            border: '1px solid rgba(255,152,0,0.3)',
            borderRadius: 12,
            padding: '10px 18px',
            fontSize: 13,
            color: '#FFB74D',
            maxWidth: 440,
            textAlign: 'center',
          }}>
            {t.dlNote}
          </div>
        </div>

        {/* Instructions */}
        <div>
          <h3 style={{
            textAlign: 'center',
            fontFamily: 'Fredoka One, cursive',
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            color: '#FFE082',
            marginBottom: 32,
          }}>
            {t.instrTitle}
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 20,
          }}>
            {t.instrSteps.map((step, i) => (
              <StepCard key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? 'linear-gradient(145deg, rgba(60,28,0,0.95), rgba(42,20,0,0.95))'
          : 'linear-gradient(145deg, rgba(42,20,0,0.8), rgba(26,8,0,0.8))',
        border: `2px solid ${hovered ? 'rgba(255,179,0,0.6)' : 'rgba(255,179,0,0.2)'}`,
        borderRadius: 20,
        padding: '28px 22px',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.2)',
        animation: `fadeInUp 0.6s ease both`,
        animationDelay: `${index * 0.12}s`,
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Step number badge */}
      <div style={{
        position: 'absolute',
        top: 14, right: 14,
        width: 26, height: 26,
        background: 'rgba(255,179,0,0.2)',
        border: '1.5px solid rgba(255,179,0,0.4)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 11,
        fontWeight: 900,
        color: '#FFB300',
      }}>
        {index + 1}
      </div>

      {/* Icon */}
      <div style={{
        fontSize: 48,
        marginBottom: 16,
        display: 'block',
        animation: hovered ? 'wiggle 0.5s ease' : 'none',
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
      }}>
        {step.icon}
      </div>

      <h4 style={{
        fontWeight: 900,
        fontSize: 15,
        color: '#FFE082',
        marginBottom: 10,
        lineHeight: 1.3,
      }}>
        {step.title}
      </h4>

      <p style={{
        fontSize: 13,
        color: 'rgba(255,255,255,0.65)',
        lineHeight: 1.65,
      }}>
        {step.desc}
      </p>
    </div>
  )
}
