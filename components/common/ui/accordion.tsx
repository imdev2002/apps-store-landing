'use client'

import { Triangle } from '@/components/icons'
import { useState } from 'react'

const AccordionItem = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onClick: () => void
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className="border-b py-3 px-8 bg-[#2F0700] font-inter text-white"
      style={{
        border: '1px solid',
        borderImageSource:
          'linear-gradient(96.75deg, #C9C9C9 -2.49%, #000000 51.75%, #C9C9C9 102.95%)',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex gap-x-6 items-center py-6 text-left"
      >
        <Triangle className={isOpen ? '' : 'rotate-180'} />
        <span className="font-bold text-2xl leading-8 tracking-normal">
          {title}
        </span>
      </button>
      {isOpen && (
        <div className="py-5 font-light leading-6 tracking-[0.8px] text-xl">
          {children}
        </div>
      )}
    </div>
  )
}

const Accordion = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full space-y-3">{children}</div>
}

export { Accordion, AccordionItem }
