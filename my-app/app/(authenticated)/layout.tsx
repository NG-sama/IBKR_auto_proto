import { Inter } from "next/font/google"
import Header from "@/components/dashboard/Header"
import Sidebar from "@/components/dashboard/Sidebar"
import Footer from "@/components/dashboard/Footer"
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] })

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/signin')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-50">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
