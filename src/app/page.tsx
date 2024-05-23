'use client'

import { ButtonBehance } from '@/components/ButtonBehance'
import { NavBar } from '@/components/Navbar'
import { TypingTitle } from '@/components/TypingTitle'
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
        <Link href="/">
          <Image src="/logo.svg" width={200} height={200} alt="Logo" />
        </Link>

        <NavBar activeSection={activeSection} />
      </div>

      <section
        id="home"
        ref={homeRef}
        className="flex flex-col w-full gap-4 justify-center mb-24 scroll-m-28"
      >
        <TypingTitle />

        <Section1 />
      </section>

      <section
        id="projects"
        ref={projectsRef}
        className="flex flex-col items-center w-full scroll-m-28"
      >
        <Section2 />

        <div className="flex gap-3 items-center">
          <p className="font-bold text-[#2686F3] text-6xl">Mais projetos</p>

          <Link
            href="https://www.behance.net/santdsign"
            className="my-12 flex gap-3 items-center"
          >
            <ButtonBehance />
          </Link>
        </div>
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
