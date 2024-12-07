import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PerformanceMetrics() {
  const metrics = [
    { title: "Total Strategies", value: "5" },
    { title: "Success Rate", value: "75%" },
    { title: "Realized P/L", value: "$12,000" },
    { title: "Unrealized P/L", value: "$5,500" },
    { title: "Best Performing", value: "Strategy A" },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
      <div className="grid gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-gray-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

