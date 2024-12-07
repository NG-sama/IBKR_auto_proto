import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, LinearScale } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend, Title, LinearScale)

// Mock data for stocks (in a real app, this would come from your backend)
const stocksData = [
  { id: '1', symbol: 'AAPL', name: 'Apple Inc.', sector: 'Technology' },
  { id: '2', symbol: 'MSFT', name: 'Microsoft Corporation', sector: 'Technology' },
  { id: '3', symbol: 'AMZN', name: 'Amazon.com Inc.', sector: 'Consumer Cyclical' },
  { id: '4', symbol: 'GOOGL', name: 'Alphabet Inc.', sector: 'Communication Services' },
  { id: '5', symbol: 'FB', name: 'Meta Platforms Inc.', sector: 'Communication Services' },
  { id: '6', symbol: 'TSLA', name: 'Tesla Inc.', sector: 'Consumer Cyclical' },
  { id: '7', symbol: 'BRK.B', name: 'Berkshire Hathaway Inc.', sector: 'Financial Services' },
  { id: '8', symbol: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare' },
  { id: '9', symbol: 'JPM', name: 'JPMorgan Chase & Co.', sector: 'Financial Services' },
  { id: '10', symbol: 'V', name: 'Visa Inc.', sector: 'Financial Services' },
]

export default function StrategyConfigurationPopup({ strategy, onClose }) {
  const [stopLoss, setStopLoss] = useState(5)
  const [profitTarget, setProfitTarget] = useState(10)
  const [timeHorizon, setTimeHorizon] = useState(5)
  const [selectedStocks, setSelectedStocks] = useState([])
  const [sectorData, setSectorData] = useState({ labels: [], datasets: [] })

  useEffect(() => {
    updateSectorChart()
  }, [selectedStocks])

  const updateSectorChart = () => {
    const sectorCounts = selectedStocks.reduce((acc, stockId) => {
      const stock = stocksData.find(s => s.id === stockId)
      if (stock) {
        acc[stock.sector] = (acc[stock.sector] || 0) + 1
      }
      return acc
    }, {})

    const labels = Object.keys(sectorCounts)
    const data = Object.values(sectorCounts)

    setSectorData({
      labels,
      datasets: [
        {
          data,
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
            '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
          ],
        },
      ],
    })
  }

  const handleStockToggle = (stockId) => {
    setSelectedStocks(prev => 
      prev.includes(stockId)
        ? prev.filter(id => id !== stockId)
        : [...prev, stockId]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the configuration to your backend
    console.log('Strategy configured:', { 
      strategy, 
      stopLoss, 
      profitTarget, 
      timeHorizon, 
      selectedStocks 
    })
    onClose()
  }

  if (!strategy) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <Card className="w-full max-w-4xl bg-white m-4 max-h-[90vh] overflow-y-auto">
        <CardHeader className="sticky top-0 z-10 bg-white border-b">
          <div className="flex justify-between items-center">
            <CardTitle>Configure Strategy: {strategy.name}</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="stopLoss">Stop Loss (%)</Label>
                  <Slider
                    id="stopLoss"
                    min={1}
                    max={20}
                    step={0.5}
                    value={[stopLoss]}
                    onValueChange={(value) => setStopLoss(value[0])}
                  />
                  <Input
                    type="number"
                    id="stopLossInput"
                    value={stopLoss}
                    onChange={(e) => setStopLoss(Number(e.target.value))}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="profitTarget">Profit Target (%)</Label>
                  <Slider
                    id="profitTarget"
                    min={1}
                    max={50}
                    step={0.5}
                    value={[profitTarget]}
                    onValueChange={(value) => setProfitTarget(value[0])}
                  />
                  <Input
                    type="number"
                    id="profitTargetInput"
                    value={profitTarget}
                    onChange={(e) => setProfitTarget(Number(e.target.value))}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="timeHorizon">Time Horizon (days)</Label>
                  <Slider
                    id="timeHorizon"
                    min={1}
                    max={30}
                    step={1}
                    value={[timeHorizon]}
                    onValueChange={(value) => setTimeHorizon(value[0])}
                  />
                  <Input
                    type="number"
                    id="timeHorizonInput"
                    value={timeHorizon}
                    onChange={(e) => setTimeHorizon(Number(e.target.value))}
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label>Select Stocks</Label>
                <ScrollArea className="h-[300px] w-full border rounded-md p-4">
                  {stocksData.map((stock) => (
                    <div key={stock.id} className="flex items-center space-x-2 mb-2">
                      <Checkbox
                        id={`stock-${stock.id}`}
                        checked={selectedStocks.includes(stock.id)}
                        onCheckedChange={() => handleStockToggle(stock.id)}
                      />
                      <label
                        htmlFor={`stock-${stock.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {stock.symbol} - {stock.name}
                      </label>
                    </div>
                  ))}
                </ScrollArea>
              </div>
            </div>
            <div>
              <Label>Sector Distribution</Label>
              <div className="h-[300px] w-full">
                {selectedStocks.length > 0 ? (
                  <Pie data={sectorData} options={{ responsive: true, maintainAspectRatio: false }} />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Select stocks to see sector distribution
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
              <Button type="submit">Save Configuration</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

