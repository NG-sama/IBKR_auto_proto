import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PerformanceCharts() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>P/L Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-100 flex items-center justify-center">
            Line Chart Placeholder
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Strategy Success Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              Pie Chart Placeholder
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Stock-Level Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              Bar Chart Placeholder
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

