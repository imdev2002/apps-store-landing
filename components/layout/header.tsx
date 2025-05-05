import { Search } from '@/components/icons'
import { NAVIGATIONS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="px-16 h-[92px] bg-[#0C0A09] flex items-center justify-between">
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
        <button className="px-3 py-2.5 bg-[#FF1E02] rounded-lg font-semibold cursor-pointer">
          Log in
        </button>
        <Image
          src="/images/usa-flag.png"
          alt="usa-flag"
          width={32}
          height={24}
          className="object-cover"
        />
      </div>
    </header>
  )
}
