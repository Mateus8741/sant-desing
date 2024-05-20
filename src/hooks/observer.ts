import { useEffect } from 'react'

type SectionObserverProps = {
  setActiveSection: (sectionId: string) => void
  sections: (HTMLElement | null)[]
}

export const useSectionObserver = ({
  setActiveSection,
  sections,
}: SectionObserverProps): void => {
  useEffect(() => {
    const options = {
      threshold: 0.5,
    }

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)
    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [setActiveSection, sections])
}
