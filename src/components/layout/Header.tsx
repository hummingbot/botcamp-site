import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="px-6 lg:px-8 h-16 flex items-center border-b border-gray-800">
      <Link className="flex items-center justify-center" href="#">
        <Image
          src="/botcamp-no-text.png"
          alt="Botcamp Logo"
          width={40}
          height={40}
          className="mr-3"
        />
        <span className="text-xl font-bold">Botcamp</span>
      </Link>
      <nav className="ml-auto flex items-center gap-6 sm:gap-8">
        <Link className="text-base font-medium hover:text-primary" href="#">
          Courses
        </Link>
        <Link className="text-base font-medium hover:text-primary" href="#">
          Cohorts
        </Link>
        <Link className="text-base font-medium hover:text-primary" href="#">
          About
        </Link>
        <button className="text-base font-medium bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">
          Sign In
        </button>
      </nav>
    </header>
  )
}
