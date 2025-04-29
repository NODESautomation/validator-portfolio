import { X } from "lucide-react"
import Link from "next/link"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-emerald-600/95 dark:bg-emerald-800/95 text-white p-4 transform transition-transform duration-300 ease-in-out backdrop-blur-sm ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button onClick={onClose} className="absolute top-4 right-4">
        <X size={24} />
      </button>
      <h2 className="text-xl font-bold mb-4 text-shadow">Testnet Projects</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="https://explore.axone.xyz/"
              className="hover:text-emerald-200 text-shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              AXONE
            </Link>
          </li>
          <li>
            <Link
              href="https://app.testnet.initia.xyz/"
              className="hover:text-emerald-200 text-shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              INITIA
            </Link>
          </li>
          <li>
            <Link
              href="https://wardenprotocol.org/"
              className="hover:text-emerald-200 text-shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              WARDEN
            </Link>
          </li>
          {/* Add more testnet project links as needed */}
        </ul>
      </nav>
    </div>
  )
}
