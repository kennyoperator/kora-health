// Kora Health — ProgramOverview
import {
  MessageSquare,
  ClipboardCheck,
  FileCheck2,
  FlaskConical,
  Truck,
  PlayCircle,
  CalendarClock,
  RefreshCcw,
} from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

const cards = [
  { icon: MessageSquare, label: 'Free Physician Consultation' },
  { icon: ClipboardCheck, label: 'Personalized Assessment' },
  { icon: FileCheck2, label: 'Prescribed Treatment Plan' },
  { icon: FlaskConical, label: 'FDA-Regulated Compounding' },
  { icon: Truck, label: 'Cold-Chain Home Delivery' },
  { icon: PlayCircle, label: 'Injection Onboarding' },
  { icon: CalendarClock, label: 'Weekly Check-Ins' },
  { icon: RefreshCcw, label: 'Monthly Follow-Up & Dose Adjustment' },
]

export default function ProgramOverview() {
  return (
    <section
      id="program"
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
            The Kora Weight Management Program
          </h2>
          <p
            className="text-center max-w-xl mx-auto mt-4 leading-relaxed"
            style={{ color: 'var(--kora-text-body)' }}
          >
            Physician-supervised medical care — not a transaction.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <ScrollReveal key={card.label} delay={i * 60}>
                <div
                  className="flex flex-col items-center text-center rounded-xl p-5"
                  style={{
                    backgroundColor: 'var(--kora-surface)',
                    border: '1px solid var(--kora-border-light)',
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-lg"
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: 'var(--kora-brand-subtle)',
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={18} strokeWidth={1.75} style={{ color: 'var(--kora-brand)' }} />
                  </div>
                  <p
                    className="text-sm font-medium mt-3 leading-tight"
                    style={{ color: 'var(--kora-text-primary)' }}
                  >
                    {card.label}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Treatment Kit photo */}
        <ScrollReveal delay={120}>
          <div className="mt-10 max-w-2xl mx-auto">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                backgroundColor: 'var(--kora-surface)',
                border: '1px solid var(--kora-border-light)',
              }}
            >
              <Image
                src="/kit.png"
                alt="Kora Health Tirzepatide treatment kit — vial, insulin syringe, alcohol pads, and cold-chain packaging"
                width={800}
                height={800}
                className="w-full h-auto"
                priority={false}
              />
              <div className="p-6 text-center">
                <h3 className="font-sans font-medium text-lg" style={{ color: 'var(--kora-text-primary)' }}>
                  Your Kora Treatment Kit
                </h3>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--kora-text-body)' }}>
                  Physician-prescribed tirzepatide, injection supplies, alcohol pads, and cold-chain packaging — compounded in an FDA-regulated Philippine pharmacy and delivered to your door.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
