'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'

const results = [
  {
    name: 'Praise',
    weight: '30',
    duration: '32 weeks',
    durationShort: '8 months',
    before: '/praise-before.png',
    after: '/praise-after.png',
    quote:
      'I struggled for years but reta finally stopped that constant gutom feeling. With Kora Health guiding me, I lost 30kg steadily without feeling like I was suffering. Akala ko impossible na, but I finally found what works for my metabolism.',
    physician: 'Dr. Christina Lavilla, M.D.',
  },
  {
    name: 'Faith',
    weight: '12',
    duration: '8 weeks',
    durationShort: '2 months',
    before: '/faith-before.png',
    after: '/faith-after.png',
    quote:
      'Sobrang bilis talaga. It\u2019s like my body is finally working the way it\u2019s supposed to.',
    physician: 'Dr. Christina Lavilla, M.D.',
  },
  {
    name: 'Jerome',
    weight: '15',
    duration: '10 weeks',
    durationShort: '2.5 months',
    before: '/jerome-before.png',
    after: '/jerome-after.png',
    quote:
      'Kora Health made the whole process simple and safe, so I could just focus on watching the numbers on the scale drop every single week. Sulit na sulit.',
    physician: 'Dr. Johnathan Hamandra, M.D.',
  },
]

export default function PatientResults() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const cardTouchStartX = useRef(0)
  const currentResult = results[activeIndex]

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % results.length)
    setSliderPos(50)
  }
  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + results.length) % results.length)
    setSliderPos(50)
  }

  const updateSliderPos = useCallback((clientX: number) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(percent)
  }, [])

  useEffect(() => {
    const handleUp = () => setIsDragging(false)
    const handleMove = (e: MouseEvent) => {
      if (isDragging) updateSliderPos(e.clientX)
    }
    if (isDragging) {
      window.addEventListener('mouseup', handleUp)
      window.addEventListener('mousemove', handleMove)
    }
    return () => {
      window.removeEventListener('mouseup', handleUp)
      window.removeEventListener('mousemove', handleMove)
    }
  }, [isDragging, updateSliderPos])

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--kora-bg)' }}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <h2
            className="font-serif text-center text-balance"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              lineHeight: 1.2,
              color: 'var(--kora-text-primary)',
            }}
          >
            Real Results From Real Patients
          </h2>
          <p
            className="text-[15px] text-center max-w-lg mx-auto mt-3 leading-relaxed"
            style={{ color: 'var(--kora-text-body)' }}
          >
            Physician-supervised progress from the Kora retatrutide program in the Philippines.
          </p>
        </div>

        {/* Card wrapper — relative for arrow positioning */}
        <div className="relative mt-10">
          {/* Desktop left arrow */}
          <button
            onClick={goPrev}
            aria-label="Previous patient"
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-5 z-10 items-center justify-center rounded-full bg-white hover:bg-gray-50 transition-colors"
            style={{
              width: 40,
              height: 40,
              border: '1px solid var(--kora-border-light)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8L10 4"
                stroke="var(--kora-text-primary)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Desktop right arrow */}
          <button
            onClick={goNext}
            aria-label="Next patient"
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-5 z-10 items-center justify-center rounded-full bg-white hover:bg-gray-50 transition-colors"
            style={{
              width: 40,
              height: 40,
              border: '1px solid var(--kora-border-light)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4L10 8L6 12"
                stroke="var(--kora-text-primary)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Card */}
          <div
            className="rounded-2xl p-5 md:p-10"
            style={{
              backgroundColor: 'var(--kora-surface)',
              border: '1px solid var(--kora-border-light)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            }}
            onTouchStart={(e) => {
              cardTouchStartX.current = e.touches[0].clientX
            }}
            onTouchEnd={(e) => {
              const diff = cardTouchStartX.current - e.changedTouches[0].clientX
              if (diff > 50) goNext()
              else if (diff < -50) goPrev()
            }}
          >
            <div
              key={activeIndex}
              className="grid md:grid-cols-2 gap-6 md:gap-8 animate-fadeIn"
            >
              {/* Left column — slider */}
              <div
                ref={sliderRef}
                className="relative rounded-xl overflow-hidden select-none"
                style={{
                  aspectRatio: '3/4',
                  cursor: isDragging ? 'grabbing' : 'col-resize',
                }}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseMove={(e) => {
                  if (isDragging) updateSliderPos(e.clientX)
                }}
                onMouseLeave={() => setIsDragging(false)}
                onClick={(e) => updateSliderPos(e.clientX)}
                onTouchStart={(e) => {
                  e.stopPropagation()
                  setIsDragging(true)
                  updateSliderPos(e.touches[0].clientX)
                }}
                onTouchMove={(e) => {
                  e.stopPropagation()
                  updateSliderPos(e.touches[0].clientX)
                }}
                onTouchEnd={() => setIsDragging(false)}
              >
                {/* Layer 1 — After image (base) */}
                <Image
                  src={currentResult.after}
                  alt={`${currentResult.name} after`}
                  fill
                  className="object-cover"
                  draggable={false}
                />

                {/* Layer 2 — Before image (clipped) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  {/* Use a plain <img> here — fill+style.width on Next/Image causes a hard error */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentResult.before}
                    alt={`${currentResult.name} before`}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      width: sliderRef.current
                        ? `${sliderRef.current.offsetWidth}px`
                        : '100%',
                      maxWidth: 'none',
                    }}
                    draggable={false}
                  />
                </div>

                {/* Layer 3 — Slider line */}
                <div
                  className="absolute top-0 bottom-0 z-10 pointer-events-none"
                  style={{
                    left: `${sliderPos}%`,
                    transform: 'translateX(-50%)',
                    width: 2,
                    background: 'white',
                    boxShadow: '0 0 8px rgba(0,0,0,0.25)',
                  }}
                />

                {/* Layer 4 — Slider handle */}
                <div
                  className="absolute z-20 flex items-center justify-center pointer-events-none"
                  style={{
                    left: `${sliderPos}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    border: '2px solid var(--kora-brand)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M5 3L2 8L5 13"
                      stroke="var(--kora-brand)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 3L14 8L11 13"
                      stroke="var(--kora-brand)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Layer 5 — Before label */}
                <span
                  className="absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full z-10"
                  style={{
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(4px)',
                    color: 'var(--kora-text-primary)',
                    opacity: sliderPos > 15 ? 1 : 0,
                    transition: 'opacity 200ms ease',
                  }}
                >
                  Before
                </span>

                {/* Layer 6 — After label */}
                <span
                  className="absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full z-10"
                  style={{
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(4px)',
                    color: 'var(--kora-text-primary)',
                    opacity: sliderPos < 85 ? 1 : 0,
                    transition: 'opacity 200ms ease',
                  }}
                >
                  After
                </span>
              </div>

              {/* Right column — patient story */}
              <div className="flex flex-col justify-center">
                {/* Headline */}
                <h3
                  className="font-serif leading-tight text-lg md:text-2xl"
                  style={{ color: 'var(--kora-text-primary)' }}
                >
                  {currentResult.name} lost{' '}
                  <span style={{ color: 'var(--kora-brand)', fontWeight: 700 }}>
                    {currentResult.weight} kg
                  </span>{' '}
                  in {currentResult.durationShort}
                </h3>

                {/* Metric pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    `–${currentResult.weight} kg`,
                    currentResult.duration,
                    'Retatrutide program',
                  ].map((pill) => (
                    <span
                      key={pill}
                      className="text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{
                        backgroundColor: 'var(--kora-surface-alt)',
                        color: 'var(--kora-text-body)',
                      }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="mt-5 text-[15px] leading-relaxed"
                  style={{
                    color: 'var(--kora-text-body)',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{currentResult.quote}&rdquo;
                </p>

                {/* Physician */}
                <p
                  className="mt-4 text-sm"
                  style={{ color: 'var(--kora-text-muted)' }}
                >
                  Supervised by {currentResult.physician} — Kora Health
                </p>

                {/* CTA */}
                <a
                  href="#qualify"
                  className="mt-6 inline-flex items-center justify-center font-medium text-sm rounded-full px-8 py-3 transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--kora-brand)',
                    color: '#ffffff',
                    alignSelf: 'flex-start',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.transform =
                      'translateY(-2px)'
                    ;(e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      '0 8px 20px rgba(27,58,92,0.18)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.transform = ''
                    ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = ''
                  }}
                >
                  Book Your Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dots + mobile arrows */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {/* Mobile prev */}
          <button
            onClick={goPrev}
            aria-label="Previous patient"
            className="md:hidden flex items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-50"
            style={{
              width: 32,
              height: 32,
              border: '1px solid var(--kora-border-light)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8L10 4"
                stroke="var(--kora-text-primary)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dots */}
          {results.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to patient ${i + 1}`}
              onClick={() => {
                setActiveIndex(i)
                setSliderPos(50)
              }}
              className="transition-all duration-200"
              style={{
                width: i === activeIndex ? 24 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor:
                  i === activeIndex
                    ? 'var(--kora-brand)'
                    : 'var(--kora-border)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            />
          ))}

          {/* Mobile next */}
          <button
            onClick={goNext}
            aria-label="Next patient"
            className="md:hidden flex items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-50"
            style={{
              width: 32,
              height: 32,
              border: '1px solid var(--kora-border-light)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4L10 8L6 12"
                stroke="var(--kora-text-primary)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Disclaimer */}
        <p
          className="mt-8 text-center text-xs max-w-2xl mx-auto"
          style={{ color: 'var(--kora-text-muted)' }}
        >
          Individual results vary. All treatments require physician evaluation and ongoing supervision. Results reflect each patient&apos;s experience under medical care and are not guaranteed outcomes.
        </p>
      </div>
    </section>
  )
}
