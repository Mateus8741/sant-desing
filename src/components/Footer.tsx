import Link from 'next/link'

export function Footer() {
  const YEAR = new Date().getFullYear()

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 md:px-24 md:py-8 text-white w-full">
      <div className="flex gap-1">
        <p className="font-bold">{YEAR} © Sant Design - By </p>
        <Link href="https://www.codewaveds.cloud">
          <span className="text-[#03FA6E] font-bold">CodeWave</span>
        </Link>
      </div>

      <div className="flex gap-8">
        <Link href="https://www.codewaveds.cloud">
          <p className="font-bold text-[#03FA6E]">CodeWave</p>
        </Link>

        <Link href="https://www.instagram.com/codewave.solutions?igsh=aWs3MGlweGhxdTM5&utm_source=qr">
          <span className="font-bold">Instagram</span>
        </Link>

        <Link href="https://www.linkedin.com/in/mateus-tavares-2382911a0/">
          <p className="font-bold">Linkedin</p>
        </Link>
      </div>
    </footer>
  )
}
