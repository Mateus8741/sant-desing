'use client'

import { NavBar } from '@/components/Navbar'
import { Section1 } from '@/components/section1'
import { Section2 } from '@/components/section2'
import { Section3 } from '@/components/section3'
import { useSectionObserver } from '@/hooks/observer'
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('')

  const homeRef = useRef<HTMLElement | null>(null)
  const projectsRef = useRef<HTMLElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const serviceRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)

  const sections = [homeRef, projectsRef, aboutRef, serviceRef, contactRef]

  useSectionObserver({
    setActiveSection,
    sections: sections.map((ref) => ref.current),
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-36">
      <div className="w-full sticky top-0 py-4 z-10 flex flex-col items-center gap-4 bg-[#121214]">
        <Image src="/logo.svg" width={200} height={200} alt="Logo" />
        <NavBar activeSection={activeSection} />
      </div>

      <section
        id="home"
        ref={homeRef}
        className="flex flex-col gap-4 justify-center min-h-screen"
      >
        <h1 className="font-bold text-white text-9xl">
          Criatividade & Identidade Visual
        </h1>

        <Section1 />
      </section>

      <section id="projects" ref={projectsRef} className="flex flex-col w-full">
        <Section2 />
      </section>

      <Image
        src="/maisProjetos.png"
        width={650}
        height={68}
        className="cursor-pointer mt-24"
        alt="Mais projetos"
      />

      <section
        id="services"
        ref={serviceRef}
        className="flex items-center justify-center"
      >
        <Section3 />
      </section>

      <section
        id="about"
        ref={aboutRef}
        className="flex items-center justify-center min-h-screen"
      >
        <h2>sobre</h2>
      </section>

      <section
        id="contact"
        ref={contactRef}
        className="flex items-center justify-center min-h-screen"
      >
        <h2 className="font-bold text-white text-6xl">Contato</h2>
      </section>
    </main>
  )
}
