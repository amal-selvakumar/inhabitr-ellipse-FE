import { sessionStatus } from "./utils/session";
import { NextRequest, NextResponse } from "next/server";


export default function middleware(req: any){
const protectedRoutes = ["/middlewareside"];

    console.log('sessionStatus',sessionStatus, 'req',req)
    if(!sessionStatus && protectedRoutes.includes(req.nextUrl.pathname)) {
        const absoluteURL = new URL("/", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}

