'use client'

import { NavBar } from '@/components/Navbar'
import { Section1 } from '@/components/section1'
import { Section2 } from '@/components/section2'
import { Section3 } from '@/components/section3'
import Image from 'next/image'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('')

  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 })
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.5,
  })
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 })
  const { ref: serviceRef, inView: serviceInView } = useInView({
    threshold: 0.5,
  })
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.5,
  })

  if (homeInView && activeSection !== 'home') setActiveSection('home')
  if (projectsInView && activeSection !== 'projects')
    setActiveSection('projects')
  if (aboutInView && activeSection !== 'about') setActiveSection('about')
  if (serviceInView && activeSection !== 'services')
    setActiveSection('services')
  if (contactInView && activeSection !== 'contact') setActiveSection('contact')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-36">
      <div className="sticky top-2 z-10">
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

      <section
        id="projects"
        ref={projectsRef}
        className="flex flex-col w-full min-h-screen"
      >
        <Section2 />
      </section>

      <Image
        src="/maisProjetos.png"
        width={650}
        height={68}
        className="cursor-pointer my-20"
        alt="Mais projetos"
      />

      <section
        id="services"
        ref={serviceRef}
        className="flex items-center justify-center min-h-screen"
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
