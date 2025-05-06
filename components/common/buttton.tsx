type Props = {
  className?: string
  children: React.ReactNode
}

export default function Buttton({ className, children, ...props }: Props) {
  return (
    <button
      className={`bg-[#FF1E02] px-3 py-2.5 text-white cursor-pointer font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
