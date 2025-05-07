'use client'

import { Button } from '@/components/common'
import { Search } from '@/components/icons'
import { NAVIGATIONS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false)
      } else if (window.pageYOffset > 150) {
        setScroll(true)
      }
      return () => (window.onscroll = null)
    }
  }, [])
  return (
    <header
      className={`bg-[#0C0A09] ${
        scroll ? 'fixed inset-x-0 top-0 z-50 w-full' : ''
      }`}
    >
      <div className="h-[92px] mx-auto container px-16 flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={151.33}
              height={44}
              className="object-cover"
            />
          </Link>
          <ul className="flex">
            {NAVIGATIONS.map((navigation: (typeof NAVIGATIONS)[number]) => (
              <li key={navigation.title}>
                <Link
                  href={navigation.href}
                  className="flex items-center gap-x-2.5 px-3 py-2.5 font-semibold text-white"
                >
                  {navigation.icon}
                  {navigation.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-x-2 items-center">
          <div className="flex items-center gap-x-2.5 px-3 py-2.5 rounded-lg bg-white border-[#CDCDCD] w-[324px] h-11 justify-between">
            <input
              id="search"
              type="text"
              className="placeholder:text-[#D4D4D4] outline-none font-semibold text-black flex-1"
              placeholder="Fortnight: Sabrina"
            />
            <label htmlFor="search">
              <Search />
            </label>
          </div>
          <Button className="rounded-lg">Login</Button>
          <Image
            src="/images/usa-flag.png"
            alt="usa-flag"
            width={32}
            height={24}
            className="object-cover"
          />
        </div>
      </div>
    </header>
  )
}
