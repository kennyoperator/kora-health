'use client'

import Link from 'next/link'
import CTAButton from '@/components/ui/CTAButton'
import type { Article } from '@/lib/articles'

interface MarkdownRendererProps {
  content: string
  article: Article
}

// Inject mid-article CTA after the 4th h2
const MID_CTA_AFTER_H2 = 4

function MidCTA() {
  return (
    <div
      className="rounded-r-xl p-6 my-10"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--kora-brand-subtle) 40%, transparent)',
        borderLeft: '3px solid var(--kora-brand)',
      }}
    >
      <p
        className="font-medium text-lg"
        style={{ color: 'var(--kora-text-primary)' }}
      >
        Ready to speak with a physician?
      </p>
      <p
        className="text-sm mt-1"
        style={{ color: 'var(--kora-text-body)' }}
      >
        Kora Health offers free consultations with licensed Philippine doctors. No cost, no obligation.
      </p>
      <div className="mt-4">
        <CTAButton href="/#qualify" variant="primary" size="sm">
          Book Your Free Consultation
        </CTAButton>
      </div>
    </div>
  )
}

// Inline markdown-to-JSX renderer (no external dependency)
export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let h2Count = 0
  let listBuffer: string[] = []
  let paraBuffer: string[] = []
  let keyIndex = 0

  const key = () => `md-${keyIndex++}`

  function flushList() {
    if (listBuffer.length === 0) return
    elements.push(
      <ul
        key={key()}
        className="pl-5 mb-6"
        style={{ borderLeft: '2px solid var(--kora-brand-subtle)' }}
      >
        {listBuffer.map((item, i) => (
          <li
            key={i}
            className="list-disc text-base leading-[1.8] mb-1"
            style={{ color: 'var(--kora-text-body)' }}
          >
            {renderInline(item)}
          </li>
        ))}
      </ul>
    )
    listBuffer = []
  }

  function flushPara() {
    if (paraBuffer.length === 0) return
    const text = paraBuffer.join(' ').trim()
    if (!text) {
      paraBuffer = []
      return
    }
    elements.push(
      <p
        key={key()}
        className="text-base mb-6"
        style={{ color: 'var(--kora-text-body)', lineHeight: 1.8 }}
      >
        {renderInline(text)}
      </p>
    )
    paraBuffer = []
  }

  // Render inline markdown: **bold**, [text](url)
  function renderInline(text: string): React.ReactNode {
    const parts: React.ReactNode[] = []
    // Split on **bold** and [text](url) patterns
    const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g
    let last = 0
    let m: RegExpExecArray | null

    while ((m = regex.exec(text)) !== null) {
      if (m.index > last) {
        parts.push(text.slice(last, m.index))
      }
      const token = m[0]
      if (token.startsWith('**')) {
        const inner = token.slice(2, -2)
        parts.push(
          <strong key={m.index} style={{ fontWeight: 500, color: 'var(--kora-text-primary)' }}>
            {inner}
          </strong>
        )
      } else {
        // Link
        const linkMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/)
        if (linkMatch) {
          const linkText = linkMatch[1]
          const href = linkMatch[2]
          const isInternal = href.startsWith('/learn')
          parts.push(
            isInternal ? (
              <Link
                key={m.index}
                href={href}
                className="underline underline-offset-4 transition-colors duration-200"
                style={{ color: 'var(--kora-brand)' }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLElement).style.color = 'var(--kora-brand-hover)')
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLElement).style.color = 'var(--kora-brand)')
                }
              >
                {linkText}
              </Link>
            ) : (
              <a
                key={m.index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors duration-200"
                style={{ color: 'var(--kora-brand)' }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLElement).style.color = 'var(--kora-brand-hover)')
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLElement).style.color = 'var(--kora-brand)')
                }
              >
                {linkText}
              </a>
            )
          )
        }
      }
      last = m.index + token.length
    }
    if (last < text.length) {
      parts.push(text.slice(last))
    }
    return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : parts
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // h2
    if (line.startsWith('## ')) {
      flushList()
      flushPara()
      h2Count++
      elements.push(
        <h2
          key={key()}
          className="font-sans font-bold mt-12 mb-4"
          style={{
            fontSize: '1.5rem',
            color: 'var(--kora-text-primary)',
          }}
        >
          {line.slice(3)}
        </h2>
      )
      // Insert mid-article CTA after the 4th h2
      if (h2Count === MID_CTA_AFTER_H2) {
        elements.push(<MidCTA key={key()} />)
      }
      continue
    }

    // List item
    if (line.startsWith('- ')) {
      flushPara()
      listBuffer.push(line.slice(2))
      continue
    }

    // Empty line — flush buffers
    if (line.trim() === '') {
      flushList()
      flushPara()
      continue
    }

    // Accumulate paragraph text
    flushList()
    paraBuffer.push(line)
  }

  // Flush remaining
  flushList()
  flushPara()

  return <>{elements}</>
}
