import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sant Design',
  description: 'Sant Design é uma agência de design e desenvolvimento web.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#121214] flex flex-col items-center justify-center `}
      >
        {children}

        <Footer />
      </body>
    </html>
  )
}
