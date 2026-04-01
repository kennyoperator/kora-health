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
    q: 'How much does retatrutide cost?',
    a: 'Pricing varies by dosage tier. Starter doses begin at ₱X,XXX per month, maintenance doses at ₱X,XXX per month. All pricing is displayed transparently on the product page. Free nationwide delivery included.',
  },
  {
    q: 'Do I need a prescription?',
    a: "Yes. After you place your order, you'll complete a medical intake form. A licensed Philippine physician will review your profile within 24 hours. If approved, your prescription is sent to our FDA-regulated pharmacy and your order ships within 2–5 days.",
  },
  {
    q: 'Is retatrutide safe?',
    a: 'Retatrutide has been studied in large clinical trials involving hundreds of participants. Common side effects include nausea, diarrhea, and constipation — primarily during dose escalation. A unique side effect called dysesthesia (skin tingling) was observed in approximately 21% of participants at the highest dose, though it was generally mild. Your physician will evaluate your full health history and monitor you throughout treatment.',
  },
  {
    q: 'How is medication delivered?',
    a: 'All medications are shipped in temperature-controlled packaging using cold-chain logistics from pharmacy to your doorstep. Delivery takes 2–5 business days nationwide.',
  },
  {
    q: 'Do I need to inject myself?',
    a: 'Yes, retatrutide is a once-weekly self-injection. We provide detailed video guidance and your care team can walk you through it live. Most patients find it straightforward after the first time.',
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Yes. You can pause or cancel your subscription at any time from your account dashboard. No penalties, no lock-ins.',
  },
  {
    q: 'How does retatrutide compare to Ozempic or Mounjaro?',
    a: 'Retatrutide targets three receptors (GLP-1, GIP, and glucagon) compared to one for semaglutide (Ozempic) and two for tirzepatide (Mounjaro). Clinical trials show approximately 28.7% weight loss with retatrutide versus 20.2% for tirzepatide and 14.9% for semaglutide.',
  },
  {
    q: 'Where in the Philippines can I order?',
    a: 'Kora Health delivers nationwide. We serve patients across Metro Manila — Makati, BGC, Quezon City — as well as Cebu, Davao, and throughout the Philippines.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept GCash, Maya, bank transfer, and all major credit cards. All pricing is in Philippine pesos with no hidden fees.',
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
