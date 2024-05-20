export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-36">
      <h1 className="font-bold text-white text-9xl">
        Criatividade & Identidade Visual
      </h1>

      <section
        id="home"
        className="flex items-center justify-center min-h-screen"
      >
        <h2 className="text-white text-4xl font-light">Projetos</h2>
        <p className="text-white text-lg font-light">
          Conheça alguns dos meus projetos
        </p>
      </section>

      <section
        id="projects"
        className="flex items-center justify-center min-h-screen"
      >
        <h2 className="text-white text-4xl font-light">Projetos</h2>
        <p className="text-white text-lg font-light">
          Conheça alguns dos meus projetos
        </p>
      </section>

      <section id="about">
        <h2 className="text-white text-4xl font-light">Sobre</h2>
        <p className="text-white text-lg font-light">Saiba mais sobre mim</p>
      </section>

      <section
        id="contact"
        className="flex items-center justify-center min-h-screen"
      >
        <h2 className="text-white text-4xl font-light">Contato</h2>
        <p className="text-white text-lg font-light">Entre em contato comigo</p>
      </section>
    </main>
  )
}
