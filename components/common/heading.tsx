import React from 'react'

type Props = { children: React.ReactNode; className?: string }

export default function Heading({ children, className = '' }: Props) {
  return (
    <h3
      className={`text-5xl leading-10 -tracking-[0.3px] font-bold text-[#D9D9D9] ${className}`}
    >
      {children}
    </h3>
  )
}
