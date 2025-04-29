"use client"

import { X } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  // Add effect to prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={onClose} aria-hidden="true" />
      <div
        className="fixed top-0 right-0 h-full w-64 bg-emerald-600/95 dark:bg-emerald-800/95  p-4 z-50"
      style={{ color: 'white' }}
        role="dialog"
        aria-modal="true"
      >
        <button onClick={onClose} className="absolute top-4 right-4" aria-label="Close menu">
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
    </>
  )
}
