import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileStickyBar from '@/components/layout/MobileStickyBar'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import HowItWorks from '@/components/sections/HowItWorks'
import WhatIsRetatrutide from '@/components/sections/WhatIsRetatrutide'
import WhyKora from '@/components/sections/WhyKora'
import ResultsSection from '@/components/sections/ResultsSection'
import PatientResults from '@/components/sections/PatientResults'
import TeamSection from '@/components/sections/TeamSection'
import ProgramOverview from '@/components/sections/ProgramOverview'
import ExpectationTimeline from '@/components/sections/ExpectationTimeline'
import QualificationSection from '@/components/sections/QualificationSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTA from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <main className="pb-20 md:pb-0">
      <Header />
      <Hero />
      <TrustBar />
      <WhatIsRetatrutide />
      <HowItWorks />
      <WhyKora />
      <ResultsSection />
      <PatientResults />
      <TeamSection />
      <ProgramOverview />
      <ExpectationTimeline />
      <QualificationSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <MobileStickyBar />
    </main>
  )
}
