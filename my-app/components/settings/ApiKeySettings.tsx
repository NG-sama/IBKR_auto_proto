import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ApiKeySettings() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">API Key Settings</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="api-key">IBKR API Key</Label>
          <Input id="api-key" type="password" defaultValue="••••••••••••••••" />
        </div>
        <div>
          <Label htmlFor="api-secret">IBKR API Secret</Label>
          <Input id="api-secret" type="password" defaultValue="••••••••••••••••" />
        </div>
        <Button>Update API Keys</Button>
      </div>
    </div>
  )
}

