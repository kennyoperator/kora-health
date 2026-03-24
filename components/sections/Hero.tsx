'use client'

import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import CTAButton from '@/components/ui/CTAButton'

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('qualify')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="pt-24 pb-12 md:pt-28 md:pb-16 text-center"
      style={{ backgroundColor: 'var(--kora-bg)' }}
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow badge */}
          <div
            className="hero-fade inline-flex items-center rounded-full text-xs font-medium uppercase tracking-widest"
            style={{
              animationDelay: '0ms',
              backgroundColor: 'var(--kora-brand-subtle)',
              color: 'var(--kora-brand)',
              padding: '6px 16px',
            }}
          >
            Triple-Agonist Treatment &nbsp;·&nbsp; Physician-Led &nbsp;·&nbsp; Philippines
          </div>

          {/* Headline */}
          <h1
            className="hero-fade font-sans font-bold mt-6 text-balance"
            style={{
              animationDelay: '100ms',
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: 'var(--kora-text-primary)',
            }}
          >
            Retatrutide Treatment in the Philippines Delivered To Your Door.
          </h1>

          {/* Subheadline */}
          <p
            className="hero-fade text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
            style={{
              animationDelay: '200ms',
              color: 'var(--kora-text-body)',
            }}
          >
            The most advanced GLP-1 treatment available — activating three metabolic pathways for greater appetite control, energy expenditure, and weight loss. Free physician consultation. Personalized prescribing. Ongoing medical support.
          </p>

          {/* Clinical anchor */}
          <p
            className="font-sans text-sm font-medium tracking-wide hero-fade mt-5"
            style={{
              color: 'var(--kora-brand)',
              animationDelay: '220ms',
            }}
          >
            28.7% average weight loss in Phase 3 clinical trials — the highest for any GLP-1 medication.
          </p>

          {/* Value statement */}
          <div
            className="hero-fade flex items-center justify-center gap-3 mt-4"
            style={{ animationDelay: '260ms' }}
          >
            <span className="font-sans font-medium text-sm tracking-wide" style={{ color: 'var(--kora-brand)' }}>Quick.</span>
            <span style={{ color: 'var(--kora-border)', fontSize: '18px', lineHeight: 1 }}>·</span>
            <span className="font-sans font-medium text-sm tracking-wide" style={{ color: 'var(--kora-brand)' }}>Easy.</span>
            <span style={{ color: 'var(--kora-border)', fontSize: '18px', lineHeight: 1 }}>·</span>
            <span className="font-sans font-medium text-sm tracking-wide" style={{ color: 'var(--kora-brand)' }}>Discreet.</span>
          </div>

          {/* Primary CTA */}
          <div className="hero-fade mt-8" style={{ animationDelay: '300ms' }}>
            <CTAButton
              variant="primary"
              size="lg"
              onClick={scrollToForm}
            >
              Book Your Free Consultation
            </CTAButton>
          </div>

          {/* Supporting line */}
          <div
            className="hero-fade flex items-center justify-center gap-1.5 mt-3 text-sm"
            style={{ animationDelay: '360ms', color: 'var(--kora-text-muted)' }}
          >
            <ShieldCheck size={14} strokeWidth={1.75} />
            <span>Free &nbsp;·&nbsp; No obligation &nbsp;·&nbsp; 15 minutes</span>
          </div>

          {/* Social proof strip */}
          <div 
            className="hero-fade flex items-center justify-center gap-3 mt-6"
            style={{ animationDelay: '450ms' }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5, 6].map(n => (
                <Image 
                  key={n}
                  src={`/patient-${n}.png`}
                  alt=""
                  width={34}
                  height={34}
                  className="rounded-full ring-2 object-cover"
                  style={{ 
                    width: 34, 
                    height: 34, 
                    ringColor: 'var(--kora-bg)',
                    borderColor: 'var(--kora-bg)',
                    border: '2px solid var(--kora-bg)'
                  }}
                />
              ))}
            </div>

            <p 
              className="font-sans text-sm"
              style={{ color: 'var(--kora-text-body)' }}
            >
              <span 
                className="font-medium" 
                style={{ color: 'var(--kora-brand)' }}
              >
                500+
              </span>
              {' '}patients treated across the Philippines
            </p>
          </div>

          {/* Product image */}
          <div className="hero-fade mt-10" style={{ animationDelay: '400ms' }}>
            <div className="max-w-sm mx-auto">
              <Image
                src="/img-consultation.png"
                alt="Patient consulting with a Kora Health physician via video call"
                width={400}
                height={400}
                className="w-full h-auto rounded-2xl"
                style={{
                  boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
                  border: '1px solid var(--kora-border-light)',
                }}
                priority={true}
              />
              <p className="text-xs text-center mt-3" style={{ color: 'var(--kora-text-muted)' }}>
                Consult with a licensed physician from home
              </p>
            </div>
          </div>

          {/* Bottom of hero */}
          <div
            className="hero-fade mt-12 pt-6 text-sm"
            style={{
              animationDelay: '440ms',
              borderTop: '1px solid var(--kora-border-light)',
              color: 'var(--kora-text-muted)',
            }}
          >
            Now accepting consultations across the Philippines
          </div>
        </div>
      </div>
    </section>
  )
}
