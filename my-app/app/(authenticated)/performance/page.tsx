'use client'

import { useState } from 'react'
import PerformanceHeader from '@/components/performance/PerformanceHeader'
import PerformanceMetrics from '@/components/performance/PerformanceMetrics'
import PerformanceCharts from '@/components/performance/PerformanceCharts'
import StrategyDetailsTable from '@/components/performance/StrategyDetailsTable'
import PerformanceFilters from '@/components/performance/PerformanceFilters'
import StrategyDetailsPopup from '@/components/performance/StrategyDetailsPopup'

export default function PerformancePage() {
  const [selectedStrategy, setSelectedStrategy] = useState(null)

  return (
    <div className="container mx-auto px-6 py-8">
      <PerformanceHeader />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <PerformanceCharts />
        </div>
        <div>
          <PerformanceMetrics />
        </div>
      </div>
      <PerformanceFilters />
      <StrategyDetailsTable onStrategySelect={setSelectedStrategy} />
      {selectedStrategy && (
        <StrategyDetailsPopup
          strategy={selectedStrategy}
          onClose={() => setSelectedStrategy(null)}
        />
      )}
    </div>
  )
}

