// app/layout.tsx
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "IBKR Auto Trading",
  description: "Automated trading platform for Interactive Brokers",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
      </body>
    </html>
  )
}