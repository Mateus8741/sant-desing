const services = [
  {
    title: 'Branding',
    description:
      'Tenha um reconhecimento eficaz da sua marca construindo uma identidade única e distintiva, que se conecta diretamente com seu público. Com uma estratégia de branding impulsionamos o reconhecimento da sua marca no mercado.',
  },
  {
    title: 'Identidade Visual',
    description:
      'Utilize de uma identidade visual bem elaborada que  contribui para a memorização da sua marca e diferencia você no mercado. A partir da análise do seu problema, decidimos qual o melhor caminho para produzir sua marca.',
  },
  {
    title: 'UX/ UI',
    description:
      'Uma interface atrativa e funcional é oque diferencia seu site ou aplicativo no mercado. Garanta que seu cliente possua a melhor experiência com seu serviço.',
  },
  {
    title: 'Social media',
    description:
      'Alcance mais visibilidade e autoridade de seu material em mídias sociais, através de uma estratégia e cronogramas para suas publicações.',
  },
  {
    title: 'UX Writing',
    description:
      'Textos que facilitam a interação dos usuários com seu site ou aplicativo. Garantimos que a comunicação entre o produto e o usuário seja clara e eficaz, trazendo uma experiência intuitiva e agradável.',
  },
  {
    title: 'Naming',
    description:
      'Aliado a estratégia de Branding o processo de Naming é crucial para destacar seu lugar no mercado, um nome simples e memorável facilita o entendimento e a memorização de sua marca.',
  },
]

export function Section3() {
  return (
    <div className="text-white">
      <h2 className="font-bold text-center text-5xl">Serviços</h2>

      <div className="flex flex-wrap w-full gap-6 mt-10 bg-zinc-800 p-24 justify-between rounded-3xl">
        {services.map((service, index) => (
          <ul key={index} className="flex flex-col">
            <div className="flex items-center gap-3">
              • <li className="font-bold text-3xl">{service.title}</li>
            </div>
            <li className="mt-4 ml-6 text-left w-[380px] text-wrap pr-1">
              {service.description}
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}
