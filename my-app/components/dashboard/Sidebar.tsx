'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, TrendingUp, BarChart2, Settings, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Dashboard' },
    { href: '/setup-strategy', icon: TrendingUp, label: 'Setup Strategy' },
    { href: '/performance', icon: BarChart2, label: 'Performance' },
    { href: '/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <aside className={cn(
      "bg-gray-900 text-white transition-all duration-300 ease-in-out",
      isOpen ? "w-64" : "w-16"
    )}>
      <div className="flex items-center justify-between p-4">
        {isOpen && <span className="text-lg font-semibold">IBKR Auto</span>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:bg-gray-800"
        >
          {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>
      <nav className="mt-5">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center px-4 py-2 text-sm font-medium",
              pathname === item.href
                ? "bg-gray-800 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white",
              !isOpen && "justify-center"
            )}
          >
            <item.icon className={cn("h-5 w-5", isOpen && "mr-3")} />
            {isOpen && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

