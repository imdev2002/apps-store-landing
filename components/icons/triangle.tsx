import { ComponentProps } from 'react'

export default function Triangle(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={41}
      height={40}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20.5 15.7333L12.5 24.2666H28.5L20.5 15.7333Z" fill="white" />
    </svg>
  )
}
