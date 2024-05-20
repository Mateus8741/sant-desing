const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Sobre', href: '#about' },
  { name: 'Contato', href: '#contact' },
]

interface NavLink {
  activeSection: string
}

export function NavBar({ activeSection }: NavLink) {
  return (
    <nav className="flex m-auto items-center justify-between p-1 bg-white rounded-full w-fit">
      <ul className="flex items-center space-x-4">
        {navLinks.map((link) => (
          <li
            key={link.href}
            className={`py-2 px-4 rounded-full ${activeSection === link.href.slice(1) ? 'text-zinc-300 bg-black' : 'hover:text-zinc-300'}`}
          >
            <a
              href={link.href}
              className={`font-light ${activeSection === link.href.slice(1) ? 'text-white' : 'text-zinc-500'}`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
