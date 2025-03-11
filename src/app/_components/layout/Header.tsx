'use client'

import { cn, siteConfig, useScroll } from '@/lib'
import { RiCloseLine, RiMenuLine } from '@remixicon/react'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Button } from '@/components/button'
import Image from 'next/image'
import { Show } from 'react-smart-conditional'

export function Header() {
  const scrolled = useScroll(15)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia('(min-width: 768px)')
    const handleMediaQueryChange = () => {
      setOpen(false)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    handleMediaQueryChange()

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <>
      <header
        className={cn(
          'z-50 mx-auto flex max-w-7xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform',
          open ? 'h-52' : 'h-16',
          scrolled || open
            ? 'backdrop-blur-nav max-w-3xl border-gray-100 bg-white/80 shadow-xl shadow-black/5  fixed inset-x-3 top-4'
            : 'bg-white/0',
        )}
      >
        <div className="w-full md:my-auto">
          <div className="relative flex items-center justify-between h-[38px] w-auto">
            <Link href={siteConfig.baseLinks.home} aria-label="Home">
              <span className="sr-only">WDEF logo</span>
              <Image
                alt="WDEF logo"
                src="/logo.png"
                width="120"
                height="40"
                className="object-cover hidden lg:block"
              />
              <Image
                alt="WDEF logo"
                src="/logo-alt.png"
                width="60"
                height="40"
                className="object-cover block lg:hidden"
              />
            </Link>
            <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
              <div className="flex items-center gap-10 font-medium">
                <Link className="px-2 py-1 text-gray-900" href={siteConfig.baseLinks.about}>
                  About
                </Link>
                <Link
                  className="px-2 py-1 text-gray-900"
                  href={siteConfig.baseLinks.volunteer}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Volunteer
                </Link>
                <Link className="px-2 py-1 text-gray-900" href={siteConfig.baseLinks.contact}>
                  Contact
                </Link>
              </div>
            </nav>
            <Button className="hidden h-10 font-semibold md:flex">Donate</Button>
            <div className="flex gap-x-2 md:hidden">
              <Button>Donate</Button>
              <Show
                as={Button}
                onClick={() => setOpen(!open)}
                variant="light"
                className="aspect-square p-2"
              >
                <Show.If as={Fragment} condition={open}>
                  <span className="sr-only">Close menu</span>
                  <RiCloseLine aria-hidden="true" className="size-5" />
                </Show.If>
                <Show.If as={Fragment} condition={!open}>
                  <span className="sr-only">Open menu</span>
                  <RiMenuLine aria-hidden="true" className="size-5" />
                </Show.If>
              </Show>
            </div>
          </div>
          <nav
            className={cn(
              'my-6 flex text-lg ease-in-out will-change-transform md:hidden',
              open ? '' : 'hidden',
            )}
          >
            <ul className="space-y-4 font-medium">
              <li onClick={() => setOpen(false)}>
                <Link href={siteConfig.baseLinks.about}>About</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href={siteConfig.baseLinks.volunteer}>Volunteer</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href={siteConfig.baseLinks.contact}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
