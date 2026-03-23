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
