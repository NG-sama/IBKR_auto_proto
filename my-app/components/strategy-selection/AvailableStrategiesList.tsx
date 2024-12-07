import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// This would typically come from your backend
const initialStrategies = [
  {
    id: "001",
    name: "Momentum Trading",
    description: "Capitalize on continuing market trends.",
    riskLevel: "High",
    timeHorizon: "Short Term",
    performance: "+15% (last 3 months)",
  },
  {
    id: "002",
    name: "Value Investing",
    description: "Identify undervalued stocks for long-term growth.",
    riskLevel: "Medium",
    timeHorizon: "Long Term",
    performance: "+8% (last 12 months)",
  },
  {
    id: "003",
    name: "Dividend Growth",
    description: "Focus on stocks with increasing dividend payouts.",
    riskLevel: "Low",
    timeHorizon: "Long Term",
    performance: "+6% (last 12 months)",
  },
  {
    id: "004",
    name: "Mean Reversion",
    description: "Profit from price fluctuations around a stock's average.",
    riskLevel: "Medium",
    timeHorizon: "Medium Term",
    performance: "+10% (last 6 months)",
  },
]

export default function AvailableStrategiesList({ onStrategySelect, viewMode }) {
  const [strategies, setStrategies] = useState(initialStrategies)
  const [editingId, setEditingId] = useState(null)

  const handleNameChange = (id, newName) => {
    setStrategies(strategies.map(strategy => 
      strategy.id === id ? { ...strategy, name: newName } : strategy
    ))
    // Here you would typically update the strategy name in your backend
    console.log(`Strategy ${id} name updated to: ${newName}`)
  }

  const BlockView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {strategies.map((strategy) => (
        <Card key={strategy.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader>
            {editingId === strategy.id ? (
              <Input
                value={strategy.name}
                onChange={(e) => handleNameChange(strategy.id, e.target.value)}
                onBlur={() => setEditingId(null)}
                autoFocus
              />
            ) : (
              <CardTitle onDoubleClick={() => setEditingId(strategy.id)}>{strategy.name}</CardTitle>
            )}
            <CardDescription>{strategy.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Risk Level</p>
                <p>{strategy.riskLevel}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Time Horizon</p>
                <p>{strategy.timeHorizon}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Performance</p>
                <p>{strategy.performance}</p>
              </div>
            </div>
            <Button onClick={() => onStrategySelect(strategy)}>Configure Strategy</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const ListView = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Risk Level</TableHead>
            <TableHead>Time Horizon</TableHead>
            <TableHead>Performance</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {strategies.map((strategy) => (
            <TableRow key={strategy.id}>
              <TableCell>
                {editingId === strategy.id ? (
                  <Input
                    value={strategy.name}
                    onChange={(e) => handleNameChange(strategy.id, e.target.value)}
                    onBlur={() => setEditingId(null)}
                    autoFocus
                  />
                ) : (
                  <span onDoubleClick={() => setEditingId(strategy.id)}>{strategy.name}</span>
                )}
              </TableCell>
              <TableCell>{strategy.description}</TableCell>
              <TableCell>{strategy.riskLevel}</TableCell>
              <TableCell>{strategy.timeHorizon}</TableCell>
              <TableCell>{strategy.performance}</TableCell>
              <TableCell>
                <Button onClick={() => onStrategySelect(strategy)}>Configure</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )

  return viewMode === 'block' ? <BlockView /> : <ListView />
}

