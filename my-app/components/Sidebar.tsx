import Link from 'next/link'
import { Home, BarChart2, Settings, HelpCircle } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">
      <nav className="mt-5">
        <Link href="/dashboard" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100">
          <Home className="w-5 h-5 mr-3" />
          Dashboard
        </Link>
        <Link href="/setup-strategy" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100">
          <BarChart2 className="w-5 h-5 mr-3" />
          Setup Strategy
        </Link>
        <Link href="/monitor-strategies" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100">
          <BarChart2 className="w-5 h-5 mr-3" />
          Monitor Strategies
        </Link>
        <Link href="/reports" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100">
          <BarChart2 className="w-5 h-5 mr-3" />
          Reports
        </Link>
        <Link href="/settings" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100">
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </Link>
        <Link href="/help" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100">
          <HelpCircle className="w-5 h-5 mr-3" />
          Help & Support
        </Link>
      </nav>
    </aside>
  )
}

