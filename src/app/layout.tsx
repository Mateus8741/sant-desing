import { NavBar } from '@/components/Navbar'
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
      <body className={`${inter.className} bg-[#121214]`}>
        <NavBar />

        {children}

        <footer className="flex items-center justify-center w-full h-24 bg-white">
          <p className="text-black font-light">Feito com ❤️ por mim</p>
        </footer>
      </body>
    </html>
  )
}
