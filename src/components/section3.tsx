const services = [
  {
    title: 'Branding',
    description:
      'Um branding eficaz impulsiona o reconhecimento do cliente e o valor percebido da marca. Construindo uma identidade distintiva, que possui conexão emocional com o público-alvo, definindo valores, mensagem e estratégias que diferenciam você no mercado.',
  },
  {
    title: 'Identidade Visual',
    description:
      'Uma identidade visual bem elaborada contribui para a memorização da marca e a criação de uma imagem memorável e coesa.',
  },
  {
    title: 'UX/ UI',
    description:
      'O design de interface é o processo de criar interfaces visualmente atraentes e funcionais para aplicativos, sites, landing pages e outros.',
  },
  {
    title: 'Social media',
    description:
      'Criação de material com peças gráficas para redes sociais e anúncios e materiais impressos.',
  },
  {
    title: 'UX Writer',
    description:
      'Criar textos que facilitam a interação dos usuários com sites, aplicativos e softwares. Garantindo que a comunicação entre o produto e o usuário seja clara, objetiva e eficaz, proporcionando uma experiência de uso intuitiva e agradável.',
  },
  {
    title: 'Naming',
    description:
      'Textos que facilitam o entendimento e a interação dos usuários com sites e aplicativos. Garantindo a comunicação eficaz e direta, proporcionando uma experiência de uso intuitiva e agradável, como este por exemplo.',
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
            <li className="mt-4 ml-6 text-left w-96 text-wrap pr-1">
              {service.description}
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}
