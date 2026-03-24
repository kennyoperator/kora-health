'use client'

import { X, Check } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTAButton from '@/components/ui/CTAButton'

const others = [
  'No medical consultation or screening',
  'Unverified, unregulated product sourcing',
  'No prescription or physician oversight',
  'Zero follow-up after purchase',
  'Anonymous sellers with no accountability',
  'Anonymous or unnamed providers',
]

const kora = [
  'Free physician consultation before any prescription',
  'FDA-regulated Philippine compounding pharmacy',
  'Cold-chain delivery protecting medication integrity',
  'Structured onboarding and weekly medical check-ins',
  'Named founders and licensed physicians behind every treatment',
  'Named physician with displayed credentials and license number',
]

const comparison = [
  {
    name: 'Semaglutide',
    brand: '(Ozempic)',
    stat: '~14.9%',
    mechanism: 'GLP-1 only',
    receptors: '1 receptor',
    highlight: false,
  },
  {
    name: 'Tirzepatide',
    brand: '(Mounjaro)',
    stat: '~20.2%',
    mechanism: 'GLP-1 + GIP',
    receptors: '2 receptors',
    highlight: false,
  },
  {
    name: 'Retatrutide',
    brand: '(Kora Health)',
    stat: '~28.7%',
    mechanism: 'GLP-1 + GIP + Glucagon',
    receptors: '3 receptors',
    highlight: true,
  },
]

