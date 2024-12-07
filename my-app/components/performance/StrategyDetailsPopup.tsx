import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StrategyDetailsPopup({ strategy, onClose }) {
  if (!strategy) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl bg-white">
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Strategy Details: {strategy.name} ({strategy.id})</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Stocks Involved</h3>
              <p>{strategy.stocks}</p>
            </div>
            <div>
              <h3 className="font-semibold">Status</h3>
              <p>{strategy.status}</p>
            </div>
            <div>
              <h3 className="font-semibold">Configured Parameters</h3>
              <p>{strategy.params}</p>
            </div>
            <div>
              <h3 className="font-semibold">Success Rate</h3>
              <p>{strategy.successRate}</p>
            </div>
            <div>
              <h3 className="font-semibold">Realized P/L</h3>
              <p>${strategy.realizedPL.toLocaleString()}</p>
            </div>
            <div>
              <h3 className="font-semibold">Unrealized P/L</h3>
              <p>${strategy.unrealizedPL.toLocaleString()}</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Performance Chart</h3>
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              Strategy Performance Chart Placeholder
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

