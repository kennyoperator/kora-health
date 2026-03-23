'use client'

import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--kora-footer-bg)' }} className="py-12 md:py-16">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-baseline gap-0">
              <span className="font-serif text-[18px] text-white">Kora</span>
              <span className="font-sans font-medium text-[18px] text-white">&nbsp;Health</span>
            </div>
            <p className="text-sm mt-2" style={{ color: 'var(--kora-footer-text)' }}>
              The Philippines&apos; physician-led metabolic health platform.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                aria-label="Follow Kora Health on Instagram"
                className="transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                style={{ color: 'var(--kora-footer-text)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--kora-footer-text)' }}
              >
                <Instagram size={18} strokeWidth={1.75} />
              </a>
              <a
                href="#"
                aria-label="Follow Kora Health on Facebook"
                className="transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                style={{ color: 'var(--kora-footer-text)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--kora-footer-text)' }}
              >
                <Facebook size={18} strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* Column 2 — Links */}
          <div>
            <p className="text-[11px] uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Quick Links
            </p>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Our Team', href: '#team' },
                { label: 'Program', href: '#program' },
                { label: 'FAQs', href: '#faq' },
                { label: 'Journal', href: '/learn' },
                { label: 'Contact Us', href: 'mailto:hello@korahealth.ph' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
              ].map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors duration-200 w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 rounded"
                  style={{ color: 'var(--kora-footer-text)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--kora-footer-text)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <p className="text-[11px] uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@korahealth.ph"
                className="text-sm transition-colors duration-200 w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 rounded"
                style={{ color: 'var(--kora-footer-text)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--kora-footer-text)' }}
              >
                hello@korahealth.ph
              </a>
              <p className="text-sm" style={{ color: 'var(--kora-footer-text)' }}>WhatsApp: +63 XXX XXX XXXX</p>
              <p className="text-sm" style={{ color: 'var(--kora-footer-text)' }}>Viber: +63 XXX XXX XXXX</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 text-center text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
        >
          © 2026 Kora Health. All rights reserved. SEC/DTI Registration: [Placeholder]. This website does not provide medical advice. All treatments require evaluation and prescription by a licensed physician. Kora Health does not guarantee specific treatment outcomes.
        </div>
      </div>
    </footer>
  )
}
