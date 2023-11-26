import { NextResponse, NextRequest } from "next/server";
// import jwt_decode from "jwt-decode";
//import { decode } from "querystring";
//import { RemoveAllToken } from "./common/hooks/token";
import {parseCookies } from "nookies";

export function middleware(req: NextRequest) {
  const storedUser:any = req.cookies.get("storedUser");;
 
  console.log("middleware:::", storedUser);
  
  if (!storedUser ) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard",
};
