import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import TopGainers from '@/components/dashboard/TopGainers'
import ActiveStrategies from '@/components/dashboard/ActiveStrategies'
import PerformanceSummary from '@/components/dashboard/PerformanceSummary'
import Footer from '@/components/dashboard/Footer'

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 gap-6 mb-6">
              <TopGainers />
              <ActiveStrategies />
              <PerformanceSummary />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

