'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'

export default function ProductSection() {
  return (
    <section
      id="product"
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--kora-bg-white)' }}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Column — Product Image */}
          <div className="order-1 md:order-1">
            <Image
              src="/reta-vial-transparent.png"
              alt="Kora Health Retatrutide 10mg"
              width={420}
              height={420}
              className="mx-auto"
              priority
            />
          </div>

          {/* Right Column — Product Details */}
          <div className="order-2 md:order-2">
            
            {/* Product name */}
            <h2
              className="font-serif text-2xl md:text-3xl"
              style={{ color: 'var(--kora-text-primary)' }}
            >
              Kora Health Retatrutide 10mg
            </h2>

            {/* Tagline */}
            <p
              className="text-[15px] mt-2"
              style={{ color: 'var(--kora-text-body)' }}
            >
              Triple-agonist GLP-1 treatment. Once-weekly injection. Quality-assured and cold-chain delivered.
            </p>

            {/* Price */}
            <div className="mt-5">
              <p
                className="font-sans text-3xl font-bold"
                style={{ color: 'var(--kora-brand)' }}
              >
                ₱X,XXX
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: 'var(--kora-text-muted)' }}
              >
                Per vial · Everything included · No hidden fees
              </p>
            </div>

            {/* What's Included */}
            <div className="mt-6 space-y-2.5">
              {[
                'Pharmaceutical-grade retatrutide (10mg vial)',
                'Injection supplies + alcohol pads',
                'FDA-regulated compounding',
                'Third-party tested — Certificate of Analysis included',
                'Cold-chain delivery nationwide',
                'WhatsApp support from our care team',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <Check
                    size={18}
                    strokeWidth={2.5}
                    style={{ color: 'var(--kora-brand)', flexShrink: 0, marginTop: '1px' }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: 'var(--kora-text-body)' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="mt-8">
              <a
                href="/order"
                className="inline-block font-medium text-base rounded-full px-10 py-4 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'var(--kora-brand)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(27,58,92,0.12)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(27,58,92,0.18)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(27,58,92,0.12)'
                }}
              >
                Order Now
              </a>
            </div>

            {/* Secondary link */}
            <div className="mt-3">
              <a
                href="https://wa.me/639626625935"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-4"
                style={{ color: 'var(--kora-brand)' }}
              >
                Have questions? Message us on WhatsApp →
              </a>
            </div>

            {/* Trust badges */}
            <div
              className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs"
              style={{ color: 'var(--kora-text-muted)' }}
            >
              <span>FDA-regulated compounding</span>
              <span>·</span>
              <span>Third-party tested</span>
              <span>·</span>
              <span>Cold-chain delivery</span>
              <span>·</span>
              <span>GCash, Maya & bank transfer</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
