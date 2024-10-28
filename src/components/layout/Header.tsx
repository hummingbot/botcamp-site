import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import botcampLogo from "@/images/botcamp-no-text.png"
import { COURSES_LINK } from "@/app/page"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="px-6 lg:px-8 h-16 flex items-center bg-black border-b border-gray-800">
      <Link className="flex items-center justify-center" href="/">
        <Image
          src={botcampLogo}
          alt="Botcamp Logo"
          width={40}
          height={40}
          className="mr-3"
        />
        <span className="text-xl font-bold">
          Hummingbot <span className="text-primary">Botcamp</span>
        </span>
      </Link>
      
      {/* Hamburger menu button */}
      <button
        className="ml-auto md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Navigation menu */}
      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 left-0 right-0 bg-black md:bg-transparent md:top-0 md:ml-auto items-center gap-6 sm:gap-8 p-4 md:p-0`}>
        <Link className="text-base font-medium hover:text-primary" href={COURSES_LINK}>
          Courses
        </Link>
        <Link className="text-base font-medium hover:text-primary" href="/cohorts">
          Cohorts
        </Link>
        <Link className="text-base font-medium bg-primary text-black px-4 py-2 rounded-md hover:bg-secondary" href="https://courses.botcamp.xyz/web/login">
          Sign In
        </Link>
      </nav>
    </header>
  )
}
