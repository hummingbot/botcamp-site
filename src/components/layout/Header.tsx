import Link from "next/link"
import { Bot } from "lucide-react"

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
      <Link className="flex items-center justify-center" href="#">
        <Bot className="h-6 w-6 mr-2 text-primary" />
        <span className="font-bold text-primary">Botcamp</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:text-primary" href="#">
          Courses
        </Link>
        <Link className="text-sm font-medium hover:text-primary" href="#">
          Cohorts
        </Link>
        <Link className="text-sm font-medium hover:text-primary" href="#">
          About
        </Link>
        <Link className="text-sm font-medium hover:text-primary" href="#">
          Contact
        </Link>
      </nav>
    </header>
  )
}
