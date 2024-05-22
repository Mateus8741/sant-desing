import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    src: '/movbank.svg',
    alt: 'Movbank',
    href: 'https://www.behance.net/gallery/196261239/MovBank',
  },
  {
    src: '/confeitar.svg',
    alt: 'Confeitar Amar',
    href: 'https://www.behance.net/gallery/193326941/Confeitari-Amar',
  },
  {
    src: '/omni.svg',
    alt: 'OmniFoods',
    href: 'https://www.behance.net/gallery/199174167/Omni-Foods-%28Aplicativo%29',
  },
  {
    src: '/mock.svg',
    alt: 'Mariane Correia',
    href: 'https://www.behance.net/gallery/199174255/Mariane-Correia-Arq',
  },
]

export function Section2() {
  return (
    <div className="text-white">
      <h2 className="font-bold text-5xl">Projetos</h2>

      <p className="text-lg font-normal w-[369px] mt-4">
        Projetos de indentidade visual, diagramação, social media e entre
        outros.
      </p>

      <div className="flex flex-wrap gap-3 mt-10">
        {projects.map((project, index) => (
          <Link key={project.alt} href={project.href}>
            <motion.div
              key={project.alt}
              className="relative rounded-[2.5rem] overflow-hidden hover:scale-95 transition-transform duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.5 }}
            >
              <Image
                src={project.src}
                width={560}
                height={283}
                alt={project.alt}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="text-white text-2xl font-bold">
                  {project.alt}
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
