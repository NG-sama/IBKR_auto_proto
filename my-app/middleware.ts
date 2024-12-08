import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of public routes that don't require authentication
const publicRoutes = ['/', '/signin', '/auth/callback']

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Check if the route is public
  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname)

  // If there is no session and the route is not public, redirect to signin
  if (!session && !isPublicRoute) {
    const redirectUrl = new URL('/signin', request.url)
    return NextResponse.redirect(redirectUrl)
  }

  // If there is a session and user is on signin page, redirect to dashboard
  if (session && request.nextUrl.pathname === '/signin') {
    const redirectUrl = new URL('/dashboard', request.url)
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

// Specify which routes should be processed by the middleware
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}