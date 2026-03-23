import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

const stages = [
  {
    period: 'Weeks 1–2',
    title: 'Appetite Changes',
    description:
      'Most patients notice reduced hunger and fewer cravings within the first week or two of treatment.',
  },
  {
    period: 'Weeks 3–4',
    title: 'Early Weight Loss',
    description:
      'Measurable weight loss begins. Your physician monitors your response and adjusts dosing if needed.',
  },
  {
    period: 'Months 2–3',
    title: 'Significant Progress',
    description:
      'Consistent weight loss continues. Follow-up consultations track your health markers and program adherence.',
  },
  {
    period: 'Months 4–6+',
    title: 'Sustained Results',
    description:
      'Long-term metabolic improvements. Your physician adjusts your program for maintenance and continued health benefits.',
  },
]

export default function ExpectationTimeline() {
  return (
    <section
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
            What to Expect on the Kora Program
          </h2>
        </ScrollReveal>

        {/* Desktop: horizontal timeline */}
        <ScrollReveal delay={80}>
          <div className="hidden md:flex items-start gap-0 mt-14 relative">
            {/* Connecting line */}
            <div
              className="absolute top-[5px] left-[calc(12.5%+6px)] right-[calc(12.5%+6px)]"
              style={{ height: 1, backgroundColor: 'var(--kora-border)' }}
              aria-hidden="true"
            />
            {stages.map((stage, i) => (
              <div key={stage.period} className="flex-1 flex flex-col items-center text-center px-4">
                {/* Dot */}
                <div
                  className="rounded-full flex-shrink-0 relative z-10"
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: i === 0 ? 'var(--kora-brand)' : 'var(--kora-border)',
                    outline: `3px solid var(--kora-bg)`,
                  }}
                  aria-hidden="true"
                />
                <p
                  className="text-[11px] uppercase tracking-widest mt-4"
                  style={{ color: 'var(--kora-text-muted)' }}
                >
                  {stage.period}
                </p>
                <p
                  className="text-[15px] font-medium mt-2"
                  style={{ color: 'var(--kora-text-primary)' }}
                >
                  {stage.title}
                </p>
                <p
                  className="text-sm leading-relaxed mt-2"
                  style={{ color: 'var(--kora-text-body)' }}
                >
                  {stage.description}
                </p>
                {stage.period === 'Weeks 1–2' && (
                  <div className="mt-3">
                    <Image
                      src="/img-timeline-appetite.png"
                      alt="Woman experiencing reduced appetite during retatrutide treatment"
                      width={140}
                      height={140}
                      className="rounded-xl mx-auto"
                      style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}
                    />
                  </div>
                )}
                {stage.period === 'Weeks 3–4' && (
                  <div className="mt-3">
                    <Image
                      src="/img-timeline-scale.png"
                      alt="Person stepping on a scale tracking early weight loss"
                      width={140}
                      height={140}
                      className="rounded-xl mx-auto"
                      style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}
                    />
                  </div>
                )}
                {stage.period === 'Months 2–3' && (
                  <div className="mt-3">
                    <Image
                      src="/img-progress.png"
                      alt="Patient measuring weight loss progress"
                      width={140}
                      height={140}
                      className="rounded-xl mx-auto"
                      style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}
                    />
                  </div>
                )}
                {stage.period === 'Months 4–6+' && (
                  <div className="mt-3">
                    <Image
                      src="/img-timeline-sustained.png"
                      alt="Woman walking confidently after sustained weight loss results"
                      width={140}
                      height={140}
                      className="rounded-xl mx-auto"
                      style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="flex md:hidden flex-col mt-10 relative">
            {/* Vertical line */}
            <div
              className="absolute left-[5px] top-1.5 bottom-1.5"
              style={{ width: 1, backgroundColor: 'var(--kora-border)' }}
              aria-hidden="true"
            />
            {stages.map((stage) => (
              <div key={stage.period} className="flex gap-5 pb-8 last:pb-0 relative">
                {/* Dot */}
                <div
                  className="rounded-full flex-shrink-0 mt-1 relative z-10"
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: 'var(--kora-brand)',
                    outline: `3px solid var(--kora-bg)`,
                  }}
                  aria-hidden="true"
                />
                <div>
                  <p
                    className="text-[11px] uppercase tracking-widest"
                    style={{ color: 'var(--kora-text-muted)' }}
                  >
                    {stage.period}
                  </p>
                  <p
                    className="text-[15px] font-medium mt-1"
                    style={{ color: 'var(--kora-text-primary)' }}
                  >
                    {stage.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed mt-1"
                    style={{ color: 'var(--kora-text-body)' }}
                  >
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
