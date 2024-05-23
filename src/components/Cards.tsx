import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  src: string
  alt: string
  href: string
  index: number
}

export function Cards(project: Project) {
  return (
    <Link href={project.href}>
      <motion.div
        key={project.alt}
        className="relative rounded-3xl overflow-hidden hover:scale-95 transition-transform duration-300 ease-in-out"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: project.index * 0.5 }}
      >
        <Image
          src={project.src}
          width={560}
          height={283}
          alt={project.alt}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
            {project.alt}
          </span>
        </div>
      </motion.div>
    </Link>
  )
}
