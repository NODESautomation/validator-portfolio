import { Twitter, Github, MessageCircle, Key } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-blue-500/90 dark:bg-blue-700/90 text-white p-4 backdrop-blur-sm">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link
          href="https://twitter.com/mixajil1"
          className="hover:text-blue-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter size={24} />
        </Link>
        <Link
          href="https://github.com/NODESautomation"
          className="hover:text-blue-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
        </Link>
        <Link
          href="https://discordapp.com/users/1207293418959798292/"
          className="hover:text-blue-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={24} />
        </Link>
        <Link
          href="https://keybase.io/mixajil"
          className="hover:text-blue-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Key size={24} />
        </Link>
      </div>
    </footer>
  )
}
