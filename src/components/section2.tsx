import Image from 'next/image'

export function Section2() {
  return (
    <div className="text-white">
      <h2 className="font-bold text-5xl">Projetos</h2>

      <p className="text-lg font-normal w-[369px] mt-4">
        Projetos de indentidade visual, diagramação, social media e entre
        outros.
      </p>

      <div className="flex flex-wrap gap-3 mt-10">
        <Image src="/movbank.svg" width={560} height={283} alt="Movbank" />
        <Image src="/confeitar.svg" width={560} height={283} alt="Movbank" />
        <Image src="/omni.svg" width={560} height={283} alt="Movbank" />
        <Image src="/mock.svg" width={560} height={283} alt="Movbank" />
      </div>
    </div>
  )
}
