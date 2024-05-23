import { motion } from 'framer-motion'

export function ButtonBehance() {
  return (
    <div className="relative inline-block">
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-blue-600"
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
      <motion.div className="flex gap-3 bg-[#2686F3] items-center justify-center pr-12 text-2xl text-[#141414] font-bold rounded-full">
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-black bg-[#4599F9]">
          Bē
        </div>
        Behance
      </motion.div>
    </div>
  )
}
