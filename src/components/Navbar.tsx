const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Sobre', href: '#about' },
  { name: 'Contato', href: '#contact' },
]

export function NavBar() {
  return (
    <nav className="flex m-auto items-center justify-between p-1 bg-white rounded-full w-fit">
      <ul className="flex items-center space-x-8">
        {navLinks.map((link) => (
          <li key={link.href} className="bg-black py-2 px-4 rounded-full">
            <a
              href={link.href}
              className="text-white font-light hover:text-zinc-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
