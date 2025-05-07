'use client'

import { Button } from '@/components/common'
import { FOTTER_LINKS, LEGAL_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Footer() {
  return (
    <footer className="bg-black font-['Inter',_sans-serif] ">
      <div className="container mx-auto">
        <div className="flex gap-x-6 pt-10 pb-5 px-[60px]">
          <div className="grid grid-cols-3 gap-x-5 flex-1">
            <ColumnInformation
              title="Orders"
              inforLinks={FOTTER_LINKS.orders}
            />
            <ColumnInformation
              title="Resources"
              inforLinks={FOTTER_LINKS.resources}
            />
            <ColumnInformation
              title="Customers"
              inforLinks={FOTTER_LINKS.customers}
            />
          </div>
          <div className="text-white space-y-6 w-[275px]">
            <Button className="uppercase font-['Poppins',_sans-serif]">
              Contact us
            </Button>
            <ul className="space-y-2">
              {FOTTER_LINKS['contact-us'].map((inforLink, index) => (
                <li key={index}>
                  <Link
                    href={inforLink.href}
                    className="text-xl tracking-[0.8px] font-normal"
                  >
                    {inforLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between h-[98px] items-center px-[34px]">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={268}
              height={78}
              className="object-cover"
            />
          </Link>
          <div className="flex flex-col items-center justify-center space-y-1 md:flex-row md:space-y-0 md:space-x-2 text-[#616161]">
            <span>© 2025 HABBY PTE. LTD. All Rights Reserved.</span>
            {LEGAL_LINKS.map((link, index) => (
              <Fragment key={index}>
                <span className="hidden md:inline">|</span>
                <Link href={link.href} className="underline hover:text-white">
                  {link.label}
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

const ColumnInformation = ({
  title,
  inforLinks,
}: {
  title: string
  inforLinks: (typeof FOTTER_LINKS)[keyof typeof FOTTER_LINKS]
}) => {
  return (
    <div className="text-white">
      <h3 className="font-bold uppercase leading-8 tracking-normal text-2xl mb-2">
        {title}
      </h3>
      <ul className="space-y-2">
        {inforLinks.map((inforLink, index) => (
          <li key={index}>
            <Link
              href={inforLink.href}
              className="text-xl tracking-[0.8px] font-normal"
            >
              {inforLink.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
