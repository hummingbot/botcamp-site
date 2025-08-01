import Link from "next/link"

interface FooterProps {
  coursesLink: string;
}

export default function Footer({ coursesLink }: FooterProps) {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-black">
      <p className="text-xs text-gray-400">© 2024 Botcamp, Inc. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link 
          className="text-xs hover:text-secondary text-gray-400" 
          href={coursesLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Botcamp courses
        </Link>
        <Link 
          className="text-xs hover:text-secondary text-gray-400" 
          href="https://hummingbot.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hummingbot website
        </Link>
        {/* <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
          Privacy Policy
        </Link> */}
      </nav>
    </footer>
  )
}
