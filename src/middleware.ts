import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN
  if (!baseDomain) return NextResponse.next()

  const host = request.headers.get('host') ?? ''
  const hostname = host.split(':')[0] // strip port

  // Skip redirect in local dev
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return NextResponse.next()
  }

  if (hostname !== baseDomain) {
    const { pathname, search } = request.nextUrl
    const target = `https://${baseDomain}${pathname}${search}`
    return NextResponse.redirect(target, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
