'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTAButton from '@/components/ui/CTAButton'

export default function FinalCTA() {
  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: 'var(--kora-surface-alt)' }}
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left — text + CTA */}
            <div className="text-center md:text-left">
              <h2
                className="font-sans font-bold text-balance"
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  lineHeight: 1.15,
                  color: 'var(--kora-text-primary)',
                }}
              >
                Ready to Start Your Transformation?
              </h2>
              <p
                className="text-lg mt-4 leading-relaxed"
                style={{ color: 'var(--kora-text-body)' }}
              >
                Choose your plan below. After checkout, complete a quick medical form. A licensed physician reviews your profile within 24 hours. Your treatment ships in 2–5 days with free nationwide delivery.
              </p>
              <div className="mt-6">
                <CTAButton variant="primary" size="lg" onClick={scrollToProduct}>
                  Shop Retatrutide
                </CTAButton>
              </div>
              <p className="text-sm mt-4" style={{ color: 'var(--kora-text-muted)' }}>
                FDA-regulated pharmacy &nbsp;·&nbsp; Third-party tested &nbsp;·&nbsp; Cold-chain delivery
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-6">
                <div className="flex -space-x-1.5">
                  {[2, 4, 6].map(n => (
                    <Image
                      key={n}
                      src={`/patient-${n}.png`}
                      alt=""
                      width={28}
                      height={28}
                      className="rounded-full object-cover"
                      style={{
                        width: 28,
                        height: 28,
                        border: '2px solid var(--kora-surface-alt)',
                      }}
                    />
                  ))}
                </div>
                <p className="text-xs" style={{ color: 'var(--kora-text-muted)' }}>
                  Join 500+ patients across the Philippines
                </p>
              </div>
            </div>

            {/* Right — Reta vial with floating animation */}
            <div className="flex justify-center md:justify-end">
              <div className="max-w-xs w-full flex items-center justify-center">
                <div
                  style={{
                    animation: 'gentleFloat 4s ease-in-out infinite',
                  }}
                >
                  <Image
                    src="/reta-vial-transparent.png"
                    alt="Kora Health Retatrutide 10mg vial"
                    width={280}
                    height={280}
                    className="w-auto h-auto"
                    style={{ maxWidth: '280px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
