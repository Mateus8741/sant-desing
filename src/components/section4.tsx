import Image from 'next/image'
import Link from 'next/link'

export function Section4() {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full justify-between text-white mt-12 md:mt-24">
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <p className="text-4xl md:text-6xl mt-4">*</p>{' '}
          <h2 className="font-bold text-3xl md:text-5xl">Sobre mim</h2>
        </div>

        <div className="w-full md:w-[30rem] mt-4">
          <p className="text-base md:text-lg font-normal">
            Sou Designer Gráfico / UX Designer localizado no Ceará, com paixão
            em resolver problemas e criar histórias através de marcas.
          </p>

          <p className="text-base md:text-lg font-normal mt-4">
            Graduado em Design Gráfico e Design Thinking, utilizo técnicas que
            ajudam a compreender qual solução é ideal em cada projeto.
          </p>

          <p className="text-base md:text-lg font-normal mt-4">
            Com ambição em aprender e entender, busco não só criar marcas e
            estratégias que funcionam, mas que também conectam você ao público
            ideal.
          </p>
        </div>

        <div className="flex gap-6 mt-4 md:mt-10 justify-center self-center">
          <div className="flex flex-col items-center justify-center w-[8rem] md:w-[12rem] h-[8rem] md:h-[12rem] px-5 py-6 rounded-lg bg-[#1B1B1D] text-neutral-400">
            <p className="text-lg md:text-5xl font-bold">+300</p>
            <p className="text-sm md:text-base font-bold">Projetos</p>
          </div>

          <div className="flex flex-col items-center justify-center w-[8rem] md:w-[12rem] h-[8rem] md:h-[12rem] px-5 py-6 rounded-lg bg-[#1B1B1D] text-neutral-400">
            <Image src="/progs.svg" width={200} height={200} alt="O que uso" />
          </div>
        </div>

        <div className="flex flex-col mt-4 md:mt-6 self-center items-center gap-3">
          <p className="text-base md:text-lg">Social</p>

          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/ramon-santos-307343289/">
              <Image
                src="/linkedin.svg"
                width={40}
                height={40}
                alt="Linkedin"
              />
            </Link>

            <Link href="https://www.instagram.com/santdsign/">
              <Image src="/insta.svg" width={40} height={40} alt="Instagram" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-[25rem] md:h-[40rem] bg-zinc-800/30 rounded-2xl flex items-center justify-center">
        <p className="text-white text-8xl">Foto</p>
      </div>
    </div>
  )
}
