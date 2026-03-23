'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTAButton from '@/components/ui/CTAButton'

export default function WhatIsRetatrutide() {
  const scrollToForm = () => {
    document.getElementById('qualify')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="py-16 md:py-28"
      style={{ backgroundColor: 'var(--kora-bg)' }}
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <h2
            className="font-serif text-center"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              lineHeight: 1.15,
              color: 'var(--kora-text-primary)',
            }}
          >
            What Is Retatrutide?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <div className="flex justify-center my-8">
            <svg
              viewBox="0 0 280 80"
              className="max-w-[280px] mx-auto opacity-80"
              style={{ width: '100%', height: 'auto' }}
            >
              <style>{`
                @keyframes fillPulse1 {
                  0% { fill: transparent; transform: scale(1); }
                  5% { fill: #1B3A5C; }
                  25% { transform: scale(1.12); }
                  45% { transform: scale(1); }
                  100% { transform: scale(1); }
                }
                @keyframes fillPulse2 {
                  0%, 12% { fill: transparent; transform: scale(1); }
                  17% { fill: #1B3A5C; }
                  37% { transform: scale(1.12); }
                  57% { transform: scale(1); }
                  100% { transform: scale(1); }
                }
                @keyframes fillPulse3 {
                  0%, 24% { fill: transparent; transform: scale(1); }
                  29% { fill: #1B3A5C; }
                  49% { transform: scale(1.12); }
                  69% { transform: scale(1); }
                  100% { transform: scale(1); }
                }
                @keyframes syncPulse {
                  0%, 44% { transform: scale(1); }
                  50% { transform: scale(1.12); }
                  56% { transform: scale(1); }
                  62% { transform: scale(1.12); }
                  68% { transform: scale(1); }
                  100% { transform: scale(1); }
                }
                @keyframes fadeOut {
                  0%, 88% { fill: #1B3A5C; }
                  100% { fill: transparent; }
                }
              `}</style>
              
              {/* Connecting lines */}
              <line x1="86" y1="28" x2="124" y2="28" stroke="#1B3A5C" strokeWidth="1" opacity="0.3" />
              <line x1="156" y1="28" x2="194" y2="28" stroke="#1B3A5C" strokeWidth="1" opacity="0.3" />
              
              {/* Circle 1: GLP-1 */}
              <circle
                cx="70"
                cy="28"
                r="16"
                stroke="#1B3A5C"
                strokeWidth="1.5"
                fill="transparent"
                style={{
                  animation: 'fillPulse1 5s ease-in-out infinite, syncPulse 5s ease-in-out infinite, fadeOut 5s ease-in-out infinite',
                  transformOrigin: '70px 28px'
                }}
              />
              <text
                x="70"
                y="60"
                fontSize="9"
                fill="#1B3A5C"
                fontFamily="var(--font-dm-sans)"
                textAnchor="middle"
              >
                GLP-1
              </text>
              
              {/* Circle 2: GIP */}
              <circle
                cx="140"
                cy="28"
                r="16"
                stroke="#1B3A5C"
                strokeWidth="1.5"
                fill="transparent"
                style={{
                  animation: 'fillPulse2 5s ease-in-out infinite, syncPulse 5s ease-in-out infinite, fadeOut 5s ease-in-out infinite',
                  transformOrigin: '140px 28px'
                }}
              />
              <text
                x="140"
                y="60"
                fontSize="9"
                fill="#1B3A5C"
                fontFamily="var(--font-dm-sans)"
                textAnchor="middle"
              >
                GIP
              </text>
              
              {/* Circle 3: Glucagon */}
              <circle
                cx="210"
                cy="28"
                r="16"
                stroke="#1B3A5C"
                strokeWidth="1.5"
                fill="transparent"
                style={{
                  animation: 'fillPulse3 5s ease-in-out infinite, syncPulse 5s ease-in-out infinite, fadeOut 5s ease-in-out infinite',
                  transformOrigin: '210px 28px'
                }}
              />
              <text
                x="210"
                y="60"
                fontSize="9"
                fill="#1B3A5C"
                fontFamily="var(--font-dm-sans)"
                textAnchor="middle"
              >
                Glucagon
              </text>
            </svg>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="max-w-3xl mx-auto mt-8 text-center space-y-4">
            <p
              className="text-[15px] leading-relaxed"
              style={{ color: 'var(--kora-text-body)' }}
            >
              Retatrutide is a next-generation once-weekly injectable developed by Eli Lilly. It is the first triple hormone receptor agonist — simultaneously activating GLP-1, GIP, and glucagon pathways to deliver broader metabolic effects than any previous weight management medication.
            </p>
            <p
              className="text-[15px] leading-relaxed"
              style={{ color: 'var(--kora-text-body)' }}
            >
              In the Philippines, where metabolic health conditions including obesity and type 2 diabetes are rising — particularly in urban centers — access to advanced physician-led treatment has been limited. Kora Health exists to change that.
            </p>
            <p
              className="text-[15px] leading-relaxed"
              style={{ color: 'var(--kora-text-body)' }}
            >
              Where semaglutide (Ozempic) targets one receptor and tirzepatide (Mounjaro) targets two, retatrutide targets all three. The glucagon pathway — unique to retatrutide — increases resting energy expenditure and accelerates liver fat clearance. Some people refer to it as &ldquo;reta&rdquo; in health communities and online forums.
            </p>
            <p
              className="text-[15px] leading-relaxed"
              style={{ color: 'var(--kora-text-body)' }}
            >
              In the Phase 3 TRIUMPH-4 trial (December 2025), participants lost an average of 28.7% of their body weight at 68 weeks — the highest figure recorded for any GLP-1 class medication. Kora Health offers retatrutide through a physician-led program with full medical oversight.
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <CTAButton variant="primary" onClick={scrollToForm}>
              Book Your Free Consultation
            </CTAButton>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-4">
            <Link
              href="/learn/retatrutide-what-to-expect-week-by-week"
              className="text-sm underline underline-offset-4"
              style={{ color: 'var(--kora-brand)' }}
            >
              What to expect on retatrutide
            </Link>
            <span style={{ color: 'var(--kora-text-muted)' }}>·</span>
            <Link
              href="/learn/is-retatrutide-safe"
              className="text-sm underline underline-offset-4"
              style={{ color: 'var(--kora-brand)' }}
            >
              Is retatrutide safe?
            </Link>
            <span style={{ color: 'var(--kora-text-muted)' }}>·</span>
            <Link
              href="/learn/retatrutide-vs-ozempic"
              className="text-sm underline underline-offset-4"
              style={{ color: 'var(--kora-brand)' }}
            >
              Retatrutide vs Ozempic
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
