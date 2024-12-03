'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Stock } from './stocks'

interface StrategyFormProps {
  stocks: Stock[]
}

export default function StrategyForm({ stocks }: StrategyFormProps) {
  const [selectedStocks, setSelectedStocks] = useState<Stock[]>([])
  const [stopLoss, setStopLoss] = useState<number>(20)
  const [profitTarget, setProfitTarget] = useState<number>(10)
  const [timeHorizon, setTimeHorizon] = useState<number>(5)
  const [strategyName, setStrategyName] = useState<string>('')

  const handleStockSelection = (stock: Stock) => {
    setSelectedStocks(prev => 
      prev.some(s => s.ticker === stock.ticker)
        ? prev.filter(s => s.ticker !== stock.ticker)
        : [...prev, stock]
    )
  }

  const handleSaveStrategy = () => {
    // TODO: Implement save strategy logic
    console.log('Saving strategy:', { strategyName, selectedStocks, stopLoss, profitTarget, timeHorizon })
  }

  const handleResetForm = () => {
    setSelectedStocks([])
    setStopLoss(20)
    setProfitTarget(10)
    setTimeHorizon(5)
    setStrategyName('')
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Setup Your Trading Strategy</CardTitle>
        <CardDescription>
          Select stocks and define your strategy parameters below. Ensure you review all inputs before proceeding.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="strategy-name">Strategy Name</Label>
          <Input
            id="strategy-name"
            value={strategyName}
            onChange={(e) => setStrategyName(e.target.value)}
            placeholder="Enter your strategy name"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Select Stocks</h3>
          <ScrollArea className="h-[200px] w-full border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Select</TableHead>
                  <TableHead>Ticker</TableHead>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Last Close Price</TableHead>
                  <TableHead>% Gain Previous Day</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stocks.map((stock) => (
                  <TableRow key={stock.ticker}>
                    <TableCell>
                      <Checkbox
                        checked={selectedStocks.some(s => s.ticker === stock.ticker)}
                        onCheckedChange={() => handleStockSelection(stock)}
                      />
                    </TableCell>
                    <TableCell>{stock.ticker}</TableCell>
                    <TableCell>{stock.companyName}</TableCell>
                    <TableCell>${stock.lastClosePrice.toFixed(2)}</TableCell>
                    <TableCell>{stock.gainPreviousDay.toFixed(2)}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Define Your Strategy Parameters</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="stop-loss">Stop-Loss (%)</Label>
              <Slider
                id="stop-loss"
                min={1}
                max={50}
                step={1}
                value={[stopLoss]}
                onValueChange={(value) => setStopLoss(value[0])}
              />
              <div className="text-sm text-muted-foreground">Current value: {stopLoss}%</div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="profit-target">Profit Target (%)</Label>
              <Slider
                id="profit-target"
                min={1}
                max={50}
                step={1}
                value={[profitTarget]}
                onValueChange={(value) => setProfitTarget(value[0])}
              />
              <div className="text-sm text-muted-foreground">Current value: {profitTarget}%</div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="time-horizon">Time Horizon (Days)</Label>
              <Input
                id="time-horizon"
                type="number"
                min={1}
                max={30}
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(parseInt(e.target.value, 10))}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Strategy Summary</h3>
          <Card>
            <CardContent className="pt-6">
              <p><strong>Strategy Name:</strong> {strategyName || 'Not set'}</p>
              <p><strong>Selected Stocks:</strong> {selectedStocks.length}</p>
              <p><strong>Stop-Loss:</strong> {stopLoss}%</p>
              <p><strong>Profit Target:</strong> {profitTarget}%</p>
              <p><strong>Time Horizon:</strong> {timeHorizon} days</p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleResetForm}>Reset Form</Button>
        <Button onClick={handleSaveStrategy}>Save Strategy</Button>
      </CardFooter>
    </Card>
  )
}

