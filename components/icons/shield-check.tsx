import { ComponentProps } from 'react'

export default function ShieldCheck(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2.625L19.875 5.625V13.125C19.875 16.5 16.875 19.875 12 21.375C7.125 19.875 4.125 16.875 4.125 13.125V5.625L12 2.625Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.625 11.625L10.875 13.875L15.375 8.625"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
