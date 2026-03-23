'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTAButton from '@/components/ui/CTAButton'

export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('qualify')?.scrollIntoView({ behavior: 'smooth' })
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
                Find Out If Retatrutide Is Right for You
              </h2>
              <p
                className="text-lg mt-4 leading-relaxed"
                style={{ color: 'var(--kora-text-body)' }}
              >
                Book a free consultation with a licensed physician. Discuss your health profile, understand the treatment, and get a personalized recommendation — no cost, no obligation.
              </p>
              <div className="mt-6">
                <CTAButton variant="primary" size="lg" onClick={scrollToForm}>
                  Book Your Free Consultation
                </CTAButton>
              </div>
              <p className="text-sm mt-4" style={{ color: 'var(--kora-text-muted)' }}>
                Licensed physicians &nbsp;·&nbsp; FDA-regulated pharmacy &nbsp;·&nbsp; No hidden fees
              </p>
            </div>

            {/* Right — aspirational image */}
            <div className="flex justify-center md:justify-end">
              <div className="max-w-xs w-full">
                <Image
                  src="/img-woman-confident.png"
                  alt="Confident Filipino woman after achieving her health goals"
                  width={380}
                  height={380}
                  className="w-full h-auto rounded-2xl"
                  style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
