'use client'

import { useState } from 'react'
import StrategySelectionHeader from '@/components/strategy-selection/StrategySelectionHeader'
import StrategyFilters from '@/components/strategy-selection/StrategyFilters'
import AvailableStrategiesList from '@/components/strategy-selection/AvailableStrategiesList'
import StrategyConfigurationPopup from '@/components/strategy-selection/StrategyConfigurationPopup'
import CreateStrategyPopup from '@/components/strategy-selection/CreateStrategyPopup'
import { Button } from "@/components/ui/button"

export default function StrategySelectionPage() {
  const [selectedStrategy, setSelectedStrategy] = useState(null)
  const [isCreatingStrategy, setIsCreatingStrategy] = useState(false)
  const [viewMode, setViewMode] = useState<'block' | 'list'>('block')

  return (
    <div className="container mx-auto px-4 py-8">
      <StrategySelectionHeader />
      <div className="flex justify-between items-center mb-6">
        <Button onClick={() => setIsCreatingStrategy(true)}>Create New Strategy</Button>
        <div>
          <Button
            variant={viewMode === 'block' ? 'default' : 'outline'}
            className="mr-2"
            onClick={() => setViewMode('block')}
          >
            Block View
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            onClick={() => setViewMode('list')}
          >
            List View
          </Button>
        </div>
      </div>
      <StrategyFilters />
      <AvailableStrategiesList
        onStrategySelect={setSelectedStrategy}
        viewMode={viewMode}
      />
      {selectedStrategy && (
        <StrategyConfigurationPopup
          strategy={selectedStrategy}
          onClose={() => setSelectedStrategy(null)}
        />
      )}
      {isCreatingStrategy && (
        <CreateStrategyPopup
          onClose={() => setIsCreatingStrategy(false)}
        />
      )}
    </div>
  )
}

