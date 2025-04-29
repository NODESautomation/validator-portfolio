"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Moon, Sun } from "lucide-react"
import { useState } from "react"
import { useTheme } from "next-themes"
import Sidebar from "./Sidebar"

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-emerald-500/90 dark:bg-emerald-700/90 text-white p-4 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
       <Image src="/img/NA_logo.png" alt="NODESautomation Logo" width={40} height={40} className="rounded-full" />
        <span className="text-xl font-bold text-shadow">NODESautomation</span>
        </Link>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-emerald-600/80 dark:hover:bg-emerald-800/80"
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-full hover:bg-emerald-600/80 dark:hover:bg-emerald-800/80"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  )
}
