import { motion } from 'framer-motion'

export function Section1() {
  const number = '5588994884147'

  const text = 'Boa tarde! gostaria de conversar sobre um serviço.'

  function handleClick() {
    window.open(`https://wa.me/${number}?text=${text}`, '_blank')
  }

  return (
    <div className="flex text-white">
      <div className="flex gap-24 justify-around w-full">
        <div className="flex flex-col gap-3">
          <p className="text-2xl">Vamos conversar?</p>

          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-zinc-600"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 1.5 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0.5,
              }}
            />
            <motion.button
              className="relative bg-zinc-800 w-full text-white p-2 rounded-full hover:bg-[#57EB9B] hover:text-black transition duration-300 ease-in-out"
              onClick={handleClick}
            >
              Whatsapp
            </motion.button>
          </div>
        </div>

        <div className="border-b-4 border-[#2686F3] w-[360px]">
          <p className="text-lg text-center">
            Tudo começa com uma boa conversa, vamos tentar entender seu
            problema.
          </p>
        </div>
      </div>
    </div>
  )
}
