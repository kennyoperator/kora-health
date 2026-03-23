'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import ScrollReveal from '@/components/ui/ScrollReveal'

const faqs = [
  {
    q: 'What is retatrutide and how does it work?',
    a: 'Retatrutide is a triple-agonist injectable that activates GLP-1, GIP, and glucagon receptors simultaneously. It reduces appetite, improves blood sugar control, increases resting energy expenditure, and supports significant weight loss. In Phase 3 trials, participants lost an average of 28.7% of their body weight.',
  },
  {
    q: 'Is Kora Health a legitimate medical provider?',
    a: 'Yes. Kora Health is a registered Philippine business operating as a telehealth platform. All treatments are prescribed by Philippine-licensed physicians and compounded in FDA-regulated pharmacies. Our business registration details are displayed on this site.',
  },
  {
    q: 'How much does the retatrutide program cost?',
    a: 'Costs depend on your prescribed dose and treatment plan. Your free consultation includes completely transparent pricing. No hidden fees, no lock-ins, no subscriptions.',
  },
  {
    q: 'Is retatrutide safe?',
    a: 'Retatrutide has been studied in large clinical trials involving hundreds of participants. Common side effects include nausea, diarrhea, and constipation — primarily during dose escalation. A unique side effect called dysesthesia (skin tingling) was observed in approximately 21% of participants at the highest dose, though it was generally mild. Your physician will evaluate your full health history and monitor you throughout treatment.',
  },
  {
    q: 'How is this different from buying peptides online?',
    a: 'Most online sellers operate without medical oversight, sell unverified products, and provide no follow-up care. Kora Health requires a physician consultation before any prescription, sources from regulated pharmacies, and provides structured ongoing medical monitoring.',
  },
  {
    q: 'How is medication delivered?',
    a: 'All medications are shipped in temperature-controlled packaging using cold-chain logistics from pharmacy to your doorstep.',
  },
  {
    q: 'Do I need to inject myself?',
    a: 'Yes, retatrutide is a once-weekly self-injection. We provide detailed video guidance and your care team can walk you through it live. Most patients find it straightforward after the first time.',
  },
  {
    q: 'Where in the Philippines can I access Kora Health?',
    a: 'Kora Health is available nationwide through telehealth. We serve patients across Metro Manila — Makati, BGC, Quezon City — as well as Cebu, Davao, and throughout the Philippines. Medication is delivered to your door regardless of location.',
  },
  {
    q: 'How does retatrutide compare to Ozempic or Mounjaro?',
    a: 'Retatrutide targets three receptors (GLP-1, GIP, and glucagon) compared to one for semaglutide (Ozempic) and two for tirzepatide (Mounjaro). Clinical trials show approximately 28.7% weight loss with retatrutide versus 20.2% for tirzepatide and 14.9% for semaglutide. Cross-trial comparisons have limitations, but the magnitude of difference is consistent.',
  },
  {
    q: 'Why should I trust a new brand?',
    a: 'We display our founders\' real names and faces, our physician credentials and license numbers, our pharmacy sourcing, and our business registration. Kora Health is built as a long-term physician-led medical platform, not a pop-up operation.',
  },
]

export default function FAQSection() {
  return (
    <section
      id="faq"
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
            Common Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="max-w-2xl mx-auto mt-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  style={{ borderBottom: '1px solid var(--kora-border-light)' }}
                >
                  <AccordionTrigger
                    className="text-[15px] font-medium py-4 text-left transition-colors duration-200 hover:no-underline"
                    style={{ color: 'var(--kora-text-primary)' }}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-[15px] leading-relaxed pb-5"
                    style={{ color: 'var(--kora-text-body)' }}
                  >
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
