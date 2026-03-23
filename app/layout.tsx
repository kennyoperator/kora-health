import type { Metadata } from 'next'
import { Instrument_Serif, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument-serif',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Retatrutide in the Philippines | Physician-Led Treatment | Kora Health',
  description:
    'Physician-led retatrutide treatment in the Philippines. Free consultation, personalized prescribing, FDA-regulated compounding, cold-chain delivery, and ongoing medical support.',
  keywords: 'retatrutide philippines, retatrutide treatment, triple agonist weight loss, physician-led metabolic health, reta philippines',
  openGraph: {
    title: 'Retatrutide Treatment in the Philippines | Kora Health',
    description: 'Physician-led retatrutide program. Free consultation. FDA-regulated pharmacy. Cold-chain delivery.',
    type: 'website',
    locale: 'en_PH',
  },
  themeColor: '#FAF9F7',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-PH" data-scroll-behavior="smooth" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
