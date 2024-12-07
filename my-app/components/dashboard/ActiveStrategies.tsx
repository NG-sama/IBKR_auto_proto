import Link from 'next/link'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ActiveStrategies() {
  // Mock data for demonstration
  const activeStrategy = {
    id: 1,
    name: 'Strategy A',
    stocks: 'AAPL, GOOGL',
    status: 'Active',
    daysRemaining: 3,
    totalDays: 5,
    realizedPL: 1234.56,
    unrealizedPL: 2345.67
  }

  const strategyHistory = [
    { id: 2, name: 'Strategy B', stocks: 'MSFT, AMZN', status: 'Completed', pl: 3456.78 },
    { id: 3, name: 'Strategy C', stocks: 'TSLA, FB', status: 'Expired', pl: -1234.56 },
    { id: 4, name: 'Strategy D', stocks: 'NFLX, NVDA', status: 'Completed', pl: 2345.67 },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Active Strategy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-500">Strategy Name</p>
              <p className="text-lg font-semibold">{activeStrategy.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Selected Stocks</p>
              <p className="text-lg font-semibold">{activeStrategy.stocks}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="text-lg font-semibold">{activeStrategy.status}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Days Remaining</p>
              <p className="text-lg font-semibold">{activeStrategy.daysRemaining}/{activeStrategy.totalDays}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-gray-500">Realized P/L</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">${activeStrategy.realizedPL.toFixed(2)}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-gray-500">Unrealized P/L</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">${activeStrategy.unrealizedPL.toFixed(2)}</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Strategy History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Strategy Name</TableHead>
                <TableHead>Selected Stocks</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>P/L</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {strategyHistory.map((strategy) => (
                <TableRow key={strategy.id}>
                  <TableCell>{strategy.name}</TableCell>
                  <TableCell>{strategy.stocks}</TableCell>
                  <TableCell>{strategy.status}</TableCell>
                  <TableCell className={strategy.pl >= 0 ? 'text-green-600' : 'text-red-600'}>
                    ${strategy.pl.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button asChild>
          <Link href="/monitor-strategies">View All Strategies</Link>
        </Button>
        <Button asChild>
          <Link href="/performance-metrics">View Performance Metrics</Link>
        </Button>
      </div>
    </div>
  )
}

