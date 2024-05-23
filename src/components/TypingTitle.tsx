import { Typewriter } from 'react-simple-typewriter'

const words = [
  'Identidade Visual',
  'Branding',
  'UX/ UI',
  'Social Media',
  'UX Writing',
  'Naming',
]

export function TypingTitle() {
  return (
    <div className="md:h-[280px] lg:h-[360px]">
      <h1 className="font-bold text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl md:mb-10 lg:mb-12">
        Criatividade & <br />
        <Typewriter
          words={words}
          loop
          typeSpeed={70}
          delaySpeed={50}
          deleteSpeed={300}
          cursorStyle="|"
          cursorColor="white"
          cursor
          cursorBlinking
        />
      </h1>
    </div>
  )
}
