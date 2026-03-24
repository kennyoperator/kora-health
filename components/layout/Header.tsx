'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface HeaderProps {
  variant?: 'default' | 'thankyou'
}

export default function Header({ variant = 'default' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById('qualify')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center"
      style={{
        backgroundColor: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--kora-border-light)',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 200ms ease',
      }}
    >
      <div className="w-full max-w-[1120px] mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm">
          <Image
            src="/logo.png"
            alt="Kora Health"
            width={140}
            height={40}
            className="h-[32px] md:h-[40px] flex-shrink-0 object-contain"
            style={{ width: 'auto' }}
          />
        </Link>

        {/* Right side */}
        {variant === 'default' ? (
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              backgroundColor: 'var(--kora-brand)',
              color: '#fff',
              padding: '10px 20px',
              fontSize: '14px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
            }}
            onMouseEnter={e => {
              const t = e.currentTarget
              t.style.backgroundColor = 'var(--kora-brand-hover)'
              t.style.transform = 'translateY(-1px)'
              t.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)'
            }}
            onMouseLeave={e => {
              const t = e.currentTarget
              t.style.backgroundColor = 'var(--kora-brand)'
              t.style.transform = 'translateY(0)'
              t.style.boxShadow = '0 1px 2px rgba(0,0,0,0.08)'
            }}
          >
            Book Free Consultation
          </button>
        ) : (
          <Link
            href="/"
            className="text-sm font-medium underline underline-offset-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm"
            style={{ color: 'var(--kora-brand)' }}
          >
            ← Back to Home
          </Link>
        )}
      </div>
    </header>
  )
}
