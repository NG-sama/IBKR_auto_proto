import TopGainers from '@/components/dashboard/TopGainers'
import ActiveStrategies from '@/components/dashboard/ActiveStrategies'
import PerformanceSummary from '@/components/dashboard/PerformanceSummary'

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 mb-6">
        <TopGainers />
        <ActiveStrategies />
        <PerformanceSummary />
      </div>
    </div>
  )
}

