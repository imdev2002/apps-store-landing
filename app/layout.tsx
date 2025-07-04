import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Apps Store',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`} suppressHydrationWarning={false}>
        <Header />
        <main className="bg-[url('/images/Background.png')] bg-cover bg-top bg-no-repeat">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
