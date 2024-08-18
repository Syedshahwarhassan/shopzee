import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const {pathname}=request.nextUrl;

    const id=request.cookies.get('TokenId')?.value;
   const checkUserloggin=pathname.startsWith('/Login') || pathname.startsWith('/Register');
if(checkUserloggin) {
      if(id){
        return NextResponse.redirect(new URL('/Home', request.url))
      }
}else{
    if(!id){
        return NextResponse.redirect(new URL('/Login', request.url))
  
    }
}
//   return NextResponse.redirect(new URL('/Home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/StoreInfo',
    '/Login',
    '/Register',
    '/Home',
    '/Hero',
    '/AboutStore',
    '/Createbtn',
    '/Order',
    '/Store'

  ],
}