export default function WhyKora() {
  const scrollToForm = () => {
    document.getElementById('qualify')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="py-16 md:py-28"
      style={{ backgroundColor: 'var(--kora-surface-alt)' }}
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <h2
            className="font-sans font-bold text-center"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              lineHeight: 1.15,
              color: 'var(--kora-text-primary)',
            }}
          >
            A Different Standard of Care
          </h2>
          <p
            className="text-center max-w-2xl mx-auto mt-4 leading-relaxed"
            style={{ color: 'var(--kora-text-body)' }}
          >
            Most weight loss sellers in the Philippines operate without medical oversight. We built Kora Health because that&apos;s not good enough.
          </p>
        </ScrollReveal>

        {/* Comparison table */}
        <ScrollReveal delay={80}>
          <p
            className="font-medium text-lg text-center mt-12 mb-6"
            style={{ color: 'var(--kora-text-primary)' }}
          >
            How Retatrutide Compares
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {comparison.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 150}>
                <div
                  className="rounded-xl p-5 text-center"
                  style={{
                    backgroundColor: item.highlight ? '#fff' : 'var(--kora-surface)',
                    border: item.highlight
                      ? '1.5px solid var(--kora-brand)'
                      : '1px solid var(--kora-border-light)',
                    boxShadow: item.highlight ? '0 4px 16px rgba(0,0,0,0.07)' : 'none',
                    transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 250ms cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    const t = e.currentTarget as HTMLElement
                    if (item.highlight) {
                      t.style.transform = 'translateY(-4px)'
                      t.style.boxShadow = '0 10px 24px rgba(27, 58, 92, 0.08)'
                    } else {
                      t.style.transform = 'translateY(-3px)'
                      t.style.boxShadow = '0 8px 20px rgba(0,0,0,0.05)'
                    }
                  }}
                  onMouseLeave={e => {
                    const t = e.currentTarget as HTMLElement
                    t.style.transform = 'translateY(0)'
                    t.style.boxShadow = item.highlight ? '0 4px 16px rgba(0,0,0,0.07)' : 'none'
                  }}
                >
                <p
                  className="text-sm font-medium"
                  style={{ color: item.highlight ? 'var(--kora-brand)' : 'var(--kora-text-primary)' }}
                >
                  {item.name}
                </p>
                <p className="text-xs" style={{ color: 'var(--kora-text-muted)' }}>
                  {item.brand}
                </p>
                <p
                  className="font-sans font-bold mt-3"
                  style={{
                    fontSize: 32,
                    lineHeight: 1,
                    color: item.highlight ? 'var(--kora-brand)' : 'var(--kora-text-body)',
                  }}
                >
                  {item.stat}
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--kora-text-muted)' }}>
                  avg weight loss
                </p>
                <p
                  className="text-xs mt-2"
                  style={{ color: item.highlight ? 'var(--kora-brand)' : 'var(--kora-text-muted)' }}
                >
                  {item.mechanism}
                </p>
                <p
                  className="text-xs"
                  style={{ color: item.highlight ? 'var(--kora-brand)' : 'var(--kora-text-muted)' }}
                >
                  {item.receptors}
                </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-xs text-center mt-4" style={{ color: 'var(--kora-text-muted)' }}>
            Cross-trial comparisons have limitations. Individual results vary. Published peer-reviewed data.
          </p>
        </ScrollReveal>

        {/* Typical Sellers vs Kora Health */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Others card */}
          <ScrollReveal delay={80}>
            <div
              className="rounded-2xl p-6 h-full"
              style={{
                backgroundColor: 'var(--kora-surface-alt)',
                border: '1px solid var(--kora-border)',
                transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 250ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={e => {
                const t = e.currentTarget as HTMLElement
                t.style.transform = 'translateY(-3px)'
                t.style.boxShadow = '0 8px 20px rgba(0,0,0,0.05)'
              }}
              onMouseLeave={e => {
                const t = e.currentTarget as HTMLElement
                t.style.transform = 'translateY(0)'
                t.style.boxShadow = 'none'
              }}
            >
              <p
                className="text-[11px] uppercase tracking-widest mb-4"
                style={{ color: 'var(--kora-text-muted)' }}
              >
                Typical Online Sellers
              </p>
              <ul className="flex flex-col gap-3">
                {others.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <X size={16} strokeWidth={1.75} className="flex-shrink-0 mt-0.5" style={{ color: 'rgba(239,68,68,0.7)' }} />
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--kora-text-body)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Kora card */}
          <ScrollReveal delay={160}>
            <div
              className="rounded-2xl p-6 h-full"
              style={{
                backgroundColor: 'var(--kora-surface)',
                border: '1.5px solid color-mix(in srgb, var(--kora-brand) 20%, transparent)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 250ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={e => {
                const t = e.currentTarget as HTMLElement
                t.style.transform = 'translateY(-4px)'
                t.style.boxShadow = '0 10px 24px rgba(27, 58, 92, 0.08)'
              }}
              onMouseLeave={e => {
                const t = e.currentTarget as HTMLElement
                t.style.transform = 'translateY(0)'
                t.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              <p
                className="text-[11px] uppercase tracking-widest font-medium mb-4"
                style={{ color: 'var(--kora-brand)' }}
              >
                Kora Health
              </p>
              <div className="mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/coldchain-reta.png"
                  alt="Temperature-controlled retatrutide packaging"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                  style={{ maxHeight: '200px', objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <ul className="flex flex-col gap-3">
                {kora.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} strokeWidth={1.75} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--kora-success)' }} />
                    <span className="text-sm font-medium leading-relaxed" style={{ color: 'var(--kora-text-primary)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Pharmacy trust line */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-8">
            <span className="text-xs" style={{ color: 'var(--kora-text-muted)' }}>Compounded in FDA-regulated Philippine pharmacies</span>
            <span className="text-xs" style={{ color: 'var(--kora-border)' }}>·</span>
            <span className="text-xs" style={{ color: 'var(--kora-text-muted)' }}>Third-party tested for potency, sterility &amp; purity</span>
            <span className="text-xs" style={{ color: 'var(--kora-border)' }}>·</span>
            <span className="text-xs" style={{ color: 'var(--kora-text-muted)' }}>Certificate of Analysis available for every batch</span>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={240}>
          <div className="flex justify-center mt-8">
            <CTAButton variant="primary" onClick={scrollToForm}>
              Book Your Free Consultation
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
