export function Section5() {
  function handleClick() {
    window.open('https://wa.me/5511999999999', '_blank')
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
