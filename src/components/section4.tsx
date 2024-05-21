import Image from 'next/image'
import Link from 'next/link'

export function Section4() {
  return (
    <div className="flex w-full justify-between text-white mt-24">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <p className="text-6xl mt-4">*</p>{' '}
          <h2 className="font-bold text-5xl">Sobre mim</h2>
        </div>

        <div className="w-[30rem]">
          <p className="text-lg font-normal mt-4">
            Sou Designer Gráfico / UX Designer localizado no Ceará, com paixão
            em resolver problemas e criar histórias através de marcas.
          </p>

          <p className="text-lg font-normal mt-4">
            Graduado em Design Grafíco e Design Thinking, utilizo de técnicas
            que ajudam a compreender qual solução é ideal em cada projeto.
          </p>

          <p className="text-lg font-normal mt-4">
            Com ambição em aprender e entender, busco não só criar marcas e
            estratégias que funcionam, mas que também conectam você ao público
            ideal.
          </p>
        </div>

        <div className="flex gap-6 self-center">
          <div className="flex flex-col items-center justify-center w-[12rem] h-[12rem] px-5 py-6 rounded-lg mt-10 bg-zinc-800/50 text-neutral-400">
            <p className="text-5xl font-bold">+300</p>
            <p className="text-md font-bold">Projetos</p>
          </div>

          <div className="flex flex-col items-center justify-center w-[12rem] h-[12rem] px-5 py-6 rounded-lg mt-10 bg-zinc-800/50 text-neutral-400">
            <Image src="/progs.svg" width={200} height={200} alt="Oque uso" />
          </div>
        </div>

        <div className="flex flex-col mt-6 self-center items-center gap-3">
          <p className="">Social</p>

          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/ramon-santos-307343289/">
              <Image
                src="/linkedin.svg"
                width={50}
                height={50}
                alt="Linkedin"
              />
            </Link>

            <Link href="https://www.instagram.com/santdsign/">
              <Image src="/insta.svg" width={50} height={50} alt="Instagram" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[30rem] h-[40rem] bg-zinc-800/30 rounded-2xl"></div>
    </div>
  )
}
