import Link from 'next/link'

export function Footer() {
  const YEAR = new Date().getFullYear()

  return (
    <footer className="flex items-center justify-between px-24 py-8 text-white w-full">
      <div className="flex gap-1">
        <p className="font-light">{YEAR} © Sant Design - By </p>
        <Link href="https://www.codewaveds.cloud">
          <span className="text-[#03FA6E]">CodeWave</span>
        </Link>
      </div>

      <div className="flex gap-8">
        <Link href="https://www.codewaveds.cloud">
          <p className="font-light text-[#03FA6E]">CodeWave</p>
        </Link>

        <Link href="https://www.instagram.com/codewave.solutions?igsh=aWs3MGlweGhxdTM5&utm_source=qr">
          <span className="font-light">Instagram</span>
        </Link>

        <Link href="https://www.linkedin.com/in/mateus-tavares-2382911a0/">
          <p className="font-light">Linkedin</p>
        </Link>
      </div>
    </footer>
  )
}
