import { Inter } from "next/font/google"
import Header from "@/components/dashboard/Header"
import Sidebar from "@/components/dashboard/Sidebar"
import Footer from "@/components/dashboard/Footer"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] })

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
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