import { sessionStatus } from "./utils/session";
import { NextRequest, NextResponse } from "next/server";
 
const allowedOrigins = ['http://localhost:3300']
 
const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export default function middleware(req: any){
const protectedRoutes = ["/middlewareside"];

    // console.log('sessionStatus',sessionStatus, 'req',req)
    if(!sessionStatus && protectedRoutes.includes(req.nextUrl.pathname)) {
        const absoluteURL = new URL("/", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }

    const origin = req.headers.get('origin') ?? ''
    const isAllowedOrigin = allowedOrigins.includes(origin)
   
    // Handle preflighted requests
    const isPreflight = req.method === 'OPTIONS'
   
    if (isPreflight) {
      const preflightHeaders = {
        ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
        ...corsOptions,
      }
      return NextResponse.json({}, { headers: preflightHeaders })
    }
   
    // Handle simple requests
    const response = NextResponse.next()
   
    if (isAllowedOrigin) {
      response.headers.set('Access-Control-Allow-Origin', origin)
    }
   
    Object.entries(corsOptions).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
   
    return response
}

export const config = {
    matcher: '/api/:path*',
  }

