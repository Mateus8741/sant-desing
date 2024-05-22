export function Section5() {
  const number = '5588994884147'

  const text = 'Boa tarde! gostaria de conversar sobre um serviço.'

  function handleClick() {
    window.open(`https://wa.me/${number}?text=${text}`, '_blank')
  }

  return (
    <div className="flex flex-col items-center gap-12 text-white my-24">
      <h2 className="font-bold text-8xl">Vamos conversar?</h2>

      <button
        className="w-52 h-16 bg-white text-black rounded-full hover:bg-gray-300"
        onClick={handleClick}
      >
        Whatsapp
      </button>
    </div>
  )
}
