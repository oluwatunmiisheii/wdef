import { Geist, Geist_Mono, Inter, IBM_Plex_Serif, Poppins } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib'
import { Header } from './_components/layout/Headers'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Footer from './_components/layout/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const ibmPlexSerif = IBM_Plex_Serif({
  variable: '--font-ibm-plex-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('https://wdef.ng'),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    'Wilson Digital Empowerement Foundation',
    'WDEF',
    'non-profit',
    'youth',
    'digital skills',
    'digital empowerment',
    'digital inclusion',
  ],
  creator: 'wilson Adenuga',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@Adenugawilson',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="bg-[#1C1C1C] py-2">
          <div className="flex justify-center items-center text-white max-w-6xl mx-auto space-x-2">
            <p>We are calling for volunteers</p>
            <Link
              className="flex items-center gap-1 bg-white px-2 py-1 rounded-md font-medium text-black transition-colors text-sm"
              href="https://forms.gle/rFvx2MmBgVUVE4Rg7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Now
              <ArrowRight className="size-4" color="black" />
            </Link>
          </div>
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
