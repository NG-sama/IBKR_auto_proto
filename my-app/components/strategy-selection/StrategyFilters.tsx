import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function StrategyFilters() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Filter Strategies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input placeholder="Search strategies..." />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Risk Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low Risk</SelectItem>
            <SelectItem value="medium">Medium Risk</SelectItem>
            <SelectItem value="high">High Risk</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Time Horizon" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="short">Short Term</SelectItem>
            <SelectItem value="medium">Medium Term</SelectItem>
            <SelectItem value="long">Long Term</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4 flex justify-end">
        <Button>Apply Filters</Button>
      </div>
    </div>
  )
}

