import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

export default function TopGainers() {
  // Mock data for demonstration
  const topGainers = [
    { ticker: 'AAPL', name: 'Apple Inc.', gain: 5.2, price: 150.25, volume: 1000000 },
    { ticker: 'GOOGL', name: 'Alphabet Inc.', gain: 4.8, price: 2800.75, volume: 500000 },
    { ticker: 'MSFT', name: 'Microsoft Corporation', gain: 3.9, price: 305.50, volume: 750000 },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Top Gainers (>5%) - Previous Trading Day</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ticker</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>% Gain</TableHead>
            <TableHead>Closing Price</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Select</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topGainers.map((stock) => (
            <TableRow key={stock.ticker}>
              <TableCell>{stock.ticker}</TableCell>
              <TableCell>{stock.name}</TableCell>
              <TableCell>{stock.gain.toFixed(2)}%</TableCell>
              <TableCell>${stock.price.toFixed(2)}</TableCell>
              <TableCell>{stock.volume.toLocaleString()}</TableCell>
              <TableCell>
                <Checkbox />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex justify-end">
        <Button>Setup Strategy</Button>
      </div>
    </div>
  )
}

