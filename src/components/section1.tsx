import Image from 'next/image'

export function Section1() {
  const number = '5588994884147'

  const text = 'Boa tarde! gostaria de conversar sobre um serviço.'

  function handleClick() {
    window.open(`https://wa.me/${number}?text=${text}`, '_blank')
  }

  return (
    <div className="flex w-5/6 text-white justify-between">
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
