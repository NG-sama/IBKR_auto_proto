import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function StrategyDetailsTable({ onStrategySelect }) {
  const strategies = [
    {
      id: "001",
      name: "Strategy A",
      stocks: "AAPL, MSFT",
      params: "Stop-loss: 5%, Profit Target: 10%, Time Horizon: 5 days",
      status: "Active",
      realizedPL: 5000,
      unrealizedPL: 2500,
      successRate: "80%",
    },
    {
      id: "002",
      name: "Strategy B",
      stocks: "GOOGL, AMZN",
      params: "Stop-loss: 7%, Profit Target: 15%, Time Horizon: 7 days",
      status: "Closed",
      realizedPL: 7000,
      unrealizedPL: 0,
      successRate: "70%",
    },
    {
      id: "003",
      name: "Strategy C",
      stocks: "TSLA, NVDA",
      params: "Stop-loss: 10%, Profit Target: 20%, Time Horizon: 10 days",
      status: "Active",
      realizedPL: 0,
      unrealizedPL: 3000,
      successRate: "N/A",
    },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Strategy Details</h2>
        <Input className="w-64" type="search" placeholder="Search strategies..." />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Strategy Name/ID</TableHead>
            <TableHead>Stocks Involved</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Realized P/L</TableHead>
            <TableHead>Unrealized P/L</TableHead>
            <TableHead>Success Rate</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {strategies.map((strategy) => (
            <TableRow key={strategy.id}>
              <TableCell>{strategy.name} ({strategy.id})</TableCell>
              <TableCell>{strategy.stocks}</TableCell>
              <TableCell>{strategy.status}</TableCell>
              <TableCell>${strategy.realizedPL.toLocaleString()}</TableCell>
              <TableCell>${strategy.unrealizedPL.toLocaleString()}</TableCell>
              <TableCell>{strategy.successRate}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" onClick={() => onStrategySelect(strategy)}>
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

