'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { Calendar, Bell } from 'lucide-react'

export default function ComingSoon() {
  return (
    <section className="py-20" style={{ background: 'var(--kora-bg-subtle)' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ 
              background: 'var(--kora-bg-elevated)', 
              color: 'var(--kora-brand)',
              border: '1px solid var(--kora-border-subtle)'
            }}
          >
            <Calendar size={16} />
            Coming Soon
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 className="text-3xl md:text-4xl font-bold text-balance" style={{ color: 'var(--kora-text-primary)' }}>
            Semaglutide & Tirzepatide
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <p className="text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--kora-text-body)' }}>
            We're expanding our offerings to include Semaglutide (Ozempic) and Tirzepatide (Mounjaro). Same physician-led care, same FDA-regulated pharmacy, same cold-chain delivery standards.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-6 py-3 rounded-lg" 
              style={{ 
                background: 'var(--kora-bg-elevated)',
                border: '1px solid var(--kora-border-subtle)'
              }}
            >
              <Bell size={18} style={{ color: 'var(--kora-brand)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--kora-text-primary)' }}>
                Launching Q2 2026
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl text-left" style={{ background: 'var(--kora-bg-elevated)' }}>
              <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--kora-text-primary)' }}>
                Semaglutide
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--kora-text-body)' }}>
                Single-action GLP-1 receptor agonist. Proven weight loss results averaging 15% body weight reduction.
              </p>
            </div>

            <div className="p-6 rounded-xl text-left" style={{ background: 'var(--kora-bg-elevated)' }}>
              <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--kora-text-primary)' }}>
                Tirzepatide
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--kora-text-body)' }}>
                Dual-action GLP-1/GIP receptor agonist. Clinical trials show up to 22% body weight reduction.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
