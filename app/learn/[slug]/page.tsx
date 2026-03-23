import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Stethoscope } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileStickyBarBlog from '@/components/layout/MobileStickyBarBlog'
import CTAButton from '@/components/ui/CTAButton'
import { MarkdownRenderer } from '@/components/blog/MarkdownRenderer'
import { articles, getArticleBySlug, getRelatedArticles } from '@/lib/articles'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  const canonicalUrl = `https://korahealth.ph/learn/${slug}`

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      url: canonicalUrl,
      type: 'article',
      publishedTime: article.publishedDate,
    },
  }
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-PH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const related = getRelatedArticles(article.relatedSlugs)

  return (
    <>
      <Header variant="default" />
      <main
        className="pb-20 md:pb-0"
        style={{ backgroundColor: 'var(--kora-bg)', minHeight: '100vh' }}
      >
        {/* Article header */}
        <div className="max-w-3xl mx-auto pt-28 pb-0 px-6">
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

          {/* h1 */}
          <h1
            className="font-sans font-bold mt-3 text-balance"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              lineHeight: 1.15,
              color: 'var(--kora-text-primary)',
            }}
          >
            {article.title}
          </h1>

          {/* Meta line */}
          <p
            className="mt-4 text-sm"
            style={{ color: 'var(--kora-text-muted)' }}
          >
            {article.readingTime} · Published {formatDate(article.publishedDate)} · Reviewed by{' '}
            {article.reviewedBy}
          </p>

          {/* Divider */}
          <div
            className="mt-6"
            style={{ borderBottom: '1px solid var(--kora-border-light)' }}
          />
        </div>

        {/* Article body */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-6">
          <MarkdownRenderer content={article.content} article={article} />

          {/* End-of-article CTA */}
          <div
            className="rounded-2xl p-8 md:p-10 text-center mt-12"
            style={{ backgroundColor: 'var(--kora-surface-alt)' }}
          >
            <h2
              className="font-sans font-bold"
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                color: 'var(--kora-text-primary)',
              }}
            >
              Start With a Free Consultation
            </h2>
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: 'var(--kora-text-body)' }}
            >
              Talk to a licensed physician about your weight management options. No cost, no pressure.
            </p>
            <div className="mt-6">
              <CTAButton href="/#qualify" variant="primary">
                Book Your Free Consultation
              </CTAButton>
            </div>
          </div>

          {/* Disclaimer */}
          <p
            className="mt-8 pt-4 text-xs leading-relaxed"
            style={{
              borderTop: '1px solid var(--kora-border-light)',
              color: 'var(--kora-text-muted)',
            }}
          >
            This article is for educational purposes only and does not constitute medical advice. All
            treatments require evaluation and prescription by a licensed physician. Individual results
            vary. Kora Health does not guarantee specific outcomes.
          </p>

          {/* Reviewed-by badge */}
          <div
            className="inline-flex items-center gap-3 rounded-lg p-3 mt-6"
            style={{ border: '1px solid var(--kora-border-light)' }}
          >
            <Stethoscope
              size={20}
              strokeWidth={1.75}
              style={{ color: 'var(--kora-brand)', flexShrink: 0 }}
              aria-hidden="true"
            />
            <div>
              <p
                className="text-sm font-medium"
                style={{ color: 'var(--kora-text-primary)' }}
              >
                Reviewed by {article.reviewedBy}
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: 'var(--kora-text-muted)' }}
              >
                {article.reviewedByTitle}
              </p>
            </div>
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <div
              className="mt-16 pt-8"
              style={{ borderTop: '1px solid var(--kora-border-light)' }}
            >
              <p
                className="font-medium text-lg mb-6"
                style={{ color: 'var(--kora-text-primary)' }}
              >
                Continue Reading
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map(rel => (
                  <div key={rel.slug}>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: 'var(--kora-brand-subtle)',
                        color: 'var(--kora-brand)',
                      }}
                    >
                      {rel.category}
                    </span>
                    <h3 className="mt-2">
                      <Link
                        href={`/learn/${rel.slug}`}
                        className="font-medium text-base leading-snug transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm"
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
                        {rel.title}
                      </Link>
                    </h3>
                    <p
                      className="text-sm mt-1 line-clamp-2 leading-relaxed"
                      style={{ color: 'var(--kora-text-body)' }}
                    >
                      {rel.excerpt}
                    </p>
                    <p
                      className="text-xs mt-2"
                      style={{ color: 'var(--kora-text-muted)' }}
                    >
                      {rel.readingTime}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <MobileStickyBarBlog />
    </>
  )
}
