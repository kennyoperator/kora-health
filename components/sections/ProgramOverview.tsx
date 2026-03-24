// Kora Health — ProgramOverview v8
'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

const programSteps = [
  { number: '01', title: 'Free Physician Consultation', description: 'A licensed Philippine physician reviews your health profile and determines if retatrutide is right for you.' },
  { number: '02', title: 'Personalized Prescription', description: 'Your doctor prescribes a dose and escalation schedule tailored to your weight, health history, and goals.' },
  { number: '03', title: 'FDA-Regulated Compounding', description: 'Your medication is compounded in an FDA-regulated Philippine pharmacy to precise pharmaceutical standards.' },
  { number: '04', title: 'Cold-Chain Delivery', description: 'Delivered in temperature-controlled packaging directly to your door — anywhere in the Philippines.' },
  { number: '05', title: 'Ongoing Medical Support', description: 'Weekly check-ins, monthly physician consultations, and dose adjustments as you progress.' },
]

export default function ProgramOverview() {
  return (
    <section
      id="program"
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--kora-surface)' }}
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p
              className="font-sans font-semibold text-xs uppercase tracking-widest mb-3"
              style={{ color: 'var(--kora-brand)' }}
            >
              How It Works
            </p>
            <h2
              className="font-serif text-center"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                lineHeight: 1.15,
                color: 'var(--kora-text-primary)',
              }}
            >
              The Kora Retatrutide Program
            </h2>
            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: 'var(--kora-text-body)' }}
            >
              From your first consultation to ongoing support — everything managed by licensed physicians, delivered to your door.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Steps list */}
          <div className="space-y-4">
            {programSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 150}>
                <div
                  className="flex gap-4 rounded-xl p-4"
                  style={{
                    border: '1px solid var(--kora-border-light)',
                    backgroundColor: 'var(--kora-surface)',
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
                  <span
                    className="flex-shrink-0 font-sans font-bold text-xs w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                    style={{
                      backgroundColor: 'var(--kora-brand-subtle)',
                      color: 'var(--kora-brand)',
                    }}
                  >
                    {step.number}
                  </span>
                  <div>
                    <p
                      className="font-sans font-semibold text-sm"
                      style={{ color: 'var(--kora-text-primary)' }}
                    >
                      {step.title}
                    </p>
                    <p
                      className="text-sm leading-relaxed mt-1"
                      style={{ color: 'var(--kora-text-body)' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Kit image */}
          <ScrollReveal delay={100}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid var(--kora-border-light)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
              }}
            >
              <Image
                src="/kit-reta.png"
                alt="Complete Kora Health Retatrutide kit contents"
                width={560}
                height={560}
                className="w-full h-auto"
              />
              <div
                className="p-5 text-center"
                style={{ backgroundColor: 'var(--kora-surface)' }}
              >
                <p
                  className="text-sm font-medium"
                  style={{ color: 'var(--kora-text-primary)' }}
                >
                  Everything included in your monthly kit
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: 'var(--kora-text-muted)' }}
                >
                  Physician-prescribed retatrutide, injection supplies, alcohol pads, and cold-chain packaging — compounded in an FDA-regulated Philippine pharmacy and delivered to your door.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
