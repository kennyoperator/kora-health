'use client'

import { useEffect, useState } from 'react'

export default function MobileStickyBarBlog() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 py-3 transition-all duration-300"
      style={{
        backgroundColor: '#fff',
        borderTop: '1px solid var(--kora-border)',
        boxShadow: '0 -4px 12px rgba(0,0,0,0.06)',
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? 'auto' : 'none',
        transform: scrolled ? 'translateY(0)' : 'translateY(8px)',
      }}
      aria-hidden={!scrolled}
    >
      <a
        href="/#qualify"
        className="w-full inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          backgroundColor: 'var(--kora-brand)',
          color: '#fff',
          padding: '14px 24px',
          fontSize: '15px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
        }}
      >
        Book Free Consultation
      </a>
    </div>
  )
}
