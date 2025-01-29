import { siteConfig } from '@/lib'
import Image from 'next/image'
import { Mail, Twitter, Linkedin, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const quickLinks = [
    { href: siteConfig.baseLinks.about, label: 'About Us' },
    { href: siteConfig.baseLinks.volunteer, label: 'Volunteer', target: '_blank' },
    { href: siteConfig.baseLinks.contact, label: 'Contact' },
    { href: siteConfig.baseLinks.donate, label: 'Donate' },
  ]

  const socialLinks = [
    { icon: Mail, href: siteConfig.socials.email, label: 'Email' },
    { icon: Twitter, href: siteConfig.socials.twitter, label: 'X' },
    {
      icon: Linkedin,
      href: siteConfig.socials.linkedin,
      label: 'LinkedIn',
    },
    { icon: Instagram, href: siteConfig.socials.instagram, label: 'Instagram' },
  ]

  return (
    <footer className="bg-[#1C1C1C] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-[50px] h-[30px]">
                <Image
                  alt="WDEF Logo"
                  src="/logo-alt.png"
                  height={50}
                  width={50}
                  className="object-cover h-full w-full"
                />
              </div>
              <span className="text-xl font-semibold font-ibmPlexSansSerif">WDEF</span>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-ibmPlexSansSerif">
                Transforming Youth Into Tech Innovators
              </h2>
              <p className="text-gray-400 font-poppins">
                We&apos;re bridging the digital divide by equipping underserved youth with
                technology education, resources, and mentorship to become the next generation of
                tech leaders. 🌟 💻
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold font-ibmPlexSansSerif">Join Our Mission</h2>
            <p className="text-gray-400 font-poppins">
              Help us empower youth through technology. Whether you want to mentor, volunteer, or
              support our digital inclusion initiatives, connect with us through these channels:
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold font-ibmPlexSansSerif">Quick links</h2>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors font-poppins"
                  target={link.target}
                  {...(link.target === '_blank' && { rel: 'noopener noreferrer' })}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} WDEF - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
