import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileStickyBarBlog from '@/components/layout/MobileStickyBarBlog'
import CTAButton from '@/components/ui/CTAButton'
import { sortedArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'The Kora Health Journal | Metabolic Health Guides',
  description:
    'Evidence-based articles on tirzepatide, GLP-1 treatment, and physician-led weight management in the Philippines.',
  openGraph: {
    title: 'The Kora Health Journal | Metabolic Health Guides',
    description:
      'Evidence-based articles on tirzepatide, GLP-1 treatment, and physician-led weight management in the Philippines.',
  },
}

export default function LearnPage() {
  return (
    <>
      <Header variant="default" />
      <main
        className="pb-20 md:pb-0"
        style={{ backgroundColor: 'var(--kora-bg)', minHeight: '100vh' }}
      >
        {/* Hero */}
        <section className="pt-28 pb-12 text-center px-6">
          <h1
            className="font-sans font-bold text-balance"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.1,
              color: 'var(--kora-text-primary)',
            }}
          >
            The Kora Health Journal
          </h1>
          <p
            className="text-lg mt-4 leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--kora-text-body)' }}
          >
            Evidence-based guidance on metabolic health, weight management, and
            physician-led care in the Philippines.
          </p>
        </section>

        {/* Article list */}
        <section className="max-w-3xl mx-auto px-6 mt-4 mb-16">
          <ul>
            {sortedArticles.map((article, i) => (
              <li
                key={article.slug}
                className="py-6"
                style={{
                  borderBottom:
                    i < sortedArticles.length - 1
                      ? '1px solid var(--kora-border-light)'
                      : 'none',
                }}
              >
                {/* Category pill */}
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: 'var(--kora-brand-subtle)',
                    color: 'var(--kora-brand)',
                  }}
                >
                  {article.category}
                </span>

                {/* Title */}
                <h2 className="mt-2">
                  <Link
                    href={`/learn/${article.slug}`}
                    className="font-medium text-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm"
                    style={{ color: 'var(--kora-text-primary)' }}
                    onMouseEnter={e =>
                      ((e.currentTarget as HTMLElement).style.color =
                        'var(--kora-brand)')
                    }
                    onMouseLeave={e =>
                      ((e.currentTarget as HTMLElement).style.color =
                        'var(--kora-text-primary)')
                    }
                  >
                    {article.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p
                  className="text-sm mt-1 line-clamp-2 leading-relaxed"
                  style={{ color: 'var(--kora-text-body)' }}
                >
                  {article.excerpt}
                </p>

                {/* Reading time */}
                <p
                  className="text-xs mt-2"
                  style={{ color: 'var(--kora-text-muted)' }}
                >
                  {article.readingTime}
                </p>
              </li>
            ))}
          </ul>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p
              className="text-base font-medium mb-4"
              style={{ color: 'var(--kora-text-primary)' }}
            >
              Looking for personalized guidance?
            </p>
            <CTAButton href="/#qualify" variant="primary">
              Book Your Free Consultation
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyBarBlog />
    </>
  )
}
