import { Twitter, Github, MessageCircle, Key } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-emerald-500/90 dark:bg-emerald-700/90 text-white p-4 backdrop-blur-sm">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link
          href="https://twitter.com/mixajil1"
          className="hover:text-emerald-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter size={24} />
        </Link>
        <Link
          href="https://github.com/mixajil/NODESautomation"
          className="hover:text-emerald-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
        </Link>
        <Link
          href="https://discord.gg/janTrC46"
          className="hover:text-emerald-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={24} />
        </Link>
        <Link
          href="https://keybase.io/mixajil/NODESautomation"
          className="hover:text-emerald-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Key size={24} />
        </Link>
      </div>
    </footer>
  )
}
