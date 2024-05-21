import Image from 'next/image'

export function Section1() {
  function handleClick() {
    window.open('https://wa.me/5511999999999', '_blank')
  }

  return (
    <div className="flex gap-4 text-white justify-between pr-12">
      <div className="flex gap-24">
        <div className="flex flex-col gap-3">
          <p>Vamos conversar?</p>

          <button
            className="bg-zinc-800 text-white p-2 rounded-full hover:bg-zinc-700"
            onClick={handleClick}
          >
            Whatsapp
          </button>
        </div>

        <p className="text-lg w-[369px]">
          Tudo começa com uma boa conversa, vamos tentar entender seu problema.
        </p>
      </div>

      <Image src="/vertical.svg" width={80} height={80} alt="Seta para baixo" />
    </div>
  )
}
