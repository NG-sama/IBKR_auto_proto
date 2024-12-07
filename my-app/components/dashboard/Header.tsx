import { Frame } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white border-b">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Frame className="w-6 h-6" />
          <span>IBKR Auto</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Welcome, User</span>
        <Button variant="ghost" size="sm">Settings</Button>
        <Button variant="ghost" size="sm">Logout</Button>
      </div>
    </header>
  )
}

