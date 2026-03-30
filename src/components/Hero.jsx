import PizzaIllustration from './PizzaIllustration.jsx'

export default function Hero({ t }) {
  const tags = [t.heroTag1, t.heroTag2, t.heroTag3, t.heroTag4]

  return (
    <section
      dir={t.dir}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background radial glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,140,0,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>

      {/* Pizza illustration */}
      <div style={{ animation: 'scaleIn 0.8s ease both', animationDelay: '0.1s' }}>
        <PizzaIllustration size={240} />
      </div>

      {/* Title */}
      <h1 style={{
        fontFamily: 'Fredoka One, cursive',
        fontSize: 'clamp(2.4rem, 8vw, 5rem)',
        lineHeight: 1.05,
        marginTop: 28,
        background: 'linear-gradient(135deg, #FFD700 0%, #FF8C00 50%, #FFD700 100%)',
        backgroundSize: '200% 200%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'fadeInUp 0.7s ease both, gradientShift 4s ease infinite',
        animationDelay: '0.25s',
        textShadow: 'none',
        filter: 'drop-shadow(0 4px 12px rgba(255,140,0,0.4))',
      }}>
        {t.heroTitle}
      </h1>

      {/* Subtitle */}
      <p style={{
        fontSize: 'clamp(1rem, 3vw, 1.3rem)',
        color: '#FFE082',
        fontWeight: 700,
        marginTop: 12,
        animation: 'fadeInUp 0.7s ease both',
        animationDelay: '0.4s',
      }}>
        {t.heroSubtitle}
      </p>

      {/* Description */}
      <p style={{
        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
        color: 'rgba(255,255,255,0.72)',
        maxWidth: 560,
        marginTop: 16,
        lineHeight: 1.7,
        animation: 'fadeInUp 0.7s ease both',
        animationDelay: '0.55s',
      }}>
        {t.heroDesc}
      </p>

      {/* Tags */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center',
        marginTop: 28,
        animation: 'fadeInUp 0.7s ease both',
        animationDelay: '0.7s',
      }}>
        {tags.map((tag, i) => (
          <span
            key={i}
            style={{
              background: 'rgba(255,179,0,0.14)',
              border: '1.5px solid rgba(255,179,0,0.4)',
              borderRadius: 50,
              padding: '8px 18px',
              fontSize: 14,
              fontWeight: 800,
              color: '#FFE082',
              backdropFilter: 'blur(8px)',
              animation: `fadeInUp 0.6s ease both`,
              animationDelay: `${0.8 + i * 0.1}s`,
              transition: 'all 0.2s',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA buttons row */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 14,
        justifyContent: 'center',
        marginTop: 40,
        animation: 'fadeInUp 0.7s ease both',
        animationDelay: '1s',
      }}>
        <a
          href="#download"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'linear-gradient(135deg, #FF6F00, #FFB300)',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 900,
            fontSize: 16,
            padding: '14px 32px',
            borderRadius: 50,
            boxShadow: '0 8px 30px rgba(255,140,0,0.5)',
            animation: 'pulse 2.5s ease-in-out infinite',
            transition: 'transform 0.2s, box-shadow 0.2s',
            fontFamily: 'Nunito, sans-serif',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)'
            e.currentTarget.style.boxShadow = '0 14px 40px rgba(255,140,0,0.7)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = ''
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,140,0,0.5)'
          }}
        >
          <span style={{ fontSize: 20 }}>📥</span> {t.dlBtn}
        </a>

        <a
          href="#web"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(46,125,50,0.25)',
            border: '2px solid rgba(102,187,106,0.7)',
            color: '#A5D6A7',
            textDecoration: 'none',
            fontWeight: 900,
            fontSize: 16,
            padding: '14px 32px',
            borderRadius: 50,
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s',
            fontFamily: 'Nunito, sans-serif',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(46,125,50,0.45)'
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(46,125,50,0.4)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(46,125,50,0.25)'
            e.currentTarget.style.transform = ''
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <span style={{ fontSize: 20 }}>🌐</span> {t.webBtn}
        </a>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        opacity: 0.45,
        animation: 'floatY 2s ease-in-out infinite',
      }}>
        <span style={{ fontSize: 12, letterSpacing: 2 }}>↓</span>
        <span style={{ fontSize: 11 }}>scroll</span>
      </div>
    </section>
  )
}
