import { Suspense } from 'react'
import StrategyForm from './strategy-form'
import { getStocks } from './stocks'

export default async function StrategyConfigurationPage() {
  const stocks = await getStocks()

  return (
    <div className="container mx-auto py-8">
      <Suspense fallback={<div>Loading...</div>}>
        <StrategyForm stocks={stocks} />
      </Suspense>
    </div>
  )
}

