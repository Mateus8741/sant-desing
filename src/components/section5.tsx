import { motion } from 'framer-motion'

export function Section5() {
  const number = '5588994884147'
  const text = 'Boa tarde! gostaria de conversar sobre um serviço.'

  function handleClick() {
    window.open(`https://wa.me/${number}?text=${text}`, '_blank')
  }

  return (
    <div className="flex flex-col items-center gap-12 text-white my-24">
      <h2 className="font-bold text-8xl">Vamos conversar?</h2>

      <div className="relative inline-block">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 1.5 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0.5,
          }}
        />
        <motion.button
          className="relative w-52 h-16 bg-white text-black font-bold rounded-full hover:bg-[#57EB9B] transition duration-300 ease-in-out"
          onClick={handleClick}
        >
          Whatsapp
        </motion.button>
      </div>
    </div>
  )
}
