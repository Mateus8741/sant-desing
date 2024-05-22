import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Serviços', href: '#services' },
  { name: 'Sobre', href: '#about' },
  { name: 'Contato', href: '#contact' },
]

interface NavLink {
  activeSection: string
}

export function NavBar({ activeSection }: NavLink) {
  const [activeStyles, setActiveStyles] = useState({ left: 0, width: 0 })
  const navRefs = useRef<Array<HTMLLIElement | null>>([])

  useEffect(() => {
    const index = navLinks.findIndex(
      (link) => link.href.slice(1) === activeSection,
    )
    if (index !== -1 && navRefs.current[index]) {
      const { offsetLeft, offsetWidth } = navRefs.current[index] ?? {}
      setActiveStyles({ left: offsetLeft ?? 0, width: offsetWidth ?? 0 })
    }
  }, [activeSection])

  return (
    <nav className="relative flex m-auto items-center justify-between p-1 bg-white rounded-full w-fit">
      <motion.div
        className="absolute top-0 bottom-0 m-1 rounded-full bg-black"
        initial={false}
        animate={activeStyles}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      <ul className="flex items-center space-x-3 relative">
        {navLinks.map((link, index) => (
          <li
            key={link.href}
            ref={(el: never) => (navRefs.current[index] = el)}
            className={`relative z-10 py-2 px-4 rounded-full ${activeSection === link.href.slice(1) && 'text-white'}`}
          >
            <Link
              href={link.href}
              className={`${activeSection === link.href.slice(1) ? 'text-white font-bold' : 'text-zinc-500 font-light'}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
