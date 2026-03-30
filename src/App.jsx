import { useState, useEffect } from 'react'
import { translations } from './i18n/translations.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import DownloadSection from './components/DownloadSection.jsx'
import WebSection from './components/WebSection.jsx'
import Footer from './components/Footer.jsx'
import FloatingParticles from './components/FloatingParticles.jsx'

// Detect browser language
function detectLang() {
  const nav = navigator.language || 'fr'
  const code = nav.slice(0, 2).toLowerCase()
  const map = { fr: 'fr', en: 'en', hy: 'hy', pt: 'pt', es: 'es', ar: 'ar', ru: 'ru' }
  return map[code] || 'fr'
}

// --- COMPOSANT : FeatureShowcase (Grid Responsive) ---
const FeatureCard = ({ emoji, title, description }) => (
  <div style={{ display: 'flex', alignItems: 'start', gap: '16px', padding: '20px' }}>
    <span style={{ 
      fontSize: '28px', 
      background: 'rgba(255,140,0,0.1)', 
      padding: '10px', 
      borderRadius: '12px', 
      border: '1px solid rgba(255,140,0,0.2)' 
    }}>{emoji}</span>
    <div>
      <h3 style={{ fontFamily: 'Fredoka One, cursive', fontSize: '17px', color: '#FFD700', margin: 0 }}>{title}</h3>
      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: '1.4' }}>{description}</p>
    </div>
  </div>
);

const FeatureShowcase = () => {
  const currentLang = document.documentElement.lang || 'fr';
  const features = {
    fr: [
      { emoji: '🚀', title: 'Performance', description: 'Expérience fluide sur mobile et PC.' },
      { emoji: '🛡️', title: 'Sécurité', description: 'Respect total de votre vie privée.' },
      { emoji: '✨', title: 'Design', description: 'Interface moderne et intuitive.' }
    ],
    en: [
      { emoji: '🚀', title: 'Performance', description: 'Smooth experience on mobile and PC.' },
      { emoji: '🛡️', title: 'Security', description: 'Total respect for your privacy.' },
      { emoji: '✨', title: 'Design', description: 'Modern and intuitive interface.' }
    ]
  };
  const data = features[currentLang] || features['en'];
  
  return (
    <div style={{ margin: '40px auto', maxWidth: '1100px', padding: '0 20px' }}>
      <div style={{
        background: 'rgba(13, 5, 0, 0.4)', backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,179,0,0.12)', borderRadius: '20px',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px', padding: '10px'
      }}>
        {data.map((f, i) => <FeatureCard key={i} {...f} />)}
      </div>
    </div>
  );
};

// --- COMPOSANT : Mobile Menu Elements ---
const MobilePizzaMenu = () => (
  <div style={{
    background: 'rgba(255, 140, 0, 0.05)', border: '1px solid rgba(255, 140, 0, 0.2)',
    borderRadius: '16px', padding: '20px', margin: '0 15px 20px', textAlign: 'center'
  }}>
    <h2 style={{ fontFamily: 'Fredoka One, cursive', color: '#fff', fontSize: '18px', margin: '0 0 8px' }}>Pizza Chèvre & Miel 🍕</h2>
    <p style={{ fontSize: '20px', margin: '0 0 15px' }}>🐐 • 🍯 • 🌿</p>
    <a href="#" style={{
      display: 'block', padding: '12px', background: 'linear-gradient(135deg, #FFD700, #FF8C00)',
      color: '#0D0500', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', marginBottom: '10px'
    }}>📥 Télécharger l'APK</a>
    <a href="#" style={{ color: '#FF8C00', fontSize: '12px', textDecoration: 'none' }}>🌐 Jouer maintenant</a>
  </div>
);

const LanguageSelectorMobile = ({ currentLang, setLang, setIsOpen }) => {
  const langs = [
    { code: 'fr', flag: '🇫🇷' }, { code: 'en', flag: '🇺🇸' }, { code: 'es', flag: '🇪🇸' },
    { code: 'pt', flag: '🇵🇹' }, { code: 'ru', flag: '🇷🇺' }, { code: 'ar', flag: '🇸🇦' }
  ];

  return (
    <div style={{ padding: '0 20px 25px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {langs.map(l => (
        <button key={l.code} onClick={() => { setLang(l.code); setIsOpen(false); }} style={{
          background: currentLang === l.code ? 'rgba(255, 140, 0, 0.2)' : 'rgba(255,255,255,0.05)',
          border: currentLang === l.code ? '1px solid #FF8C00' : '1px solid rgba(255,255,255,0.1)',
          borderRadius: '8px', padding: '8px', color: '#fff', cursor: 'pointer', fontSize: '14px'
        }}>
          {l.flag} {l.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('pcm_lang') || detectLang());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('pcm_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;
  }, [lang]);

  const t = translations[lang];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #0D0500 0%, #1A0A00 20%, #0D0500 100%)', position: 'relative' }}>
      <style>{`
        @media (max-width: 767px) { .mobile-burger { display: flex !important; } .nav-pc { display: none !important; } }
      `}</style>

      {/* Burger Button */}
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="mobile-burger" style={{
        position: 'fixed', top: '15px', right: '15px', zIndex: 1001, display: 'none',
        width: '40px', height: '40px', background: '#FF8C00', border: 'none', borderRadius: '10px',
        alignItems: 'center', justifyContent: 'center', fontSize: '20px'
      }}>
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 1000, visibility: isMobileMenuOpen ? 'visible' : 'hidden',
        background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)', transition: '0.3s', opacity: isMobileMenuOpen ? 1 : 0
      }} onClick={() => setIsMobileMenuOpen(false)}>
        <div style={{
          position: 'absolute', right: 0, width: '85%', maxWidth: '320px', height: '100%',
          background: '#130800', paddingTop: '70px', transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)', transition: '0.3s'
        }} onClick={e => e.stopPropagation()}>
          <h3 style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', margin: '0 20px 10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Langue / Language</h3>
          <LanguageSelectorMobile currentLang={lang} setLang={setLang} setIsOpen={setIsMobileMenuOpen} />
          <MobilePizzaMenu />
        </div>
      </div>

      <FloatingParticles count={12} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="nav-pc"><Navbar t={t} lang={lang} setLang={setLang} /></div>
        <Hero t={t} />
        <FeatureShowcase />
        <DownloadSection t={t} />
        <WebSection t={t} />
        <Footer t={t} />
      </div>
    </div>
  );
}
