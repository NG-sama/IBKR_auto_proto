import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import TopGainers from '@/components/dashboard/TopGainers'
import ActiveStrategies from '@/components/dashboard/ActiveStrategies'
import PerformanceSummary from '@/components/dashboard/PerformanceSummary'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/signin')
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6">
        <TopGainers />
        <ActiveStrategies />
        <PerformanceSummary />
      </div>
    </div>
  )
}