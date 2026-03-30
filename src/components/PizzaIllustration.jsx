import { useEffect, useState } from 'react'

// Mini pizza SVG inline — no external files needed for this component
export default function PizzaIllustration({ size = 260 }) {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 50)
    return () => clearInterval(id)
  }, [])

  const float = Math.sin(tick * 0.06) * 10
  const rotate = Math.sin(tick * 0.04) * 3

  return (
    <div style={{
      transform: `translateY(${float}px) rotate(${rotate}deg)`,
      transition: 'transform 0.05s linear',
      filter: 'drop-shadow(0 20px 40px rgba(255,140,0,0.45))',
      display: 'inline-block',
    }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Pizza Chèvre & Miel"
      >
        <defs>
          <radialGradient id="pg_crust2" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#F0A830"/>
            <stop offset="60%" stopColor="#C87820"/>
            <stop offset="100%" stopColor="#8B4500"/>
          </radialGradient>
          <radialGradient id="pg_sauce2" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#E84030"/>
            <stop offset="100%" stopColor="#8B1A10"/>
          </radialGradient>
          <radialGradient id="pg_cheese2" cx="42%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFF5CC"/>
            <stop offset="100%" stopColor="#F0D870"/>
          </radialGradient>
        </defs>

        {/* Shadow */}
        <ellipse cx="150" cy="278" rx="105" ry="14" fill="rgba(0,0,0,0.3)"/>

        {/* Crust glow */}
        <circle cx="150" cy="144" r="134" fill="#FF8C00" opacity="0.15"/>

        {/* Crust */}
        <circle cx="150" cy="144" r="128" fill="url(#pg_crust2)"/>

        {/* Crust bubbles */}
        {[[68,88,13],[92,58,9],[220,72,11],[248,112,10],[252,176,12],[78,220,11],[46,168,10]].map(([x,y,r],i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="#A05818" opacity="0.5"/>
        ))}

        <circle cx="150" cy="144" r="128" fill="none" stroke="#FFD080" strokeWidth="2" opacity="0.4"/>
        <circle cx="150" cy="144" r="128" fill="none" stroke="#6B3010" strokeWidth="2.5" opacity="0.5"/>

        {/* Sauce */}
        <circle cx="150" cy="144" r="106" fill="url(#pg_sauce2)"/>

        {/* Cheese */}
        <circle cx="150" cy="144" r="102" fill="url(#pg_cheese2)" opacity="0.88"/>

        {/* Honey drizzle */}
        <path d="M85,108 C100,92 122,112 145,98 C165,85 188,102 208,90" stroke="#F4A820" strokeWidth="5.5" fill="none" strokeLinecap="round" opacity="0.95"/>
        <path d="M95,154 C112,140 132,160 158,144 C174,134 192,147 205,137" stroke="#E89010" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.85"/>
        <ellipse cx="145" cy="100" rx="5" ry="7" fill="#F4A820" opacity="0.9"/>
        <ellipse cx="175" cy="90" rx="4" ry="6" fill="#E89010" opacity="0.85"/>

        {/* Goat cheese blobs */}
        {[[118,120,19,13],[172,108,16,11],[148,163,18,12],[108,165,13,9],[186,152,15,10]].map(([x,y,rx,ry],i) => (
          <ellipse key={i} cx={x} cy={y} rx={rx} ry={ry} fill="#FAFAFA" opacity={0.88+i*0.01}/>
        ))}

        {/* Figs */}
        <circle cx="160" cy="133" r="9" fill="#6A1B9A"/>
        <circle cx="160" cy="133" r="6" fill="#9C27B0"/>
        <circle cx="160" cy="133" r="3" fill="#CE93D8"/>
        <circle cx="132" cy="152" r="8" fill="#6A1B9A"/>
        <circle cx="132" cy="152" r="5" fill="#8E24AA"/>
        <circle cx="175" cy="172" r="7" fill="#7B1FA2"/>
        <circle cx="175" cy="172" r="4.5" fill="#9C27B0"/>

        {/* Walnuts */}
        <ellipse cx="110" cy="145" rx="8" ry="6" fill="#795548"/>
        <path d="M104,143 Q110,140 116,143" stroke="#A1887F" strokeWidth="1.5" fill="none"/>
        <ellipse cx="188" cy="130" rx="7" ry="5" fill="#6D4C41"/>

        {/* Herbs */}
        <ellipse cx="138" cy="118" rx="6" ry="3.5" fill="#2E7D32" transform="rotate(-35,138,118)"/>
        <ellipse cx="143" cy="114" rx="5" ry="3" fill="#388E3C" transform="rotate(-20,143,114)"/>
        <ellipse cx="158" cy="185" rx="6" ry="3.5" fill="#2E7D32" transform="rotate(25,158,185)"/>
        <circle cx="98" cy="128" r="4.5" fill="#1B5E20"/>

        {/* Shine */}
        <ellipse cx="128" cy="112" rx="30" ry="18" fill="white" opacity="0.07"/>
      </svg>
    </div>
  )
}
