'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${location.origin}/auth/callback`,
          },
        })
        if (error) throw error
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
        router.push('/dashboard')
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDevSignIn = async () => {
    if (process.env.NEXT_PUBLIC_DEV_EMAIL && process.env.NEXT_PUBLIC_DEV_PASSWORD) {
      setEmail(process.env.NEXT_PUBLIC_DEV_EMAIL)
      setPassword(process.env.NEXT_PUBLIC_DEV_PASSWORD)
      const { error } = await supabase.auth.signInWithPassword({
        email: process.env.NEXT_PUBLIC_DEV_EMAIL,
        password: process.env.NEXT_PUBLIC_DEV_PASSWORD,
      })
      if (!error) router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 p-8 bg-card rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center">
          {isSignUp ? 'Create an Account' : 'Sign In to IBKR Auto'}
        </h2>
        {error && (
          <div className="p-4 text-sm text-red-800 bg-red-100 rounded-lg">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </form>
        <p className="text-center">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <Button
            variant="link"
            onClick={() => setIsSignUp(!isSignUp)}
            className="ml-2"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </Button>
        </p>
        {process.env.NODE_ENV === 'development' && (
          <Button
            variant="outline"
            onClick={handleDevSignIn}
            className="w-full mt-4"
          >
            Dev Sign In
          </Button>
        )}
      </div>
    </div>
  )
}