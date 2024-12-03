import { Button } from '@/components/ui/button'

export default function PerformanceSummary() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">P/L Trends</h3>
          {/* Placeholder for P/L Trends chart */}
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            Line Chart Placeholder
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Strategy Success Rates</h3>
          {/* Placeholder for Strategy Success Rates chart */}
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            Pie Chart Placeholder
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-gray-600">Total Trades</p>
          <p className="text-2xl font-bold">152</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Success Rate</p>
          <p className="text-2xl font-bold">68%</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Best Performing Strategy</p>
          <p className="text-2xl font-bold">Strategy A</p>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <Button>View Reports</Button>
      </div>
    </div>
  )
}

