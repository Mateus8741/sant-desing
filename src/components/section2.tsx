import { Cards } from './Cards'

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
    <div className="text-white w-full">
      <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl">Projetos</h2>

      <p className="text-base sm:text-lg font-normal w-full sm:w-[369px] mt-4">
        Projetos de identidade visual, diagramação, social media entre outros.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 sm:gap-6 mt-8">
        {projects.map((project, index) => (
          <Cards key={project.alt} {...project} index={index} />
        ))}
      </div>
    </div>
  )
}
