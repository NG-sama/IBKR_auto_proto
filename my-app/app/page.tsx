import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <main className="text-center space-y-6 p-4">
        <h1 className="text-4xl font-bold">Welcome to IBKR Auto</h1>
        <p className="text-xl max-w-2xl mx-auto">
          IBKR Auto is your automated trading companion for Interactive Brokers. 
          Configure strategies, monitor performance, and optimize your trading with ease.
        </p>
        <div className="space-y-4">
          <p className="text-lg">
            Ready to start? Sign in to your account or create a new one.
          </p>
          <Button asChild>
            <Link href="/signin">Sign In / Sign Up</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

