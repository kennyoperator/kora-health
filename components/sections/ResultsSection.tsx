'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTAButton from '@/components/ui/CTAButton'

const stats = [
  {
    stat: '28.7%',
    label: 'Average body weight lost at the highest dose in the TRIUMPH-4 Phase 3 trial over 68 weeks.',
    source: 'TRIUMPH-4, Eli Lilly, December 2025',
  },
  {
    stat: '85.9%',
    label: 'Of participants on the highest dose achieved at least 10% body weight loss.',
    source: 'TRIUMPH-4 Phase 3 data',
  },
  {
    stat: 'Triple Action',
    label: 'Retatrutide activates GLP-1, GIP, and glucagon receptors — more pathways than any other weight management medication.',
    source: '',
  },
]

export default function ResultsSection() {
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
            What the Evidence Shows
          </h2>
          <p
            className="text-center max-w-2xl mx-auto mt-4 leading-relaxed"
            style={{ color: 'var(--kora-text-body)' }}
          >
            Retatrutide is a GLP-1/GIP/glucagon triple receptor agonist studied in the TRIUMPH clinical trial program by Eli Lilly. The Kora program is designed for adults with a BMI of 27 or higher who are ready for physician-supervised metabolic health treatment.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {stats.map((item, i) => (
            <ScrollReveal key={item.stat} delay={i * 80}>
              <div
                className="rounded-2xl p-6 h-full flex flex-col"
                style={{
                  backgroundColor: 'var(--kora-surface)',
                  border: '1px solid var(--kora-border-light)',
                }}
              >
                <p
                  className="font-sans font-bold"
                  style={{
                    fontSize: 48,
                    lineHeight: 1,
                    color: 'var(--kora-brand)',
                  }}
                >
                  {item.stat}
                </p>
                <p
                  className="text-sm leading-relaxed mt-3 flex-1"
                  style={{ color: 'var(--kora-text-body)' }}
                >
                  {item.label}
                </p>
                {item.source && (
                  <p
                    className="text-xs mt-3"
                    style={{ color: 'var(--kora-text-muted)' }}
                  >
                    {item.source}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={240}>
          <div
            className="max-w-md mx-auto mt-10 rounded-2xl overflow-hidden"
            style={{
              border: '1px solid var(--kora-border-light)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            }}
          >
            <Image
              src="/img-doctor-videocall.png"
              alt="Telehealth consultation with a Kora Health physician from home"
              width={500}
              height={500}
              className="w-full h-auto"
            />
            <div className="p-5 text-center" style={{ backgroundColor: 'var(--kora-surface)' }}>
              <p className="text-sm font-medium" style={{ color: 'var(--kora-text-primary)' }}>
                Every Kora patient is evaluated by a licensed physician
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--kora-text-muted)' }}>
                Every treatment plan is personalized by a licensed doctor based on your health profile
              </p>
            </div>
          </div>
          <p
            className="text-sm font-normal text-center mt-8 max-w-xl mx-auto"
            style={{ color: 'var(--kora-text-muted)' }}
          >
            Individual results vary. All treatments require physician evaluation and prescription. Kora Health does not guarantee specific outcomes. Clinical data from published Phase 3 trial results.
          </p>
          <div className="flex justify-center mt-6">
            <CTAButton variant="primary" onClick={scrollToForm}>
              Book Your Free Consultation
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
