'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CTAButton from '@/components/ui/CTAButton'

const founders = [
  {
    initial: 'K.O.',
    name: 'Kenny',
    title: 'Co-Founder',
    quote:
      '"We saw too many Filipinos risking their health with unverified sellers. Kora exists to offer a legitimate, physician-led alternative."',
  },
  {
    initial: 'J',
    name: 'James',
    title: 'Co-Founder',
    quote:
      '"Access to metabolic health treatment shouldn\'t require navigating a broken, unregulated market. We\'re building the right way."',
  },
]

const physicians = [
  {
    src: '/doctor-christina.png',
    name: 'Dr. Christina Lavilla',
    title: 'M.D. · PRC License #______',
    quote:
      '"Every Kora patient receives a thorough medical evaluation before any prescription. I review your full health history, screen for contraindications, and only prescribe when the treatment is genuinely appropriate for your profile."',
  },
  {
    src: '/doctor-johnathan.png',
    name: 'Dr. Johnathan Hamandra',
    title: 'M.D. · PRC License #______',
    quote:
      '"Metabolic health treatment requires ongoing clinical oversight — not a one-time transaction. I monitor every patient through dose escalation, side effect management, and long-term progress."',
  },
]

export default function TeamSection() {
  const scrollToForm = () => {
    document.getElementById('qualify')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="team"
      className="py-16 md:py-28"
      style={{ backgroundColor: 'var(--kora-bg)' }}
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
            Real People. Real Accountability.
          </h2>
          <p
            className="text-center max-w-2xl mx-auto mt-4 leading-relaxed"
            style={{ color: 'var(--kora-text-body)' }}
          >
            We put our names behind Kora Health because you should know exactly who is responsible for your care.
          </p>
        </ScrollReveal>

        {/* Founders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-2xl mx-auto">
          {founders.map((person, i) => (
            <ScrollReveal key={person.name} delay={i * 80}>
              <div className="text-center">
                <div className="flex flex-col items-center">
                  <div
                    className="flex items-center justify-center rounded-full mx-auto font-sans font-semibold"
                    style={{
                      width: 96,
                      height: 96,
                      backgroundColor: 'var(--kora-brand-subtle)',
                      border: '2px solid var(--kora-border)',
                      fontSize: 32,
                      color: 'var(--kora-brand)',
                      lineHeight: 1,
                    }}
                    aria-label={`Avatar for ${person.name}`}
                  >
                    {person.initial}
                  </div>
                  <p
                    className="text-[11px] font-normal mt-1.5"
                    style={{ color: 'var(--kora-text-muted)' }}
                  >
                    Photo coming soon
                  </p>
                </div>
                <p
                  className="text-lg font-medium mt-4"
                  style={{ color: 'var(--kora-text-primary)' }}
                >
                  {person.name}
                </p>
                <p className="text-sm mt-0.5" style={{ color: 'var(--kora-text-muted)' }}>
                  {person.title}
                </p>
                <p
                  className="text-sm mt-3 leading-relaxed max-w-xs mx-auto"
                  style={{ color: 'var(--kora-text-body)' }}
                >
                  {person.quote}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Physicians */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {physicians.map((doc, i) => (
            <ScrollReveal key={doc.name} delay={160 + i * 80}>
              <div className="text-center">
                <div className="flex justify-center">
                  <div
                    className="rounded-full overflow-hidden"
                    style={{
                      width: 120,
                      height: 120,
                      border: '2px solid var(--kora-border)',
                    }}
                  >
                    <Image
                      src={doc.src}
                      alt={doc.name}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p
                  className="text-lg font-medium mt-4"
                  style={{ color: 'var(--kora-text-primary)' }}
                >
                  {doc.name}
                </p>
                <p className="text-sm mt-0.5" style={{ color: 'var(--kora-text-muted)' }}>
                  {doc.title}
                </p>
                <p
                  className="text-sm mt-3 leading-relaxed max-w-xs mx-auto"
                  style={{ color: 'var(--kora-text-body)' }}
                >
                  {doc.quote}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Physician accountability line */}
        <ScrollReveal delay={320}>
          <p className="text-sm text-center mt-8 max-w-xl mx-auto" style={{ color: 'var(--kora-text-body)' }}>
            Every Kora patient is evaluated by a named, licensed physician — not an anonymous provider. Dr. Lavilla and Dr. Hamandra's PRC licenses are publicly verifiable.
          </p>
        </ScrollReveal>

        {/* Credential bar */}
        <ScrollReveal delay={340}>
          <div className="flex justify-center mt-10">
            <div
              className="inline-flex items-center rounded-full text-[13px] font-medium"
              style={{
                backgroundColor: 'var(--kora-brand-subtle)',
                color: 'var(--kora-brand)',
                padding: '8px 20px',
              }}
            >
              Registered Philippine Business &nbsp;·&nbsp; SEC/DTI: [Registration #] &nbsp;·&nbsp; All Physicians PRC-Licensed
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={400}>
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
