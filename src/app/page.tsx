'use client'

import { NavBar } from '@/components/Navbar'
import { Section1 } from '@/components/section1'
import { Section2 } from '@/components/section2'
import { Section3 } from '@/components/section3'
import { Section4 } from '@/components/section4'
import { Section5 } from '@/components/section5'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('')

  const homeRef = useRef<HTMLElement | null>(null)
  const projectsRef = useRef<HTMLElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const serviceRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const sections = [homeRef, projectsRef, aboutRef, serviceRef, contactRef]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <main className="flex flex-col items-center justify-between px-36 max-w-screen-2xl">
      <div
        className={`w-full sticky top-0 py-4 z-10 flex items-center bg-[#121214]`}
      >
        <Image src="/logo.svg" width={200} height={200} alt="Logo" />
        <NavBar activeSection={activeSection} />
      </div>

      <section
        id="home"
        ref={homeRef}
        className="flex flex-col gap-4 justify-center mb-24 scroll-m-28"
      >
        <h1 className="font-bold text-white text-9xl mb-12">
          Criatividade & Identidade Visual
        </h1>

        <Section1 />
      </section>

      <section
        id="projects"
        ref={projectsRef}
        className="flex flex-col items-center w-full scroll-m-28"
      >
        <Section2 />

        <Link href="https://www.behance.net/santdsign" className="my-12">
          <Image
            src="/maisProjetos.svg"
            width={650}
            height={68}
            alt="Mais projetos"
          />
        </Link>
      </section>

      <section
        id="services"
        ref={serviceRef}
        className="flex items-center justify-center w-full scroll-m-28"
      >
        <Section3 />
      </section>

      <section
        id="about"
        ref={aboutRef}
        className="flex items-center justify-center w-full scroll-m-28"
      >
        <Section4 />
      </section>

      <section
        id="contact"
        ref={contactRef}
        className="flex items-center justify-center scroll-m-28"
      >
        <Section5 />
      </section>
    </main>
  )
}
