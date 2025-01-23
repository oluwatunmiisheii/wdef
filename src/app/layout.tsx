import { Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib'
import { Header } from './_components/layout/header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
      <body className={`${inter.className} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
